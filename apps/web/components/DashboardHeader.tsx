import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingCart, Bell, ChevronDown } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex-1 max-w-2xl flex items-center gap-4">
        {/* Mobile menu toggle would go here */}
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search for courses, lessons, resources..." 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-12 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052FF]/20 focus:border-[#0052FF] transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6 ml-4">
        {/* Cart */}
        <Link href="/cart" className="relative text-gray-500 hover:text-gray-900 transition">
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-1.5 -right-1.5 bg-[#0052FF] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
        </Link>
        
        {/* Notifications */}
        <button className="relative text-gray-500 hover:text-gray-900 transition">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-[#F8A328] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">5</span>
        </button>
        
        <div className="w-px h-8 bg-gray-200"></div>
        
        {/* User Profile */}
        <button className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-200">
             {/* Avatar Placeholder */}
             <div className="w-full h-full bg-[#0052FF]/10 flex items-center justify-center text-[#0052FF] font-bold">
               DA
             </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-[#000d26]">David A.</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 ml-1" />
        </button>
      </div>
    </header>
  );
}
