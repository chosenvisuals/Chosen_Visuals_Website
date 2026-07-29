-- Enable Row Level Security (RLS) on all public tables to secure the database.
-- Because no policies are added, this completely blocks all direct frontend API access.
-- Our Prisma backend uses the superuser role which bypasses RLS, so the app will continue to work normally.

alter table public."User" enable row level security;
alter table public."Course" enable row level security;
alter table public."Enrollment" enable row level security;
alter table public."Event" enable row level security;
alter table public."EventRegistration" enable row level security;
alter table public."ServiceRequest" enable row level security;
alter table public."Payment" enable row level security;
alter table public."PortfolioItem" enable row level security;
alter table public."BlogPost" enable row level security;
alter table public."Testimonial" enable row level security;
alter table public."_prisma_migrations" enable row level security;
