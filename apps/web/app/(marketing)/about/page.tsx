import Image from "next/image";
import { CheckCircle, Shield, Target, Zap, Heart } from "lucide-react";

export default function AboutPage() {
  const values = [
    { title: "Innovation", icon: Zap, desc: "We constantly push the boundaries of creativity and technology." },
    { title: "Excellence", icon: Target, desc: "We deliver nothing short of premium, world-class quality." },
    { title: "Impact", icon: Heart, desc: "We are driven by the desire to empower individuals and brands." },
    { title: "Integrity", icon: Shield, desc: "We build trust through transparency and honest collaboration." },
  ];

  const team = [
    { name: "John Doe", role: "Founder & Creative Director", image: "https://picsum.photos/seed/chosen1/800/600" },
    { name: "Jane Smith", role: "Head of Academy", image: "https://picsum.photos/seed/chosen2/800/600" },
    { name: "Michael Johnson", role: "Chief Operations Officer", image: "https://picsum.photos/seed/chosen3/800/600" },
    { name: "Sarah Williams", role: "Lead Strategist", image: "https://picsum.photos/seed/chosen4/800/600" },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#000d26] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="https://picsum.photos/seed/chosen5/800/600" alt="Team Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000d26] via-[#000d26]/80 to-transparent" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative z-10 text-center">
          <p className="text-[#F8A328] font-bold text-sm tracking-widest uppercase mb-4">OUR STORY</p>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">We Are Chosen <span className="text-[#0052FF]">Visuals.</span></h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A creative media and technology brand dedicated to helping individuals and organizations communicate effectively through creativity, innovation, and education.
          </p>
        </div>
      </section>

      {/* The Origin Story */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="h-[500px] rounded-[3rem] overflow-hidden relative shadow-2xl">
              <Image src="https://picsum.photos/seed/chosen6/800/600" alt="Team meeting" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#000d26] mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Chosen Visuals was founded on a simple premise: great design and technology should be accessible, and the people creating it should be empowered. 
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                What started as a small design agency has evolved into a comprehensive creative powerhouse that not only delivers world-class visual solutions for brands but also trains the next generation of creatives through our Academy and community initiatives.
              </p>
              <div className="bg-gray-50 border-l-4 border-[#0052FF] p-6 rounded-r-2xl">
                <p className="font-bold text-[#000d26] text-lg italic">
                  "Our goal is to build an ecosystem where creativity meets technology, and where passion translates into impact."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000d26]">Our Core Values</h2>
            <p className="text-gray-500 mt-2 text-lg">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#0052FF] flex items-center justify-center mx-auto mb-6 border border-blue-100">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#000d26] mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#000d26]">Meet The Leadership</h2>
            <p className="text-gray-500 mt-2 text-lg">The visionaries driving Chosen Visuals forward.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-all duration-300">
                  <Image src={member.image} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-[#000d26]">{member.name}</h3>
                <p className="text-[#0052FF] font-medium mt-1 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Gallery */}
      <section className="py-24 bg-[#000d26] text-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-12">Life at Chosen Visuals</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden">
              <Image src="https://picsum.photos/seed/chosen7/800/600" alt="Culture" fill className="object-cover hover:scale-105 transition duration-700" />
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <Image src="https://picsum.photos/seed/chosen8/800/600" alt="Culture" fill className="object-cover hover:scale-105 transition duration-700" />
            </div>
            <div className="relative rounded-3xl overflow-hidden">
              <Image src="https://picsum.photos/seed/chosen9/800/600" alt="Culture" fill className="object-cover hover:scale-105 transition duration-700" />
            </div>
            <div className="col-span-2 relative rounded-3xl overflow-hidden">
              <Image src="https://picsum.photos/seed/chosen10/800/600" alt="Culture" fill className="object-cover hover:scale-105 transition duration-700" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
