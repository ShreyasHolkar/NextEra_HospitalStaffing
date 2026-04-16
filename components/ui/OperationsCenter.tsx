"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Users } from "lucide-react";

export default function OperationsCenter() {
  const [remember, setRemember] = useState(false);
  const router = useRouter();

  return (
    <section className="bg-[#eef0f4] px-8 pt-10 pb-8 flex flex-col relative overflow-hidden border-r border-gray-200">
      {/* Tag */}
      <span className="inline-flex self-start mb-5 text-[10px] font-semibold tracking-widest text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-1 uppercase">
        System Administration
      </span>

      <h1 className="text-[28px] font-extrabold text-gray-900 leading-tight mb-2">
        Operations Center
      </h1>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-8">
        Manage institutional capacity & staff deployment schedules across facilities.
      </p>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative z-10">
        {/* Blue left accent */}
        <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-[#1a5cf8] rounded-r-full" />

        <div className="space-y-4">
          {/* Clinical Email */}
          <div>
            <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1.5">
              Clinical Email
            </label>
            <input
              type="email"
              placeholder="admin@carepulse.org"
              className="w-full text-[13px] text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Security Key */}
          <div>
            <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1.5">
              Security Key
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full text-[13px] bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <button className="mt-2 text-[12px] font-medium text-[#1a5cf8] hover:underline">
              Forgot Security Key?
            </button>
          </div>

          {/* Remember checkbox */}
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 accent-blue-600"
            />
            <span className="text-[12px] text-gray-500 group-hover:text-gray-700 transition">
              Remember this workstation for 30 days
            </span>
          </label>

          {/* CTA */}
          <button onClick={() => router.push("/admin_overview")} className="w-full bg-[#1a5cf8] hover:bg-[#1450e0] text-white font-semibold text-[13px] rounded-xl py-3 transition-colors">
            Sign In to Dashboard
          </button>
        </div>
      </div>

      {/* Stats — small cards pinned to bottom-left */}
      <div className="flex justify-start gap-3 mt-6">
        <div className="bg-white rounded-xl border border-gray-100 px-3 py-2.5 min-w-[100px]">
          <p className="text-[8px] font-bold tracking-widest text-gray-400 uppercase mb-0.5">
            Active Staff
          </p>
          <p className="text-[16px] font-bold text-gray-900">1,402</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 px-3 py-2.5 min-w-[90px]">
          <p className="text-[8px] font-bold tracking-widest text-gray-400 uppercase mb-0.5">
            Fill Rate
          </p>
          <p className="text-[16px] font-bold text-emerald-500">98.4%</p>
        </div>
      </div>

      {/* Decorative watermark */}
      <div className="absolute bottom-6 right-4 opacity-5 pointer-events-none select-none">
        <Users className="w-28 h-28 text-gray-700" strokeWidth={1.2} />
      </div>
    </section>
  );
}