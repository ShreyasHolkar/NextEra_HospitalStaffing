"use client";

import { HeartPulse } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center gap-2">
        {/* Logo icon */}
        <div className="w-8 h-8 bg-[#1a5cf8] rounded-lg flex items-center justify-center">
          <HeartPulse className="w-4 h-4 text-white" />
        </div>
        <span className="text-[15px] font-semibold text-gray-900 tracking-tight">
          StaffPulse
        </span>
      </div>
    </header>
  );
}