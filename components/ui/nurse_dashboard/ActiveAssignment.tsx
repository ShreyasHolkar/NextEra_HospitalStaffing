import { MapPin, Clock, User, Info } from "lucide-react";

export default function ActiveAssignment() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 mb-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-[#0d7c6e] animate-pulse" />
        <span className="text-[9px] font-bold tracking-widest text-[#0d7c6e] uppercase">
          Active Assignment • Today
        </span>
      </div>

      <div className="flex gap-4">
        {/* Left info */}
        <div className="flex-1">
          <h2 className="text-[20px] font-bold text-gray-900 mb-1">Apollo Hospital</h2>
          <div className="flex items-center gap-1 text-gray-400 mb-5">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-[12px]">Greams Road, Chennai</span>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-5">
            <div>
              <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                Reporting Time
              </p>
              <p className="text-[15px] font-bold text-gray-900">07:30 AM</p>
            </div>
            <div>
              <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-1">
                Contact Person
              </p>
              <p className="text-[13px] font-semibold text-gray-900">Dr. Rajesh Kumar</p>
            </div>
          </div>

          {/* Special instructions */}
          <div className="flex items-start gap-2.5 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2.5">
            <Info className="w-3.5 h-3.5 text-blue-500 mt-0.5 shrink-0" />
            <div>
              <p className="text-[9px] font-bold tracking-widest text-blue-500 uppercase mb-0.5">
                Special Instructions
              </p>
              <p className="text-[11px] text-gray-600 leading-relaxed">
                Report to the ICU ward head upon arrival for the briefing.
              </p>
            </div>
          </div>
        </div>

        {/* Right — blank avatar placeholder */}
        <div className="w-36 shrink-0 bg-gray-100 rounded-xl flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-400">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
