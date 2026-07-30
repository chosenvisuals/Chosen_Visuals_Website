import Image from "next/image";
import Link from "next/link";
import { Mic, Users, Calendar, MapPin, ArrowRight, PlayCircle, PlusCircle } from "lucide-react";

export default function VisualsTalkPage() {
  const events = [
    { title: "The Future of Brand Identity", date: "August 15, 2026", type: "Virtual Workshop", status: "Upcoming" },
    { title: "Mastering Concert Visuals", date: "September 10, 2026", type: "Live Masterclass", status: "Upcoming" },
    { title: "Freelance Survival Guide", date: "October 5, 2026", type: "Fireside Chat", status: "Upcoming" },
  ];

  const speakers = [
    { name: "John Doe", role: "Creative Director", image: "https://picsum.photos/seed/chosen42/800/600" },
    { name: "Jane Smith", role: "Lead Strategist", image: "https://picsum.photos/seed/chosen43/800/600" },
    { name: "Amara Okafor", role: "Product Designer", image: "https://picsum.photos/seed/chosen44/800/600" },
    { name: "David Adeleke", role: "CEO, Apex Tech", image: "https://picsum.photos/seed/chosen45/800/600" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#000d26] text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://picsum.photos/seed/chosen46/800/600" alt="Audience Background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000d26] via-[#000d26]/80 to-[#000d26]/40" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10">
          <p className="text-[#F8A328] font-bold text-sm tracking-widest uppercase mb-4">COMMUNITY INITIATIVE</p>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">Visuals <span className="text-[#0052FF]">Talk.</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            A vibrant community for creatives and tech professionals. Join us for conferences, workshops, networking events, and mentorship programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#upcoming" className="inline-flex bg-[#0052FF] text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-600 transition shadow-lg justify-center">
              View Upcoming Events
            </Link>
            <Link href="#community" className="inline-flex bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/20 transition justify-center">
              Join the Community
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights / About the Initiative */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 text-[#0052FF] rounded-2xl flex items-center justify-center mx-auto mb-6"><Mic className="w-8 h-8" /></div>
              <h3 className="text-2xl font-bold text-[#000d26] mb-3">Conferences</h3>
              <p className="text-gray-500 leading-relaxed">Large-scale events featuring industry leaders sharing insights on design, tech, and business.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-50 text-[#F8A328] rounded-2xl flex items-center justify-center mx-auto mb-6"><Users className="w-8 h-8" /></div>
              <h3 className="text-2xl font-bold text-[#000d26] mb-3">Networking</h3>
              <p className="text-gray-500 leading-relaxed">Connect with like-minded creatives, find collaborators, and build meaningful professional relationships.</p>
            </div>
            <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6"><PlusCircle className="w-8 h-8" /></div>
              <h3 className="text-2xl font-bold text-[#000d26] mb-3">Mentorship</h3>
              <p className="text-gray-500 leading-relaxed">Get paired with experienced professionals who can guide you through the complexities of the creative industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-[#000d26] mb-4">Upcoming Events</h2>
              <p className="text-gray-500 text-lg">Secure your spot. Most of our events are free but seats are limited.</p>
            </div>
            <Link href="#" className="text-[#0052FF] font-bold inline-flex items-center gap-2 hover:underline">
              View Calendar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((evt, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-[2rem] overflow-hidden hover:shadow-xl hover:border-[#0052FF] transition-all group flex flex-col">
                <div className="h-48 bg-gray-100 relative">
                  <Image src={`https://picsum.photos/seed/chosen47/800/600"Event" fill className="object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#000d26]">
                    {evt.status}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-sm text-gray-500 font-medium mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-[#F8A328]" /> {evt.date}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-[#0052FF]" /> {evt.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#000d26] mb-6">{evt.title}</h3>
                  <Link href="#" className="mt-auto w-full bg-gray-100 text-[#000d26] font-bold py-3 rounded-xl hover:bg-[#0052FF] hover:text-white transition-colors flex items-center justify-center gap-2">
                    RSVP Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Speakers Gallery */}
      <section className="py-24 bg-[#000d26] text-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Past Speakers & Guests</h2>
            <p className="text-gray-400 text-lg">Industry heavyweights who have graced the Visuals Talk stage.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {speakers.map((speaker, i) => (
              <div key={i} className="text-center group">
                <div className="w-full aspect-square rounded-[2rem] overflow-hidden relative mb-4 shadow-lg border-2 border-white/10 group-hover:border-[#0052FF] transition-colors">
                  <Image src={speaker.image} alt={speaker.name} fill className="object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                </div>
                <h4 className="font-bold text-lg">{speaker.name}</h4>
                <p className="text-sm text-gray-400">{speaker.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section id="community" className="py-24 bg-gray-50 border-t border-gray-100 text-center">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <h2 className="text-4xl font-bold text-[#000d26] mb-6">Join the Community</h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Don't miss out on the latest events, resources, and networking opportunities. Join thousands of creatives in the Visuals Talk ecosystem today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <input type="email" placeholder="Enter your email address" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all text-gray-900" />
            <button className="w-full sm:w-auto bg-[#0052FF] text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-600 transition whitespace-nowrap shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
