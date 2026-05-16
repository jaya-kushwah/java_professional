"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { svgImages, pngImages } from "@/app/utils/localImages";

export default function LearningEnvironment() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const features = [
    {
      icon: svgImages.icon_6,
      title: "Interactive Mentor Sessions",
      description:
        "Mentors guide learners through concepts, coding techniques, and practical development scenarios",
      iconBg: "#0C1833",
      borderColor: "border-l-[#3B82F6]",
    },
    {
      icon: svgImages.icon_5,
      title: "Collaborative Coding Practice",
      description:
        "Learners work together on coding exercises to improve logic building and problem-solving skills",
      iconBg: "#7E23FB1A",
      borderColor: "border-l-[#8B5CF6]",
    },
    {
      icon: svgImages.icon_4,
      title: "Structured Learning Approach",
      description:
        "Concepts are introduced in a clear and organized sequence to build strong programming fundamentals",
      iconBg: "#F384021A",
      borderColor: "border-l-[#F59E0B]",
    },
    {
      icon: svgImages.icon_3,
      title: "Real-Time Doubt Solving",
      description:
        "Learners can discuss coding problems and receive quick guidance during learning sessions",
      iconBg: "#0D62FE1A",
      borderColor: "border-l-[#0D62FE]",
    },
    {
      icon: svgImages.icon_2,
      title: "Consistent Coding Practice",
      description:
        "Regular coding exercises help strengthen programming skills and confidence",
      iconBg: "#02C5A31A",
      borderColor: "border-l-[#10B981]",
    },
    {
      icon: svgImages.icon_1,
      title: "Technical Discussions",
      description:
        "Learners participate in discussions around coding logic, development practices, and project approaches",
      iconBg: "#E7398A1A",
      borderColor: "border-l-[#EC4899]",
    },
  ];

  return (
    <section className="relative py-18 bg-[#010714] overflow-hidden">
      {/* Left Bottom Image */}
      <div className="absolute left-0 bottom-0 w-[70px] h-[80px] sm:w-[160px] sm:h-[180px] md:w-[200px] md:h-[230px] opacity-90">
        <Image
          src={pngImages.image_5}
          alt="decoration"
          fill
          className="object-contain"
        />
      </div>

      {/* Right Top Image */}
      <div className="absolute right-0 top-5 w-[90px] h-[100px] sm:w-[280px] sm:h-[320px] md:w-[400px] md:h-[500px] opacity-90">
        <Image
          src={pngImages.image_4}
          alt="decoration"
          fill
          className="object-contain object-top-right"
        />
      </div>

      <div className="max-container mx-auto sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-left md:text-center mb-8 px-4 md:px-0"
        >
          <div className="inline-flex items-center gap-2 mb-2 border border-[#FFFFFF33] p-1 px-2 rounded-full">
            <Image src={svgImages.star} alt="star" width={16} height={16} />
            <span className="text-white font-14 font-medium uppercase tracking-wider">
              Learning Environment
            </span>
          </div>

          <h2 className="white font-38 md:font-52 font-bold mb-2
  text-left md:text-center">
            A Focused Learning Environment for <span className="text-[#0036F5]"> Developer</span>
          </h2>

          <p className="text-[#F2F6FA] font-16 md:font-18 max-w-xl md:mx-auto">
            Our sessions encourage collaboration, coding practice, and technical discussions that help learners improve their development skills
          </p>
        </motion.div>

        {/* Features Grid - 2 columns with colored borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-[#070E1D] border-l-4 ${feature.borderColor} p-5 rounded-lg transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Icon and Title Container */}
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-10 h-10 md:w-17 md:h-17 flex items-center justify-center shrink-0 rounded-lg"
                    style={{ backdropFilter: 'blur(18px)' }}
                  >
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      className="w-6 h-6 md:w-10 md:h-10 object-contain z-10"
                    />
                    <div 
                      className="absolute w-8 h-4 md:w-12 md:h-6 rounded-full right-0 bottom-0"
                      style={{ backgroundColor: feature.iconBg }}
                    />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-white font-20 semibold mb-1 leading-tight max-w-[200px] md:hidden"
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                </div>

                {/* Content - Desktop */}
                <div className="flex-1 hidden md:block">
                  <motion.h3
                    className="text-white font-20 semibold mb-1 leading-tight max-w-[200px]"
                    transition={{ duration: 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p
                    className="text-[#94A3B8] font-16 leading-relaxed"
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Description - Mobile */}
                <motion.p
                  className="text-[#94A3B8] font-16 leading-relaxed md:hidden mt-[-10px]"
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}