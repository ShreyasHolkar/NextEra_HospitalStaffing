"use client";

import Sidebar from "@/components/ui/admin_overview/Sidebar";
import Topbar from "@/components/ui/admin_overview/Topbar";
import StatCards from "@/components/ui/admin_overview/StatCards";
import WeeklyStaffingChart from "@/components/ui/admin_overview/WeeklyStaffingChart";
import LiveFeed from "@/components/ui/admin_overview/LiveFeed";
import SystemVitality from "@/components/ui/admin_overview/SystemVitality";

export default function Dashboard() {
  return (
    /* Root: full viewport, white sidebar + light gray body */
    <div className="flex h-screen w-screen overflow-hidden bg-[#eef1f10]">

      {/* ── Sidebar ─────────────────────────────────────────── */}
      <Sidebar />

      {/* ── Right column ────────────────────────────────────── */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">

        {/* Topbar */}
        <Topbar />

        {/* Scrollable page body */}
        <main className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">

         {/* ── Page heading row ── */}
<div className="flex items-center justify-between mx-6 pl-[24px] pr-[24px] pb-[10px] pt-[14px]">
  {/* Left: title + subtitle */}
  <div>
    <h1 className="text-[22px] font-bold text-slate-950 m-0 leading-tight tracking-tight">
      Curator&apos;s Overview
    </h1>
    <p className="text-[13px] text-slate-400 mt-1 leading-relaxed max-w-[400px]">
      Monitoring the clinical pulse of regional healthcare staffing through
      real-time data synthesis and assignment flows.
    </p>
  </div>

  {/* Right: date range + export button */}
  <div className="flex items-center justify-between gap-2.5 shrink-0 pt-[40px] pr-[60px]">

    {/* Date range pill */}
    <div className="flex items-center gap-1.5 bg-slate-100 rounded-lg px-3 py-[7px] text-[12px] text-slate-600 font-medium pr-[50px]">
      <svg
        width="14"
        height="14"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#94a3b8"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      Oct 24 - Oct 30, 2023
    </div>

    {/* Export button */}
    <button className="bg-slate-200 text-blue-700 text-[12px] font-semibold px-4 py-[7px] rounded-lg border-none cursor-pointer hover:bg-slate-300 transition-colors">
      Export Report
    </button>

  </div>
</div>
          {/* ── 4 stat cards ── */}
          <StatCards />

          {/* ── Chart + Live Feed (2/3 + 1/3) ── */}
          <div className="grid grid-cols-[1fr_300px] gap-5 flex-1 min-h-0">
            <WeeklyStaffingChart />
            <LiveFeed />
          </div>

          {/* ── System Vitality ── */}
          <SystemVitality />

        </main>
      </div>
    </div>
  );
}
