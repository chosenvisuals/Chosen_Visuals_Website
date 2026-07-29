import { PageHeader, Card, CardTitle, CardBody } from "@chosen-visuals/ui";

const items = [
  { title: "Church Anniversary Branding", category: "Branding" },
  { title: "Tech Summit Stage Design", category: "Event Visuals" },
  { title: "NGO Impact Report Design", category: "Print" },
  { title: "Wedding Livestream Coverage", category: "Media Coverage" },
];

export default function PortfolioPage() {
  return (
    <div>
      <PageHeader eyebrow="Our Work" title="Portfolio" description="A look at recent branding, print, event, and media coverage projects." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <Card key={item.title}>
            <div className="mb-3 h-40 rounded-md bg-gray-100" />
            <CardTitle>{item.title}</CardTitle>
            <CardBody>{item.category}</CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
