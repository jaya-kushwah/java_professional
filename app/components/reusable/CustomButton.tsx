"use client";
import { useState } from "react";

export default function CustomButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "3rem 0" }}>
      <div style={{ position: "relative", display: "inline-block" }}>

        {/* Top-left rounded corner */}
        <svg
          style={{ position: "absolute", top: -2.5, left: -2.5, pointerEvents: "none" }}
          width="20" height="20" viewBox="0 0 20 20" fill="none"
        >
          <defs>
            <linearGradient id="goldTL" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffffff" />
              <stop offset="100%" stopColor="#ffffffff" />
            </linearGradient>
          </defs>
          <path d="M20 1 Q1 1 1 20" stroke="url(#goldTL)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>

        {/* Bottom-left rounded corner */}
        <svg
          style={{ position: "absolute", bottom: -2.5, left: -2.5, pointerEvents: "none" }}
          width="20" height="20" viewBox="0 0 20 20" fill="none"
        >
          <defs>
            <linearGradient id="goldBL" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#ffffffff" />
              <stop offset="100%" stopColor="#ffffffff" />
            </linearGradient>
          </defs>
          <path d="M20 19 Q1 19 1 0" stroke="url(#goldBL)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>

        {/* Left border — full height minus corner space */}
        <div style={{
          position: "absolute",
          left: -2.5,
          top: 16,
          height: "calc(100% - 32px)",
          width: 2.5,
          background: "linear-gradient(90deg, #1F76F9 0%, rgba(31, 118, 249, 0) 100%)",
        }} />

        {/* Top border — half width, starts after corner */}
        <div style={{
          position: "absolute",
          top: -2.5,
          left: 16,
          width: "calc(50% - 16px)",
          height: 2.5,
          background: "linear-gradient(90deg, #f4f4f4ff 0%, #ffffffff 100%)",
        }} />

        {/* Bottom border — half width, starts after corner */}
        <div style={{
          position: "absolute",
          bottom: -2.5,
          left: 16,
          width: "calc(50% - 16px)",
          height: 2.5,
          background: "linear-gradient(90deg, #ffffffff 0%, #ffffffff 100%)",
        }} />

        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            padding: "14px 40px",
            fontSize: "22px",
            fontWeight: "500",
            color: "#f0e6b0",
            background: hovered
              ? "linear-gradient(135deg, #3a5dc5 0%, #495886ff 40%, #5164a8ffff 100%)"
              : "linear-gradient(135deg, #455fabff 0%, #3753a5ff 40%, #2c4dc6ff 100%)",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            letterSpacing: "0.02em",
            outline: "none",
            display: "block",
            transition: "background 0.3s ease, transform 0.15s ease",
            transform: hovered ? "scale(1.03)" : "scale(1)",
          }}
        >
          About The Academy
        </button>
      </div>
    </div>
  );
}
 