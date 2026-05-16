"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { svgImages } from "@/app/utils/localImages";
import Image from "next/image";

export default function TechnologiesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const stats = [
    {
      name: "Java",
      description: "Core programming language for building robust and scalable applications.",
      color: "#FEF0F0",
      borderColor: "linear-gradient(180deg, rgba(253, 97, 95, 0) 0%, rgba(253, 97, 95, 0.5) 50%, rgba(253, 97, 95, 0) 75%, rgba(253, 97, 95, 0.5) 100%)",
      dotColor: "#E80E20",
      image: svgImages.javaa
    },
    {
      name: "Spring Boot",
      description: "Build production-ready applications quickly with Spring Boot framework.",
      color: "#F1FAF1",
      borderColor: "linear-gradient(180deg, rgba(88, 205, 89, 0) 0%, rgba(88, 205, 89, 0.5) 50%, rgba(88, 205, 89, 0) 75%, rgba(88, 205, 89, 0.5) 100%)",
      dotColor: "#58CD59",
      image: svgImages.spring3d
    },
    {
      name: "Hibernate",
      description: "Simplify database interactions with powerful ORM capabilities.",
      color: "#FDF7ED",
      borderColor: "linear-gradient(180deg, rgba(227, 188, 82, 0) 0%, rgba(227, 188, 82, 0.5) 50%, rgba(227, 188, 82, 0) 75%, rgba(227, 188, 82, 0.5) 100%)",
      dotColor: "#E3BC52",
      image: svgImages.zigzag3d
    },
    {
      name: "React",
      description: "Build interactive and dynamic user interfaces with React library.",
      color: "#F2FAFE",
      borderColor: "linear-gradient(180deg, rgba(12, 120, 233, 0) 0%, rgba(12, 120, 233, 0.5) 50%, rgba(12, 120, 233, 0) 75%, rgba(12, 120, 233, 0.5) 100%)",
      dotColor: "#42CEFD",
      image: svgImages.react3d
    },
    {
      name: "Docker",
      description: "Containerize applications for consistent development and deployment.",
      color: "#F0F5FC",
      borderColor: "linear-gradient(180deg, rgba(12, 120, 233, 0) 0%, rgba(12, 120, 233, 0.5) 50%, rgba(12, 120, 233, 0) 75%, rgba(12, 120, 233, 0.5) 100%)",
      dotColor: "#0C78E9",
      image: svgImages.docker3d
    },
    {
      name: "Microservices",
      description: "Design scalable and maintainable applications using microservices architecture.",
      color: "#F3F0FC",
      borderColor: "linear-gradient(180deg, rgba(146, 101, 245, 0) 0%, rgba(146, 101, 245, 0.5) 50%, rgba(146, 101, 245, 0) 75%, #F3F0FD 100%)",
      dotColor: "#9265F5",
      image: svgImages.micro_services
    },
    {
      name: "Git",
      description: "Track changes, collaborate seamlessly and manage code efficiently.",
      color: "#ccced11a",
      borderColor: "linear-gradient(180deg, rgba(123, 133, 153, 0) 0%, rgba(123, 133, 153, 0.5) 50%, rgba(123, 133, 153, 0) 75%, #F1F1F5 100%)",
      dotColor: "#7B8599",
      image: svgImages.git3d
    },
    {
      name: "Spring AI",
      description: "Integrate AI capabilities into your applications with Spring AI.",
      color: "#F1FAF1",
      borderColor: "linear-gradient(180deg, rgba(88, 205, 89, 0) 0%, rgba(88, 205, 89, 0.5) 50%, rgba(88, 205, 89, 0) 75%, rgba(88, 205, 89, 0.5) 100%)",
      dotColor: "#58CD59",
      image: svgImages.ai
    }
  ];

  return (
    <section className="relative py-12 md:py-16 bg-[#F9FAFE] overflow-hidden">
      <div className="max-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="w-full flex justify-start md:justify-center">
            <div className="inline-flex items-center gap-2 p-1 px-3
    border border-[#1F76F9] rounded-[12px] 
    text-white uppercase tracking-wider mb-2 bg-[#E3EDFD]">

              <Image
                src={svgImages.star}
                alt="star" width={16} height={16}
              />

              <span className="font-14 primary bold">
                Tech Stack
              </span>
            </div>
          </div>

          <h2 className="text-black font-38 md:font-52 font-bold mb-2
  text-left md:text-center">
            Technologies <span className="text-[#0036F5]">You Will Learn</span>
          </h2>

          <p className="text-[#475569] font-16 md:font-18 max-w-xl mx-auto mb-2 
  text-left md:text-center">
            Students learn the same technologies used by modern software
            companies and backend development teams.
          </p>
        </motion.div>



        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative bg-white rounded-[12px]
  border border-gray-100 h-38 md:h-[260px] md:w-75 
  flex flex-col items-center justify-start text-center overflow-hidden"
              >

                <div
                  className="relative z-10 
  w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24
  rounded-full shrink-0 mt-1 md:mt-7 
  p-px flex items-center justify-center"
                  style={{
                    background: stat.borderColor,
                  }}
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center p-2 sm:p-1"
                    style={{
                      background: "#fff",
                    }}
                  >
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center"
                      style={{
                        background: stat.color,
                      }}
                    >
                      <Image
                        src={stat.image}
                        alt={stat.name}
                        width={60}
                        height={60}
                        quality={75}
                        priority
                        className="w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 object-contain"
                      />
                    </div>
                         <div
                    className="absolute top-1 md:top-4 right-1 w-2 h-2 rounded-full"
                    style={{ background: stat.dotColor }}
                  ></div>
                  </div>
                </div>

                <h3
                  className="relative z-10 
        text-[14px] sm:text-[20px] md:text-[24px]
        leading-none bold mt-1 md:mt-4 "
                  style={{ color: stat.name }}
                >
                  {stat.name}
                </h3>

                <div
                  className="relative z-10 
  w-8 sm:w-12 h-[2px] md:h-[3px] rounded-sm mt-1 md:mt-3"
                  style={{ background: stat.dotColor }}
                ></div>

                <p
                  className="relative z-10 
text-[10px] sm:text-base md:text-[14px]
leading-[140%] font-bold text-[#475569] mt-1 md:mt-3 md:px-5 px-2"
                >
                  {stat.description}
                </p>

                <div
                  className="absolute bottom-0 left-0 w-full h-1"
                  style={{ background: stat.dotColor }}
                ></div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}






