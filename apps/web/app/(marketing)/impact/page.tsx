import { PageHeader, Card, CardTitle, CardBody } from "@chosen-visuals/ui";

const stories = [
  { title: "Empowering Young Creatives", desc: "How our mentorship program helped ten students launch freelance careers." },
  { title: "Media for Education", desc: "Partnering with schools to bring visual storytelling into the classroom." },
  { title: "Community Impact Through Design", desc: "Supporting NGOs with branding that amplifies their mission." },
];

export default function ImpactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Impact Projects"
        title="Media, Design & Technology for Good"
        description="Using creativity and technology to promote education, empower young creatives, and support communities."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((s) => (
          <Card key={s.title}>
            <CardTitle>{s.title}</CardTitle>
            <CardBody>{s.desc}</CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
