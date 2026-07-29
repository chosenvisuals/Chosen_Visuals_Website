# Chosen Visuals — Platform Architecture & Build Plan

**Tagline:** Imagine. Create. Inspire.
**Prepared as the foundational engineering document.** Anyone joining this project — including a future version of you six months from now — should be able to read this and understand what's being built, why, and how to keep building it.

---

## 1. What We're Building

Chosen Visuals is not one website — it's **one brand running five connected products**:

| # | Module | What it is |
|---|--------|-----------|
| 1 | **Company & Services Showcase** | The core brand site: services, branding/design, printing, event visuals, media coverage |
| 2 | **Chosen Visuals Academy** | Training & mentorship — courses in design, video, UI/UX, AI tools, coding, digital marketing |
| 3 | **Visuals Talk** | Community program — conferences, workshops, networking, portfolio reviews |
| 4 | **Secondary School Tech Tour** | A campaign/microsite for school outreach, with student registration |
| 5 | **Impact Projects** | Storytelling/CSR hub — education, community, youth empowerment content |
| — | **Admin/CMS (internal)** | The control room that powers all of the above |

Treating this as one repo with multiple products (not five separate websites) is the single most important architectural decision here — it's what lets you scale without rebuilding.

---

## 2. Key Assumptions (confirm or correct these)

Since some details are still pending, the plan below assumes:

- **Payment gateway (Nigeria):** Paystack, integrated behind an abstraction layer so Stripe (international) can be added later with minimal changes.
- **Database hosting:** A managed Postgres provider (Supabase or Neon) rather than self-hosting Postgres — faster to launch, easier to maintain solo.
- **Video hosting for courses:** YouTube (unlisted) or Vimeo embeds for Phase 1, rather than self-hosted video streaming — self-hosting video is expensive and complex; not worth it before you have paying volume.
- **Branding assets:** Logo and color palette are ready but not yet delivered — the design system below is built to receive them as drop-in tokens (colors, fonts) without restructuring components.
- **Domain/hosting:** Vercel for frontend now; domain + dedicated backend hosting to be added later.

If any of these are wrong, tell me and I'll adjust the relevant section.

---

## 3. User Roles & Permissions

| Role | Can do |
|------|--------|
| **Visitor** (no account) | Browse everything, submit inquiry/booking forms, register for events/tour |
| **Student** | Enroll in courses, track own progress, access course materials, view certificates |
| **Client** | Request/track service bookings (event coverage, printing, design), view quotes/invoices |
| **Instructor/Mentor** | Manage assigned courses, upload materials, view enrolled students |
| **School/Partner Rep** | Register their school for the Tech Tour, view own registration status |
| **Content Staff (non-technical)** | Publish/edit blog posts, urgent announcements, update text on service/event pages, manage testimonials — *no access to structural/layout changes* |
| **Admin/Developer** | Full access: users, roles, payments config, new modules, site structure, deployments |

This maps directly to a `role` column on the `users` table (Section 5) and route-level permission checks in both the API and the admin dashboard UI.

---

## 4. Information Architecture (Sitemap)

```
/                        → Home (brand overview, service highlights, CTA)
/services                → Services showcase
  /services/branding
  /services/printing
  /services/events
  /services/media-coverage
/academy                 → Chosen Visuals Academy (training)
  /academy/courses
  /academy/courses/[slug]
  /academy/enroll/[slug]
  /academy/dashboard      → (student) progress, materials, certificates
  /academy/instructor     → (instructor) course management
/visuals-talk             → Community program
  /visuals-talk/events
  /visuals-talk/events/[slug]
/school-tour              → Campaign microsite
  /school-tour/register
/impact                   → Impact Projects / stories
/portfolio                → Work gallery, filterable by service type
/blog                     → Articles, updates
/blog/[slug]
/booking                  → General service/event request form
/about
/contact
/dashboard                 → Role-aware dashboard (client, student, instructor redirect here)
/admin                    → Internal CMS (staff/admin only, separate auth guard)
```

---

## 5. Data Model (PostgreSQL)

Core entities — this is the schema skeleton, not final DDL:

```
users
  id, name, email, password_hash, role (enum: visitor|student|client|instructor|staff|admin),
  organization_name (nullable, for churches/NGOs/schools), created_at

courses
  id, title, slug, description, category, price, instructor_id (fk users),
  video_provider, video_ref, is_published, created_at

enrollments
  id, user_id (fk), course_id (fk), status (enum: pending|active|completed),
  progress_percent, certificate_issued_at, enrolled_at

events              -- covers Visuals Talk AND general events
  id, title, slug, type (enum: conference|workshop|networking|tour), description,
  location, start_date, end_date, capacity, is_published

event_registrations
  id, event_id (fk), user_id (fk, nullable for guest), full_name, email, phone,
  school_name (nullable, for tour), status (enum: registered|attended|cancelled)

service_requests     -- printing, branding, event coverage bookings
  id, client_id (fk, nullable for guest), service_type, description,
  status (enum: new|quoted|confirmed|in_progress|completed), quoted_amount, created_at

payments
  id, user_id (fk), reference, provider (enum: paystack|stripe), amount, currency,
  purpose (enum: enrollment|service|event), status, created_at

portfolio_items
  id, title, category, media_urls (array), description, published_at

blog_posts
  id, title, slug, body, cover_image, author_id (fk), status (enum: draft|published), published_at

testimonials
  id, client_name, organization, quote, is_published
```

Relationships are all standard foreign keys — nothing exotic. Postgres is the right call here because you have real relational structure (enrollments link users↔courses, payments link users↔purposes) — this would get messy fast in MongoDB.

---

## 6. Technical Architecture

### 6.1 Repo structure (monorepo)

```
chosen-visuals/
├── apps/
│   ├── web/              → Next.js frontend (App Router, TypeScript, Tailwind)
│   └── api/               → Express + TypeScript backend
├── packages/
│   ├── shared-types/      → TypeScript interfaces shared by web + api
│   └── ui/                 → Shared design-system components (buttons, cards, forms)
├── docs/
│   └── ARCHITECTURE.md    → (this file, kept up to date)
├── package.json            → workspace root (pnpm workspaces or Turborepo)
└── README.md
```

Why a monorepo: one brand, five modules, shared design system, shared types between frontend/backend. Keeping it in one repo means a shared `Course` or `User` type is defined once and used everywhere — no drift between frontend assumptions and backend reality.

### 6.2 Frontend-first strategy (the part that matters for your timeline)

Since you want *everything* visually complete before all backends/integrations exist, the frontend must be built against a **typed mock API layer**, not hardcoded data scattered through components. Concretely:

```
apps/web/lib/api/
  courses.ts      → getCourses(), getCourseBySlug()
  events.ts       → getEvents()
  bookings.ts     → submitServiceRequest()
```

Each function today reads from local JSON fixtures; tomorrow it calls the real Express API — **the component code never changes**, only what's inside these functions. This is the single decision that lets you build the full UI now without painting yourself into a corner when real backend work starts.

### 6.3 Backend (Express + TypeScript + Postgres)

Standard layered structure:

```
apps/api/src/
  routes/        → /courses, /events, /bookings, /auth, /payments
  controllers/
  services/       → business logic (enrollment rules, payment verification)
  models/         → Postgres queries (via Prisma or Drizzle ORM — recommended: Prisma for speed of iteration)
  middleware/     → auth guard, role guard
```

**Recommendation:** use **Prisma** as the ORM. It gives you type-safe queries that match `shared-types`, migrations out of the box, and is far easier to hand off to another developer than raw SQL.

### 6.4 Authentication & Authorization

- JWT-based auth (access + refresh token), issued by the Express API.
- Every protected route checks `role` server-side — never trust the frontend for permission checks, only use it to hide/show UI.
- Admin CMS routes get an extra guard layer since staff accounts have write access to public content.

### 6.5 Payments

- Abstract behind a `PaymentProvider` interface (`initiate()`, `verify()`) with a `PaystackProvider` implementation now.
- When international payments are needed, add a `StripeProvider` implementing the same interface — no changes needed elsewhere in the code.
- Every payment writes a row to `payments` regardless of provider, so reporting/admin views don't need to know which gateway was used.

---

## 7. Module Feature Specs (what the frontend needs to render)

**Company & Services Showcase** — landing page, service detail pages, quote-request form, testimonials, portfolio gallery filterable by category.

**Chosen Visuals Academy** — course catalog with filters (category, price, level), course detail page, enrollment flow (guest → account creation → payment), student dashboard (progress, materials, certificate download), instructor dashboard (upload materials, view roster).

**Visuals Talk** — event calendar/listing, event detail page, registration form, past-event highlights/gallery.

**Secondary School Tech Tour** — dedicated microsite (can reuse the events system with `type: tour`), persuasive landing copy (you already have strong copy options drafted — Option 1/2/3 above), school registration form (school name, contact, student count, preferred date), admin view of registered schools.

**Impact Projects** — story/article grid, individual impact story pages, possibly linked to specific events or courses (e.g., "this course funded X").

**Admin/CMS** — role-aware dashboard: content staff see only blog/announcement/testimonial editors; admins see everything including user management, payment logs, and course/event structure.

---

## 8. Hosting & Infrastructure

| Layer | Choice now | Notes |
|-------|-----------|-------|
| Frontend | Vercel | Free tier fine for now; auto-deploys from Git |
| Backend API | Railway or Render | Easier than AWS for a solo build; migrate later if needed |
| Database | Supabase or Neon (Postgres) | Managed, has built-in auth if you ever want to offload that later |
| Domain | Pending purchase | Point to Vercel once bought |
| Media/Images | Cloudinary or Vercel Blob | For portfolio images, course thumbnails |

---

## 9. Phased Roadmap

**Phase 0 — Foundation (this week)**
Repo setup, design tokens (once logo/colors arrive), shared types package, mock API layer, base layout/navigation across all modules.

**Phase 1 — Full frontend + minimum real backend (target: before next month, for student intake)**
- All five modules' UI fully built against mock data.
- **Exception:** Academy gets a *real* backend early — auth, course listing, enrollment, Paystack payment — because students need to actually register next month. Everything else can stay mocked a little longer.
- Basic admin CMS for publishing courses/blog posts.

**Phase 2 — Full backend integration**
- Wire remaining modules (bookings, event registration, portfolio, CMS roles) to the real API.
- Certificates, student progress tracking, instructor tools.

**Phase 3 — Scale & international**
- Stripe integration alongside Paystack.
- Analytics dashboard for admin.
- Possible mobile app / PWA.

---

## 10. Documentation & Handoff Practices

To make sure another developer (or future-you) can pick this up without a briefing call:

- Keep this file updated as `docs/ARCHITECTURE.md` in the repo — treat it as a living document.
- Every non-trivial decision gets a short **ADR** (Architecture Decision Record) — a markdown file in `docs/adr/` stating what was decided and why (e.g., "why Prisma over raw SQL").
- `README.md` at the repo root: setup steps, environment variables needed, how to run locally.
- Consistent commit messages and a `CONTRIBUTING.md` once a second developer joins.

---

## 11. What I Still Need From You

- Logo files and exact color palette / font names (hex codes if you have them).
- Confirmation: Paystack, or a different provider?
- Domain name (once purchased).
- Final course list for Academy launch (titles, prices, instructor names) — needed to seed the database for the student intake.

---

## 12. Immediate Next Steps

1. Confirm/correct the assumptions in Section 2.
2. Send branding assets (logo, palette).
3. I scaffold the repo (Section 6.1) and start Phase 0.
4. We prioritize the Academy enrollment flow first, given the timeline.
