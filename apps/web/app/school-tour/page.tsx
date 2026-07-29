import Link from "next/link";
import { Button, Card, CardTitle, CardBody } from "@chosen-visuals/ui";
import { getTourStops } from "@/lib/api/events";

export default async function SchoolTourPage() {
  const stops = await getTourStops();

  return (
    <div>
      <section className="text-center py-10">
        <p className="text-cv-gold font-semibold uppercase tracking-wide mb-3">Discover the Future. Build Your Dreams Today!</p>
        <h1 className="text-4xl font-bold text-cv-navy mb-4">Your Future Doesn&apos;t Start After School&hellip; It Starts Today!</h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Join us on an interactive school tour where students discover the endless opportunities in
          technology &mdash; AI, coding, design, and digital storytelling.
        </p>
        <Link href="/school-tour/register">
          <Button>Register Now — Limited Slots Available</Button>
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        {["Introduction to Technology & Digital Skills", "AI Basics & Coding Fundamentals", "Graphic Design & Creative Thinking"].map((topic) => (
          <Card key={topic}>
            <CardTitle>{topic}</CardTitle>
            <CardBody>Open to Secondary School Students (JSS1 – SS3).</CardBody>
          </Card>
        ))}
      </section>

      <section className="py-6">
        <h2 className="text-xl font-semibold text-cv-navy mb-4">Upcoming Tour Stops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stops.map((stop) => (
            <Card key={stop.id}>
              <CardTitle>{stop.title}</CardTitle>
              <CardBody>
                {stop.location} &middot; {stop.startDate}
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
