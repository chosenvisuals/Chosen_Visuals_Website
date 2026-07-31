"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    else window.location.href = "/dashboard";
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="flex h-screen w-full bg-white dark:bg-[#000d26]">
      {/* Left Side - Branding (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-[45%] p-12 flex-col justify-between relative overflow-hidden">
        {/* The new AI generated image as a background */}
        <Image 
          src="/login-bg.png" 
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
            Unlock your creative potential today.
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Join thousands of students mastering UI/UX Design, Motion Graphics, and Video Production with industry experts.
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

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-[55%] flex items-center justify-center p-8 sm:p-12 xl:p-20">
        <div className="w-full max-w-[440px]">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-navy dark:text-white mb-3">Welcome back</h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">Sign in to continue your learning journey.</p>
          </div>
          
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-xl mb-6 text-sm flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              {error}
            </div>
          )}

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border-2 border-brand-border dark:border-gray-800 py-3.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all font-medium text-brand-navy dark:text-white mb-8 text-base shadow-sm"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-px bg-brand-border dark:bg-gray-800 flex-1"></div>
            <span className="text-sm text-gray-400 font-medium px-2">or sign in with email</span>
            <div className="h-px bg-brand-border dark:bg-gray-800 flex-1"></div>
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-brand-navy dark:text-gray-200 mb-2">Email Address</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#021845] border border-brand-border dark:border-gray-800 rounded-xl focus:bg-white dark:focus:bg-[#000d26] focus:ring-2 focus:ring-brand-blue/50 dark:focus:ring-brand-blue/30 outline-none transition-all dark:text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-brand-navy dark:text-gray-200">Password</label>
                <Link href="/forgot-password" className="text-sm text-brand-blue hover:underline font-medium">Forgot password?</Link>
              </div>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-3.5 bg-gray-50 dark:bg-[#021845] border border-brand-border dark:border-gray-800 rounded-xl focus:bg-white dark:focus:bg-[#000d26] focus:ring-2 focus:ring-brand-blue/50 dark:focus:ring-brand-blue/30 outline-none transition-all dark:text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-blue text-white py-4 rounded-xl hover:bg-brand-blue/90 transition-all font-semibold shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4 text-base"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-base">
            Don't have an account? <Link href="/register" className="text-brand-blue font-semibold hover:underline">Sign up for free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
