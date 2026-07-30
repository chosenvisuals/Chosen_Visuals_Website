import Image from "next/image";
import Link from "next/link";
import { 
  Search, Play, CheckCircle, ArrowRight, Layout, Code, Shield, Cloud, 
  LineChart, Bot, Video, Megaphone
} from "lucide-react";

export default function AcademyLandingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-[#0052FF] font-bold text-sm tracking-widest uppercase mb-4">
                <div className="w-2 h-2 rounded-full bg-[#0052FF]" />
                Academy
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-[#000d26] leading-tight mb-6 tracking-tight">
                Your Future <br/><span className="text-[#0052FF]">Starts</span> Here.
              </h1>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-md">
                Explore schools, discover career paths and gain in-demand skills with hands-on learning from industry experts.
              </p>
              
              {/* Search Bar */}
              <div className="relative flex items-center w-full max-w-md mb-10 shadow-sm">
                <Search className="absolute left-4 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="What would you like to learn?" 
                  className="w-full pl-12 pr-14 py-4 rounded-full border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF]"
                />
                <button className="absolute right-2 top-2 bottom-2 aspect-square bg-[#0052FF] text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-4 text-sm font-semibold text-gray-600">
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0052FF]" /> Expert Instructors</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0052FF]" /> Hands-on Projects</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0052FF]" /> Industry Recognized</div>
                <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#0052FF]" /> Flexible Learning</div>
              </div>
            </div>

            {/* Right Column (Hero Image) */}
            <div className="relative h-[500px] lg:h-[650px] w-full rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl">
              <Image 
                src="/images/academy-hero.png" 
                alt="Student learning" 
                fill 
                className="object-cover"
                priority
              />
              {/* Floating Watch Video Button */}
              <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 shadow-xl border border-white/20 cursor-pointer hover:-translate-y-1 transition-transform">
                <button className="w-12 h-12 bg-[#0052FF] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
                  <Play className="w-5 h-5 ml-1" />
                </button>
                <div>
                  <p className="font-bold text-[#000d26]">Watch Video</p>
                  <p className="text-xs text-gray-500">See how we empower creatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Career Paths */}
      <section className="py-16 bg-gray-50/50 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-[#0052FF] font-bold text-xs tracking-widest uppercase mb-2">POPULAR CAREER PATHS</p>
              <h2 className="text-3xl font-bold text-[#000d26] max-w-sm">Choose Your Path. We'll Guide You.</h2>
              <p className="text-gray-500 mt-2 text-sm">Follow a proven learning path and build in-demand skills step by step.</p>
            </div>
            <Link href="/academy/paths" className="text-[#0052FF] font-bold flex items-center gap-1 hover:gap-2 transition-all">
              View all career paths <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PathCard icon={Layout} color="text-purple-600" bgColor="bg-purple-100" title="UI/UX Designer" steps={8} />
            <PathCard icon={Code} color="text-blue-600" bgColor="bg-blue-100" title="Full-Stack Developer" steps={9} />
            <PathCard icon={Shield} color="text-green-600" bgColor="bg-green-100" title="Cybersecurity Analyst" steps={10} />
            <PathCard icon={LineChart} color="text-orange-600" bgColor="bg-orange-100" title="Data Analyst" steps={8} />
          </div>
        </div>
      </section>

      {/* Our Schools */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-[#0052FF] font-bold text-sm tracking-widest uppercase">OUR SCHOOLS</h2>
              <p className="text-gray-500 text-sm hidden md:block">Explore our schools and start your journey today.</p>
            </div>
            <Link href="/academy/schools" className="text-[#0052FF] font-bold flex items-center gap-1 hover:gap-2 transition-all text-sm">
              View all schools <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <SchoolCard icon={Layout} color="text-pink-600" title="Design" courses={12} />
            <SchoolCard icon={Code} color="text-blue-600" title="Programming" courses={15} />
            <SchoolCard icon={Shield} color="text-green-600" title="Cybersecurity" courses={10} />
            <SchoolCard icon={Cloud} color="text-cyan-600" title="Cloud Engineering" courses={8} />
            <SchoolCard icon={LineChart} color="text-orange-500" title="Data Analytics" courses={9} />
            <SchoolCard icon={Bot} color="text-purple-600" title="Artificial Intelligence" courses={7} />
            <SchoolCard icon={Video} color="text-red-500" title="Media Production" courses={11} />
            <SchoolCard icon={Megaphone} color="text-yellow-600" title="Digital Marketing" courses={8} />
          </div>
        </div>
      </section>

      {/* Popular Courses & Learning Path Preview */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left: Popular Courses */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-[#0052FF] font-bold text-xs tracking-widest uppercase mb-1">POPULAR COURSES</h2>
                  <p className="text-gray-900 font-bold">Most loved by our students</p>
                </div>
                <Link href="/my-courses" className="text-[#0052FF] font-bold flex items-center gap-1 text-xs hover:gap-2 transition-all">
                  View all <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="space-y-4">
                <CourseListItem title="UI Design with Figma" level="Beginner" hours={12} rating="4.8" reviews={320} image="/images/course_ui_ux_1785425281646.png" />
                <CourseListItem title="Python for Data Analysis" level="Intermediate" hours={18} rating="4.9" reviews={410} image="/images/course_brand_1785425303878.png" />
                <CourseListItem title="Video Editing with Premiere" level="Beginner" hours={10} rating="4.7" reviews={210} image="/images/course_video_1785425292925.png" />
              </div>
              
              <div className="mt-6 text-center">
                <Link href="/my-courses" className="text-[#0052FF] font-bold text-sm hover:underline">
                  View all courses →
                </Link>
              </div>
            </div>

            {/* Right: Learning Path Preview */}
            <div className="lg:col-span-2">
               <h2 className="text-[#0052FF] font-bold text-xs tracking-widest uppercase mb-1">LEARNING PATH PREVIEW</h2>
               <h3 className="text-2xl font-bold text-[#000d26] mb-8">UI/UX Design Career Path</h3>

               <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-12">
                 {/* Timeline */}
                 <div className="flex-1 relative">
                   <div className="absolute left-[19px] top-4 bottom-12 w-px border-l-2 border-dashed border-gray-200" />
                   
                   <div className="space-y-8">
                     <TimelineStep number={1} title="Introduction to Design" desc="Learn the basics of design principles." active />
                     <TimelineStep number={2} title="Graphic Design" desc="Master design tools and visual communication." active />
                     <TimelineStep number={3} title="Figma Essentials" desc="Design modern UI with Figma." active />
                     <TimelineStep number={4} title="UI Design" desc="Create beautiful user interfaces." active />
                     <TimelineStep number={5} title="UX Research" desc="Understand users and solve problems." />
                   </div>
                   
                   <Link href="/register" className="mt-8 w-full py-3 bg-[#0052FF] text-white font-bold rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                     View Full Path →
                   </Link>
                 </div>

                 {/* Path Summary Card */}
                 <div className="w-full md:w-64 flex-shrink-0">
                   <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center">
                     <p className="text-xs text-gray-500 font-bold mb-1">Become a</p>
                     <h4 className="font-bold text-[#000d26] text-lg mb-4">UI/UX Designer</h4>
                     <div className="h-32 w-full bg-[#0052FF]/10 rounded-lg mb-6 flex items-center justify-center text-[#0052FF]">
                       <Layout className="w-12 h-12" />
                     </div>
                     <div className="space-y-3 text-left">
                       <div className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-gray-400"/> 8 Steps</div>
                       <div className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-gray-400"/> 12 Projects</div>
                       <div className="flex items-center gap-3 text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-gray-400"/> 4-6 Months</div>
                     </div>
                     <Link href="/register" className="mt-6 block text-[#0052FF] font-bold text-sm hover:underline">
                       Start this path →
                     </Link>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
           <div className="bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-gray-100">
             
             {/* Left Stats */}
             <div className="flex-1 p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-100">
               <h2 className="text-[#0052FF] font-bold text-xs tracking-widest uppercase mb-4">WHAT OUR STUDENTS SAY</h2>
               <p className="text-gray-600 italic text-lg leading-relaxed mb-8">
                 "Chosen Visuals changed my life! The instructors are amazing and the hands-on projects helped me secure a job as a UI designer."
               </p>
               <div className="flex items-center gap-4 mb-12">
                 <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                   <Image src="/logo.png" alt="Student" width={48} height={48} className="object-cover" />
                 </div>
                 <div>
                   <p className="font-bold text-[#000d26]">Mercy Jonathan</p>
                   <p className="text-sm text-gray-500">UI/UX Designer at Paystack</p>
                 </div>
               </div>

               <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                 <div>
                   <p className="text-3xl font-bold text-[#000d26]">10K+</p>
                   <p className="text-xs text-gray-500 font-medium mt-1">Students Empowered</p>
                 </div>
                 <div>
                   <p className="text-3xl font-bold text-[#000d26]">500+</p>
                   <p className="text-xs text-gray-500 font-medium mt-1">Projects Completed</p>
                 </div>
                 <div>
                   <p className="text-3xl font-bold text-[#000d26]">20+</p>
                   <p className="text-xs text-gray-500 font-medium mt-1">Expert Instructors</p>
                 </div>
               </div>
             </div>

             {/* Right CTA */}
             <div className="w-full lg:w-[450px] bg-gray-50 p-12 lg:p-16 flex flex-col justify-center">
               <h3 className="text-2xl font-bold text-[#000d26] mb-4">Ready to start your journey?</h3>
               <p className="text-gray-500 mb-8 leading-relaxed">
                 Join thousands of students building successful careers in tech and creative industry.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <Link href="/register" className="flex-1 bg-[#0052FF] text-white font-bold py-3 px-6 rounded-lg text-center hover:bg-blue-700 transition">
                   Apply Now →
                 </Link>
                 <button className="flex-1 bg-white border border-gray-200 text-[#000d26] font-bold py-3 px-6 rounded-lg text-center hover:bg-gray-50 transition">
                   Speak to Advisor
                 </button>
               </div>
             </div>

           </div>
        </div>
      </section>
    </div>
  );
}

// Subcomponents

function PathCard({ icon: Icon, color, bgColor, title, steps }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group cursor-pointer flex flex-col">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgColor} ${color} mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6" />
      </div>
      <p className="text-xs text-gray-500 font-semibold mb-1">Become a</p>
      <h3 className="font-bold text-[#000d26] text-lg mb-6">{title}</h3>
      
      <div className="mt-auto">
        <p className="text-xs text-gray-500 mb-2">{steps} Steps</p>
        <div className="flex items-center gap-1">
          {[1,2,3,4].map(i => <div key={i} className={`h-1.5 flex-1 rounded-full ${i===1 ? bgColor.replace('100', '500') : 'bg-gray-100'}`} />)}
          <ArrowRight className={`w-4 h-4 ml-2 ${color}`} />
        </div>
      </div>
    </div>
  );
}

function SchoolCard({ icon: Icon, color, title, courses }: any) {
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-white transition cursor-pointer border border-transparent hover:border-gray-100 hover:shadow-md group">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gray-50 mb-4 shadow-sm border border-gray-100 ${color} group-hover:bg-white transition-colors`}>
        <Icon className="w-7 h-7" />
      </div>
      <p className="font-bold text-[#000d26] text-xs leading-tight mb-1">School of <br/>{title}</p>
      <p className="text-[10px] text-gray-500 font-medium">{courses} Courses →</p>
    </div>
  );
}

function CourseListItem({ title, level, hours, rating, reviews, image }: any) {
  return (
    <div className="flex gap-4 p-3 rounded-xl hover:bg-white transition cursor-pointer group border border-transparent hover:border-gray-200 hover:shadow-sm">
      <div className="w-24 h-16 rounded-lg bg-gray-200 relative overflow-hidden flex-shrink-0">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition" />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-center">
        <h4 className="font-bold text-[#000d26] text-sm truncate mb-1">{title}</h4>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold">{level}</span>
          <span>{hours} Hours</span>
        </div>
      </div>
    </div>
  );
}

function TimelineStep({ number, title, desc, active }: any) {
  return (
    <div className="relative flex gap-6">
      <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 flex-shrink-0 ${
        active 
        ? 'bg-[#0052FF]/10 border-[#0052FF] text-[#0052FF]' 
        : 'bg-white border-gray-200 text-gray-400'
      }`}>
        {active ? <CheckCircle className="w-5 h-5" /> : number}
      </div>
      <div className="pt-1 flex-1">
        <h4 className="font-bold text-[#000d26] text-sm">{number}. {title}</h4>
        <p className="text-xs text-gray-500 mt-1">{desc}</p>
      </div>
    </div>
  );
}
