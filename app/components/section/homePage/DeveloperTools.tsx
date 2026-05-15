"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { pngImages, svgImages } from "@/app/utils/localImages";
import ToolCard from "@/app/components/reusable/ToolCard";

export default function DeveloperTools() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const toolCategories = [
    {
      title: "Backend Development",
      icon: svgImages.vector_1,
      description:
        "Core technologies used to build server-side applications and business logic in modern Java software systems.",
      tools: [
        { name: "Java", icon: svgImages.javaa },
        { name: "Spring Boot", icon: svgImages.leaf },
        { name: "Hibernate", icon: svgImages.javaa },
      ],
    },
    {
      title: "Database Systems",
      icon: svgImages.vector_2,
      description:
        "Databases used to store, manage, and retrieve application data in real-world software applications.",
      tools: [
        { name: "MySQL", icon: svgImages.javaa },
        { name: "PostgreSQL", icon: svgImages.javaa },
        { name: "MongoDB", icon: svgImages.javaa },
      ],
    },
    {
      title: "API Development & Testing",
            icon: svgImages.vector_3,
      description:
        "Tools used for building, testing, and documenting APIs that allow different systems and applications to communicate.",
      tools: [
        { name: "Postman", icon: svgImages.javaa },
        { name: "Swagger", icon: svgImages.javaa },
      ],
    },
    {
      title: "Version Control Systems",
            icon: svgImages.vector_4,
      description:
        "Version control tools help developers track code changes, collaborate with teams, and manage project development history.",
      tools: [
        { name: "Git", icon: svgImages.javaa },
        { name: "GitHub", icon: svgImages.javaa },
      ],
    },
    {
      title: "DevOps & Deployment",
            icon: svgImages.vector_5,
      description:
        "Tools used to package, deploy, and manage applications in modern cloud-based environments.",
      tools: [
        { name: "Docker", icon: svgImages.javaa },
        { name: "AWS", icon: svgImages.javaa },
        { name: "CI/CD Pipelines", icon: svgImages.javaa },
      ],
    },
    {
      title: "Development IDEs",
            icon: svgImages.vector_6,
      description:
        "Professional development environments used by Java developers to write, test, and debug software applications.",
      tools: [
        { name: "IntelliJ IDEA", icon: svgImages.javaa },
        { name: "Eclipse", icon: svgImages.javaa },
        { name: "VS Code", icon: svgImages.javaa },
      ],
    },
  ];

  return (
    <section className="relative py-18 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={pngImages.developerBg}
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-[#000034]/60"></div>
      </div>
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
              DEVELOPER TOOLS
            </span>
          </div>

          <h2 className="text-white font-38 md:font-50 font-semibold mb-2">
            Real Tools Used by Professional Java Developers
          </h2>

          <p className="white font-16 md:font-18 max-w-2xl md:mx-auto">
            Our training introduces students to the tools and technologies commonly used by professional software development teams.
          </p>
        </motion.div>

        {/* Tools Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {toolCategories.map((category, index) => (
            <ToolCard key={index} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
