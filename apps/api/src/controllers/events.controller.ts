import { Response } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { AuthenticatedRequest } from "../middleware/auth";

export async function listEvents(req: AuthenticatedRequest, res: Response) {
  const typeParam = req.query.type as string | undefined;
  const types = typeParam ? typeParam.split(",") : undefined;

  const events = await prisma.event.findMany({
    where: { isPublished: true, ...(types ? { type: { in: types as any } } : {}) },
    orderBy: { startDate: "asc" },
  });
  res.json({ success: true, data: events });
}

const registerSchema = z.object({
  eventSlug: z.string(),
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  schoolName: z.string().optional(),
});

// Public endpoint — visitors and school reps don't need an account to register.
export async function registerForEvent(req: AuthenticatedRequest, res: Response) {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ success: false, error: parsed.error.message });

  const event = await prisma.event.findUnique({ where: { slug: parsed.data.eventSlug } });
  if (!event) return res.status(404).json({ success: false, error: "Event not found" });

  const currentCount = await prisma.eventRegistration.count({ where: { eventId: event.id } });
  if (currentCount >= event.capacity) {
    return res.status(409).json({ success: false, error: "This event is at full capacity" });
  }

  const registration = await prisma.eventRegistration.create({
    data: {
      eventId: event.id,
      fullName: parsed.data.fullName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      schoolName: parsed.data.schoolName,
      userId: req.user?.id,
    },
  });

  res.status(201).json({ success: true, data: { id: registration.id } });
}
