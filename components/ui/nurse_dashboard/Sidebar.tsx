"use client";

import { LayoutDashboard, Calendar, History, Settings, LogOut, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "My Dashboard", icon: LayoutDashboard, href: "/nurse_dashboard", active: true },
  { label: "Schedule", icon: Calendar, href: "/nurse_dashboard/schedule", active: false },
  { label: "History", icon: History, href: "/nurse_dashboard/history", active: false },
  { label: "Settings", icon: Settings, href: "/nurse_dashboard/settings", active: false },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-44 shrink-0 bg-white border-r border-gray-100 flex flex-col h-full">
      {/* Brand */}
      <div className="px-4 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-[#0d7c6e] rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-[12px] font-bold text-gray-900 leading-none">StaffPulse</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Clinical Staffing</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map(({ label, icon: Icon, href, active }) => (
          <Link
            key={label}
            href={href}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[12px] font-medium transition-colors ${
              active
                ? "bg-[#e8f5f3] text-[#0d7c6e] border-l-2 border-[#0d7c6e]"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
            }`}
          >
            <Icon className="w-4 h-4 shrink-0" />
            {label}
          </Link>
        ))}
      </nav>

      {/* Bottom actions */}
      <div className="px-3 py-4 border-t border-gray-100 space-y-0.5">
        <button
            onClick={() => router.push("/")}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[12px] font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
        <button className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[12px] font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors">
          <LifeBuoy className="w-4 h-4" />
          Support
        </button>
      </div>
    </aside>
  );
}