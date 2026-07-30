import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/academy", label: "Academy" },
  { href: "/services", label: "Creative Solutions" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/visuals-talk", label: "Visuals Talk" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="w-full px-6 lg:px-12 py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center group">
            <Image src="/logo.png" alt="Chosen Visuals" width={260} height={75} priority className="h-12 xl:h-14 w-auto drop-shadow-sm transition-transform group-hover:scale-105 duration-300" />
          </Link>
        </div>
        
        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex gap-5 xl:gap-8 text-sm xl:text-[15px] font-semibold text-brand-navy flex-shrink-0">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-blue transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-blue hover:after:w-full after:transition-all after:duration-300">
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Right: Search, Theme, and CTA */}
        <div className="flex-1 flex justify-end items-center gap-4 xl:gap-6">
          <button className="text-gray-500 hover:text-brand-navy p-2 rounded-full hover:bg-gray-50 transition-colors">
            {/* Search Icon Placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <button className="text-gray-500 hover:text-brand-navy p-2 rounded-full hover:bg-gray-50 transition-colors">
            {/* Theme Toggle Placeholder */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </button>
          <div className="w-px h-6 bg-gray-200 hidden sm:block ml-2 mr-2"></div>
          <Link
            href="/register"
            className="rounded-full bg-brand-blue px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-brand-blue/90 flex items-center gap-2 transition-transform hover:scale-105"
          >
            Apply Now
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

      </div>
    </header>
  );
}
