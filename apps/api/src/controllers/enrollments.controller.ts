import { Response } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { AuthenticatedRequest } from "../middleware/auth";
import { PaystackProvider } from "../services/payments/PaystackProvider";

const paystack = new PaystackProvider();

const enrollSchema = z.object({
  courseId: z.string(),
});

// Step 1: student requests to enroll -> we create a pending enrollment + a Paystack payment link.
export async function enroll(req: AuthenticatedRequest, res: Response) {
  const parsed = enrollSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ success: false, error: parsed.error.message });

  const course = await prisma.course.findUnique({ where: { id: parsed.data.courseId } });
  if (!course) return res.status(404).json({ success: false, error: "Course not found" });

  const userId = req.user!.id;
  const user = await prisma.user.findUniqueOrThrow({ where: { id: userId } });

  const enrollment = await prisma.enrollment.upsert({
    where: { userId_courseId: { userId, courseId: course.id } },
    update: {},
    create: { userId, courseId: course.id, status: "pending" },
  });

  const reference = `enroll_${enrollment.id}_${Date.now()}`;
  const payment = await paystack.initiate({
    amount: course.price * 100, // Paystack expects kobo
    currency: "NGN",
    email: user.email,
    reference,
  });

  await prisma.payment.create({
    data: {
      userId,
      reference,
      provider: "paystack",
      amount: course.price,
      currency: "NGN",
      purpose: "enrollment",
      status: "pending",
    },
  });

  res.json({ success: true, data: { authorizationUrl: payment.authorizationUrl, enrollmentId: enrollment.id } });
}

// Step 2: called after Paystack redirects back (or via webhook) to confirm payment and activate enrollment.
export async function verifyEnrollmentPayment(req: AuthenticatedRequest, res: Response) {
  const { reference } = req.params;
  const result = await paystack.verify(reference);

  const payment = await prisma.payment.update({
    where: { reference },
    data: { status: result.status === "success" ? "success" : "failed" },
  });

  if (result.status === "success") {
    const enrollmentId = reference.split("_")[1];
    await prisma.enrollment.update({
      where: { id: enrollmentId },
      data: { status: "active" },
    });
  }

  res.json({ success: true, data: { status: payment.status } });
}
