"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SkillCardProps {
  title: string;
  description: string;
  borderColor: string;
  index?: number;
}

export default function SkillCard({
  title,
  description,
  borderColor,
  index = 0,
}: SkillCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#F2F6FA] p-4 relative transition-shadow duration-300"
    >
      {/* Colored Left Border */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 ${borderColor}`}
      />

      {/* Content */}
      <div className="pl-2">
        <motion.h3
          className="text-gray-900 text-lg font-semibold mb-2"
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-gray-600 text-sm leading-relaxed"
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
