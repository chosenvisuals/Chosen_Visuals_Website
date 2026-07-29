import { Response } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { AuthenticatedRequest } from "../middleware/auth";

export async function listCourses(_req: AuthenticatedRequest, res: Response) {
  const courses = await prisma.course.findMany({ where: { isPublished: true } });
  res.json({ success: true, data: courses });
}

export async function getCourseBySlug(req: AuthenticatedRequest, res: Response) {
  const course = await prisma.course.findUnique({ where: { slug: req.params.slug } });
  if (!course) return res.status(404).json({ success: false, error: "Course not found" });
  res.json({ success: true, data: course });
}

const createCourseSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().min(2),
  category: z.string(),
  price: z.number().int().positive(),
});

// Instructor/Admin only — enforced by requireRole in the route definition.
export async function createCourse(req: AuthenticatedRequest, res: Response) {
  const parsed = createCourseSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ success: false, error: parsed.error.message });

  const course = await prisma.course.create({
    data: { ...parsed.data, instructorId: req.user!.id },
  });
  res.status(201).json({ success: true, data: course });
}
