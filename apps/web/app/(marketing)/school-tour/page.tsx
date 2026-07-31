import Image from "next/image";
import Link from "next/link";
import { Users, GraduationCap, ArrowRight, CheckCircle, MapPin, Calendar, Heart } from "lucide-react";

export default function SchoolTourPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#000d26] text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://picsum.photos/seed/chosen34/800/600" alt="Students gathering" fill className="object-cover opacity-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000d26] via-[#000d26]/80 to-[#000d26]/40" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10">
          <p className="text-[#F8A328] font-bold text-sm tracking-widest uppercase mb-4">IMPACT PROJECT</p>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">The Chosen Visuals <br/><span className="text-[#0052FF]">School Tour.</span></h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Inspiring the next generation. We travel to high schools and universities to educate students about the massive opportunities in design, media, and technology.
          </p>
          <Link href="#request-tour" className="inline-flex bg-[#0052FF] text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-600 transition shadow-lg shadow-blue-500/20">
            Request a Visit to Your School
          </Link>
        </div>
      </section>

      {/* The Impact */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#000d26] mb-6">Empowering Young Minds</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Many students are unaware of the viable career paths available in the creative and tech industries. The School Tour is our initiative to bridge that gap. We bring industry professionals directly to the students to share insights, conduct mini-workshops, and ignite passion.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 text-[#0052FF] rounded-xl flex items-center justify-center mb-4"><Users className="w-6 h-6" /></div>
                  <h4 className="text-3xl font-black text-[#000d26]">15,000+</h4>
                  <p className="text-sm font-bold text-gray-500 mt-1">Students Reached</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <div className="w-12 h-12 bg-orange-100 text-[#F8A328] rounded-xl flex items-center justify-center mb-4"><GraduationCap className="w-6 h-6" /></div>
                  <h4 className="text-3xl font-black text-[#000d26]">50+</h4>
                  <p className="text-sm font-bold text-gray-500 mt-1">Schools Visited</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg mt-8">
                <Image src="https://picsum.photos/seed/chosen35/800/600" alt="School Tour" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg">
                <Image src="https://picsum.photos/seed/chosen36/800/600" alt="School Tour" fill className="object-cover" />
              </div>
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg col-span-2">
                <Image src="https://picsum.photos/seed/chosen37/800/600" alt="School Tour" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2026/2027 Roadmap */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000d26] mb-4">Tour Roadmap (2026/2027)</h2>
            <p className="text-gray-500 text-lg">Where we are heading next.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative">
              <div className="absolute top-0 right-0 bg-[#0052FF] text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl">Upcoming</div>
              <div className="flex items-center gap-3 text-sm font-bold text-gray-400 mb-4"><Calendar className="w-5 h-5"/> Q1 2026</div>
              <h3 className="text-2xl font-bold text-[#000d26] mb-4">Lagos State District</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-600"><MapPin className="w-4 h-4 text-[#F8A328]"/> King's College</li>
                <li className="flex items-center gap-2 text-gray-600"><MapPin className="w-4 h-4 text-[#F8A328]"/> Yaba College of Tech</li>
                <li className="flex items-center gap-2 text-gray-600"><MapPin className="w-4 h-4 text-[#F8A328]"/> Federal Science College</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <div className="flex items-center gap-3 text-sm font-bold text-gray-400 mb-4"><Calendar className="w-5 h-5"/> Q2 2026</div>
              <h3 className="text-2xl font-bold text-[#000d26] mb-4">Ogun State District</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-600"><MapPin className="w-4 h-4 text-[#F8A328]"/> Covenant University</li>
                <li className="flex items-center gap-2 text-gray-600"><MapPin className="w-4 h-4 text-[#F8A328]"/> Babcock High School</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-center items-center text-center border-dashed">
               <Heart className="w-12 h-12 text-gray-300 mb-4" />
               <h3 className="text-xl font-bold text-gray-400 mb-2">Want us in your city?</h3>
               <p className="text-sm text-gray-400">Let us know and we might add it to the roadmap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-tour" className="py-24 bg-[#000d26] text-white relative overflow-hidden">
        <div className="absolute -left-40 -top-40 w-96 h-96 bg-[#0052FF] rounded-full mix-blend-screen filter blur-[100px] opacity-30" />
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Request a School Visit</h2>
            <p className="text-gray-400">Are you a principal, teacher, or student leader? Fill out the form below to invite the Chosen Visuals team to your institution.</p>
          </div>
          
          <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-2xl">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#000d26]">Institution Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] text-gray-900" placeholder="E.g. Greenfield High School" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#000d26]">Your Name</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] text-gray-900" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#000d26]">Your Role</label>
                  <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] text-gray-900" placeholder="E.g. Principal, Student Rep" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#000d26]">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] text-gray-900" placeholder="john@school.edu" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#000d26]">Phone Number</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] text-gray-900" placeholder="+1 (234) 567-890" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#000d26]">Why should we visit your school?</label>
                <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] text-gray-900 resize-none" placeholder="Tell us a bit about your students..."></textarea>
              </div>
              <button type="button" className="w-full bg-[#0052FF] text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition shadow-lg text-lg">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
