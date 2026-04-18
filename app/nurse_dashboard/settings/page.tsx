"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Shield,
  Bell,
  Pencil,
  FileText,
  Upload,
  CheckCircle,
  Zap,
  LogOut,
  HelpCircle,
  ChevronRight,
  Star,
} from "lucide-react";

export default function SettingsPage() {
  const router = useRouter();
  const [available, setAvailable] = useState(true);
  const [shiftAlerts, setShiftAlerts] = useState(true);
  const [emergencyBroadcasts, setEmergencyBroadcasts] = useState(true);
  const [emailDigest, setEmailDigest] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Toggle = ({
    value,
    onChange,
  }: {
    value: boolean;
    onChange: () => void;
  }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none shrink-0 ${
        value ? "bg-[#0d7c6e]" : "bg-gray-200"
      }`}
    >
      <span
        className={`inline-block w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 mt-0.5 ${
          value ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  );

  return (
    <div className="flex-1 overflow-y-auto bg-[#f4f6f8] p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[22px] font-bold text-gray-900 mb-0.5">Profile & Preferences</h1>
        <p className="text-[12px] text-gray-400">
          Manage your professional identity, clinical availability, and security settings in one place.
        </p>
      </div>

      <div className="flex gap-5">
        {/* Left — main content */}
        <div className="flex-1 min-w-0 space-y-4">

          {/* Personal Information */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-[14px] font-bold text-[#0d7c6e] mb-0.5">Personal Information</h2>
                <p className="text-[11px] text-gray-400">Your clinical identity and contact details.</p>
              </div>
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                </div>
                <button className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-colors">
                  <Pencil className="w-3 h-3" />
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-1">Full Name</p>
                <p className="text-[13px] font-semibold text-gray-800">Priya Sharma</p>
              </div>
              <div>
                <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-1">Phone Number</p>
                <p className="text-[13px] font-semibold text-gray-800">+91 98765 43210</p>
              </div>
              <div>
                <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-1">Department</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0d7c6e]" />
                  <p className="text-[13px] font-semibold text-gray-800">ICU (Intensive Care Unit)</p>
                </div>
              </div>
              <div>
                <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-1">Employee ID</p>
                <p className="text-[13px] font-semibold text-gray-800">CP-CL-9920</p>
              </div>
            </div>
          </div>

          {/* Credentials + Notifications — side by side */}
          <div className="grid grid-cols-2 gap-4">
            {/* Credentials */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="flex items-center gap-1.5 mb-1">
                <Shield className="w-4 h-4 text-amber-500" />
                <h2 className="text-[13px] font-bold text-amber-600">Credentials</h2>
              </div>
              <p className="text-[11px] text-gray-400 mb-4">
                Upload or update your medical licenses and certifications.
              </p>

              {/* Existing file */}
              <div className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 mb-3">
                <FileText className="w-4 h-4 text-[#0d7c6e] shrink-0" />
                <span className="text-[12px] font-medium text-gray-700 flex-1 truncate">
                  Nursing_License.pdf
                </span>
                <CheckCircle className="w-4 h-4 text-[#0d7c6e] shrink-0" />
              </div>

              {/* Upload new */}
              <button className="w-full flex flex-col items-center justify-center gap-1.5 border-2 border-dashed border-gray-200 rounded-xl py-4 hover:border-[#0d7c6e]/40 hover:bg-[#e8f5f3]/30 transition-colors group">
                <Upload className="w-4 h-4 text-gray-400 group-hover:text-[#0d7c6e] transition-colors" />
                <span className="text-[10px] font-bold tracking-widest text-gray-400 group-hover:text-[#0d7c6e] uppercase transition-colors">
                  Upload New Document
                </span>
              </button>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5">
              <div className="flex items-center gap-1.5 mb-4">
                <Bell className="w-4 h-4 text-gray-500" />
                <h2 className="text-[13px] font-bold text-gray-800">Notifications</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    label: "Shift Alerts",
                    desc: "New shift opportunities in ICU",
                    value: shiftAlerts,
                    onChange: () => setShiftAlerts(!shiftAlerts),
                  },
                  {
                    label: "Emergency Broadcasts",
                    desc: "Immediate hospital-wide alerts",
                    value: emergencyBroadcasts,
                    onChange: () => setEmergencyBroadcasts(!emergencyBroadcasts),
                  },
                  {
                    label: "Email Digest",
                    desc: "Weekly performance summary",
                    value: emailDigest,
                    onChange: () => setEmailDigest(!emailDigest),
                  },
                ].map(({ label, desc, value, onChange }) => (
                  <div key={label} className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[12px] font-semibold text-gray-800">{label}</p>
                      <p className="text-[10px] text-gray-400">{desc}</p>
                    </div>
                    <Toggle value={value} onChange={onChange} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <div className="flex items-center gap-1.5 mb-4">
              <Shield className="w-4 h-4 text-red-400" />
              <h2 className="text-[13px] font-bold text-gray-800">Security</h2>
            </div>

            <div className="flex items-end gap-3">
              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="flex-1 text-[12px] bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d7c6e]/40 focus:border-transparent transition"
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="flex-1 text-[12px] bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d7c6e]/40 focus:border-transparent transition"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="flex-1 text-[12px] bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d7c6e]/40 focus:border-transparent transition"
              />
              <button className="shrink-0 bg-gray-900 hover:bg-gray-700 text-white text-[12px] font-semibold px-4 py-2.5 rounded-xl transition-colors">
                Update Security
              </button>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-56 shrink-0 space-y-4">

          {/* Clinical Availability */}
          <div className="bg-[#0d7c6e] rounded-2xl p-4 text-white">
            <div className="flex items-center gap-1.5 mb-3">
              <Zap className="w-4 h-4 text-yellow-300" />
              <h3 className="text-[12px] font-bold">Clinical Availability</h3>
            </div>

            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[9px] font-bold tracking-widest text-white/60 uppercase mb-0.5">
                  Current Status
                </p>
                <p className="text-[16px] font-bold">{available ? "Available" : "Off Duty"}</p>
              </div>
              <button
                onClick={() => setAvailable(!available)}
                className={`relative inline-flex w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
                  available ? "bg-[#1aa896]" : "bg-white/20"
                }`}
              >
                <span
                  className={`inline-block w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 mt-0.5 ${
                    available ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>

            <p className="text-[10px] text-white/70 leading-relaxed italic">
              "Setting yourself as available allows the automated clinical dispatcher to assign
              you high-priority ICU shifts."
            </p>
          </div>

          {/* Nurse stats card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            {/* Avatar */}
            <div className="flex justify-center mb-3">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0d7c6e] to-[#1aa896] flex items-center justify-center text-white text-[16px] font-bold">
                  PS
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#0d7c6e] rounded-full border-2 border-white" />
              </div>
            </div>
            <p className="text-[13px] font-bold text-gray-900 text-center">Priya Sharma</p>
            <p className="text-[11px] text-gray-400 text-center mb-4">Senior ICU Specialist</p>

            <div className="space-y-2.5">
              {[
                { label: "Total Shifts", value: "124", valueClass: "text-[#0d7c6e] font-bold" },
                {
                  label: "Rating",
                  value: (
                    <span className="flex items-center gap-1 font-bold text-amber-500">
                      4.9 <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    </span>
                  ),
                  valueClass: "",
                },
                { label: "Complaints", value: "0", valueClass: "font-bold text-gray-800" },
              ].map(({ label, value, valueClass }) => (
                <div key={label} className="flex items-center justify-between border-t border-gray-100 pt-2.5">
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                    {label}
                  </p>
                  <p className={`text-[13px] ${valueClass}`}>{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Support + Sign Out */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <button className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-gray-400" />
                <span className="text-[12px] font-medium text-gray-700">Support Center</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </button>
            <button
              onClick={() => router.push("/")}
              className="w-full flex items-center gap-2 px-4 py-3 hover:bg-red-50 transition-colors group"
            >
              <LogOut className="w-3.5 h-3.5 text-red-400" />
              <span className="text-[12px] font-medium text-red-500 group-hover:text-red-600">
                Sign Out
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}