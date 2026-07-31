"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { useState } from "react";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All Work");

  const projects = [
    { title: "AfroNation Concert Stage", category: "Event Visuals", image: "https://picsum.photos/seed/chosen22/800/600", span: "md:col-span-2 lg:col-span-2" },
    { title: "Aura Skincare", category: "Branding", image: "https://picsum.photos/seed/chosen23/800/600", span: "md:col-span-1 lg:col-span-1" },
    { title: "Apex Tech Summit", category: "Media Coverage", image: "https://picsum.photos/seed/chosen24/800/600", span: "md:col-span-1 lg:col-span-1" },
    { title: "Horizon Corporate Identity", category: "Branding", image: "https://picsum.photos/seed/chosen25/800/600", span: "md:col-span-1 lg:col-span-1" },
    { title: "Nexus Startup Logo", category: "Branding", image: "https://picsum.photos/seed/chosen26/800/600", span: "md:col-span-1 lg:col-span-1" },
    { title: "Live Streaming Setup", category: "Media Coverage", image: "https://picsum.photos/seed/chosen27/800/600", span: "md:col-span-2 lg:col-span-1" },
    { title: "Youth Tech Conference", category: "Event Visuals", image: "https://picsum.photos/seed/chosen28/800/600", span: "md:col-span-1 lg:col-span-1" },
    { title: "Company Profile Design", category: "Branding", image: "https://picsum.photos/seed/chosen29/800/600", span: "md:col-span-1 lg:col-span-1" },
    { title: "Creative Shoot", category: "Media Coverage", image: "https://picsum.photos/seed/chosen30/800/600", span: "md:col-span-1 lg:col-span-1" },
    { title: "Stage Branding", category: "Event Visuals", image: "https://picsum.photos/seed/chosen31/800/600", span: "md:col-span-1 lg:col-span-2" },
  ];

  const filteredProjects = activeFilter === "All Work" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const filters = ["All Work", "Branding", "Event Visuals", "Media Coverage"];

  const clients = ["Spotify", "Paystack", "MTN", "Flutterwave", "Netflix", "Guaranty Trust"];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#000d26] text-white text-center">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <p className="text-[#F8A328] font-bold text-sm tracking-widest uppercase mb-4">OUR PORTFOLIO</p>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">Our Work Speaks <br/> for Itself.</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Explore a curated selection of our best projects spanning branding, event visuals, and high-end media coverage. We bring visions to life.
          </p>
        </div>
      </section>

      {/* Client Marquee */}
      <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted By Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {clients.map((client, idx) => (
              <h3 key={idx} className="text-2xl font-black text-[#000d26] tracking-tighter">{client}</h3>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="https://picsum.photos/seed/chosen32/800/600" alt="Featured Case Study" fill className="object-cover" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-sm text-[#000d26]">Featured Case Study</div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-[#000d26] mb-4">AfroNation Concert Visuals</h2>
              <p className="text-[#0052FF] font-bold mb-6 text-sm tracking-widest uppercase">Stage Design & Media Coverage</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                For the AfroNation 2026 tour, Chosen Visuals was tasked with designing a massive LED stage setup that would respond dynamically to the artists' performances. We built custom 3D animations and operated the live visuals.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 border-y border-gray-200 py-6">
                <div>
                  <h4 className="text-3xl font-black text-[#000d26]">50k+</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase">Live Attendees</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-[#000d26]">2.5M</h4>
                  <p className="text-sm font-bold text-gray-500 uppercase">Stream Views</p>
                </div>
              </div>

              <Link href="/contact" className="inline-flex bg-[#000d26] text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-800 transition shadow-lg items-center gap-2">
                Start a Similar Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition ${activeFilter === filter ? 'bg-[#000d26] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {filteredProjects.map((project, i) => (
              <div key={i} className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all ${project.span}`}>
                <div className="relative h-full w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000d26]/90 via-[#000d26]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-[#F8A328] font-bold text-xs uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-24 bg-[#0052FF] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <Quote className="w-16 h-16 mx-auto text-white/30 mb-8" />
          <h3 className="text-3xl lg:text-4xl font-bold leading-relaxed mb-10">
            "Chosen Visuals completely transformed our brand identity. Their attention to detail, quick turnaround, and ability to understand our vision was nothing short of spectacular."
          </h3>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden relative border-2 border-white">
              <Image src="https://picsum.photos/seed/chosen33/800/600" alt="Client" fill className="object-cover" />
            </div>
            <div className="text-left">
              <p className="font-bold">David Adeleke</p>
              <p className="text-sm text-blue-200">CEO, Apex Tech Innovations</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
