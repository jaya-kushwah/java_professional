"use client";

import Image from "next/image";
import Button from "../../reusable/Button";
import JourneyStepChart, { JourneyChartDataPoint } from "../../reusable/JourneyStepChart";
import { svgImages } from "@/app/utils/localImages";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Step {
  id: number;
  side: "left" | "right";
  title: string;
  description: string;
  chartData?: JourneyChartDataPoint[];
}

const steps: Step[] = [
  {
    id: 1,
    side: "right",
    title: "Student",
    description:
      "Individuals who want to start their career in software development begin their journey by joining our Java learning program.",
  },
  {
    id: 2,
    side: "left",
    title: "Java Training",
    description:
      "Students learn core Java concepts, object-oriented programming, frameworks, and industry development practices through guided training sessions.",

  },
  {
    id: 3,
    side: "right",
    title: "Real Projects",
    description:
      "Learners work on practical development projects that simulate real industry environments and strengthen their coding and problem-solving skills.",

  },
  {
    id: 4,
    side: "left",
    title: "Developer Portfolio",
    description:
      "Students build a strong developer portfolio including project work, code samples, and technical skills that showcase their abilities.",

  },
  {
    id: 5,
    side: "right",
    title: "Interview Preparation",
    description:
      "Focused preparation sessions help learners practice coding challenges, technical interviews, and communication skills required for developer roles.",
  },
];

export default function AgentJourneyPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  return (
    <section className="relative py-12 bg-[#0F172A] overflow-hidden px-4">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={
          isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <div className="w-full flex justify-start md:justify-center">
          <div className="inline-flex items-center gap-2 p-1
    border border-[#FFFFFF33] rounded-full 
    text-white uppercase tracking-wider">

            <Image
              src={svgImages.star}
              alt="star" width={16} height={16}
            />

            <span className="font-16">
              Developer Journey
            </span>
          </div>
        </div>

        <h2 className="text-white font-38 md:font-50 font-bold mb-2 
  text-left md:text-center">
          From Student to Professional Java
          <br />
          Developer
        </h2>

        <p className="text-white font-16 md:font-18 max-w-xl mx-auto mb-4 
  text-left md:text-center">
          Our training model transforms beginners into industry-ready
          developers through structured learning, real projects, and interview
          preparation.
        </p>
        <div className="flex justify-center">
          <Button
            text="Developer Journey Timeline"
            variant="primary"
            className="bg-gradient-to-r from-[#38BDF8] to-[#A855F7] rounded-md "
          />
        </div>
      </motion.div>
      
      <div className="relative max-w-4xl mx-auto px-4">
        <div className="flex flex-col gap-2 md:gap-3">
          {steps.map((step, index) => {
            const stepRef = useRef(null);
            const isStepInView = useInView(stepRef, { once: true, margin: "-30px" });
            
            return (
              <motion.div
                key={step.id}
                ref={stepRef}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-start ${index > 0 ? 'md:-mt-36' : ''}`}
              >
                {step.side === "right" && (
                  <div className="hidden md:block md:w-1/2" />
                )}

                <div className="w-full md:w-1/2 relative">
                  <div className="mb-4 md:mb-2 absolute md:pl-4 pl-4">
                    <motion.h3 
                      className="font-semibold text-base md:text-xl md:mb-2"
                      initial={{ color: "#ffffff" }}
                      animate={isStepInView ? { color: "#4f8ef7" } : { color: "#ffffff" }}
                      transition={{ duration: 0.8, delay: index * 0.15 + 0.4, ease: "easeOut" }}
                    >
                      {step.title}
                    </motion.h3>
                    <p className="text-[#F2F6FA] text-xs md:text-sm leading-relaxed max-w-full md:max-w-[350px]">
                      {step.description}
                    </p>
                  </div>

                  <div className="md:mt-2">
                    <StepChartCard data={step.chartData} index={index} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepChartCard({ data, index }: { data?: JourneyChartDataPoint[]; index: number }) {
  const chartRef = useRef(null);
  const isChartInView = useInView(chartRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={chartRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isChartInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.2, delay: index * 0.2, ease: "easeOut" }}
      className="w-full overflow-hidden relative py-1"
    >
      {/* Mobile Chart */}
      <div className="block md:hidden">
        <JourneyStepChart 
          data={data} 
          width={140} 
          height={230}
          animated={isChartInView}
          animationDelay={index * 0.2}
        />
      </div>
      
      {/* Desktop Chart */}
      <div className="hidden md:block">
        <JourneyStepChart 
          data={data} 
          width={170} 
          height={342}
          animated={isChartInView}
          animationDelay={index * 0.2}
        />
      </div>
    </motion.div>
  );
}
