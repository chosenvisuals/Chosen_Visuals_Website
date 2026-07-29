import Link from "next/link";
import Image from "next/image";

const mainLinks = [
  { href: "/dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { href: "/my-courses", label: "My Courses", icon: "BookOpen" },
  { href: "/live-classes", label: "Live Classes", icon: "Video" },
  { href: "/assignments", label: "Assignments", icon: "FileText", badge: "2" },
  { href: "/quizzes", label: "Quizzes", icon: "CheckCircle" },
  { href: "/certificates", label: "Certificates", icon: "Award" },
  { href: "/downloads", label: "Downloads", icon: "Download" },
  { href: "/saved", label: "Saved Items", icon: "Bookmark" },
];

const communityLinks = [
  { href: "/community/discussions", label: "Discussions", icon: "MessageSquare" },
  { href: "/community/mentorship", label: "Mentorship", icon: "Users" },
  { href: "/community/visuals-talk", label: "Visuals Talk", icon: "Mic" },
  { href: "/community/events", label: "Events", icon: "Calendar" },
];

const accountLinks = [
  { href: "/account/profile", label: "Profile", icon: "User" },
  { href: "/account/settings", label: "Settings", icon: "Settings" },
  { href: "/account/payments", label: "Payment History", icon: "CreditCard" },
  { href: "/help", label: "Help Center", icon: "HelpCircle" },
];

export function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-brand-border bg-white h-screen sticky top-0 overflow-y-auto hidden md:flex flex-col">
      <div className="p-6">
        <Link href="/" className="block mb-8">
          <Image src="/logo.png" alt="Chosen Visuals" width={140} height={35} priority className="h-8 w-auto" />
        </Link>

        <div className="space-y-8">
          <Section title="MAIN" links={mainLinks} activePath="/my-courses" />
          <Section title="COMMUNITY" links={communityLinks} />
          <Section title="ACCOUNT" links={accountLinks} />
        </div>
      </div>
      
      <div className="mt-auto p-6">
        <div className="bg-brand-navy rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
          <div className="text-brand-orange mb-2">👑</div>
          <h4 className="font-semibold text-sm mb-1">Upgrade to Pro</h4>
          <p className="text-xs text-gray-300 mb-4">Unlock premium courses, resources and exclusive benefits.</p>
          <Link href="/upgrade" className="inline-flex w-full items-center justify-center rounded-lg bg-white text-brand-navy text-xs font-semibold py-2 transition hover:bg-gray-100">
            Upgrade Now →
          </Link>
        </div>
      </div>
    </aside>
  );
}

function Section({ title, links, activePath }: { title: string, links: any[], activePath?: string }) {
  return (
    <div>
      <h3 className="text-xs font-bold tracking-wider text-gray-400 mb-3">{title}</h3>
      <ul className="space-y-1">
        {links.map((link) => {
          const isActive = activePath === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "bg-brand-blue/5 text-brand-blue" : "text-gray-600 hover:bg-gray-50 hover:text-brand-navy"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gray-200 rounded-sm opacity-50"></div> {/* Icon Placeholder */}
                  {link.label}
                </div>
                {link.badge && (
                  <span className="bg-brand-orange text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
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
