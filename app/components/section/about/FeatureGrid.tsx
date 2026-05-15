"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FeatureItem {
  title: string;
  description: string;
  color: "purple" | "green" | "orange" | "blue";
}

export default function FeatureGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features: FeatureItem[] = [
    {
      title: "Practical Java Learning",
      description: "Learn core Java concepts through structured lessons and hands-on coding practice.",
      color: "purple",
    },
    {
      title: "Real Development Projects",
      description: "Work on practical projects that simulate real software development environments.",
      color: "green",
    },
    {
      title: "Modern Development Tools",
      description: "Use professional development tools and frameworks used by Java developers.",
      color: "orange",
    },
    {
      title: "Industry-Focused Training",
      description: "Training designed to build skills required for modern software development roles.",
      color: "blue",
    },
  ];

  const colorClasses = {
    purple: "bg-[#CDBCE6]",
    green: "bg-[#DFEED7]",
    orange: "bg-[#FFD8BA]",
    blue: "bg-[#DDEBFF]",
  };

  return (
    <section ref={ref} className="py-18 px-4 md:px-8 lg:px-16">
      <div className="max-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${colorClasses[feature.color]} rounded-lg p-6 md:p-8 h-48 md:h-56 flex flex-col`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <h3 className="text-black font-24 md:font-20 semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 font-16 md:font-16 leading-relaxed flex-1">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
