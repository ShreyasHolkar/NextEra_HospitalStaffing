"use client";

import { useState } from "react";
import { HeartPulse, LayoutDashboard, Calendar, History, Settings, LogOut, LifeBuoy, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { label: "My Dashboard", icon: LayoutDashboard, href: "/nurse_dashboard" },
  { label: "Schedule",     icon: Calendar,         href: "/nurse_dashboard/nurse_schedule" },
  { label: "History",      icon: History,          href: "/nurse_dashboard/history" },
  { label: "Settings",     icon: Settings,         href: "/nurse_dashboard/settings" },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className="shrink-0 bg-white border-r border-gray-100 flex flex-col h-full transition-all duration-300"
      style={{ width: collapsed ? '60px' : '176px', minWidth: collapsed ? '60px' : '176px' }}
    >
      {/* Brand row with hamburger */}
      <div
        className="border-b border-gray-100 flex items-center"
        style={{
          padding: collapsed ? '20px 10px' : '20px 12px',
          gap: '8px',
          justifyContent: collapsed ? 'center' : 'flex-start',
        }}
      >
        {/* Hamburger */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors shrink-0"
          style={{ width: 28, height: 28, color: '#9ca3af' }}
        >
          {collapsed ? <Menu size={15} /> : <X size={15} />}
        </button>

        {/* Brand — hidden when collapsed */}
        {!collapsed && (
          <>
            <div className="w-8 h-8 bg-[#0d7c6e] rounded-lg flex items-center justify-center shrink-0">
              <HeartPulse className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[12px] font-bold text-gray-900 leading-none">StaffPulse</p>
              <p className="text-[10px] text-gray-400 mt-0.5">Clinical Staffing</p>
            </div>
          </>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-4 space-y-0.5">
        {navItems.map(({ label, icon: Icon, href }) => {
          const active = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              title={collapsed ? label : undefined}
              className={`flex items-center rounded-lg text-[12px] font-medium transition-colors
                ${collapsed ? 'justify-center px-2 py-2.5' : 'gap-2.5 px-3 py-2.5'}
                ${active
                  ? 'bg-[#e8f5f3] text-[#0d7c6e] border-l-2 border-[#0d7c6e]'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
                }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {!collapsed && label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom actions */}
      <div className="px-2 py-4 border-t border-gray-100 space-y-0.5">
        <button
          onClick={() => router.push('/')}
          title={collapsed ? 'Sign Out' : undefined}
          className={`w-full flex items-center rounded-lg text-[12px] font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors
            ${collapsed ? 'justify-center px-2 py-2.5' : 'gap-2.5 px-3 py-2.5'}`}
        >
          <LogOut className="w-4 h-4 shrink-0" />
          {!collapsed && 'Sign Out'}
        </button>
        <button
          title={collapsed ? 'Support' : undefined}
          className={`w-full flex items-center rounded-lg text-[12px] font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-800 transition-colors
            ${collapsed ? 'justify-center px-2 py-2.5' : 'gap-2.5 px-3 py-2.5'}`}
        >
          <LifeBuoy className="w-4 h-4 shrink-0" />
          {!collapsed && 'Support'}
        </button>
      </div>
    </aside>
  );
}