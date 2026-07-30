"use client";

import Image from "next/image";
import Link from "next/link";
import { Lock, Mail, ArrowRight } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-[#000d26] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0052FF] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none" />
      
      <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 relative z-10 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-50 text-[#0052FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-[#000d26] mb-2">Admin Portal</h1>
          <p className="text-gray-500 text-sm">Secure access for staff and instructors.</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-[#000d26]">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all" placeholder="admin@chosenvisuals.com" />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-[#000d26]">Password</label>
              <Link href="#" className="text-sm font-bold text-[#0052FF] hover:underline">Forgot?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input type="password" className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all" placeholder="••••••••" />
            </div>
          </div>

          <button type="button" className="w-full bg-[#0052FF] text-white font-bold py-4 rounded-xl hover:bg-blue-600 transition shadow-lg flex items-center justify-center gap-2 text-lg group">
            Authenticate <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <Link href="/" className="text-sm font-bold text-gray-500 hover:text-[#000d26] transition-colors">
            ← Back to Main Site
          </Link>
        </div>
      </div>
    </div>
  );
}
