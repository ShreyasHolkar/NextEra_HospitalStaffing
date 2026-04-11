import type { Nurse } from "@/types/nurse";

export default function StatsBar({ stats }: { stats: Nurse["stats"] }) {
  const items = [
    { label: "Total Assignments", value: stats.totalAssignments, color: "text-gray-900" },
    { label: "Upcoming", value: stats.upcoming, color: "text-gray-900" },
    { label: "Completed", value: stats.completed, color: "text-gray-900" },
    { label: "Status", value: stats.statusLabel, color: "text-[#0d7c6e]" },
  ];

  return (
    <div className="grid grid-cols-4 divide-x divide-gray-200 bg-white rounded-xl border border-gray-200 mb-5">
      {items.map(({ label, value, color }) => (
        <div key={label} className="px-5 py-4">
          <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-1.5">
            {label}
          </p>
          <p className={`text-[22px] font-bold ${color}`}>{value}</p>
        </div>
      ))}
    </div>
  );
}
