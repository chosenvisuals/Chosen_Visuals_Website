"use client";

import Image from "next/image";
import Link from "next/link";
import { Paintbrush, Printer, MonitorPlay, Camera, CheckCircle, ArrowRight, Lightbulb, PenTool, Rocket, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "How long does a branding project take?", a: "A standard branding project typically takes 3-4 weeks from discovery to final delivery, depending on the complexity." },
    { q: "Do you offer custom pricing packages?", a: "Yes! While we have standard tiers, we can tailor a package specifically to your project's unique requirements and budget." },
    { q: "Can you travel for event media coverage?", a: "Absolutely. Our media team covers events nationwide and internationally. Travel and accommodation fees will be included in the custom quote." },
    { q: "Do I own the rights to the designs?", a: "Yes, upon final payment, full copyright and ownership of the final design files are transferred to you." }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#000d26] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="https://picsum.photos/seed/chosen38/800/600" alt="Services Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000d26]/90 via-[#000d26]/80 to-[#000d26]" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10 text-center">
          <p className="text-[#F8A328] font-bold text-sm tracking-widest uppercase mb-4">OUR SERVICES</p>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">World-Class Creative <br/> <span className="text-[#0052FF]">Solutions.</span></h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Elevate your brand with premium design, cutting-edge production, and cinematic media coverage. We don't just create; we inspire.
          </p>
          <Link href="/contact" className="inline-flex bg-[#F8A328] text-[#000d26] font-bold py-4 px-10 rounded-xl hover:bg-orange-400 transition">
            Start a Project with Us
          </Link>
        </div>
      </section>

      {/* Services Process */}
      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#000d26]">How We Work</h2>
            <p className="text-gray-500 mt-2">A proven process that guarantees excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-[#0052FF] flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-200">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#000d26] mb-3">1. Discovery & Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We sit down with you to deeply understand your brand, your audience, and your core objectives before touching any software.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 text-[#F8A328] flex items-center justify-center mx-auto mb-6 shadow-sm border border-orange-200">
                <PenTool className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#000d26] mb-3">2. Creative Execution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Our world-class team of designers, videographers, and strategists bring the vision to life with uncompromising quality.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-6 shadow-sm border border-purple-200">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#000d26] mb-3">3. Delivery & Impact</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We deliver the final assets on time, ensuring they meet the highest industry standards and achieve your desired results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl space-y-24">
          
          {/* Service 1: Branding */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0052FF] flex items-center justify-center mb-6 border border-blue-100">
                <Paintbrush className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-[#000d26] mb-4">Branding & Graphic Design</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Your brand is more than just a logo. It’s an experience. We craft compelling visual identities that resonate with your audience and communicate your core values clearly.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm font-bold text-gray-700"><CheckCircle className="w-5 h-5 text-[#0052FF]" /> Logo & Identity Design</li>
                <li className="flex items-center gap-3 text-sm font-bold text-gray-700"><CheckCircle className="w-5 h-5 text-[#0052FF]" /> Brand Guidelines</li>
                <li className="flex items-center gap-3 text-sm font-bold text-gray-700"><CheckCircle className="w-5 h-5 text-[#0052FF]" /> Marketing & Social Media Graphics</li>
              </ul>
              <Link href="/contact" className="text-[#0052FF] font-bold hover:underline inline-flex items-center gap-2">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 h-[450px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-2xl border-4 border-gray-50">
              <Image src="https://picsum.photos/seed/chosen39/800/600" alt="Branding" fill className="object-cover" />
            </div>
          </div>

          {/* Service 2: Printing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[450px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-2xl border-4 border-gray-50">
              <Image src="https://picsum.photos/seed/chosen40/800/600" alt="Printing" fill className="object-cover" />
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#F8A328] flex items-center justify-center mb-6 border border-orange-100">
                <Printer className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-[#000d26] mb-4">Printing & Production</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Bring your digital ideas into the physical world with our premium printing services. We ensure that every material represents the high quality of your brand.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm font-bold text-gray-700"><CheckCircle className="w-5 h-5 text-[#F8A328]" /> Large Format Banners & Backdrops</li>
                <li className="flex items-center gap-3 text-sm font-bold text-gray-700"><CheckCircle className="w-5 h-5 text-[#F8A328]" /> Business Cards & ID Cards</li>
                <li className="flex items-center gap-3 text-sm font-bold text-gray-700"><CheckCircle className="w-5 h-5 text-[#F8A328]" /> Custom Branded Merchandise</li>
              </ul>
              <Link href="/contact" className="text-[#F8A328] font-bold hover:underline inline-flex items-center gap-2">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Service 3: Event Visuals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 border border-purple-100">
                <MonitorPlay className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-[#000d26] mb-4">Stage & Event Visual Design</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Transform your events into immersive experiences. We provide high-end visual assets that captivate audiences and elevate the atmosphere of any stage.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm font-bold text-gray-700"><CheckCircle className="w-5 h-5 text-purple-600" /> LED Screen Visuals & Animations</li>
                <li className="flex items-center gap-3 text-sm font-bold text-gray-700"><CheckCircle className="w-5 h-5 text-purple-600" /> Conference & Summit Branding</li>
              </ul>
              <Link href="/contact" className="text-purple-600 font-bold hover:underline inline-flex items-center gap-2">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 lg:order-2 h-[450px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-2xl border-4 border-gray-50">
              <Image src="https://picsum.photos/seed/chosen41/800/600" alt="Event Visuals" fill className="object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-[#000d26] mb-4">Transparent Pricing</h2>
          <p className="text-gray-500 mb-16 text-lg max-w-2xl mx-auto">Choose a plan that works for your current scale. All packages are customizable during the discovery call.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Starter */}
            <div className="bg-white p-10 rounded-[2rem] border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#000d26] mb-2">Startup Branding</h3>
              <p className="text-gray-500 text-sm mb-6">Perfect for new businesses.</p>
              <div className="mb-8">
                <span className="text-4xl font-black text-[#000d26]">Custom Quote</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle className="w-5 h-5 text-[#0052FF]" /> Logo Design (2 Concepts)</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle className="w-5 h-5 text-[#0052FF]" /> Basic Brand Guidelines</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle className="w-5 h-5 text-[#0052FF]" /> Business Card Design</li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-gray-100 text-[#000d26] font-bold py-4 rounded-xl hover:bg-gray-200 transition">Get a Quote</Link>
            </div>
            
            {/* Pro */}
            <div className="bg-[#000d26] text-white p-10 rounded-[2rem] border border-[#0052FF] shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0052FF] text-white font-bold text-xs uppercase tracking-widest py-1.5 px-4 rounded-full">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">Corporate Identity</h3>
              <p className="text-gray-400 text-sm mb-6">For established companies.</p>
              <div className="mb-8">
                <span className="text-4xl font-black text-white">Custom Quote</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle className="w-5 h-5 text-[#0052FF]" /> Full Brand Identity System</li>
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle className="w-5 h-5 text-[#0052FF]" /> Social Media Templates</li>
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle className="w-5 h-5 text-[#0052FF]" /> Company Profile Design</li>
                <li className="flex items-center gap-3 text-sm text-gray-300"><CheckCircle className="w-5 h-5 text-[#0052FF]" /> Brand Strategy Workshop</li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-[#0052FF] text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition shadow-lg">Get a Quote</Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white p-10 rounded-[2rem] border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-[#000d26] mb-2">Mega Event Coverage</h3>
              <p className="text-gray-500 text-sm mb-6">Full-scale media production.</p>
              <div className="mb-8">
                <span className="text-4xl font-black text-[#000d26]">Custom Quote</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle className="w-5 h-5 text-[#F8A328]" /> 4+ Camera Setup</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle className="w-5 h-5 text-[#F8A328]" /> Live Drone Coverage</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle className="w-5 h-5 text-[#F8A328]" /> Live Streaming to Multi-platforms</li>
                <li className="flex items-center gap-3 text-sm text-gray-700"><CheckCircle className="w-5 h-5 text-[#F8A328]" /> Cinematic Aftermovie</li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-gray-100 text-[#000d26] font-bold py-4 rounded-xl hover:bg-gray-200 transition">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000d26]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition text-left"
                >
                  <span className="font-bold text-[#000d26] text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-6 bg-white text-gray-600 leading-relaxed border-t border-gray-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
