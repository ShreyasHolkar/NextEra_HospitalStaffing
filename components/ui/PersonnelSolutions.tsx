"use client";

import { ShieldCheck, Zap, Plus, Building2, Stethoscope, HeartPulse } from "lucide-react";

const institutions = [
  { icon: Building2, name: "Name" },
  { icon: Stethoscope, name: "Name" },
  { icon: HeartPulse, name: "Name" },
];

export default function PersonnelSolutions() {
  return (
    <section className="bg-[#eef0f4] px-8 pt-10 pb-8 flex flex-col">
      {/* Tag */}
      <span className="inline-flex self-start mb-5 text-[10px] font-semibold tracking-widest text-orange-700 bg-orange-50 border border-orange-200 rounded-full px-3 py-1 uppercase">
        Hospital Partners
      </span>

      <h1 className="text-[28px] font-extrabold text-gray-900 leading-tight mb-2">
        Personnel Solutions
      </h1>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-8">
        Seamless staffing on-demand for healthcare institutions of any scale.
      </p>

      {/* Feature highlights */}
      <div className="space-y-4 mb-6">
        {/* HIPAA */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#1a5cf8]" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-gray-900 mb-0.5">
              HIPAA Compliant
            </p>
            <p className="text-[12px] text-gray-500 leading-relaxed">
              End-to-end data encryption for all personnel records.
            </p>
          </div>
        </div>

        {/* 24h Matching */}
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
            <Zap className="w-4 h-4 text-[#1a5cf8]" />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-gray-900 mb-0.5">
              24h Matching
            </p>
            <p className="text-[12px] text-gray-500 leading-relaxed">
              Emergency placements fulfilled within the first 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3 mb-8">
        <button className="w-full bg-[#c97c1a] hover:bg-[#b36f16] text-white font-semibold text-[14px] rounded-2xl py-3.5 flex items-center justify-center gap-2 transition-colors shadow-sm">
          <div className="w-5 h-5 rounded-full border-2 border-white/60 flex items-center justify-center">
            <Plus className="w-3 h-3" />
          </div>
          Make a Staff Request
        </button>

        <button className="w-full bg-white hover:bg-gray-50 text-[#c97c1a] font-semibold text-[14px] rounded-2xl py-3.5 border border-gray-200 transition-colors">
          View Specialties
        </button>
      </div>

      {/* Partnering Institutions */}
      <div>
        <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-3">
          Partnering Institutions
        </p>
        <div className="flex gap-4">
          {institutions.map(({ icon: Icon, name }, i) => (
            <div key={i} className="flex items-center gap-1.5 text-gray-400">
              <Icon className="w-4 h-4" />
              <span className="text-[12px]">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}