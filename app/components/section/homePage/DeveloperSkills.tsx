
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { svgImages } from "@/app/utils/localImages";

interface SkillCardProps {
  title: string;
  description: string;
  number: string;
  borderColor: string;
  iconColor: string;
  icon: any;
  index: number;
}

function SkillCard({ title, description, number, borderColor, iconColor, icon, index }: SkillCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-white rounded-md p-3 border-l-4 ${borderColor} transition-all duration-300`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          style={{ backgroundColor: iconColor }}
          className="w-12 h-12 md:w-16 md:h-16 rounded-md flex items-center justify-center shrink-0"
        >
          <Image src={icon} alt={title} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-gray-900 font-18 semibold">
            {title}
          </h3>
          <p className="text-gray-600 font-14 leading-relaxed">
            {description}
          </p>
          <div
            style={{ color: iconColor.replace("1A", "") }}
            className="font-28 bold text-end hidden md:block shrink-0 mt-[-30px]"
          >
            {number}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: any;
  bgColor: string;
  index: number;
}


function FeatureCard({ title, description, icon, bgColor }: FeatureCardProps) {
  return (
     <div className="flex items-start sm:items-center gap-3 px-3 sm:px-4 py-3 h-full">
      {/* Icon */}
      <div
         className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: bgColor }}
      >
        <Image
          src={icon}
          alt={title}
          className="object-contain w-5 h-5 md:w-6 md:h-6"
        />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <h4 className="font-16 semibold text-[#111827] leading-[18px]">
          {title}
        </h4>

        <p className="font-14 text-[#6B7280] leading-[16px] mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function DeveloperSkills() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const skills = [
    {
      title: "Backend Development",
      description: "Build server-side application logic using Java and modern backend frameworks",
      number: "01",
      borderColor: "border-l-blue-500",
      iconColor: "#216CFD1A",
      icon: svgImages.skill_1,
    },
    {
      title: "REST API Development",
      description: "Create APIs that allow applications and services to communicate with each other",
      number: "02",
      borderColor: "border-l-purple-500",
      iconColor: "#7E23FB1A",
      icon: svgImages.skill_2,
    },
    {
      title: "Database Design",
      description: "Design and manage databases to efficiently store and retrieve application data",
      number: "03",
      borderColor: "border-l-red-500",
      iconColor: "#F923271A",
      icon: svgImages.skill_3,
    },
    {
      title: "Microservices Architecture",
      description: "Understand how modern applications are built using scalable microservice systems",
      number: "04",
      borderColor: "border-l-yellow-500",
      iconColor: "#FF7F001A",
      icon: svgImages.skill_4,
    },
    {
      title: "Frontend Integration",
      description: "Connect backend systems with web or mobile frontends through APIs",
      number: "05",
      borderColor: "border-l-blue-500",
      iconColor: "#0064FE1A",
      icon: svgImages.skill_6,
    },
    {
      title: "DevOps Basics",
      description: "Learn deployment processes, version control, and development workflows",
      number: "06",
      borderColor: "border-l-purple-500",
      iconColor: "#7E23FB1A",
      icon: svgImages.skill_5,
    },
    {
      title: "AI Integration",
      description: "Integrate AI-powered APIs and services into modern Java applications",
      number: "07",
      borderColor: "border-l-red-500",
      iconColor: "#7E23FB1A",
      icon: svgImages.skill_7,
    },
  ];

  const features = [
    {
      title: "Industry Relevant",
      description: "Skills used in real-world projects and companies",
      icon: svgImages.skill_8,
      bgColor: "#E8F0FF",
    },
    {
      title: "Hands-On Learning",
      description: "Practical projects to build your confidence",
      icon: svgImages.skill_9,
      bgColor: "#F3E8FF",
    },
    {
      title: "Job Ready",
      description: "Build a strong foundation for your developer career",
      icon: svgImages.skill_10,
      bgColor: "#FFF1E6",
    },
    {
      title: "End-to-End Growth",
      description: "From core concepts to deployment and beyond",
      icon: svgImages.skill_11,
      bgColor: "#EAFBF1",
    },
  ];

  return (
    <section className="relative py-18 bg-[#F9FAFE] overflow-hidden">
      <div className="max-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-left md:text-center mb-8 md:px-0"
        >
          <div className="inline-flex items-center gap-2 mb-2 border border-[#1F76F9] p-1 px-2 rounded-[12px]">
            <Image src={svgImages.star} alt="star" width={16} height={16} />
            <span className="primary font-14 bold uppercase tracking-wider">
              Developer Skills
            </span>
          </div>

          <h2 className="text-black font-38 md:font-52 font-bold mb-2
  text-left md:text-center">
            Skills You Will Gain as a <span className="text-[#0036F5]"> Java Developer</span>
          </h2>

          <p className="text-[#475569] font-16 md:font-18 max-w-2xl md:mx-auto">
            Our program builds the complete skillset required for backend and full-stack Java development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-[12px] md:p-2 overflow-hidden ">
           <div className="flex flex-col lg:flex-row items-stretch">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex-1 ${index !== features.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-[#E5E7EB]"
                  : ""
                  }`}
              >
                <FeatureCard {...feature} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}