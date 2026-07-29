import React from "react";
import Image from "next/image";
import Link from "next/link";

export function DashboardHeader() {
  return (
    <header className="h-20 bg-white border-b border-brand-border flex items-center justify-between px-8 sticky top-0 z-40">
      <div className="flex-1 max-w-2xl flex items-center gap-4">
        {/* Mobile menu toggle would go here */}
        <div className="relative w-full">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input 
            type="text" 
            placeholder="Search for courses, lessons, resources..." 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-12 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6 ml-4">
        {/* Cart */}
        <Link href="/cart" className="relative text-gray-500 hover:text-brand-navy transition">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="absolute -top-1.5 -right-1.5 bg-brand-blue text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span>
        </Link>
        
        {/* Notifications */}
        <button className="relative text-gray-500 hover:text-brand-navy transition">
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-brand-orange text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">5</span>
        </button>
        
        <div className="w-px h-8 bg-gray-200"></div>
        
        {/* User Profile */}
        <button className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-200">
             {/* Placeholder Avatar */}
             <div className="w-full h-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold">
               DA
             </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-brand-navy">David A.</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
          <svg className="w-4 h-4 text-gray-400 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </header>
  );
}
