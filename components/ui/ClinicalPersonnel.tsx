"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, BriefcaseMedical } from "lucide-react";

export default function ClinicalPersonnel() {
  const [remember, setRemember] = useState(false);
  const [license, setLicense] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignIn = () => {
    if (!license || !password) {
      setError("Please enter your license number and password.");
      return;
    }
    setError("");
    setLoading(true);
    // Simulate auth — replace with real API call later
    setTimeout(() => {
      setLoading(false);
      router.push("/nurse_dashboard");
    }, 800);
  };

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
              value={license}
              onChange={(e) => setLicense(e.target.value)}
              className="w-full text-[13px] text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
              className="w-full text-[13px] bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
            />
            <button className="mt-2 text-[12px] font-medium text-emerald-600 hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Error */}
          {error && (
            <p className="text-[11px] text-red-500">{error}</p>
          )}

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
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[13px] rounded-xl py-3 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Signing in…
              </>
            ) : (
              "Sign In to Clinical Portal"
            )}
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