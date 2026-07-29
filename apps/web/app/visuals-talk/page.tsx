import { PageHeader, Card, CardTitle, CardBody } from "@chosen-visuals/ui";
import { getEvents } from "@/lib/api/events";

export default async function VisualsTalkPage() {
  const events = await getEvents();

  return (
    <div>
      <PageHeader
        eyebrow="Community Initiative"
        title="Visuals Talk"
        description="Conferences, workshops, networking events, and mentorship programs for creatives and technology professionals."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <Card key={event.id}>
            <CardTitle>{event.title}</CardTitle>
            <CardBody>
              <p className="mb-2">{event.description}</p>
              <p className="text-sm text-gray-500">
                {event.location} &middot; {event.startDate}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
