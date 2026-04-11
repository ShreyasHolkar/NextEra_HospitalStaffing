"use client";

export default function MySchedule() {
  // Blank rows — will be populated from DB later
  const scheduleRows = [
    {
      date: "Oct 24, 2023",
      isToday: true,
      shift: "Morning",
      hospital: "Apollo Hospital",
      hospitalHighlight: true,
      dept: "ICU",
    },
    {
      date: "Oct 26, 2023",
      isToday: false,
      shift: "Night",
      hospital: "Fortis Healthcare",
      hospitalHighlight: false,
      dept: "Emergency",
    },
    {
      date: "Oct 27, 2023",
      isToday: false,
      shift: "Evening",
      hospital: "Manipal Hospital",
      hospitalHighlight: false,
      dept: "Pediatrics",
    },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <h3 className="text-[14px] font-bold text-gray-900">My Schedule</h3>
        <button className="text-[12px] font-semibold text-[#0d7c6e] hover:underline">
          View Calendar
        </button>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            {["Date", "Shift", "Hospital", "Dept"].map((h) => (
              <th
                key={h}
                className="px-5 py-2.5 text-left text-[9px] font-bold tracking-widest text-gray-400 uppercase"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {scheduleRows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-5 py-3.5">
                <p className="text-[12px] font-semibold text-gray-800">{row.date}</p>
                {row.isToday && (
                  <span className="inline-block mt-1 text-[9px] font-bold tracking-wider text-white bg-[#0d7c6e] rounded px-1.5 py-0.5 uppercase">
                    Today
                  </span>
                )}
              </td>
              <td className="px-5 py-3.5 text-[12px] text-gray-600">{row.shift}</td>
              <td className="px-5 py-3.5">
                <span
                  className={`text-[12px] font-medium ${
                    row.hospitalHighlight ? "text-[#0d7c6e] font-semibold" : "text-gray-600"
                  }`}
                >
                  {row.hospital}
                </span>
              </td>
              <td className="px-5 py-3.5 text-[12px] text-gray-600">{row.dept}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
