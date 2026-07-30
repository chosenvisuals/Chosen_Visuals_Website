import Image from "next/image";
import Link from "next/link";
import { Search, Layout, Video, Camera, ArrowRight, Star, BookOpen, Clock, CheckCircle } from "lucide-react";

export default function CoursesPage() {
  const courses = [
    {
      title: "UI/UX Design Mastery",
      category: "Design",
      duration: "12 Weeks",
      level: "Beginner to Advanced",
      icon: Layout,
      color: "text-blue-600",
      bg: "bg-blue-100",
      image: "https://picsum.photos/seed/chosen11/800/600"
    },
    {
      title: "Motion Graphics & Animation",
      category: "Media",
      duration: "10 Weeks",
      level: "Intermediate",
      icon: Video,
      color: "text-purple-600",
      bg: "bg-purple-100",
      image: "https://picsum.photos/seed/chosen12/800/600"
    },
    {
      title: "Cinematic Video Production",
      category: "Media",
      duration: "8 Weeks",
      level: "Beginner",
      icon: Camera,
      color: "text-orange-500",
      bg: "bg-orange-100",
      image: "https://picsum.photos/seed/chosen13/800/600"
    },
    {
      title: "Brand Identity Design",
      category: "Design",
      duration: "6 Weeks",
      level: "Beginner",
      icon: Layout,
      color: "text-green-600",
      bg: "bg-green-100",
      image: "https://picsum.photos/seed/chosen14/800/600"
    }
  ];

  const instructors = [
    { name: "Sarah Jenkins", role: "Lead UI/UX Instructor", image: "https://picsum.photos/seed/chosen15/800/600" },
    { name: "Michael Obi", role: "Head of Video Production", image: "https://picsum.photos/seed/chosen16/800/600" },
    { name: "David Adeleke", role: "Brand Strategy Director", image: "https://picsum.photos/seed/chosen17/800/600" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-[#000d26] text-white text-center border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <Image src="https://picsum.photos/seed/chosen18/800/600" alt="Academy Background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000d26] via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10">
          <p className="text-[#F8A328] font-bold text-sm tracking-widest uppercase mb-4">THE ACADEMY</p>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">Master Your Craft. <br/><span className="text-[#0052FF]">Build Your Future.</span></h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Learn from industry experts who actively work in the field. Build real-world projects and launch your career in tech and creative media.
          </p>
          
          <div className="relative max-w-2xl mx-auto shadow-2xl">
            <input type="text" placeholder="Search for courses (e.g. UI/UX Design)" className="w-full bg-white text-[#000d26] font-medium placeholder-gray-500 px-6 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#0052FF]/30 transition-shadow text-lg" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#0052FF] text-white p-3 rounded-xl hover:bg-blue-600 transition">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-[#000d26]">Featured Programs</h2>
              <p className="text-gray-500 mt-2 text-lg">Next cohort starts soon. Limited seats available.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-6 py-3 bg-[#000d26] text-white rounded-xl font-bold text-sm shadow-md">All</button>
              <button className="px-6 py-3 bg-white text-gray-600 border border-gray-200 rounded-xl font-bold text-sm hover:bg-gray-50 transition">Design</button>
              <button className="px-6 py-3 bg-white text-gray-600 border border-gray-200 rounded-xl font-bold text-sm hover:bg-gray-50 transition">Media</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col sm:flex-row gap-8 group">
                <div className="w-full sm:w-56 h-56 rounded-2xl overflow-hidden relative shrink-0 shadow-inner">
                  <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#000d26] shadow-sm">
                    {course.category}
                  </div>
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg"><Clock className="w-3 h-3" /> {course.duration}</span>
                    <span className="flex items-center gap-1 text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg"><BookOpen className="w-3 h-3" /> {course.level}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#000d26] mb-3 group-hover:text-[#0052FF] transition-colors">{course.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    Master the fundamentals and advanced concepts. This comprehensive program is designed to take you from a beginner to a highly sought-after professional in the creative industry.
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 text-[#F8A328] fill-[#F8A328]" />)}
                      <span className="text-xs font-bold text-gray-600 ml-1">4.9</span>
                    </div>
                    {/* Replaced generic enroll with Curriculum Preview Modal logic placeholder */}
                    <button className="text-[#0052FF] font-bold text-sm hover:underline">View Curriculum</button>
                    <Link href="/register" className="bg-[#000d26] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#0052FF] transition-colors flex items-center gap-2 shadow-md">
                      Enroll <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Payment Plans */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-[#000d26] mb-4">Invest in Your Future</h2>
          <p className="text-gray-500 text-lg mb-16 max-w-2xl mx-auto">We offer flexible payment plans so you can focus on learning.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-200">
              <h3 className="text-2xl font-bold text-[#000d26] mb-2">Pay Upfront</h3>
              <p className="text-gray-500 text-sm mb-6">Best value.</p>
              <div className="mb-6"><span className="text-5xl font-black text-[#000d26]">$500</span></div>
              <ul className="space-y-4 mb-8 text-left">
                <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" /> Save 15% on total tuition</li>
                <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><CheckCircle className="w-5 h-5 text-green-500" /> Lifetime access to materials</li>
              </ul>
              <Link href="/register" className="block w-full bg-[#000d26] text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition">Enroll Now</Link>
            </div>
            <div className="bg-blue-50 p-10 rounded-[2rem] border border-blue-200">
               <div className="bg-[#0052FF] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">Flexible Option</div>
              <h3 className="text-2xl font-bold text-[#000d26] mb-2">Installments</h3>
              <p className="text-gray-500 text-sm mb-6">Pay as you learn.</p>
              <div className="mb-6"><span className="text-5xl font-black text-[#000d26]">$200</span><span className="text-gray-500">/mo for 3 months</span></div>
              <ul className="space-y-4 mb-8 text-left">
                <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><CheckCircle className="w-5 h-5 text-[#0052FF]" /> No hidden fees</li>
                <li className="flex items-center gap-3 text-sm font-medium text-gray-700"><CheckCircle className="w-5 h-5 text-[#0052FF]" /> Pause payments if you pause the course</li>
              </ul>
              <Link href="/register" className="block w-full bg-[#0052FF] text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000d26] mb-4">Learn From The Best</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Our instructors are active industry professionals who bring real-world experience and insights directly into the classroom.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 relative border-4 border-white shadow-lg">
                  <Image src={instructor.image} alt={instructor.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#000d26] mb-1">{instructor.name}</h3>
                <p className="text-[#0052FF] font-semibold text-sm mb-4">{instructor.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  With over 7 years of industry experience working with top global brands, they bring a wealth of practical knowledge to every class.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="bg-[#000d26] rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
            <h3 className="text-[#F8A328] font-bold text-sm tracking-widest uppercase mb-8">STUDENT SUCCESS</h3>
            <h2 className="text-3xl font-medium text-white mb-10 leading-relaxed max-w-3xl mx-auto">
              "Before the UI/UX course, I had zero design experience. The curriculum was so practical that my capstone project actually got me hired at a top agency before I even graduated."
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden relative border-2 border-gray-700">
                <Image src="https://picsum.photos/seed/chosen19/800/600" alt="Student" fill className="object-cover" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white">Amara Okafor</p>
                <p className="text-sm text-gray-400">Product Designer @ Flutterwave</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
