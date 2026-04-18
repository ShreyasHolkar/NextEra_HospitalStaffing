"use client";

import { Bell, HelpCircle, HeartPulse } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "My Dashboard", href: "/nurse_dashboard" },
  { label: "Schedule", href: "/nurse_dashboard/nurse_schedule" },
  { label: "History", href: "/nurse_dashboard/history" },
];

export default function TopNav() {
  const pathname = usePathname();

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
        {navLinks.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className={`text-[12px] font-medium transition-colors pb-0.5 ${
                active
                  ? "text-[#0d7c6e] border-b-2 border-[#0d7c6e]"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {label}
            </Link>
          );
        })}
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
        <div className="w-7 h-7 rounded-full bg-[#0d7c6e] flex items-center justify-center text-white text-[10px] font-bold">
          PS
        </div>
      </div>
    </header>
  );
}