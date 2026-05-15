"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  image: StaticImageData;
  technologies: string[];
  index?: number;
}

export default function ProjectCard({
  title,
  image,
  technologies,
  index = 0,
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const borderColors = [
  "#282D9B",
  "#1661B6",
  "#177F60",
];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      className="overflow-hidden border border-[#ffffff] rounded-md group cursor-pointer flex-shrink-0 w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[420px] snap-start"
        style={{
    borderColor: borderColors[index % borderColors.length],
  }}
    >
      {/* Image Container */}
      <div className="relative h-[200px] sm:h-[220px] md:h-[260px] lg:h-[280px] xl:h-[350px] overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="py-4 sm:py-5 md:py-4">
        <motion.h3
          className="text-white text-[16px] sm:text-xl md:text-[20px] semibold mb-2 sm:mb-2 px-3"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 sm:gap-3 px-3">
          {technologies.map((tech, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 }}
              className="bg-[#2a3442] text-gray-300 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-[10px] sm:text-sm md:text-[16px] medium"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
