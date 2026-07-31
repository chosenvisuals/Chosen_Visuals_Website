import { Mail, Phone, MapPin, ArrowRight, Clock, MessageSquare, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 dark:bg-[#000d26] transition-colors duration-300 min-h-screen">
      
      {/* Header */}
      <section className="relative pt-32 pb-24 bg-[#000d26] text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://picsum.photos/seed/chosen21/800/600" alt="Office Background" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000d26] via-[#000d26]/80 to-[#000d26]/40" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl relative z-10">
          <p className="text-[#F8A328] font-bold text-sm tracking-widest uppercase mb-4">GET IN TOUCH</p>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">Let's Create Something <span className="text-[#0052FF]">Extraordinary.</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Whether you want to hire our agency, enroll in the academy, or partner with us, we're ready to collaborate with you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Contact Info (Takes 2 columns) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-[#0a1128] p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 h-full">
                <h2 className="text-3xl font-bold text-[#000d26] dark:text-white mb-8">Reach Out to Us</h2>
                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/30 text-[#F8A328] flex items-center justify-center shrink-0 border border-orange-100 dark:border-orange-900/50">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#000d26] dark:text-white mb-1">Our Headquarters</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">123 Innovation Drive,<br/>Creative District, Tech City.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-[#0052FF] dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/50">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#000d26] dark:text-white mb-1">Phone Number</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">+1 (234) 567-890<br/>Mon-Fri, 9am - 6pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 border border-purple-100 dark:border-purple-900/50">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#000d26] dark:text-white mb-1">Email Address</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">hello@chosenvisuals.com<br/>support@chosenvisuals.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                  <h4 className="font-bold text-[#000d26] dark:text-white mb-2 flex items-center gap-2"><MessageSquare className="w-4 h-4 text-[#0052FF] dark:text-blue-400" /> Are you a student?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">If you want to apply for the Academy, you don't need to fill out this contact form. Just go to our dedicated registration page.</p>
                  <a href="/register" className="text-[#0052FF] dark:text-blue-400 font-bold text-sm inline-flex items-center gap-2 hover:underline">
                    Go to Student Registration <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form (Takes 3 columns) */}
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-[#0a1128] p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
                <h3 className="text-3xl font-bold text-[#000d26] dark:text-white mb-2">Send a Message</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8">We typically reply within 24 hours.</p>
                <form className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#000d26] dark:text-white">First Name</label>
                      <input type="text" className="w-full bg-gray-50 dark:bg-[#000d26] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all text-gray-900 dark:text-white" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#000d26] dark:text-white">Last Name</label>
                      <input type="text" className="w-full bg-gray-50 dark:bg-[#000d26] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all text-gray-900 dark:text-white" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#000d26] dark:text-white">Email Address</label>
                      <input type="email" className="w-full bg-gray-50 dark:bg-[#000d26] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all text-gray-900 dark:text-white" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#000d26] dark:text-white">Phone Number (Optional)</label>
                      <input type="tel" className="w-full bg-gray-50 dark:bg-[#000d26] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all text-gray-900 dark:text-white" placeholder="+1 (234) 567-890" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#000d26] dark:text-white">What are you interested in?</label>
                    <select className="w-full bg-gray-50 dark:bg-[#000d26] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all text-gray-900 dark:text-white">
                      <option>Creative Agency - Branding & Design</option>
                      <option>Creative Agency - Event Media Coverage</option>
                      <option>Creative Agency - Printing</option>
                      <option>Academy - Corporate Training</option>
                      <option>Partnership / General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#000d26] dark:text-white">Message</label>
                    <textarea rows={6} className="w-full bg-gray-50 dark:bg-[#000d26] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all resize-none text-gray-900 dark:text-white" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="button" className="w-full bg-[#0052FF] text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition shadow-lg mt-4 text-lg">
                    Submit Message
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-200 dark:bg-gray-900 h-[500px] relative">
        {/* Placeholder for actual Google Maps iframe */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 text-white">
          <MapPin className="w-12 h-12 text-[#F8A328] mb-4" />
          <h3 className="text-2xl font-bold mb-2">Interactive Map Area</h3>
          <p className="text-gray-400 mb-6">Google Maps integration goes here.</p>
          <a href="#" className="flex items-center gap-2 text-sm font-bold hover:text-[#F8A328] transition">Open in Google Maps <ExternalLink className="w-4 h-4" /></a>
        </div>
      </section>

    </div>
  );
}
