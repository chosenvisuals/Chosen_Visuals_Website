import Link from "next/link";
import { PageHeader, Card, CardTitle, CardBody, Button } from "@chosen-visuals/ui";

const services = [
  { title: "Branding & Graphic Design", desc: "Logos, flyers, social media graphics, packaging, company profiles." },
  { title: "Printing & Production", desc: "Banners, business cards, brochures, branded merchandise." },
  { title: "Stage & Event Visual Design", desc: "LED visuals, conference branding, stage backdrops, event identity." },
  { title: "Event Media Coverage", desc: "Photography, videography, livestreaming, and drone services." },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="What We Offer"
        title="Services"
        description="Professional design, media, printing, and event solutions for businesses, churches, schools, NGOs, and personal brands."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {services.map((s) => (
          <Card key={s.title}>
            <CardTitle>{s.title}</CardTitle>
            <CardBody>{s.desc}</CardBody>
          </Card>
        ))}
      </div>
      <Link href="/booking">
        <Button>Request a Quote</Button>
      </Link>
    </div>
  );
}
