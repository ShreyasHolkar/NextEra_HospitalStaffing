import { Phone, Building2, CalendarDays, Pencil } from "lucide-react";
import type { Nurse } from "@/types/nurse";

export default function NurseProfileCard({ nurse }: { nurse: Nurse }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 mb-4">
      {/* Avatar + edit */}
      <div className="flex items-start justify-between mb-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0d7c6e] to-[#1aa896] flex items-center justify-center text-white text-[18px] font-bold shadow-sm">
            {nurse.avatarInitials}
          </div>
          {/* Online indicator */}
          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-[#0d7c6e] rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <Pencil className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Name & role */}
      <h2 className="text-[15px] font-bold text-gray-900 mb-0.5">{nurse.name}</h2>
      <p className="text-[11px] text-gray-400 mb-4">{nurse.role}</p>

      {/* Details */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-2.5">
          <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-[12px] text-gray-600">{nurse.phone}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-[12px] text-gray-600">Department: {nurse.department}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <CalendarDays className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="text-[12px] text-gray-600">Joined: {nurse.joinedDate}</span>
        </div>
      </div>
    </div>
  );
}
