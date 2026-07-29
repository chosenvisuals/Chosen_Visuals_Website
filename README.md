# Chosen Visuals — Platform

Full-stack monorepo for the Chosen Visuals platform: Services showcase, Academy (training/LMS),
Visuals Talk (community program), Secondary School Tech Tour, and Impact Projects.

See **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** for the full plan — sitemap, user roles,
database schema, and build roadmap. Read that first if you're new to this codebase.

## Stack

- **Frontend:** Next.js (App Router) + TypeScript + Tailwind CSS — `apps/web`
- **Backend:** Node.js + Express + TypeScript — `apps/api`
- **Database:** PostgreSQL via Prisma ORM
- **Payments:** Paystack now, architected for Stripe later (`apps/api/src/services/payments`)

## Project structure

```
chosen-visuals/
├── apps/
│   ├── web/     Next.js frontend
│   └── api/     Express backend
├── packages/
│   ├── shared-types/   TypeScript types shared by web + api
│   └── ui/              Shared design-system components
└── docs/
    └── ARCHITECTURE.md
```

## Getting started

### 1. Install dependencies (run once, from the repo root)

```bash
npm install
```

### 2. Set up the database

You need a Postgres database — a free one from [Supabase](https://supabase.com) or
[Neon](https://neon.tech) is the fastest way to start.

```bash
cp apps/api/.env.example apps/api/.env
# then edit apps/api/.env and paste in your DATABASE_URL, JWT_SECRET, and PAYSTACK_SECRET_KEY

npm run db:generate
npm run db:migrate
```

### 3. Run the frontend

```bash
cp apps/web/.env.example apps/web/.env.local
npm run dev:web
```

Visit http://localhost:3000 — every page in the sitemap works right away using mock data
(`NEXT_PUBLIC_USE_MOCKS=true` in `apps/web/.env.local`).

### 4. Run the backend (once your database is ready)

```bash
npm run dev:api
```

The API runs at http://localhost:4000. Flip `NEXT_PUBLIC_USE_MOCKS=false` in
`apps/web/.env.local` and set `NEXT_PUBLIC_API_URL=http://localhost:4000` to connect the
frontend to real data — module by module, not all at once, so nothing breaks mid-build.

## Brand tokens

Colors are set in `apps/web/tailwind.config.ts`:

| Token | Hex |
|---|---|
| `cv-navy` | `#001B60` |
| `cv-gold` | `#F8A328` |
| `cv-cream` | `#F8EEE1` |

The logo file itself is applied separately once supplied — see `apps/web/public/`.

## What's built vs. what's next

- ✅ All frontend pages/routes exist and render with mock data.
- ✅ Prisma schema, auth (JWT), role middleware, and the Paystack-backed enrollment flow are live in `apps/api`.
- ✅ Courses, events (Visuals Talk + School Tour), and service-request endpoints are wired end-to-end.
- ⏭️ Next: connect the frontend forms/pages to the real API (flip `USE_MOCKS` off module by module), seed real course data, add the instructor/admin dashboards, and add certificates.

See `docs/ARCHITECTURE.md` Section 8 for the full phased roadmap.
