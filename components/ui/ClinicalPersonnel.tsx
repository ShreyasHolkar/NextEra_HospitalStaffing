"use client";
import {supabase} from "@/lib/supabase-client"

import { useState } from "react";
import { ShieldCheck, BriefcaseMedical } from "lucide-react";

export default function ClinicalPersonnel() {
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { data, error} = await 
    supabase.auth.signUp(
      {
        email,
        password,
      });

      console.log("data: ", data);
      console.log("error: ", error);
    
  }
  

  return (
    <section className="bg-[#eef0f4] px-8 pt-10 pb-8 flex flex-col relative overflow-hidden border-r border-gray-200">
      {/* Tag */}
      <span className="inline-flex self-start mb-5 text-[10px] font-semibold tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 uppercase">
        Nurse Portal
      </span>

      <h1 className="text-[28px] font-extrabold text-gray-900 leading-tight mb-2">
        Clinical Personnel
      </h1>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-8">
        Access your shifts, credentials, and digital care records in one secure hub.
      </p>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 relative z-10">
        {/* Green left accent */}
        <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-emerald-500 rounded-r-full" />

        <div className="space-y-4">
          {/* License Number */}
          <div>
            <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1.5">
              License Number
            </label>
            <input
              type="text"
              placeholder="RN-XXXX-XXXX"
              className="w-full text-[13px] text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase mb-1.5">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full text-[13px] bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="mt-2 text-[12px] font-medium text-emerald-600 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Remember checkbox */}
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 accent-emerald-600"
            />
            <span className="text-[12px] text-gray-500 group-hover:text-gray-700 transition">
              Remember this workstation for 30 days
            </span>
          </label>

          {/* CTA */}
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[13px] rounded-xl py-3 transition-colors"  onClick={handleSignup}>
            Sign In to Clinical Portal
          </button>
        </div>
      </div>

      {/* Verified Credentials card */}
      <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-3 z-10 relative w-fit">
        <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
        </div>

        <p className="text-[13px] font-semibold text-gray-900 text-center">
          Verified Credentials
        </p>
      </div>

      {/* Decorative watermark - briefcase with + */}
      <div className="absolute bottom-6 right-4 opacity-[0.08] pointer-events-none select-none">
        <BriefcaseMedical className="w-28 h-28 text-gray-700" strokeWidth={1.2} />
      </div>
    </section>
  );
}