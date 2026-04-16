"use client";

const feed = [
  {
    id: 1,
    bgColor: "#e8564a",
    title: "New Urgent Request",
    body: (
      <>St. Mary's General Hospital requested 2x Trauma ICU Nurses.</>
    ),
    time: "2 MINUTES AGO",
    icon: (
      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    bgColor: "#3db87a",
    title: "Assignment Confirmed",
    body: (
      <>
        Nurse <span style={{ color: "#3b7dd8", fontWeight: 500 }}>Sarah Chen</span> confirmed for City Children's Clinic.
      </>
    ),
    time: "14 MINUTES AGO",
    icon: (
      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    id: 3,
    bgColor: "#94a3b8",
    title: "New Nurse Credentialed",
    body: (
      <>Marcus Thorne (RN) added to the repository after verification.</>
    ),
    time: "45 MINUTES AGO",
    icon: (
      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    id: 4,
    bgColor: "#e8953a",
    title: "Schedule Conflict",
    body: (
      <>Overlap detected for Hospital Partner: Mercy Care West.</>
    ),
    time: "1 HOUR AGO",
    icon: (
      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function LiveFeed() {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        border: "1px solid #e2e8f0",
        padding: "20px 20px 0px 20px",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 0,
        margin: "0 24px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#1e293b",
          }}
        >
          Live Feed
        </span>
        <span
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#34d399",
            display: "inline-block",
          }}
        />
      </div>

      {/* Feed Items */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflowY: "auto",
          minHeight: 0,
        }}
      >
        {feed.map((item, idx) => (
          <div key={item.id}>
            <div
              style={{
                display: "flex",
                gap: "12px",
                paddingTop: idx === 0 ? "0" : "16px",
                paddingBottom: "16px",
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: item.bgColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "1px",
                }}
              >
                {item.icon}
              </div>

              {/* Text content */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1e293b",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#64748b",
                    margin: "3px 0 0",
                    lineHeight: 1.5,
                  }}
                >
                  {item.body}
                </p>
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    color: "#94a3b8",
                    letterSpacing: "0.05em",
                    margin: "5px 0 0",
                  }}
                >
                  {item.time}
                </p>
              </div>
            </div>

            {/* Divider between items */}
            {idx < feed.length - 1 && (
              <div
                style={{
                  height: "1px",
                  background: "#f1f5f9",
                  marginLeft: "44px",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div
        style={{
          flexShrink: 0,
          borderTop: "1px solid #f1f5f9",
          padding: "14px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#3b7dd8",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0 ,
          }}
        >
          VIEW ALL ACTIVITY
        </button>
      </div>
    </div>
  );
}