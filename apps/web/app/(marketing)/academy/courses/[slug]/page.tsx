import { notFound } from "next/navigation";
import { PageHeader, Button } from "@chosen-visuals/ui";
import { getCourseBySlug } from "@/lib/api/courses";

export default async function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = await getCourseBySlug(params.slug);
  if (!course) return notFound();

  return (
    <div>
      <PageHeader eyebrow={course.category} title={course.title} description={course.description} />
      <p className="text-2xl font-bold text-cv-navy mb-6">₦{course.price.toLocaleString()}</p>
      {/*
        Phase 1 priority (docs/ARCHITECTURE.md, Section 8): this button becomes a real
        enrollment flow — account creation, Paystack payment, then redirect to /academy/dashboard.
      */}
      <Button>Enroll Now</Button>
    </div>
  );
}
