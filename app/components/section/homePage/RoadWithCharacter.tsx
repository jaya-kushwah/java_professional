"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { pngImages, svgImages } from "@/app/utils/localImages";

// Waypoints matching the routes image path (percentage based)
const waypoints = [
  { x: 50, y: 8 },    // Top - Student
  { x: 65, y: 22 },   // Right swing
  { x: 50, y: 35 },   // Center
  { x: 35, y: 48 },   // Left swing - Java Training
  { x: 50, y: 60 },   // Center
  { x: 65, y: 72 },   // Right swing - Real Projects
  { x: 50, y: 84 },   // Center
  { x: 35, y: 92 },   // Bottom - Final
];

interface RoadWithCharacterProps {
  scrollProgress: number;
  currentStage: number;
  sectionHeight: number;
}

export default function RoadWithCharacter({ scrollProgress, currentStage, sectionHeight }: RoadWithCharacterProps) {
  const [charPosition, setCharPosition] = useState({ x: 50, y: 8 });

  useEffect(() => {
    // Calculate character position based on scroll progress
    const totalSegments = waypoints.length - 1;
    const segment = Math.min(scrollProgress * totalSegments, totalSegments - 0.001);
    const segmentIndex = Math.floor(segment);
    const segmentProgress = segment - segmentIndex;

    if (segmentIndex < waypoints.length - 1) {
      const start = waypoints[segmentIndex];
      const end = waypoints[segmentIndex + 1];

      // Smooth interpolation between waypoints
      const x = start.x + (end.x - start.x) * segmentProgress;
      const y = start.y + (end.y - start.y) * segmentProgress;

      setCharPosition({ x, y });
    }
  }, [scrollProgress]);

  return (
    <div 
      className="relative w-full" 
      style={{ 
        height: sectionHeight ? `${sectionHeight}px` : '100%',
        minHeight: '600px'
      }}
    >
      {/* Routes Background Image - Matches Section Height */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={pngImages.routes}
          alt="Developer Journey Road"
          fill
          priority
          sizes="400px"
          style={{ 
            objectFit: 'fill',
            objectPosition: 'center'
          }}
        />
      </div>

      {/* Moving Character */}
      <div
        className="absolute transition-all duration-300 ease-out z-20"
        style={{
          left: `${charPosition.x}%`,
          top: `${charPosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative animate-float">
          {/* Glow effect */}
          <div className="absolute inset-0 blur-2xl opacity-60 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#3B82F6] rounded-full scale-150 animate-pulse"></div>
          
          {/* Character SVG */}
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            <Image
              src={svgImages.char}
              alt="Developer Character"
              width={96}
              height={96}
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Stage Milestone Dots */}
      {[
        { x: 50, y: 8, stage: 0 },
        { x: 35, y: 30, stage: 1 },
        { x: 65, y: 50, stage: 2 },
        { x: 35, y: 70, stage: 3 },
        { x: 50, y: 90, stage: 4 },
      ].map((point, index) => (
        <div
          key={index}
          className="absolute transition-all duration-500 z-10"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-500 ${
              currentStage >= point.stage
                ? "bg-[#79A4FF] shadow-lg shadow-[#79A4FF]/50 scale-100"
                : "bg-gray-600/50 scale-75"
            }`}
          >
            {currentStage >= point.stage && (
              <div className="absolute inset-0 rounded-full bg-[#79A4FF] animate-ping opacity-75"></div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
