"use client";

import { motion } from "framer-motion";

export interface JourneyChartDataPoint {
  value: number; // 0 to 100
}

interface JourneyStepChartProps {
  data?: JourneyChartDataPoint[];
  width?: number;
  height?: number;
  strokeColor?: string;
  gridColor?: string;
  animated?: boolean;
  animationDelay?: number;
}

export default function JourneyStepChart({
  data = [{ value: 85 }, { value: 85 }, { value: 52 }],
  width = 220,
  height = 160,
  strokeColor = "#4f8ef7",
  gridColor = "rgba(79,142,247,0.22)",
  animated = false,
  animationDelay = 0,
}: JourneyStepChartProps) {
  const padT = 8;
  const bottom = height;
  const n = data.length;
  const segW = width / (n - 1);

  const toX = (i: number) => i * segW;
  const toY = (v: number) => padT + (height - padT) - (v / 100) * (height - padT);

  // Responsive coordinates based on width
  const isMobile = width <= 140;
  
  // Key coordinates - adjusted for mobile/desktop
  const x0 = toX(0);                       // left
  const x1 = toX(1);                      // mid (where flat ends)
  const x2 = toX(n);                      // right
  const y0 = toY(data[0].value);          // flat top y
  const y2 = toY(data[n - 1].value);      // diagonal end y

  // Responsive positioning
  const leftX = isMobile ? x0 + 3 : x0 + 4;
  const midX = isMobile ? x1 + 8 : x1 + 20;
  const rightX = isMobile ? x2 - 3 : 248;
  const flatY = isMobile ? y0 + 70 : y0 + 50;
  const midLineX = isMobile ? width * 0.5 : 126;

  // Stroke path: flat → diagonal
  const linePath = `M ${leftX} ${flatY} L ${midX} ${flatY} L ${rightX} ${isMobile?y2+60:y2}`;

  // Fill area
  const fillPath = `${linePath} L ${rightX} ${bottom} L ${leftX} ${bottom} Z`;

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="relative"
      initial={{ filter: "grayscale(1) brightness(1.8)" }}
      animate={animated ? { filter: "grayscale(0) brightness(1)" } : { filter: "grayscale(1) brightness(1.8)" }}
      transition={{ duration: 1.5, delay: animationDelay + 0.3, ease: "easeInOut" }}
    >
      <defs>
        <linearGradient id={`fill-${width}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e4fa0" stopOpacity="0.1" />
          <stop offset="40%" stopColor="#1e4fa0" stopOpacity="0.2" />
          <stop offset="80%" stopColor="#1e4fa0" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#091525" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    
      {/* LEFT dashed line — full height (above and below stroke) */}
      <motion.line
        x1={leftX} y1={0}
        x2={leftX} y2={bottom}
        stroke={gridColor}
        strokeWidth="1"
        strokeDasharray="4 4"
        initial={{ stroke: "#ffffff60" }}
        animate={animated ? { stroke: gridColor } : { stroke: "#ffffff60" }}
        transition={{ duration: 1.2, delay: animationDelay + 0.5 }}
      />
      
      <motion.circle 
        cx={leftX} 
        cy={4} 
        r={isMobile ? 3 : 4} 
        initial={{ fill: "#ffffff" }}
        animate={animated ? { fill: strokeColor } : { fill: "#ffffff" }}
        transition={{ duration: 1.2, delay: animationDelay + 0.7 }}
      />

      {/* MID dashed line — only below the horizontal stroke */}
      <motion.line
        x1={midX} y1={flatY - 2}
        x2={midX} y2={bottom}
        stroke={gridColor}
        strokeWidth="1"
        strokeDasharray="4 4"
        initial={{ stroke: "#ffffff60" }}
        animate={animated ? { stroke: gridColor } : { stroke: "#ffffff60" }}
        transition={{ duration: 1.2, delay: animationDelay + 0.5 }}
      />

      <motion.line
        x1={rightX} y1={y2}
        x2={rightX} y2={bottom}
        stroke={gridColor}
        strokeWidth={isMobile ? "1" : "2"}
        strokeDasharray="4 4"
        initial={{ stroke: "#ffffff60" }}
        animate={animated ? { stroke: gridColor } : { stroke: "#ffffff60" }}
        transition={{ duration: 1.2, delay: animationDelay + 0.5 }}
      />

      {/* Dot at top of right line */}
      <motion.circle 
        cx={rightX} 
        cy={4} 
        r={isMobile ? 3 : 4} 
        initial={{ fill: "#ffffff" }}
        animate={animated ? { fill: strokeColor } : { fill: "#ffffff" }}
        transition={{ duration: 1.2, delay: animationDelay + 0.7 }}
      />

      {/* Filled gradient area */}
      <motion.path 
        d={fillPath} 
        fill={`url(#fill-${width})`}
        initial={{ opacity: 0.1 }}
        animate={animated ? { opacity: 1 } : { opacity: 0.1 }}
        transition={{ duration: 1.2, delay: animationDelay + 0.8 }}
      />

      {/* Top stroke line */}
      <motion.path
        d={linePath}
        strokeWidth={isMobile ? "2" : "2.5"}
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        initial={{ stroke: "#ffffff" }}
        animate={animated ? { stroke: strokeColor } : { stroke: "#ffffff" }}
        transition={{ duration: 1.2, delay: animationDelay + 0.7 }}
      />
    </motion.svg>
  );
}