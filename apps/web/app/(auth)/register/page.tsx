"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const supabase = createClient();
  
  // -- State Management --
  const [step, setStep] = useState(1);
  
  // Step 1: Personal
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  
  // Step 2 & 3: Course Selection & Dynamic Qs
  const [selectedCourse, setSelectedCourse] = useState("");
  const [courseAnswers, setCourseAnswers] = useState<Record<string, string>>({});
  
  // Step 4: Background
  const [occupation, setOccupation] = useState("");
  const [whyJoin, setWhyJoin] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const COURSES = [
    { id: "ui-ux", title: "UI/UX Design", icon: "🎨", desc: "Master Figma & Web Design" },
    { id: "motion-graphics", title: "Motion Graphics", icon: "🎬", desc: "After Effects & Animation" },
    { id: "video-production", title: "Video Production", icon: "🎥", desc: "Premiere Pro & Shooting" },
    { id: "3d-animation", title: "3D Animation", icon: "🧊", desc: "Blender & Maya mastery" },
  ];

  const handleNextStep = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (step === 1 && (!firstName || !lastName || !email || !password)) return;
    if (step === 2 && !selectedCourse) return;
    setStep((s) => s + 1);
  };

  const handlePrevStep = () => {
    setStep((s) => s - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          phone,
          application_data: {
            course: selectedCourse,
            course_answers: courseAnswers,
            occupation,
            why_join: whyJoin
          }
        }
      }
    });
    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
    setLoading(false);
  };

  const handleGoogleSignUp = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  const handleDynamicAnswer = (key: string, val: string) => {
    setCourseAnswers(prev => ({ ...prev, [key]: val }));
  };

  return (
    <div className="flex h-screen w-full bg-white dark:bg-[#000d26]">
      {/* Left Side - Branding (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-[45%] p-12 flex-col justify-between relative overflow-hidden">
        <Image 
          src="/signup-bg.png" 
          alt="Creative Workspace" 
          fill
          className="object-cover object-center absolute inset-0 z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/70 to-brand-navy/40 z-0"></div>

        <div className="relative z-10 pt-4 mb-8">
          <Link href="/">
            <div className="inline-flex items-center justify-center px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl transition-transform hover:scale-105 duration-300">
              <Image src="/logo.png" alt="Chosen Visuals" width={320} height={100} priority className="h-16 lg:h-20 w-auto drop-shadow-lg" />
            </div>
          </Link>
        </div>

        <div className="relative z-10 max-w-md pb-12">
          <h1 className="text-4xl font-bold text-white leading-tight mb-6">
            Begin your creative journey today.
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Join a vibrant community of over 10,000 students and start mastering industry-leading design skills.
          </p>
          <div className="flex gap-8">
            <div>
              <p className="text-3xl font-bold text-white mb-1">10K+</p>
              <p className="text-sm text-gray-300 font-medium">Students</p>
            </div>
            <div className="w-px bg-white/20"></div>
            <div>
              <p className="text-3xl font-bold text-white mb-1">4.9</p>
              <p className="text-sm text-gray-300 font-medium">Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Multi-Step Sign Up Form */}
      <div className="w-full lg:w-[55%] flex items-center justify-center p-8 sm:p-12 xl:p-20 overflow-y-auto">
        <div className="w-full max-w-[500px] my-auto">
          
          {/* Header & Progress */}
          {!success && (
            <div className="mb-10">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-brand-navy dark:text-white mb-2">
                    {step === 1 && "Create an account"}
                    {step === 2 && "Choose your path"}
                    {step === 3 && "Course Details"}
                    {step === 4 && "Final Step"}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-base">
                    {step === 1 && "Start your creative journey with Chosen Visuals."}
                    {step === 2 && "Which program are you applying for?"}
                    {step === 3 && "Tell us a bit about your experience level."}
                    {step === 4 && "Just a few more details to complete your application."}
                  </p>
                </div>
                <span className="text-brand-blue font-bold text-sm bg-brand-blue/10 px-3 py-1 rounded-full">Step {step} of 4</span>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-brand-blue h-full transition-all duration-500 ease-out"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-xl mb-6 text-sm flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              {error}
            </div>
          )}

          {success ? (
            <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-8 rounded-2xl border border-green-100 dark:border-green-900/30 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Application Received!</h3>
              <p className="text-sm mb-6">We've sent a verification link to <strong>{email}</strong>. Please click the link to activate your account and access your dashboard.</p>
              <Link href="/login" className="block w-full bg-brand-blue text-white py-3.5 rounded-xl font-semibold hover:bg-brand-blue/90 transition-all shadow-md">
                Return to Login
              </Link>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* STEP 1 */}
              {step === 1 && (
                <form onSubmit={handleNextStep} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy dark:text-gray-200 mb-2">First Name</label>
                      <input type="text" required placeholder="John" className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#021845] border border-brand-border dark:border-gray-800 rounded-xl focus:bg-white dark:focus:bg-[#000d26] focus:ring-2 focus:ring-brand-blue/50 dark:focus:ring-brand-blue/30 outline-none transition-all dark:text-white" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy dark:text-gray-200 mb-2">Last Name</label>
                      <input type="text" required placeholder="Smith" className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#021845] border border-brand-border dark:border-gray-800 rounded-xl focus:bg-white dark:focus:bg-[#000d26] focus:ring-2 focus:ring-brand-blue/50 dark:focus:ring-brand-blue/30 outline-none transition-all dark:text-white" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy dark:text-gray-200 mb-2">Email Address</label>
                    <input type="email" required placeholder="you@example.com" className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#021845] border border-brand-border dark:border-gray-800 rounded-xl focus:bg-white dark:focus:bg-[#000d26] focus:ring-2 focus:ring-brand-blue/50 dark:focus:ring-brand-blue/30 outline-none transition-all dark:text-white" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy dark:text-gray-200 mb-2">Phone Number</label>
                    <input type="tel" required placeholder="+234 909 176 1957" className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#021845] border border-brand-border dark:border-gray-800 rounded-xl focus:bg-white dark:focus:bg-[#000d26] focus:ring-2 focus:ring-brand-blue/50 dark:focus:ring-brand-blue/30 outline-none transition-all dark:text-white" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy dark:text-gray-200 mb-2">Password</label>
                    <input type="password" required minLength={8} placeholder="••••••••" className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#021845] border border-brand-border dark:border-gray-800 rounded-xl focus:bg-white dark:focus:bg-[#000d26] focus:ring-2 focus:ring-brand-blue/50 dark:focus:ring-brand-blue/30 outline-none transition-all dark:text-white" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  
                  <button type="submit" className="w-full bg-brand-blue text-white py-4 rounded-xl hover:bg-brand-blue/90 transition-all font-semibold shadow-md mt-4">
                    Continue
                  </button>

                  <div className="flex items-center justify-center space-x-4 my-6">
                    <div className="h-px bg-brand-border dark:bg-gray-800 flex-1"></div>
                    <span className="text-sm text-gray-400 font-medium px-2">or</span>
                    <div className="h-px bg-brand-border dark:bg-gray-800 flex-1"></div>
                  </div>

                  <button type="button" onClick={handleGoogleSignUp} className="w-full flex items-center justify-center gap-3 border-2 border-brand-border dark:border-gray-800 py-3.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-medium text-brand-navy dark:text-white shadow-sm">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                    Sign up with Google
                  </button>
                  <p className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm">
                    Already have an account? <Link href="/login" className="text-brand-blue font-semibold hover:underline">Sign In here</Link>
                  </p>
                </form>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <form onSubmit={handleNextStep} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {COURSES.map(course => (
                      <div 
                        key={course.id}
                        onClick={() => setSelectedCourse(course.id)}
                        className={`cursor-pointer border-2 rounded-xl p-5 transition-all ${selectedCourse === course.id ? 'border-brand-blue bg-brand-blue/5' : 'border-brand-border dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-[#021845]'}`}
                      >
                        <div className="text-3xl mb-3">{course.icon}</div>
                        <h3 className="font-bold text-brand-navy dark:text-white mb-1">{course.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{course.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-6">
                    <button type="button" onClick={handlePrevStep} className="px-6 py-4 rounded-xl font-semibold border-2 border-brand-border dark:border-gray-800 text-brand-navy dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">Back</button>
                    <button type="submit" disabled={!selectedCourse} className="flex-1 bg-brand-blue text-white py-4 rounded-xl hover:bg-brand-blue/90 transition-all font-semibold shadow-md disabled:opacity-50">Next Step</button>
                  </div>
                </form>
              )}

              {/* STEP 3 - DYNAMIC FIELDS */}
              {step === 3 && (
                <form onSubmit={handleNextStep} className="space-y-5">
                  {selectedCourse === "ui-ux" && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-brand-navy dark:text-gray-200 mb-2">Do you have prior experience with Figma or Adobe XD?</label>
                        <select className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#021845] border border-brand-border dark:border-gray-800 rounded-xl focus:bg-white dark:focus:bg-[#000d26] focus:ring-2 focus:ring-brand-blue/50 outline-none dark:text-white" onChange={(e) => handleDynamicAnswer("figma_exp", e.target.value)} required>
                          <option value="">Select an option...</option>
                          <option value="none">No, I am a complete beginner</option>
                          <option value="some">Yes, I have played around with it</option>
                          <option value="pro">Yes, I use it professionally</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-brand-navy dark:text-gray-200 mb-2">Link to a design portfolio (Optional)</label>
                        <input type="url" placeholder="https://dribbble.com/..." className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#021845] border border-brand-border dark:border-gray-800 rounded-xl focus:bg-white dark:focus:bg-[#000d26] focus:ring-2 focus:ring-brand-blue/50 outline-none dark:text-white" onChange={(e) => handleDynamicAnswer("portfolio", e.target.value)} />
                      </div>
                    </>
                  )}

                  {(selectedCourse === "motion-graphics" || selectedCourse === "video-production") && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-brand-navy dark:text-gray-200 mb-2">What editing software are you most familiar with?</label>
                        <select className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#021845] border border-brand-border dark:border-gray-800 rounded-xl focus:bg-white dark:focus:bg-[#000d26] focus:ring-2 focus:ring-brand-blue/50 outline-none dark:text-white" onChange={(e) => handleDynamicAnswer("software", e.target.value)} required>
                          <option value="">Select an option...</option>
                          <option value="premiere">Adobe Premiere Pro</option>
                          <option value="after_effects">Adobe After Effects</option>
                          <option value="davinci">DaVinci Resolve</option>
                          <option value="capcut">CapCut / Mobile Editors</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-brand-navy dark:text-gray-200 mb-2">Link to a video you've edited (Optional)</label>
                        <input type="url" placeholder="https://youtube.com/..." className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#021845] border border-brand-border dark:border-gray-800 rounded-xl focus:bg-white dark:focus:bg-[#000d26] focus:ring-2 focus:ring-brand-blue/50 outline-none dark:text-white" onChange={(e) => handleDynamicAnswer("video_link", e.target.value)} />
                      </div>
                    </>
                  )}

                  {selectedCourse === "3d-animation" && (
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-brand-navy dark:text-gray-200 mb-2">Do you have a PC or Mac with a dedicated GPU?</label>
                        <select className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#021845] border border-brand-border dark:border-gray-800 rounded-xl focus:bg-white dark:focus:bg-[#000d26] focus:ring-2 focus:ring-brand-blue/50 outline-none dark:text-white" onChange={(e) => handleDynamicAnswer("has_gpu", e.target.value)} required>
                          <option value="">Select an option...</option>
                          <option value="yes">Yes, I have a powerful machine</option>
                          <option value="no">No, I have a standard laptop</option>
                          <option value="unsure">I'm not sure</option>
                        </select>
                        <p className="text-xs text-gray-500 mt-2">3D rendering requires adequate hardware.</p>
                      </div>
                    </>
                  )}

                  <div className="flex gap-4 pt-6">
                    <button type="button" onClick={handlePrevStep} className="px-6 py-4 rounded-xl font-semibold border-2 border-brand-border dark:border-gray-800 text-brand-navy dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">Back</button>
                    <button type="submit" className="flex-1 bg-brand-blue text-white py-4 rounded-xl hover:bg-brand-blue/90 transition-all font-semibold shadow-md">Next Step</button>
                  </div>
                </form>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy dark:text-gray-200 mb-2">Current Occupation / Status</label>
                    <select className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#021845] border border-brand-border dark:border-gray-800 rounded-xl focus:bg-white dark:focus:bg-[#000d26] focus:ring-2 focus:ring-brand-blue/50 outline-none dark:text-white" value={occupation} onChange={(e) => setOccupation(e.target.value)} required>
                      <option value="">Select your status...</option>
                      <option value="university">University Student</option>
                      <option value="employed">Employed (Full-time/Part-time)</option>
                      <option value="freelancer">Freelancer / Self-Employed</option>
                      <option value="seeking">Seeking Employment</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy dark:text-gray-200 mb-2">Why do you want to join this program?</label>
                    <textarea 
                      required 
                      placeholder="Tell us what you hope to achieve..." 
                      className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#021845] border border-brand-border dark:border-gray-800 rounded-xl focus:bg-white dark:focus:bg-[#000d26] focus:ring-2 focus:ring-brand-blue/50 outline-none min-h-[120px] resize-none dark:text-white" 
                      value={whyJoin} 
                      onChange={(e) => setWhyJoin(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <button type="button" disabled={loading} onClick={handlePrevStep} className="px-6 py-4 rounded-xl font-semibold border-2 border-brand-border dark:border-gray-800 text-brand-navy dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-all disabled:opacity-50">Back</button>
                    <button type="submit" disabled={loading} className="flex-1 bg-brand-blue text-white py-4 rounded-xl hover:bg-brand-blue/90 transition-all font-semibold shadow-md disabled:opacity-70 flex items-center justify-center">
                      {loading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      ) : "Submit Application"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
