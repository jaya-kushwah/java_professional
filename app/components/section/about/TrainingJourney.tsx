
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export default function TrainingJourney() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const timelineContainerRef = useRef<HTMLDivElement>(null);

  const timelineItems: TimelineItem[] = [
    {
      year: "2010",
      title: "The Beginning",
      description:
        "The academy started with the goal of providing practical Java development training for aspiring developers.",
    },
    {
      year: "2016",
      title: "Building the Training Model",
      description:
        "A structured learning process was created that combines concept learning, coding practice, and project development.",
    },
    {
      year: "2020",
      title: "Project-Based Learning",
      description:
        "Real development projects were introduced to help learners gain hands-on software development experience.",
    },
    {
      year: "2024",
      title: "Expanding Technologies",
      description:
        "Training expanded to include modern Java frameworks, development tools, and deployment practices.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref} className="py-18 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Side - Header */}
          <motion.div
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-black font-38 md:font-50 font-bold mb-2">
              Our Journey in Training Java Developers
            </h2>
            <p className="text-secondary font-16 md:font-18">
              From starting a focused Java training initiative to building a structured developer learning environment, our journey is centered on helping learners grow into professional developers.
            </p>
          </motion.div>

          {/* Right Side - Timeline */}
          <div className="lg:w-2/3 relative flex justify-center">
            <motion.div
              ref={timelineContainerRef}
              className="relative space-y-12 md:space-y-16 pl-18 md:pl-100"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {/* Vertical Timeline Line */}
              <motion.div
                className="absolute left-8 md:left-90 top-2 w-0.5 bg-[#1F76F9] origin-top"
                style={{ height: `calc(100% - 2rem)` }}
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              />

              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative"
                // variants={itemVariants}
                >
                  {/* Circle on the timeline */}
                  <motion.div
                    className="absolute -left-[51px] top-1 w-[25px] h-[25px] bg-[#1F76F9] rounded-full border-4 border-[#F2F6FA] shadow-lg z-10"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                  />

                  <motion.div>
                    <p className="text-blue-500 text-lg font-semibold mb-2">
                      {item.year}
                    </p>
                    <h3 className="text-black text-xl md:text-2xl font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#475569] text-base leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}