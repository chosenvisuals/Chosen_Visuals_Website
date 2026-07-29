import { PageHeader, Card, CardTitle, CardBody } from "@chosen-visuals/ui";

const posts = [
  { title: "5 Design Trends for 2026", excerpt: "What's shaping visual identity this year." },
  { title: "Why Every Church Needs a Media Team", excerpt: "Lessons from our event coverage work." },
  { title: "Announcing the Secondary School Tech Tour", excerpt: "Bringing tech discovery to classrooms nationwide." },
];

export default function BlogPage() {
  return (
    <div>
      <PageHeader eyebrow="Updates" title="Blog" description="News, announcements, and stories from Chosen Visuals." />
      <div className="space-y-6">
        {posts.map((p) => (
          <Card key={p.title}>
            <CardTitle>{p.title}</CardTitle>
            <CardBody>{p.excerpt}</CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
