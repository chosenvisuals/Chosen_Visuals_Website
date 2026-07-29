import Link from "next/link";
import Image from "next/image";

// Every module route lives here so the nav is the single source of truth for site structure
// (see docs/ARCHITECTURE.md, Section 4 — Information Architecture).
const links = [
  { href: "/services", label: "Services" },
  { href: "/academy", label: "Academy" },
  { href: "/visuals-talk", label: "Visuals Talk" },
  { href: "/school-tour", label: "School Tour" },
  { href: "/impact", label: "Impact" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Chosen Visuals" width={160} height={90} priority className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-cv-navy">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-semibold text-cv-navy hover:text-cv-gold transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/booking"
            className="rounded-md bg-cv-navy px-4 py-2 text-sm font-semibold text-white hover:bg-cv-navy/90"
          >
            Book a Service
          </Link>
        </div>
      </div>
    </header>
  );
}
