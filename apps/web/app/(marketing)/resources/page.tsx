import { Metadata } from "next";
import Link from "next/link";
import { Download, FileText, Video, ImageIcon, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | Chosen Visuals",
  description: "Downloadable resources, templates, guides, and tutorials for creatives.",
};

const resources = [
  {
    title: "Brand Strategy Workbook",
    category: "Guide",
    icon: FileText,
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    description: "A comprehensive 15-page workbook to help you define your brand identity and voice.",
    link: "#",
  },
  {
    title: "Social Media Template Pack",
    category: "Template",
    icon: ImageIcon,
    color: "text-pink-500",
    bg: "bg-pink-100 dark:bg-pink-900/30",
    description: "20+ customizable Photoshop templates for Instagram, Twitter, and LinkedIn.",
    link: "#",
  },
  {
    title: "Premiere Pro Export Settings",
    category: "Cheatsheet",
    icon: Video,
    color: "text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    description: "The optimal export settings for YouTube, Instagram Reels, and TikTok.",
    link: "#",
  },
  {
    title: "Client Proposal Template",
    category: "Template",
    icon: FileText,
    color: "text-green-500",
    bg: "bg-green-100 dark:bg-green-900/30",
    description: "Win more clients with this proven, beautifully designed Notion proposal template.",
    link: "#",
  },
  {
    title: "UI/UX Starter Kit",
    category: "Figma File",
    icon: ImageIcon,
    color: "text-orange-500",
    bg: "bg-orange-100 dark:bg-orange-900/30",
    description: "A Figma file containing essential UI components, wireframing tools, and grids.",
    link: "#",
  },
  {
    title: "Cinematic Color Grading LUTs",
    category: "Preset",
    icon: Video,
    color: "text-red-500",
    bg: "bg-red-100 dark:bg-red-900/30",
    description: "5 free custom LUTs to instantly give your footage a cinematic, moody look.",
    link: "#",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#000d26] transition-colors duration-300">
      {/* Header */}
      <section className="pt-24 pb-16 px-6 lg:px-12 text-center bg-gray-50/50 dark:bg-gray-900/20 border-b border-gray-100 dark:border-gray-800">
        <h1 className="text-4xl md:text-5xl font-black text-[#000d26] dark:text-white mb-6">Free Creative Resources</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Download our curated collection of templates, guides, and tools to help you level up your creative journey and build better projects.
        </p>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((res, i) => {
              const Icon = res.icon;
              return (
                <div key={i} className="group bg-white dark:bg-[#0a1128] border border-gray-100 dark:border-gray-800 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
                    <Download className="w-6 h-6 text-gray-300 dark:text-gray-600" />
                  </div>
                  
                  <div className={`w-14 h-14 ${res.bg} ${res.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                    {res.category}
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#000d26] dark:text-white mb-4">
                    {res.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                    {res.description}
                  </p>
                  
                  <Link href={res.link} className="inline-flex items-center gap-2 font-bold text-[#0052FF] hover:gap-3 transition-all mt-auto">
                    Download Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-gray-100 dark:border-gray-800 bg-[#0052FF] text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want more premium resources?</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Join the Chosen Visuals Academy to access our entire library of premium project files, exclusive templates, and deep-dive tutorials.
          </p>
          <Link href="/register" className="inline-block bg-white text-[#0052FF] font-bold py-4 px-10 rounded-xl hover:bg-gray-50 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
            Join the Academy
          </Link>
        </div>
      </section>
    </div>
  );
}
