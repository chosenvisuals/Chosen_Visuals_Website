"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, Moon } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="w-full px-4 lg:px-12 py-3 lg:py-4 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="flex items-center group">
            <Image src="/logo.png" alt="Chosen Visuals" width={260} height={75} priority className="h-10 lg:h-12 xl:h-14 w-auto drop-shadow-sm transition-transform group-hover:scale-105 duration-300" />
          </Link>
        </div>
        
        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex gap-5 xl:gap-8 text-sm xl:text-[15px] font-semibold text-[#000d26] flex-shrink-0">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#0052FF] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#0052FF] hover:after:w-full after:transition-all after:duration-300">
              {link.label}
            </Link>
          ))}
        </nav>
        
        {/* Right: Search, Theme, and CTA */}
        <div className="flex-1 flex justify-end items-center gap-2 lg:gap-4 xl:gap-6">
          <button className="hidden sm:block text-gray-500 hover:text-[#000d26] p-2 rounded-full hover:bg-gray-50 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hidden sm:block text-gray-500 hover:text-[#000d26] p-2 rounded-full hover:bg-gray-50 transition-colors">
            <Moon className="w-5 h-5" />
          </button>
          <div className="w-px h-6 bg-gray-200 hidden sm:block ml-1 mr-1 lg:ml-2 lg:mr-2"></div>
          
          <Link
            href="/register"
            className="hidden sm:flex rounded-full bg-[#0052FF] px-5 py-2 lg:px-6 lg:py-2.5 text-xs lg:text-sm font-medium text-white shadow-sm hover:bg-blue-600 items-center gap-2 transition-transform hover:scale-105"
          >
            Apply Now
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-[#000d26] p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg flex flex-col py-4 px-6 max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col gap-4 text-base font-semibold text-[#000d26]">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-[#0052FF] transition-colors py-2 border-b border-gray-50 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-4">
            <Link
              href="/register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center rounded-lg bg-[#0052FF] px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-600 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
