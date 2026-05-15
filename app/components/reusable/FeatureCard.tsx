"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode, useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  bgColor?: string;
  textColor?: string;
  icon?: ReactNode;
  iconColor?: string;
  iconPosition?: "left" | "right" | "center";
  textPosition?: "left" | "right" | "center";
  index?: number;
}

export default function FeatureCard({
  title,
  description,
  bgColor = "bg-white",
  textColor = "text-black",
  icon,
  iconColor = "",
  iconPosition = "left",
  textPosition = "left",
  index = 0,
}: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  // Icon position classes
  const getIconPositionClass = () => {
    switch (iconPosition) {
      case "left":
        return "bottom-0 left-0";
      case "right":
        return "bottom-[-10] right-0";
      default:
        return "bottom-0 left-0";
    }
  };

  // Text position classes
  const getTextPositionClass = () => {
    switch (textPosition) {
      case "right":
        return "md:items-center md:text-right md:justify-center";
      case "center":
        return "md:items-center md:text-center md:justify-center";
      default:
        return "items-start md:text-left justify-start";
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    //   onHoverStart={() => setIsHovered(true)}
    //   onHoverEnd={() => setIsHovered(false)}
      className={`${bgColor} ${textColor} p-6 rounded-sm relative overflow-hidden group cursor-pointer h-full`}
    >
      <motion.div
        animate={isHovered ? { y: -8 } : { y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="h-full flex flex-col min-h-[250px]"
      >
        {/* Animated Icon */}
        {icon && (
          <motion.div
            className={`absolute ${getIconPositionClass()} opacity-90 ${iconColor}`}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}

        <div className={`relative z-10 flex flex-col h-full ${getTextPositionClass()}`}>
          <motion.h3
            className="text-xl md:text-2xl semibold mb-1"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-sm md:text-base opacity-70"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {description}
          </motion.p>
        </div>
      </motion.div>

    </motion.div>
  );
}
