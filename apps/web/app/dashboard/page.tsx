import { PageHeader, Card, CardTitle, CardBody } from "@chosen-visuals/ui";

// Phase 2 (docs/ARCHITECTURE.md, Section 8): this page becomes role-aware —
// students see progress/certificates, clients see bookings, instructors see their roster.
// For now it renders a placeholder shell so the route and layout already exist.
export default function DashboardPage() {
  return (
    <div>
      <PageHeader eyebrow="Your Account" title="Dashboard" description="Role-aware view for students, clients, and instructors." />
      <Card>
        <CardTitle>Coming Soon</CardTitle>
        <CardBody>
          Once authentication is connected, this page will show your enrolled courses, service
          requests, or teaching roster depending on your role.
        </CardBody>
      </Card>
    </div>
  );
}
