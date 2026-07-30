import Image from "next/image";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Zap, Globe, Coffee, CheckCircle } from "lucide-react";

export default function CareersPage() {
  const jobs = [
    { title: "Senior UI/UX Designer", dept: "Creative", location: "Lagos, NG (Hybrid)", type: "Full-time" },
    { title: "Backend Engineer (Node.js)", dept: "Engineering", location: "Remote", type: "Full-time" },
    { title: "Motion Graphics Artist", dept: "Media Production", location: "Lagos, NG (On-site)", type: "Contract" },
    { title: "Academy Student Success Manager", dept: "Operations", location: "Lagos, NG (Hybrid)", type: "Full-time" },
  ];

  const perks = [
    { title: "Remote-Friendly", icon: Globe, desc: "Work from anywhere for most of our roles." },
    { title: "Health & Wellness", icon: Heart, desc: "Comprehensive health coverage and wellness stipends." },
    { title: "Top-Tier Gear", icon: Zap, desc: "MacBooks and the latest software licenses for all creatives." },
    { title: "Learning Budget", icon: Coffee, desc: "Annual budget for courses, books, and conferences." },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#000d26] text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://picsum.photos/seed/chosen20/800/600" alt="Careers Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000d26] via-[#000d26]/80 to-transparent" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10">
          <p className="text-[#F8A328] font-bold text-sm tracking-widest uppercase mb-4">JOIN THE TEAM</p>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">Do the Best Work of <br/><span className="text-[#0052FF]">Your Life.</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We are always looking for passionate creatives, engineers, and educators to join our mission of building a world-class creative ecosystem.
          </p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000d26]">Why Join Us?</h2>
            <p className="text-gray-500 mt-2 text-lg">We take care of our people so they can focus on their craft.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#F8A328] flex items-center justify-center mx-auto mb-6 border border-orange-100">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#000d26] mb-3">{perk.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{perk.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Hiring Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000d26]">Our Hiring Process</h2>
            <p className="text-gray-500 mt-2 text-lg">What to expect when you apply.</p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-blue-100 -translate-y-1/2" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
              
              <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-xl text-center">
                <div className="w-12 h-12 bg-[#0052FF] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">1</div>
                <h3 className="text-lg font-bold text-[#000d26] mb-2">Application</h3>
                <p className="text-sm text-gray-500">Submit your resume and portfolio. We review every single application carefully.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-xl text-center">
                <div className="w-12 h-12 bg-[#0052FF] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">2</div>
                <h3 className="text-lg font-bold text-[#000d26] mb-2">Intro Call</h3>
                <p className="text-sm text-gray-500">A quick 30-minute chat with our recruiter to align on expectations and culture.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-xl text-center">
                <div className="w-12 h-12 bg-[#0052FF] text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-6">3</div>
                <h3 className="text-lg font-bold text-[#000d26] mb-2">Technical Task</h3>
                <p className="text-sm text-gray-500">A paid take-home assignment or a live portfolio review with the team lead.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-[#0052FF] shadow-2xl text-center transform lg:-translate-y-4">
                <div className="w-12 h-12 bg-[#F8A328] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-6"><CheckCircle className="w-6 h-6" /></div>
                <h3 className="text-lg font-bold text-[#000d26] mb-2">The Offer</h3>
                <p className="text-sm text-gray-500">Welcome aboard! We finalize the details and start your onboarding process.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#000d26]">Open Positions</h2>
          </div>
          
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#0052FF] hover:shadow-lg transition-all group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 cursor-pointer">
                <div>
                  <h3 className="text-xl font-bold text-[#000d26] mb-2 group-hover:text-[#0052FF] transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.dept}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                  </div>
                </div>
                <Link href="#" className="bg-gray-100 text-[#000d26] font-bold px-6 py-3 rounded-xl group-hover:bg-[#0052FF] group-hover:text-white transition-colors flex items-center gap-2 shrink-0 w-full sm:w-auto justify-center">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-3xl text-center border border-blue-100">
            <h4 className="font-bold text-[#000d26] text-xl mb-2">Don't see a fit?</h4>
            <p className="text-gray-600 mb-6">Send your resume and portfolio anyway. We are always keeping an eye out for exceptional talent.</p>
            <Link href="mailto:careers@chosenvisuals.com" className="text-[#0052FF] font-bold hover:underline inline-flex items-center gap-2">
              careers@chosenvisuals.com <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
