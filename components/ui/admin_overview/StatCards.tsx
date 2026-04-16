"use client";

const cards = [
  {
    label: "ACTIVE NURSES",
    value: "1,284",
    badge: "+12%",
    badgeStyle: { color: "#065f46", background: "#d1fae5" },
    sub: null,
    barType: "solid" as const,
    barColor: "#3b82f6",
    barW: "75%",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#94a3b8" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    label: "OPEN REQUESTS",
    value: "42",
    badge: "5 Urgent",
    badgeStyle: { color: "#991b1b", background: "#fee2e2" },
    sub: "Avg. fulfillment: 2.4 hrs",
    barType: "solid" as const,
    barColor: "#fb923c",
    barW: "22%",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#94a3b8" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    label: "CONFIRMED ASSIGNMENTS",
    value: "892",
    badge: "+24",
    badgeStyle: { color: "#1e40af", background: "#dbeafe" },
    sub: null,
    barType: "dashed" as const,
    barColor: "#14b8a6",
    barW: "62%",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#94a3b8" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "HOSPITAL PARTNERS",
    value: "156",
    badge: "2 New",
    badgeStyle: { color: "#1e40af", background: "#dbeafe" },
    sub: "94% Retention rate",
    barType: "solid" as const,
    barColor: "#60a5fa",
    barW: "78%",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#94a3b8" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  },
];

export default function StatCards() {
  return (

    


    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        gap: "12px",
        marginLeft : "24px",
        marginRight : "24px",
        marginTop : "24px",
        marginBottom : "24px",
      }}
    >
      {cards.map((c) => (
        <div
          key={c.label}
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
            padding: "14px 16px 12px",
            display: "flex",
            flexDirection: "column",
            minHeight: "120px",
          }}
        >
          {/* Label + Icon */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "#94a3b8",
                textTransform: "uppercase",
                lineHeight: 1.3,
                paddingRight: "8px",
              }}
            >
              {c.label}
            </span>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "#f1f5f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {c.icon}
            </div>
          </div>

          {/* Value + Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "6px",
              marginBottom: "4px",
            }}
          >
            <span
              style={{
                fontSize: "26px",
                fontWeight: 600,
                color: "#1e293b",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {c.value}
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                padding: "2px 7px",
                borderRadius: "999px",
                ...c.badgeStyle,
              }}
            >
              {c.badge}
            </span>
          </div>

          {/* Sub text */}
          {c.sub && (
            <p
              style={{
                fontSize: "11px",
                color: "#94a3b8",
                margin: "2px 0 0",
              }}
            >
              {c.sub}
            </p>
          )}

          {/* Progress bar */}
          <div style={{ marginTop: "auto", paddingTop: "10px" }}>
            {c.barType === "dashed" ? (
              <div style={{ display: "flex", gap: "3px", height: "3px" }}>
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: "3px",
                      borderRadius: "99px",
                      background: i < 6 ? c.barColor : "#f1f5f9",
                    }}
                  />
                ))}
              </div>
            ) : (
              <div
                style={{
                  height: "3px",
                  background: "#f1f5f9",
                  borderRadius: "99px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: "99px",
                    background: c.barColor,
                    width: c.barW,
                  }}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}