"use client";

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { day: "MON", deployment: 55, fulfillment: 44 },
  { day: "TUE", deployment: 72, fulfillment: 60 },
  { day: "WED", deployment: 98, fulfillment: 85 },
  { day: "THU", deployment: 68, fulfillment: 56 },
  { day: "FRI", deployment: 80, fulfillment: 65 },
  { day: "SAT", deployment: 40, fulfillment: 33 },
  { day: "SUN", deployment: 35, fulfillment: 27 },
];

const TODAY = 2; // WED

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "10px",
          padding: "8px 12px",
          fontSize: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <p style={{ fontWeight: 600, color: "#1e293b", marginBottom: "4px" }}>{label}</p>
        {payload.map((p) => (
          <div key={p.name} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color, display: "inline-block" }} />
            <span style={{ color: "#64748b", textTransform: "capitalize" }}>{p.name}:</span>
            <span style={{ fontWeight: 500, color: "#1e293b" }}>{p.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Custom X-axis tick — bold for WED
const CustomTick = ({
  x, y, payload,
}: {
  x?: number;
  y?: number;
  payload?: { value: string; index: number };
}) => {
  const isToday = payload?.index === TODAY;
  return (
    <text
      x={x}
      y={(y ?? 0) + 12}
      textAnchor="middle"
      fontSize={11}
      fontWeight={isToday ? 700 : 500}
      fill={isToday ? "#1e293b" : "#94a3b8"}
    >
      {payload?.value}
    </text>
  );
};

export default function WeeklyStaffingChart() {
  return (
    <div
      style={{
        margin: "0 24px",
        background: "#eef2f7",
        borderRadius: "16px",
        padding: "24px 20px 16px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 0,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: "20px",
          flexShrink: 0,
        }}
      >
        <div>
          <p style={{ fontSize: "15px", fontWeight: 600, color: "#1e293b", margin: 0 }}>
            Weekly Staffing Trend
          </p>
          <p style={{ fontSize: "12px", color: "#94a3b8", margin: "3px 0 0" }}>
            Nurse deployment frequency vs fulfillment
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#2563eb",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: "12px", color: "#64748b" }}>Deployment</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#16a34a",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: "12px", color: "#64748b" }}>Fulfillment</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div style={{ flex: 1, minHeight: 0, height: "260px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barSize={14}
            barCategoryGap="28%"
            barGap={3}
            margin={{ top: 8, right: 8, left: 8, bottom: 0 }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={<CustomTick />}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(203,213,225,0.3)", radius: 4 }}
            />
            <Bar dataKey="deployment" radius={[4, 4, 0, 0]}>
              {data.map((_, i) => (
                <Cell key={i} fill={i === TODAY ? "#1d4ed8" : "#93c5fd"} />
              ))}
            </Bar>
            <Bar dataKey="fulfillment" radius={[4, 4, 0, 0]}>
              {data.map((_, i) => (
                <Cell key={i} fill={i === TODAY ? "#15803d" : "#86efac"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}