import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, Users, GraduationCap, Briefcase, Globe, Award,
  Target, Lightbulb, ShieldCheck, Rocket, Heart, UserPlus,
  MonitorPlay, Paintbrush, Camera, Printer, Mic, CheckCircle
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-24 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[#0052FF] font-bold text-xs tracking-widest uppercase mb-6">
                <div className="w-2 h-2 rounded-full bg-[#0052FF]" />
                WELCOME TO CHOSEN VISUALS
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-[#000d26] leading-tight mb-6 tracking-tight">
                Empowering <span className="text-[#F8A328]">Creatives</span> <br/>
                & Building Brands
              </h1>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
                We are a dual-force Creative Institute and Agency. Whether you want to learn future-ready tech skills or elevate your brand with world-class design, you belong here.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/academy" className="bg-[#0052FF] text-white font-bold py-3.5 px-8 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
                  Explore Academy <GraduationCap className="w-4 h-4" />
                </Link>
                <Link href="/services" className="bg-white border-2 border-gray-200 text-[#000d26] font-bold py-3.5 px-8 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition">
                  Hire Our Agency <Briefcase className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src="/images/home-hero.png" 
                alt="Chosen Visuals Team" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl text-center">
          <p className="text-gray-400 font-bold text-xs tracking-widest uppercase mb-8">TRUSTED BY & EMPOWERING</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 text-gray-300 font-bold text-lg md:text-xl">
             <span className="hover:text-[#0052FF] transition-colors cursor-default">Businesses & Startups</span>
             <span className="hover:text-[#F8A328] transition-colors cursor-default">Entrepreneurs</span>
             <span className="hover:text-[#0052FF] transition-colors cursor-default">Churches & NGOs</span>
             <span className="hover:text-[#F8A328] transition-colors cursor-default">Government Institutions</span>
             <span className="hover:text-[#0052FF] transition-colors cursor-default">Schools</span>
             <span className="hover:text-[#F8A328] transition-colors cursor-default">Content Creators</span>
          </div>
        </div>
      </section>

      {/* What We Do Section - The Split */}
      <section className="py-24 bg-[#000d26] text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0052FF]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#F8A328] tracking-widest uppercase mb-2">WHO WE ARE</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">One Vision. Two Paths.</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">Chosen Visuals operates as both a premier educational institute and a high-end creative agency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Academy Path */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-[#0052FF]/20 flex items-center justify-center mb-8">
                <MonitorPlay className="w-8 h-8 text-[#0052FF]" />
              </div>
              <h4 className="text-3xl font-bold mb-4">The Academy</h4>
              <p className="text-gray-400 mb-8 leading-relaxed">
                For students and professionals. Learn in-demand skills in UI/UX Design, Full-Stack Development, Cybersecurity, Data Analytics, and Video Production from industry experts.
              </p>
              <ul className="space-y-3 mb-10 text-sm font-medium">
                <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#0052FF]" /> Hands-on, project-based learning</li>
                <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#0052FF]" /> Dedicated mentorship & career guidance</li>
                <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#0052FF]" /> Join a community of 10,000+ creatives</li>
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/register" className="bg-[#0052FF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition">
                  Apply Now (Free Sign up)
                </Link>
                <Link href="/academy" className="text-white font-bold hover:text-[#0052FF] transition">
                  Learn more &rarr;
                </Link>
              </div>
            </div>

            {/* Agency Path */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 rounded-2xl bg-[#F8A328]/20 flex items-center justify-center mb-8">
                <Paintbrush className="w-8 h-8 text-[#F8A328]" />
              </div>
              <h4 className="text-3xl font-bold mb-4">The Creative Agency</h4>
              <p className="text-gray-400 mb-8 leading-relaxed">
                For brands and organizations. We deliver world-class creative services including brand identity, UI/UX design, web development, and cinematic media production.
              </p>
              <ul className="space-y-3 mb-10 text-sm font-medium">
                <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#F8A328]" /> Premium brand identity & strategy</li>
                <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#F8A328]" /> Custom web & app development</li>
                <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#F8A328]" /> High-end video & media coverage</li>
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/services" className="bg-[#F8A328] text-[#000d26] hover:bg-orange-400 font-bold py-3 px-6 rounded-lg transition">
                  Hire Us
                </Link>
                <Link href="/portfolio" className="text-white font-bold hover:text-[#F8A328] transition">
                  View our work &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#F8A328] font-bold text-xs tracking-widest uppercase mb-2">OUR CREATIVE SERVICES</p>
            <h2 className="text-4xl font-bold text-[#000d26]">World-Class Solutions For Your Brand</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={Paintbrush} 
              title="Branding & Graphic Design" 
              desc="Logos, flyers, social media graphics, packaging, and company profiles."
            />
            <ServiceCard 
              icon={Printer} 
              title="Printing & Production" 
              desc="High-quality banners, business cards, brochures, and branded merchandise."
            />
            <ServiceCard 
              icon={MonitorPlay} 
              title="Stage & Event Visuals" 
              desc="LED visuals, conference branding, stage backdrops, and event identity."
            />
            <ServiceCard 
              icon={Camera} 
              title="Event Media Coverage" 
              desc="Photography, videography, livestreaming, drone coverage, and highlight videos."
            />
          </div>
        </div>
      </section>

      {/* Visuals Talk & Impact */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0052FF]/10 text-[#0052FF] font-bold text-xs tracking-widest uppercase mb-6">
                <Mic className="w-4 h-4" /> Visuals Talk Community
              </div>
              <h2 className="text-4xl font-bold text-[#000d26] mb-6">Educate. Connect. Inspire.</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Visuals Talk is our flagship community program hosting conferences, workshops, networking events, portfolio reviews, and leadership discussions to empower creatives and tech professionals.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-sm text-gray-700 font-bold"><CheckCircle className="w-5 h-5 text-[#F8A328]" /> Promote Education & Social Awareness</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-bold"><CheckCircle className="w-5 h-5 text-[#F8A328]" /> Support Community Development</li>
                <li className="flex items-center gap-3 text-sm text-gray-700 font-bold"><CheckCircle className="w-5 h-5 text-[#F8A328]" /> Empower Young Creatives</li>
              </ul>
              <Link href="/visuals-talk" className="inline-block bg-[#000d26] text-white font-bold py-3.5 px-8 rounded-lg hover:bg-gray-800 transition">
                Join The Community &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="space-y-4">
                 <div className="h-48 bg-blue-100 rounded-3xl overflow-hidden relative"><Image src="/images/academy-hero.png" alt="Community" fill className="object-cover" /></div>
                 <div className="h-64 bg-orange-100 rounded-3xl overflow-hidden relative"><Image src="/images/home-hero.png" alt="Workshop" fill className="object-cover" /></div>
               </div>
               <div className="space-y-4 pt-12">
                 <div className="h-64 bg-purple-100 rounded-3xl overflow-hidden relative"><Image src="/images/building.png" alt="Event" fill className="object-cover" /></div>
                 <div className="h-48 bg-green-100 rounded-3xl overflow-hidden relative"><Image src="/images/academy-hero.png" alt="Networking" fill className="object-cover" /></div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Secondary School Tour Banner */}
      <section className="py-20 bg-[#0052FF] text-white relative overflow-hidden">
        {/* Abstract Background patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F8A328]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold text-xs tracking-widest uppercase mb-6 border border-white/20">
            <GraduationCap className="w-4 h-4" /> Secondary School Tech Tour
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Future Doesn't Start After School... <br/>
            <span className="text-[#F8A328]">It Starts Today!</span>
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Technology is no longer just for adults. Join our Secondary School Tour and discover how you can turn your ideas into reality through AI, Coding, and Design. 
            <br/><br/>
            <span className="text-white font-bold">Discover. Learn. Create. Lead.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/school-tour" className="bg-[#F8A328] text-[#000d26] font-bold py-4 px-10 rounded-xl hover:bg-orange-400 transition transform hover:scale-105 shadow-xl text-lg">
              Register Your School
            </Link>
            <Link href="/school-tour" className="bg-transparent border-2 border-white/30 text-white font-bold py-4 px-10 rounded-xl hover:bg-white/10 transition text-lg inline-flex items-center justify-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-b border-gray-100 bg-gray-50/50">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 divide-x divide-gray-200">
             <StatItem icon={Users} count="10K+" label="Students Trained" color="text-blue-600" bg="bg-blue-100" />
             <StatItem icon={Briefcase} count="500+" label="Client Projects" color="text-purple-600" bg="bg-purple-100" />
             <StatItem icon={GraduationCap} count="8" label="Schools" color="text-pink-600" bg="bg-pink-100" />
             <StatItem icon={Globe} count="30+" label="Countries Reached" color="text-cyan-600" bg="bg-cyan-100" />
             <StatItem icon={Award} count="5+" label="Years of Impact" color="text-orange-600" bg="bg-orange-100" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Image */}
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-xl group">
              <Image 
                src="/images/building.png" 
                alt="Chosen Visuals Headquarters" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right Content */}
            <div>
              <p className="text-[#F8A328] font-bold text-xs tracking-widest uppercase mb-4">OUR STORY</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#000d26] leading-tight mb-6">
                A Vision Born From Passion Driven by <span className="text-[#F8A328]">Purpose</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-16">
                <p>
                  Chosen Visuals was founded with a simple belief: talent is everywhere, but opportunity is not. We exist to bridge that gap by providing world-class training and creative services that help people and brands grow.
                </p>
                <p>
                  From a small creative studio to a leading institute and agency, our journey has been fueled by passion, innovation, and a commitment to excellence.
                </p>
              </div>

              {/* Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative">
                <div className="hidden md:block absolute top-6 left-6 right-6 h-px border-t-2 border-dashed border-gray-200" />
                <TimelineNode year="2019" title="The Beginning" desc="Started as a creative studio." icon={Target} />
                <TimelineNode year="2021" title="Growth" desc="Launched training programs." icon={Rocket} />
                <TimelineNode year="2022" title="Expansion" desc="Serviced bigger brands." icon={Globe} />
                <TimelineNode year="2023" title="Impact" desc="Reached thousands of students." icon={Users} />
                <TimelineNode year="2024+" title="The Future" desc="Continuing to innovate." icon={Heart} />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="mb-16">
            <p className="text-[#0052FF] font-bold text-xs tracking-widest uppercase mb-2">OUR VALUES</p>
            <h2 className="text-4xl font-bold text-[#000d26]">The Principles That Guide Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard icon={Target} title="Excellence" desc="We pursue the highest standards in everything we do." color="text-blue-600" bg="bg-blue-100" />
            <ValueCard icon={Lightbulb} title="Creativity" desc="We turn ideas into inspiring and impactful experiences." color="text-orange-500" bg="bg-orange-100" />
            <ValueCard icon={ShieldCheck} title="Integrity" desc="We are honest, transparent, and accountable." color="text-green-600" bg="bg-green-100" />
            <ValueCard icon={Rocket} title="Innovation" desc="We embrace technology and new ideas to stay ahead." color="text-purple-600" bg="bg-purple-100" />
            <ValueCard icon={Heart} title="Impact" desc="We create solutions that transform lives and communities." color="text-red-500" bg="bg-red-100" />
            <ValueCard icon={Users} title="Community" desc="We grow together and support each other's success." color="text-cyan-600" bg="bg-cyan-100" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="bg-[#000d26] rounded-3xl p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-xl border border-gray-800">
            
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Let's Build a Better Future <span className="text-[#F8A328]">Together</span>
              </h2>
              <p className="text-gray-400 max-w-xl leading-relaxed mb-8">
                Whether you want to learn a new skill, elevate your brand, or collaborate on a groundbreaking project, Chosen Visuals is your partner in growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-[#F8A328] text-[#000d26] font-bold py-3.5 px-8 rounded-lg hover:bg-orange-400 transition flex items-center justify-center gap-2">
                  Partner With Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/careers" className="bg-white/10 border-2 border-white/20 text-white font-bold py-3.5 px-8 rounded-lg hover:bg-white/20 transition flex items-center justify-center gap-2">
                  <Briefcase className="w-4 h-4" /> Create a Job With Us
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-[400px] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center flex flex-col justify-center">
                <GraduationCap className="w-8 h-8 text-[#0052FF] mx-auto mb-3" />
                <p className="font-bold text-white mb-1">Students</p>
                <Link href="/register" className="text-sm text-[#0052FF] font-bold hover:underline">Apply Now &rarr;</Link>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center flex flex-col justify-center">
                <Target className="w-8 h-8 text-[#F8A328] mx-auto mb-3" />
                <p className="font-bold text-white mb-1">Clients</p>
                <Link href="/services" className="text-sm text-[#F8A328] font-bold hover:underline">Hire Us &rarr;</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

// Subcomponents

function ServiceCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all group">
      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#000d26] mb-6 group-hover:-translate-y-2 transition-transform">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-bold text-xl text-[#000d26] mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function StatItem({ icon: Icon, count, label, color, bg }: any) {
  return (
    <div className="flex flex-col items-center text-center px-2">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${bg} ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <p className="text-3xl font-bold text-[#000d26] mb-1">{count}</p>
      <p className="text-xs text-gray-500 font-medium">{label}</p>
    </div>
  );
}

function TimelineNode({ year, title, desc, icon: Icon }: any) {
  return (
    <div className="relative pt-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-white border-2 border-gray-100 shadow-sm flex items-center justify-center text-[#0052FF] z-10">
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-center">
        <p className="text-[#0052FF] font-bold text-sm mb-1">{year}</p>
        <h4 className="font-bold text-[#000d26] text-sm mb-2">{title}</h4>
        <p className="text-[11px] text-gray-500 leading-relaxed px-1">{desc}</p>
      </div>
    </div>
  );
}

function ValueCard({ icon: Icon, title, desc, color, bg }: any) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow group">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${bg} ${color} group-hover:scale-110 transition-transform`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-[#000d26] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}
