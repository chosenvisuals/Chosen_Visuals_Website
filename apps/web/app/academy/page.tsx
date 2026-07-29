import Link from "next/link";
import { PageHeader, Card, CardTitle, CardBody } from "@chosen-visuals/ui";
import { getCourses } from "@/lib/api/courses";

export default async function AcademyPage() {
  const courses = await getCourses();

  return (
    <div>
      <PageHeader
        eyebrow="Chosen Visuals Academy"
        title="Training & Mentorship"
        description="Practical training in graphic design, video editing, photography, UI/UX, web design, AI tools, and digital marketing."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Link key={course.id} href={`/academy/courses/${course.slug}`}>
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardTitle>{course.title}</CardTitle>
              <CardBody>
                <p className="mb-2">{course.description}</p>
                <p className="font-semibold text-cv-navy">₦{course.price.toLocaleString()}</p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
