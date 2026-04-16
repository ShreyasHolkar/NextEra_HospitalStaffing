"use client";

export default function SystemVitality() {
  return (
    <div
      style={{
        margin: "24px",
        background: "#1a2332",
        borderRadius: "14px",
        padding: "18px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexShrink: 0,
      }}
    >
      {/* Left: icon + title */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            background: "#1e3a2f",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {/* Monitor/vitality icon */}
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#34d399"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.3,
            }}
          >
            System Vitality
          </p>
          <p
            style={{
              fontSize: "11px",
              color: "#64748b",
              margin: "3px 0 0",
              lineHeight: 1.5,
              maxWidth: "210px",
            }}
          >
            Real-time engagement and platform reliability metrics.
          </p>
        </div>
      </div>

      {/* Right: 3 metrics */}
      <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>

        {/* Response Latency */}
        <div>
          <p
            style={{
              fontSize: "9px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#64748b",
              margin: "0 0 5px",
              lineHeight: 1.4,
            }}
          >
            RESPONSE<br />LATENCY
          </p>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1,
            }}
          >
            0.4s
          </p>
        </div>

        {/* Sync Status */}
        <div>
          <p
            style={{
              fontSize: "9px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#64748b",
              margin: "0 0 5px",
              lineHeight: 1.4,
            }}
          >
            SYNC STATUS
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#34d399",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              Healthy
            </span>
          </div>
        </div>

        {/* Active Curators */}
        <div>
          <p
            style={{
              fontSize: "9px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#64748b",
              margin: "0 0 5px",
              lineHeight: 1.4,
            }}
          >
            ACTIVE CURATORS
          </p>
          <p
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#ffffff",
              margin: 0,
              lineHeight: 1,
            }}
          >
            12{" "}
            <span
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              Online
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}