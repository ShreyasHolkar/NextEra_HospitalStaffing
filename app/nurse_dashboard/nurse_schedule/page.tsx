"use client";

import { useState } from "react";
import { Calendar, List, SlidersHorizontal, ChevronRight, Sun, Moon, Sunset, Download, Info, ChevronLeft } from "lucide-react";

type ShiftType = "Morning" | "Evening" | "Night";

interface Shift {
  id: string;
  date: string;
  dayName: string;
  label?: string;
  shiftType: ShiftType;
  time: string;
  hospital: string;
  department: string;
  isToday?: boolean;
  isTomorrow?: boolean;
}

const shifts: Shift[] = [
  {
    id: "s1",
    date: "Oct 24",
    dayName: "Mon",
    label: "TODAY'S SHIFT",
    shiftType: "Morning",
    time: "07:00 – 15:00",
    hospital: "Apollo Hospital",
    department: "ICU (Critical Care)",
    isToday: true,
  },
  {
    id: "s2",
    date: "Oct 25",
    dayName: "Tue",
    shiftType: "Evening",
    time: "15:00 – 23:00",
    hospital: "Manipal Hospital",
    department: "Emergency Dept",
    isTomorrow: true,
  },
  {
    id: "s3",
    date: "Oct 27",
    dayName: "Thu",
    shiftType: "Night",
    time: "23:00 – 07:00",
    hospital: "Fortis Healthcare",
    department: "Pediatrics Unit",
  },
  {
    id: "s4",
    date: "Oct 28",
    dayName: "Fri",
    shiftType: "Morning",
    time: "07:00 – 15:00",
    hospital: "Apollo Hospital",
    department: "ICU (Critical Care)",
  },
  {
    id: "s5",
    date: "Oct 30",
    dayName: "Sun",
    shiftType: "Evening",
    time: "15:00 – 23:00",
    hospital: "Manipal Hospital",
    department: "Emergency Dept",
  },
];

const summaryStats = [
  { label: "Total Shifts", value: "18", color: "text-gray-900" },
  { label: "Pending Sync", value: "02", color: "text-amber-500" },
  { label: "Morning", value: "12", color: "text-[#0d7c6e]" },
  { label: "Night", value: "06", color: "text-indigo-500" },
];

const shiftIcon: Record<ShiftType, React.ReactNode> = {
  Morning: <Sun className="w-4 h-4 text-amber-400" />,
  Evening: <Sunset className="w-4 h-4 text-orange-400" />,
  Night: <Moon className="w-4 h-4 text-indigo-400" />,
};

const shiftBg: Record<ShiftType, string> = {
  Morning: "bg-amber-50 border-amber-100",
  Evening: "bg-orange-50 border-orange-100",
  Night: "bg-indigo-50 border-indigo-100",
};

const shiftTextColor: Record<ShiftType, string> = {
  Morning: "text-amber-600",
  Evening: "text-orange-500",
  Night: "text-indigo-500",
};

// Calendar data — which days in October have shifts
const shiftDays: Record<number, ShiftType> = {
  24: "Morning",
  25: "Evening",
  27: "Night",
  28: "Morning",
  30: "Evening",
};

const shiftDotColor: Record<ShiftType, string> = {
  Morning: "bg-amber-400",
  Evening: "bg-orange-400",
  Night: "bg-indigo-400",
};

const shiftCardBg: Record<ShiftType, string> = {
  Morning: "bg-amber-50 border-amber-200",
  Evening: "bg-orange-50 border-orange-200",
  Night: "bg-indigo-50 border-indigo-200",
};

const shiftCardText: Record<ShiftType, string> = {
  Morning: "text-amber-700",
  Evening: "text-orange-600",
  Night: "text-indigo-600",
};

function CalendarView() {
  const [selectedDay, setSelectedDay] = useState<number | null>(24);

  const daysInOctober = 31;
  const firstDayOfWeek = 0; // Oct 1 2023 is Sunday
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const blanks = Array(firstDayOfWeek).fill(null);
  const days = Array.from({ length: daysInOctober }, (_, i) => i + 1);
  const allCells = [...blanks, ...days];

  const selectedShift = selectedDay ? shifts.find((s) => {
    const day = parseInt(s.date.split(" ")[1]);
    return day === selectedDay;
  }) : null;

  return (
    <div className="flex gap-5">
      {/* Calendar grid */}
      <div className="flex-1 min-w-0">
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          {/* Month header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-500">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <h3 className="text-[14px] font-bold text-gray-900">October 2023</h3>
            <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-500">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Weekday labels */}
          <div className="grid grid-cols-7 border-b border-gray-100">
            {weekDays.map((d) => (
              <div key={d} className="py-2 text-center text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                {d}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7">
            {allCells.map((day, i) => {
              if (!day) return <div key={`blank-${i}`} className="h-16 border-b border-r border-gray-50" />;

              const shiftType = shiftDays[day];
              const isToday = day === 24;
              const isSelected = day === selectedDay;

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`h-16 border-b border-r border-gray-50 flex flex-col items-center pt-2 gap-1 transition-colors relative
                    ${isSelected ? "bg-[#e8f5f3]" : "hover:bg-gray-50"}
                  `}
                >
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-semibold transition-colors
                    ${isToday ? "bg-[#0d7c6e] text-white" : isSelected ? "text-[#0d7c6e] font-bold" : "text-gray-700"}
                  `}>
                    {day}
                  </span>
                  {shiftType && (
                    <span className={`w-1.5 h-1.5 rounded-full ${shiftDotColor[shiftType]}`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 px-5 py-3 border-t border-gray-100">
            {(["Morning", "Evening", "Night"] as ShiftType[]).map((type) => (
              <div key={type} className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${shiftDotColor[type]}`} />
                <span className="text-[10px] text-gray-500">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — selected day detail + summary */}
      <div className="w-52 shrink-0 space-y-4">
        {/* Selected shift detail */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
          <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase mb-3">
            {selectedDay ? `Oct ${selectedDay}` : "Select a day"}
          </p>

          {selectedShift ? (
            <div className={`rounded-xl border p-3 ${shiftCardBg[selectedShift.shiftType]}`}>
              <div className="flex items-center gap-1.5 mb-2">
                {shiftIcon[selectedShift.shiftType]}
                <span className={`text-[11px] font-bold ${shiftCardText[selectedShift.shiftType]}`}>
                  {selectedShift.shiftType} Shift
                </span>
              </div>
              <p className="text-[12px] font-semibold text-gray-800 mb-0.5">{selectedShift.hospital}</p>
              <p className="text-[10px] text-gray-500 mb-1">{selectedShift.department}</p>
              <p className="text-[10px] font-mono text-gray-500">{selectedShift.time}</p>
              {selectedShift.isToday && (
                <span className="inline-flex items-center gap-1 mt-2 text-[9px] font-bold tracking-widest text-[#0d7c6e] bg-[#e8f5f3] rounded-full px-2 py-0.5 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0d7c6e] animate-pulse" />
                  Today
                </span>
              )}
            </div>
          ) : selectedDay ? (
            <div className="rounded-xl border border-dashed border-gray-200 p-4 text-center">
              <p className="text-[11px] text-gray-400">No shift scheduled</p>
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-gray-200 p-4 text-center">
              <p className="text-[11px] text-gray-400">Click a day to see details</p>
            </div>
          )}
        </div>

        {/* October Summary */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4">
          <h3 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-3">
            October Summary
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {summaryStats.map(({ label, value, color }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-2.5">
                <p className="text-[8px] font-bold tracking-widest text-gray-400 uppercase mb-1 leading-tight">
                  {label}
                </p>
                <p className={`text-[20px] font-bold ${color}`}>{value}</p>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#0d7c6e] hover:underline">
            <Download className="w-3.5 h-3.5" />
            Download Timesheet
          </button>
        </div>

        {/* Reporting Alert */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <p className="text-[11px] font-bold text-blue-700">Reporting Alert</p>
          </div>
          <p className="text-[11px] text-gray-600 leading-relaxed">
            ICU staff at <span className="font-semibold text-gray-800">Apollo Hospital</span> must
            complete the digital handover protocol 15 minutes before shift start.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SchedulePage() {
  const [view, setView] = useState<"list" | "calendar">("list");
  const todayShift = shifts.find((s) => s.isToday);
  const upcomingShifts = shifts.filter((s) => !s.isToday);

  return (
    <div className="flex-1 overflow-y-auto bg-[#f4f6f8] p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 mb-0.5">My Schedule</h1>
          <p className="text-[12px] text-gray-400">
            Manage your upcoming clinical rotations across 3 hospitals.
          </p>
        </div>

        {/* View toggle + filter */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setView("list")}
              className={`flex items-center gap-1.5 px-3 py-2 text-[11px] font-semibold transition-colors ${
                view === "list" ? "bg-[#0d7c6e] text-white" : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <List className="w-3.5 h-3.5" />
              List View
            </button>
            <button
              onClick={() => setView("calendar")}
              className={`flex items-center gap-1.5 px-3 py-2 text-[11px] font-semibold transition-colors ${
                view === "calendar" ? "bg-[#0d7c6e] text-white" : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              Calendar
            </button>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 rounded-lg text-[11px] font-semibold text-gray-500 hover:bg-gray-50 transition-colors">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filter
          </button>
        </div>
      </div>

      {view === "calendar" ? (
        <CalendarView />
      ) : (
      <div className="flex gap-5">
        {/* Left — main schedule */}
        <div className="flex-1 min-w-0 space-y-4">

          {/* Today's shift — hero card */}
          {todayShift && (
            <div className="bg-white rounded-2xl border border-[#0d7c6e]/20 shadow-sm overflow-hidden">
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-[#0d7c6e] to-[#1aa896]" />
              <div className="p-5 flex items-center justify-between">
                <div className="flex-1">
                  {/* Badge */}
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-widest text-[#0d7c6e] bg-[#e8f5f3] border border-[#0d7c6e]/20 rounded-full px-2.5 py-1 uppercase mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0d7c6e] animate-pulse" />
                    Today's Shift
                  </span>

                  <h2 className="text-[20px] font-bold text-[#0d7c6e] mb-0.5">
                    {todayShift.shiftType} Shift ({todayShift.time})
                  </h2>
                  <p className="text-[12px] text-gray-400 mb-4">Monday, Oct 24th</p>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center">
                        <Calendar className="w-3.5 h-3.5 text-gray-500" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">Hospital</p>
                        <p className="text-[12px] font-semibold text-gray-800">{todayShift.hospital}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gray-100 flex items-center justify-center">
                        <Sun className="w-3.5 h-3.5 text-gray-500" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">Department</p>
                        <p className="text-[12px] font-semibold text-gray-800">{todayShift.department}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button className="shrink-0 flex items-center gap-2 bg-[#0d7c6e] hover:bg-[#0a6b5e] text-white text-[12px] font-semibold px-4 py-2.5 rounded-xl transition-colors">
                  View Details
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* Upcoming shifts */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h3 className="text-[14px] font-bold text-gray-900">Upcoming Shifts</h3>
              <button className="flex items-center gap-1 text-[11px] font-semibold text-[#0d7c6e] hover:underline">
                View All <ChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="divide-y divide-gray-50">
              {upcomingShifts.map((shift) => (
                <div
                  key={shift.id}
                  className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50/60 transition-colors group"
                >
                  {/* Date block */}
                  <div className="w-14 shrink-0 text-center">
                    <p className="text-[14px] font-bold text-gray-900 leading-none">{shift.date}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{shift.dayName}</p>
                    {shift.isTomorrow && (
                      <span className="inline-block mt-1 text-[8px] font-bold tracking-wider text-amber-600 bg-amber-50 rounded px-1.5 py-0.5 uppercase">
                        Tomorrow
                      </span>
                    )}
                  </div>

                  {/* Shift type badge */}
                  <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-[11px] font-semibold w-28 shrink-0 ${shiftBg[shift.shiftType]}`}>
                    {shiftIcon[shift.shiftType]}
                    <span className={shiftTextColor[shift.shiftType]}>{shift.shiftType} Shift</span>
                  </div>

                  {/* Hospital + dept */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-gray-800 truncate">{shift.hospital}</p>
                    <p className="text-[11px] text-gray-400 truncate">{shift.department}</p>
                  </div>

                  {/* Time */}
                  <p className="text-[11px] font-mono text-gray-500 shrink-0">{shift.time}</p>

                  {/* Action */}
                  <button className="shrink-0 text-[11px] font-semibold text-[#0d7c6e] border border-[#0d7c6e]/30 hover:bg-[#e8f5f3] px-3 py-1.5 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-52 shrink-0 space-y-4">

          {/* October Summary */}
          <div className="bg-white rounded-2xl border border-gray-200 p-4">
            <h3 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-3">
              October Summary
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {summaryStats.map(({ label, value, color }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-2.5">
                  <p className="text-[8px] font-bold tracking-widest text-gray-400 uppercase mb-1 leading-tight">
                    {label}
                  </p>
                  <p className={`text-[20px] font-bold ${color}`}>{value}</p>
                </div>
              ))}
            </div>

            <button className="mt-4 w-full flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#0d7c6e] hover:underline">
              <Download className="w-3.5 h-3.5" />
              Download Monthly Timesheet
            </button>
          </div>

          {/* Reporting Alert */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <div className="flex items-center gap-1.5 mb-2">
              <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <p className="text-[11px] font-bold text-blue-700">Reporting Alert</p>
            </div>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              ICU staff at <span className="font-semibold text-gray-800">Apollo Hospital</span> are
              required to complete the digital handover protocol 15 minutes prior to shift start.
            </p>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}