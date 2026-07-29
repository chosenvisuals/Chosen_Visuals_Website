import Link from "next/link";
import { Button, Card, CardTitle, CardBody } from "@chosen-visuals/ui";

const highlights = [
  { title: "Academy", desc: "Practical training in design, video, UI/UX, AI tools & more.", href: "/academy" },
  { title: "Services", desc: "Branding, printing, event visuals, and media coverage.", href: "/services" },
  { title: "Visuals Talk", desc: "Conferences, workshops, and mentorship for creatives.", href: "/visuals-talk" },
  { title: "School Tour", desc: "Bringing tech discovery to secondary schools.", href: "/school-tour" },
];

export default function HomePage() {
  return (
    <div>
      <section className="text-center py-16">
        <p className="text-cv-gold font-semibold uppercase tracking-wide mb-3">Imagine. Create. Inspire.</p>
        <h1 className="text-4xl md:text-5xl font-bold text-cv-navy max-w-3xl mx-auto mb-6">
          Visuals are powerful tools for storytelling, branding, and transformation.
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Chosen Visuals helps individuals and organizations communicate through creativity, technology,
          and education.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/academy"><Button>Explore the Academy</Button></Link>
          <Link href="/booking"><Button variant="outline">Book a Service</Button></Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {highlights.map((h) => (
          <Link key={h.href} href={h.href}>
            <Card className="h-full hover:shadow-md transition-shadow">
              <CardTitle>{h.title}</CardTitle>
              <CardBody>{h.desc}</CardBody>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
