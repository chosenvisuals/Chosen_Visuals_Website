"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu, X, Search, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this might go to a /search page. 
      // For now, we'll try to find a matching link and navigate there, or just close it.
      const match = links.find(l => l.label.toLowerCase().includes(searchQuery.toLowerCase()));
      if (match) {
        router.push(match.href);
      }
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className="border-b border-gray-100 dark:border-gray-800 bg-white/90 dark:bg-[#000d26]/90 backdrop-blur-md sticky top-0 z-50 shadow-sm transition-colors duration-300">
        <div className="w-full px-4 lg:px-12 py-3 lg:py-4 flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="flex items-center group">
              <Image src="/logo.png" alt="Chosen Visuals" width={260} height={75} priority className="h-10 lg:h-12 xl:h-14 w-auto drop-shadow-sm transition-transform group-hover:scale-105 duration-300 dark:hidden" />
              <Image src="/white-logo.png" alt="Chosen Visuals" width={260} height={75} priority className="h-10 lg:h-12 xl:h-14 w-auto drop-shadow-sm transition-transform group-hover:scale-105 duration-300 hidden dark:block" />
            </Link>
          </div>
          
          {/* Center: Navigation Links */}
          <nav className="hidden xl:flex gap-4 2xl:gap-8 text-sm xl:text-[15px] font-semibold text-[#000d26] dark:text-gray-200 flex-shrink-0">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[#0052FF] dark:hover:text-[#0052FF] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#0052FF] hover:after:w-full after:transition-all after:duration-300">
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Right: Search, Theme, and CTA */}
          <div className="flex-1 flex justify-end items-center gap-2 lg:gap-4 xl:gap-6">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-500 dark:text-gray-400 hover:text-[#000d26] dark:hover:text-white p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-gray-500 dark:text-gray-400 hover:text-[#000d26] dark:hover:text-white p-2 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {mounted && theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 hidden sm:block ml-1 mr-1 lg:ml-2 lg:mr-2"></div>
            
            <Link
              href="/register"
              className="hidden sm:flex rounded-full bg-[#0052FF] px-5 py-2 lg:px-6 lg:py-2.5 text-xs lg:text-sm font-medium text-white shadow-sm hover:bg-blue-600 items-center gap-2 transition-transform hover:scale-105"
            >
              Apply Now
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="xl:hidden text-[#000d26] dark:text-gray-200 p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-white dark:bg-[#000d26] border-b border-gray-100 dark:border-gray-800 shadow-lg flex flex-col py-4 px-6 max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col gap-4 text-base font-semibold text-[#000d26] dark:text-gray-200">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="hover:text-[#0052FF] dark:hover:text-[#0052FF] transition-colors py-2 border-b border-gray-50 dark:border-gray-800 last:border-0"
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

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[10vh] px-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#000d26] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
            <form onSubmit={handleSearch} className="flex items-center px-4 py-4 border-b border-gray-100 dark:border-gray-800">
              <Search className="w-6 h-6 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search pages (e.g. 'Academy', 'Contact')..." 
                autoFocus
                className="flex-1 bg-transparent border-none outline-none px-4 text-lg text-brand-navy dark:text-white placeholder:text-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="button" onClick={() => setIsSearchOpen(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-500 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </form>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/50">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Links</p>
              <div className="flex flex-wrap gap-2">
                {links.slice(0, 5).map(link => (
                  <button 
                    key={link.href}
                    onClick={() => { router.push(link.href); setIsSearchOpen(false); }}
                    className="px-3 py-1.5 bg-white dark:bg-[#000d26] border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300 hover:border-[#0052FF] hover:text-[#0052FF] transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Invisible backdrop click catcher */}
          <div className="absolute inset-0 -z-10" onClick={() => setIsSearchOpen(false)} />
        </div>
      )}
    </>
  );
}
