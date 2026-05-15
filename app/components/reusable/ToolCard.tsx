"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { svgImages } from "@/app/utils/localImages";

interface ToolCardProps {
  icon: any;
  title: string;
  description: string;
  tools: {
    name: string;
    icon: any;
  }[];
  index?: number;
}

export default function ToolCard({
  title,
  description,
  icon,
  tools,
  index = 0,
}: ToolCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-[6px]"
    >
      <div className="absolute inset-0 z-0 rounded-[10px] overflow-hidden">
        <div className="w-full h-full bg-[linear-gradient(98.32deg,rgba(3,41,98,1)_0%,rgba(6,84,200,0.2)_100%)]" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#1DA1FF]" />
        <div className="absolute inset-0 rounded-[10px] border border-[#1B98E4]" />
      </div>

      <div className="relative z-10 p-3 md:p-5">
        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6">
          <div className="w-13 h-13 md:w-20 md:h-20 rounded-full p-[1px] bg-[linear-gradient(180deg,#0654C8_0%,#999999_100%)]">

            <div className="w-full h-full rounded-full bg-[#032962] flex items-center justify-center">

              <Image
                src={icon}
                alt="icon"
                className="object-contain h-8 w-8 md:h-13 md:w-13"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h3 className="white text-[14px] md:text-[20px] bold mb-1">
              {title}
            </h3>

            <p className="text-white/90 text-[10px] md:text-[16px] leading-relaxed">
              {description}
            </p>

            {/* Tools label */}
            <p className="primary text-[10px] md:text-[16px] medium mt-1 md:mb-3">
              Tools
            </p>


           <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 mt-1">
  {tools.map((tool, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0.9 }
      }
      transition={{
        duration: 0.3,
        delay: index * 0.1 + idx * 0.05,
      }}
      className="bg-white flex items-center 
      justify-center rounded-md cursor-pointer 
      p-2 md:p-3 min-h-[38px] md:min-h-[48px]"
    >
      <span className="text-gray-900 semibold 
      text-[11px] md:text-[16px] truncate text-center">
        {tool.name}
      </span>
    </motion.div>
  ))}
</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}