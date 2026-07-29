import { PageHeader, Card, CardTitle, CardBody } from "@chosen-visuals/ui";

// Phase 3 (docs/ARCHITECTURE.md, Section 8): Content Staff see only blog/announcement/testimonial
// editors here; Admins see user management, payment logs, and full site structure.
// This route is guarded separately from /dashboard once auth is wired in (Section 5.6).
export default function AdminPage() {
  return (
    <div>
      <PageHeader eyebrow="Internal" title="Admin / CMS" description="Staff and admin only." />
      <Card>
        <CardTitle>Coming Soon</CardTitle>
        <CardBody>Content management tools for blog posts, announcements, courses, and events will live here.</CardBody>
      </Card>
    </div>
  );
}
