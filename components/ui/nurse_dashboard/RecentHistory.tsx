import { recentHistory } from "@/lib/data";

export default function RecentHistory() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">
        Recent History
      </h3>
      <div className="space-y-3">
        {recentHistory.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            {/* Hospital icon placeholder */}
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
              <div className="w-3 h-3 rounded-sm bg-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-gray-800 truncate">{item.hospital}</p>
              <p className="text-[10px] text-gray-400">{item.date}</p>
            </div>
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5 shrink-0">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
