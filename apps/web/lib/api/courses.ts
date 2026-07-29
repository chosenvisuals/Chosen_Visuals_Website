import type { Course } from "@chosen-visuals/shared-types";
import { USE_MOCKS, apiFetch } from "./client";

const MOCK_COURSES: Course[] = [
  {
    id: "1",
    title: "Graphic Design Fundamentals",
    slug: "graphic-design-fundamentals",
    description: "Learn the principles of branding, layout, and visual identity from scratch.",
    category: "Design",
    price: 25000,
    instructorId: "instructor-1",
    isPublished: true,
  },
  {
    id: "2",
    title: "UI/UX Design for Beginners",
    slug: "ui-ux-design-for-beginners",
    description: "Design usable, beautiful interfaces using Figma and real project workflows.",
    category: "Design",
    price: 30000,
    instructorId: "instructor-2",
    isPublished: true,
  },
  {
    id: "3",
    title: "Video Editing & Motion Graphics",
    slug: "video-editing-motion-graphics",
    description: "Edit like a pro and add motion graphics to elevate every video project.",
    category: "Media",
    price: 28000,
    instructorId: "instructor-1",
    isPublished: true,
  },
  {
    id: "4",
    title: "AI Tools for Creatives",
    slug: "ai-tools-for-creatives",
    description: "Use AI tools to speed up design, content, and video production workflows.",
    category: "Technology",
    price: 20000,
    instructorId: "instructor-3",
    isPublished: true,
  },
];

export async function getCourses(): Promise<Course[]> {
  if (USE_MOCKS) return MOCK_COURSES;
  return apiFetch<Course[]>("/api/courses");
}

export async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  if (USE_MOCKS) return MOCK_COURSES.find((c) => c.slug === slug);
  return apiFetch<Course>(`/api/courses/${slug}`);
}
