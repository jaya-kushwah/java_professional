"use client";

import { svgImages } from "@/app/utils/localImages";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef, ReactNode } from "react";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  value: string;
  index?: number;
}

export default function ContactCard({
  icon,
  title,
  description,
  value,
  index = 0,
}: ContactCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#DDEBFF] p-4 rounded-sm relative overflow-hidden transition-shadow duration-300 min-h-[200px] flex flex-col"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-30 h-70 opacity-70">
        <Image
          src={svgImages.right_img}
          alt="image"
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center text-white mb-4 flex-shrink-0"
        >
          {icon}
        </motion.div>

        {/* Title */}
        <motion.h3
          className="text-gray-900 text-lg font-semibold"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-gray-600 text-sm mb-4 flex-grow"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {description}
        </motion.p>

        {/* Value - at bottom */}
        <motion.p
          className="text-gray-900 semibold text-base"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {value}
        </motion.p>
      </div>
    </motion.div>
  );
}