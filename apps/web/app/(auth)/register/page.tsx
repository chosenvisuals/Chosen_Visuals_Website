"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const supabase = createClient();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleEmailSignUp = async (e: React.FormEvent) => {
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
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="flex h-full w-full bg-white">
      {/* Left Side - Branding (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-[45%] p-12 flex-col justify-between relative overflow-hidden">
        {/* The new AI generated image as a background */}
        <Image 
          src="/signup-bg.png" 
          alt="Creative Workspace" 
          fill
          className="object-cover object-center absolute inset-0 z-0"
          priority
        />
        
        {/* Soft gradient overlay for text readability */}
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

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-[55%] flex items-center justify-center p-8 sm:p-12 xl:p-20 overflow-y-auto">
        <div className="w-full max-w-[440px] my-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-navy mb-3">Create an account</h2>
            <p className="text-gray-500 text-lg">Start your creative journey with Chosen Visuals today.</p>
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-sm flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              {error}
            </div>
          )}

          {success ? (
            <div className="bg-green-50 text-green-700 p-8 rounded-2xl border border-green-100 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Check your email!</h3>
              <p className="text-sm mb-6">We've sent a verification link to <strong>{email}</strong>. Please click the link to activate your account.</p>
              <Link href="/login" className="block w-full bg-brand-blue text-white py-3.5 rounded-xl font-semibold hover:bg-brand-blue/90 transition-all shadow-md">
                Return to Login
              </Link>
            </div>
          ) : (
            <>
              <button
                onClick={handleGoogleSignUp}
                className="w-full flex items-center justify-center gap-3 border-2 border-brand-border py-3.5 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all font-medium text-brand-navy mb-8 text-base shadow-sm"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                Sign up with Google
              </button>

              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="h-px bg-brand-border flex-1"></div>
                <span className="text-sm text-gray-400 font-medium px-2">or sign up with email</span>
                <div className="h-px bg-brand-border flex-1"></div>
              </div>

              <form onSubmit={handleEmailSignUp} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">First Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-brand-border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">Last Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      className="w-full px-4 py-3.5 bg-gray-50 border border-brand-border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-brand-border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-2">Password</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    minLength={8}
                    className="w-full px-4 py-3.5 bg-gray-50 border border-brand-border rounded-xl focus:bg-white focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="text-xs text-gray-400 mt-2 ml-1">Must be at least 8 characters.</p>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-blue text-white py-4 rounded-xl hover:bg-brand-blue/90 transition-all font-semibold shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4 text-base"
                >
                  {loading ? "Creating account..." : "Create Account"}
                </button>
              </form>

              <p className="text-center text-gray-500 mt-10 text-base">
                Already have an account? <Link href="/login" className="text-brand-blue font-semibold hover:underline">Sign In here</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
