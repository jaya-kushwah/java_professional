"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { pngImages, svgImages } from "@/app/utils/localImages";

// ─── STAGE DATA ───────────────────────────────────────────────
const stages = [
  {
    id: 0,
    title: "Student",
    description: "Individuals who want to start their career in software development begin their journey by joining our Java learning program.",
    growth: [
      "Understand programming basics",
      "Gain motivation & direction",
      "Build a strong learning foundation"
    ],
    color: "#4da3ff"
  },
  {
    id: 1,
    title: "Java Training",
    description: "Students learn core Java concepts, object-oriented programming, frameworks, and industry development practices through guided training sessions.",
    growth: [
      "Stronger problem-solving skills",
      "Deeper understanding of Java",
      "Confidence in coding"
    ],
    color: "#a78bfa"
  },
  {
    id: 2,
    title: "Real Projects",
    description: "Learners work on practical development projects that simulate real industry environments and strengthen their coding and problem-solving skills.",
    growth: [
      "Real-world experience",
      "Improved coding quality",
      "Better understanding of tools and best practices"
    ],
    color: "#34d399"
  },
  {
    id: 3,
    title: "Developer Portfolio",
    description: "Students build a strong developer portfolio including project work, code samples, and technical skills that showcase their abilities.",
    growth: [
      "Professional portfolio",
      "Showcase technical skills",
      "Stand out to recruiters"
    ],
    color: "#fbbf24"
  },
  {
    id: 4,
    title: "Interview Preparation",
    description: "Focused preparation sessions help learners practice coding challenges, technical interviews, and communication skills required for developer roles.",
    growth: [
      "Interview-ready confidence",
      "Strong communication skills",
      "Job-ready mindset"
    ],
    color: "#f472b6"
  }
];

// ─── CHART SVG ────────────────────────────────────────────────
const ChartSVG = ({ color }: { color: string }) => (
  <svg width="115" height="78" viewBox="0 0 115 78" fill="none">
    {[0, 1, 2, 3, 4].map((i) => {
      const h = 12 + i * 11;
      const x = 8 + i * 20;
      return (
        <rect
          key={i}
          x={x}
          y={78 - h - 7}
          width="13"
          height={h}
          rx="2"
          fill={color}
          opacity={0.28 + i * 0.15}
        />
      );
    })}
    <path
      d="M14 64 C28 52 44 38 62 24 C78 12 92 5 102 2"
      stroke={color}
      strokeWidth="1.5"
      strokeDasharray="4 3"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M97 0 L103 2 L99 7"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line x1="3" y1="70" x2="112" y2="70" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    <circle cx="102" cy="7" r="3.5" fill="rgba(255,255,255,0.7)" />
  </svg>
);

// ─── STAGE CARD ───────────────────────────────────────────────
const StageCard = ({ stage, visible }: { stage: typeof stages[0]; visible: boolean }) => (
  <div
    style={{
      position: "relative",
      borderRadius: "14px",
      transition: "opacity 0.7s ease, transform 0.7s ease",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)"
    }}
  >
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "14px",
        padding: "2px",
        background: `linear-gradient(180deg, ${stage.color}99 0%, rgba(6,84,200,0) 100%)`,
        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        pointerEvents: "none"
      }}
    />
    <div
      style={{
        background: "linear-gradient(180deg, rgba(3,41,98,0.92) 0%, rgba(3,41,98,0.2) 100%)",
        borderRadius: "13px",
        display: "flex",
        overflow: "hidden",
        backdropFilter: "blur(16px)"
      }}
    >
      <div
        style={{
          flex: "0 0 42%",
          padding: "24px 18px 24px 22px",
          borderRight: `1px solid ${stage.color}33`
        }}
      >
        <h3
          style={{
            fontSize: "1.05rem",
            fontWeight: 700,
            color: stage.color,
            marginBottom: "9px",
            fontFamily: "'Rajdhani', sans-serif",
            letterSpacing: "0.04em"
          }}
        >
          {stage.title}
        </h3>
        <p
          style={{
            fontSize: "0.74rem",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.62
          }}
        >
          {stage.description}
        </p>
      </div>
      <div
        style={{
          flex: 1,
          padding: "24px 10px 24px 18px",
          display: "flex",
          alignItems: "center",
          gap: "6px"
        }}
      >
        <div style={{ flex: 1 }}>
          <h4
            style={{
              fontSize: "0.84rem",
              fontWeight: 700,
              color: stage.color,
              marginBottom: "9px",
              fontFamily: "'Rajdhani', sans-serif"
            }}
          >
            Growth at this stage
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "5px"
            }}
          >
            {stage.growth.map((g) => (
              <li
                key={g}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "6px",
                  fontSize: "0.73rem",
                  color: "rgba(255,255,255,0.84)"
                }}
              >
                <span
                  style={{
                    color: stage.color,
                    fontSize: "1rem",
                    lineHeight: 1,
                    marginTop: "1px",
                    flexShrink: 0
                  }}
                >
                  ·
                </span>
                {g}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flexShrink: 0 }}>
          <ChartSVG color={stage.color} />
        </div>
      </div>
    </div>
  </div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────
export default function DeveloperJourneyScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<HTMLDivElement>(null);
  const [charProgress, setCharProgress] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(stages.length).fill(false)
  );
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    const road = roadRef.current;
    if (!el || !road) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    const maxScroll = scrollHeight - clientHeight;
    const rawProgress = maxScroll > 0 ? scrollTop / maxScroll : 0;
    const progress = Math.min(rawProgress, 1);

    // Update character position
    setCharProgress(progress);
    const idx = Math.min(Math.floor(progress * stages.length), stages.length - 1);
    setCharIdx(idx);

    // Check card visibility
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const containerRect = el.getBoundingClientRect();
      if (
        rect.top < containerRect.bottom - 50 &&
        rect.bottom > containerRect.top + 50
      ) {
        setVisibleCards((prev) => {
          if (prev[i]) return prev;
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }
    });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    setTimeout(onScroll, 100);
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const stageColor = stages[charIdx]?.color ?? "#4da3ff";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Exo+2:wght@400;500;600;700;800&display=swap');
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #010d2a; }
        ::-webkit-scrollbar-thumb { background: #0654C8; border-radius: 4px; }
        @keyframes floatChar {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <div
        ref={scrollRef}
        style={{
          height: "100vh",
          overflowY: "scroll",
          background: "#03091E",
          fontFamily: "'Exo 2', sans-serif"
        }}
      >
        {/* HEADER */}
        <div
          style={{
            textAlign: "center",
            padding: "44px 20px 24px",
            position: "relative",
            zIndex: 10
          }}
        >
          <span
            style={{
              display: "inline-block",
              border: "1px solid rgba(6,84,200,0.4)",
              borderRadius: "20px",
              padding: "4px 14px",
              fontSize: "0.68rem",
              color: "#79A4FF",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "12px",
              background: "rgba(6,84,200,0.1)"
            }}
          >
            ✦ Developer Journey
          </span>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: "10px",
              fontFamily: "'Rajdhani', sans-serif",
              letterSpacing: "0.03em"
            }}
          >
            From Student to Professional
            <br />
            <span style={{ color: "#79A4FF" }}>Java Developer</span>
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.48)",
              fontSize: "0.8rem",
              maxWidth: "400px",
              margin: "0 auto 18px"
            }}
          >
            Our training model transforms beginners into industry-ready developers
            through structured learning, real projects, and interview preparation.
          </p>
          <button
            style={{
              background: "linear-gradient(90deg,#38BDF8,#A855F7)",
              border: "none",
              borderRadius: "24px",
              padding: "9px 22px",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.8rem",
              cursor: "pointer",
              letterSpacing: "0.04em",
              fontFamily: "'Exo 2',sans-serif",
              boxShadow: "0 4px 20px rgba(56,189,248,0.4)"
            }}
          >
            Developer Journey Timeline
          </button>
        </div>

        {/* BODY */}
        <div
          style={{
            position: "relative",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 16px 120px",
            display: "flex",
            gap: "0",
            alignItems: "flex-start"
          }}
        >
          {/* ROAD COLUMN — sticky */}
          <div
            style={{
              width: "150px",
              flexShrink: 0,
              position: "sticky",
              top: 0,
              height: "100vh",
              overflow: "hidden"
            }}
          >
            <div
              ref={roadRef}
              style={{
                position: "relative",
                width: "100%",
                height: "100%"
              }}
            >
              {/* Routes Background Image */}
              <Image
                src={pngImages.routes}
                alt="Developer Journey Road"
                fill
                className="object-contain"
                priority
              />

              {/* Character moving on road */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: `${charProgress * 85}%`,
                  transform: "translate(-50%, -50%)",
                  animation: "floatChar 2.2s ease-in-out infinite",
                  zIndex: 30,
                  filter: `drop-shadow(0 0 12px ${stageColor}) drop-shadow(0 0 4px ${stageColor})`,
                  transition: "top 0.1s linear"
                }}
              >
                <Image
                  src={svgImages.char}
                  alt="Character"
                  width={50}
                  height={70}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* CARDS COLUMN */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "26px",
              paddingTop: "44px",
              paddingLeft: "14px"
            }}
          >
            {stages.map((stage, i) => (
              <div
                key={stage.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
              >
                <StageCard stage={stage} visible={visibleCards[i]} />
              </div>
            ))}

            {/* FINAL CTA */}
            <div
              style={{
                position: "relative",
                borderRadius: "14px",
                overflow: "hidden",
                padding: "30px 26px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "14px",
                boxShadow: "0 8px 40px rgba(6,84,200,0.45)",
                opacity: visibleCards[stages.length - 1] ? 1 : 0,
                transform: visibleCards[stages.length - 1]
                  ? "translateY(0)"
                  : "translateY(20px)",
                transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s"
              }}
            >
              {/* Background Image */}
              <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
                <Image
                  src={pngImages.route_bg}
                  alt="Success Background"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 1,
                  background: "linear-gradient(135deg,rgba(6,84,200,0.7) 0%,rgba(26,58,143,0.7) 55%,rgba(10,31,85,0.7) 100%)"
                }}
              />

              <div style={{ position: "relative", zIndex: 2 }}>
                <p
                  style={{
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    marginBottom: "5px"
                  }}
                >
                  You're now a
                </p>
                <h2
                  style={{
                    fontSize: "clamp(1.2rem,2.8vw,1.8rem)",
                    fontWeight: 800,
                    color: "#fff",
                    lineHeight: 1.15,
                    fontFamily: "'Rajdhani',sans-serif",
                    letterSpacing: "0.04em"
                  }}
                >
                  PROFESSIONAL JAVA
                  <br />
                  DEVELOPER!
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.42)",
                    fontSize: "0.73rem",
                    marginTop: "6px"
                  }}
                >
                  Ready to build your career and create a lasting impact.
                </p>
              </div>

              <div style={{ position: "relative", zIndex: 2, flexShrink: 0 }}>
                <Image
                  src={svgImages.trophy}
                  alt="Trophy"
                  width={68}
                  height={68}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
