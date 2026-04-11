"use client";

import { Bell, HeartPulse, HelpCircle } from "lucide-react";
import Link from "next/link";

const navLinks = ["My Dashboard", "Schedule", "History"];

export default function TopNav() {
  return (
    <header className="h-12 bg-white border-b border-gray-100 flex items-center justify-between px-6 shrink-0">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#0d7c6e] rounded-lg flex items-center justify-center">
          <HeartPulse className="w-4 h-4 text-white" />
        </div>
        <span className="text-[15px] font-semibold text-gray-900 tracking-tight">StaffPulse</span>
      </div>

      {/* Nav links */}
      <nav className="flex items-center gap-6">
        {navLinks.map((link, i) => (
          <Link
            key={link}
            href="#"
            className={`text-[12px] font-medium transition-colors pb-0.5 ${
              i === 0
                ? "text-[#0d7c6e] border-b-2 border-[#0d7c6e]"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {link}
          </Link>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <div className="w-px h-5 bg-gray-200" />
        <button className="relative text-gray-400 hover:text-gray-700 transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <button className="text-gray-400 hover:text-gray-700 transition-colors">
          <HelpCircle className="w-4 h-4" />
        </button>
        {/* Avatar */}
        <div className="w-7 h-7 rounded-full bg-[#0d7c6e] flex items-center justify-center text-white text-[10px] font-bold">
          PS
        </div>
      </div>
    </header>
  );
}
