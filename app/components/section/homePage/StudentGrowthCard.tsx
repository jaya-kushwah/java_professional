import React from "react";

interface JourneyStep {
  id: number;
  title: string;
  description: string;
  growthPoints: string[];
  chartColor: string;
}

interface StudentGrowthCardProps {
  step: JourneyStep;
  index: number;
}

const growthPoints = [
  "Understand programming basics",
  "Gain motivation & direction",
  "Build a strong learning foundation",
];

const ChartIllustration = () => (
  <svg
    width="160"
    height="110"
    viewBox="0 0 160 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Bars */}
    <rect x="10" y="88" width="18" height="14" rx="3" fill="#1a4fa0" />
    <rect x="36" y="76" width="18" height="26" rx="3" fill="#1e5bbf" />
    <rect x="62" y="60" width="18" height="42" rx="3" fill="#2468d4" />
    <rect x="88" y="40" width="18" height="62" rx="3" fill="#2a75ea" />
    <rect x="114" y="18" width="18" height="84" rx="3" fill="#3082ff" />

    {/* Dashed arrow curve */}
    <path
      d="M19 88 C38 72, 58 55, 80 38 C100 22, 118 10, 138 4"
      stroke="#4da3ff"
      strokeWidth="2"
      strokeDasharray="5 4"
      fill="none"
      strokeLinecap="round"
    />

    {/* Arrow head */}
    <path
      d="M133 2 L139 4 L135 9"
      stroke="#4da3ff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Base line */}
    <line x1="6" y1="103" x2="150" y2="103" stroke="rgba(77,163,255,0.3)" strokeWidth="1" />

    {/* Student figure (simplified) */}
    {/* Head */}
    <circle cx="132" cy="14" r="5" fill="#c8deff" />
    {/* Body */}
    <rect x="129" y="19" width="6" height="10" rx="2" fill="#3082ff" />
    {/* Legs */}
    <line x1="131" y1="29" x2="129" y2="37" stroke="#3082ff" strokeWidth="2" strokeLinecap="round" />
    <line x1="133" y1="29" x2="135" y2="37" stroke="#3082ff" strokeWidth="2" strokeLinecap="round" />
    {/* Arm / backpack suggestion */}
    <line x1="135" y1="21" x2="140" y2="25" stroke="#5599ee" strokeWidth="2" strokeLinecap="round" />
    <rect x="138" y="22" width="5" height="7" rx="1.5" fill="#1e5bbf" />
  </svg>
);

export default function StudentGrowthCard({ step, index }: StudentGrowthCardProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 20px",
        fontFamily: "'Exo 2', 'Segoe UI', sans-serif",
      }}
    >
      {/* Outer wrapper for gradient border via pseudo-element workaround using box-shadow + clip */}
     <div
  style={{
    position: "relative",
    width: "100%",
    maxWidth: "860px",
    overflow: "hidden",
  }}
>
      <div className="w-80 h-80 bg-[#1439BCCC] absolute -right-15 -top-6 rounded-full" />
        {/* Gradient border layer */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "8px",
            padding: "2px",
            background: "linear-gradient(180deg, #0654C8 0%, rgba(6, 84, 200, 0) 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* Card */}
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(3, 41, 98, 0.5) 0%, rgba(3, 41, 98, 0) 100%)",
            borderRadius: "14px",
            display: "flex",
            alignItems: "stretch",
            overflow: "hidden",
            position: "relative",
            backdropFilter: "blur(180px)",
          }}
        >
          {/* Inner top glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "14px",
              background:
                "radial-gradient(ellipse at 30% 0%, rgba(6, 84, 200, 0.2) 0%, transparent 60%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* LEFT — Student */}
          <div
            style={{
              flex: "0 0 40%",
              padding: "36px 32px 36px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRight: "1px solid rgba(6, 84, 200, 0.3)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#4da3ff",
                letterSpacing: "0.01em",
                marginBottom: "14px",
                lineHeight: 1.1,
              }}
            >
              {step.title}
            </h1>
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.7,
                fontWeight: 400,
              }}
            >
              {step.description}
            </p>
          </div>

          {/* RIGHT — Growth */}
          <div
            style={{
              flex: 1,
              padding: "36px 24px 36px 36px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#4da3ff",
                  marginBottom: "18px",
                  letterSpacing: "0.01em",
                }}
              >
                Growth at this stage
              </h2>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {step.growthPoints.map((point) => (
                  <li
                    key={point}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.9)",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        color: "#4da3ff",
                        fontSize: "1.4rem",
                        lineHeight: 1,
                        flexShrink: 0,
                        marginTop: "-2px",
                      }}
                    >
                      ·
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Chart */}
            <div style={{ flexShrink: 0, width: "160px", display: "flex", alignItems: "flex-end" }}>
              <ChartIllustration />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}