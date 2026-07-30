"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, BookOpen, Video, FileText, CheckCircle, 
  Award, Download, Bookmark, MessageSquare, Users, Mic, 
  Calendar, User, Settings, CreditCard, HelpCircle 
} from "lucide-react";

const mainLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/my-courses", label: "My Courses", icon: BookOpen },
  { href: "/live-classes", label: "Live Classes", icon: Video },
  { href: "/assignments", label: "Assignments", icon: FileText, badge: "2" },
  { href: "/quizzes", label: "Quizzes", icon: CheckCircle },
  { href: "/certificates", label: "Certificates", icon: Award },
  { href: "/downloads", label: "Downloads", icon: Download },
  { href: "/saved", label: "Saved Items", icon: Bookmark },
];

const communityLinks = [
  { href: "/community/discussions", label: "Discussions", icon: MessageSquare },
  { href: "/community/mentorship", label: "Mentorship", icon: Users },
  { href: "/community/visuals-talk", label: "Visuals Talk", icon: Mic },
  { href: "/community/events", label: "Events", icon: Calendar },
];

const accountLinks = [
  { href: "/account/profile", label: "Profile", icon: User },
  { href: "/account/settings", label: "Settings", icon: Settings },
  { href: "/account/payments", label: "Payment History", icon: CreditCard },
  { href: "/help", label: "Help Center", icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();
  
  // Default to /my-courses if we are just testing the layout
  const activePath = pathname === "/" ? "/my-courses" : pathname;

  return (
    <aside className="w-64 flex-shrink-0 border-r border-gray-200 bg-white h-screen sticky top-0 overflow-y-auto hidden lg:flex flex-col">
      <div className="p-6">
        <Link href="/" className="block mb-8">
          <Image src="/logo.png" alt="Chosen Visuals" width={140} height={35} priority className="h-8 w-auto" />
        </Link>

        <div className="space-y-8">
          <Section title="MAIN" links={mainLinks} activePath={activePath} />
          <Section title="COMMUNITY" links={communityLinks} activePath={activePath} />
          <Section title="ACCOUNT" links={accountLinks} activePath={activePath} />
        </div>
      </div>
      
      <div className="mt-auto p-6">
        <div className="bg-[#000d26] rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
          <div className="text-[#F8A328] mb-2 text-xl">👑</div>
          <h4 className="font-semibold text-sm mb-1">Upgrade to Pro</h4>
          <p className="text-xs text-gray-400 mb-4 leading-relaxed">Unlock premium courses, resources and exclusive benefits.</p>
          <Link href="/upgrade" className="flex w-full items-center justify-center rounded-lg bg-white text-[#000d26] text-sm font-bold py-2.5 transition hover:bg-gray-100">
            Upgrade Now →
          </Link>
        </div>
      </div>
    </aside>
  );
}

function Section({ title, links, activePath }: { title: string, links: any[], activePath: string }) {
  return (
    <div>
      <h3 className="text-[11px] font-bold tracking-wider text-gray-400 mb-3">{title}</h3>
      <ul className="space-y-1">
        {links.map((link) => {
          const isActive = activePath.startsWith(link.href);
          const Icon = link.icon;
          
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? "bg-[#0052FF]/10 text-[#0052FF]" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#0052FF]" : "text-gray-400"}`} />
                  {link.label}
                </div>
                {link.badge && (
                  <span className="bg-[#F8A328] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
