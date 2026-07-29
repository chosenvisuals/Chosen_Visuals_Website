import { Router } from "express";
import { listCourses, getCourseBySlug, createCourse } from "../controllers/courses.controller";
import { enroll, verifyEnrollmentPayment } from "../controllers/enrollments.controller";
import { requireAuth } from "../middleware/auth";
import { requireRole } from "../middleware/role";

export const coursesRouter = Router();

coursesRouter.get("/", listCourses);
coursesRouter.get("/:slug", getCourseBySlug);
coursesRouter.post("/", requireAuth, requireRole("instructor", "admin"), createCourse);

// Enrollment — the priority flow for the upcoming student intake.
coursesRouter.post("/enroll", requireAuth, requireRole("student", "visitor"), enroll);
coursesRouter.get("/enroll/verify/:reference", requireAuth, verifyEnrollmentPayment);
