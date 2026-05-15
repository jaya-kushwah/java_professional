"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { svgImages, pngImages } from "@/app/utils/localImages";

interface ProcessStepProps {
    icon: any;
    title: string;
    description: string;
    number: string;
    index: number;
}

function ProcessStep({ icon, title, description, number, index }: ProcessStepProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-[8px] p-4 md:p-6
grid grid-cols-[60px_1fr] 
lg:grid-cols-[90px_70px_1fr]
items-center gap-4
transition-all duration-300"
        >

            {/* Icon Box */}
            <div
                className="w-10 h-10 md:w-22 md:h-22 rounded-[10px]
    flex items-center justify-center shrink-0"
                style={{
                    background: "#EAF4FF",
                }}
            >
                <Image
                    src={icon}
                    alt={title}
                    className="w-6 h-6 md:w-12 md:h-12 object-contain"
                />
            </div>

            {/* Number */}
            <div className="flex items-center justify-end lg:justify-center">
                <span
                    className="text-[28px] md:text-[40px]
      font-bold leading-none"
                    style={{
                        color:
                            number === "01"
                                ? "#1F76F9"
                                : number === "02"
                                    ? "#16B5FF"
                                    : number === "03"
                                        ? "#6C63FF"
                                        : number === "04"
                                            ? "#C93CFF"
                                            : "#5B5BFF",
                    }}
                >
                    {number}
                </span>
            </div>

            {/* Content */}
            <div className="col-span-2 lg:col-span-1 border-t lg:border-t-0 lg:border-l border-[#1F76F91A] pt-2 lg:pt-0 lg:pl-4">
                <h3 className="font-24 font-semibold text-[#111827] mb-2">
                    {title}
                </h3>

                <p className="font-14 leading-[160%] text-[#6B7280]">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

export default function LearningProcess() {
    const headerRef = useRef(null);
    const imageRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });
    const isImageInView = useInView(imageRef, { once: true, margin: "-50px" });

    const processSteps = [
        {
            number: "01",
            icon: svgImages.vector_7,
            title: "Concept Learning",
            description:
                "Students begin by learning fundamental Java concepts including object-oriented programming, core syntax, and development principles required for building software applications.",
        },
        {
            number: "02",
            icon: svgImages.vector_8,
            title: "Hands-On Coding",
            description:
                "Every concept is practiced through coding exercises where learners write programs, solve problems, and develop their understanding through real implementation.",
        },
        {
            number: "03",
            icon: svgImages.vector_9,
            title: "Assignments",
            description:
                "Structured assignments are provided to strengthen programming logic and help students apply what they have learned independently.",
        },
        {
            number: "04",
            icon: svgImages.vector_10,
            title: "Real-Time Projects",
            description:
                "Learners work on practical development projects that simulate real industry environments and software development workflows.",
        },
        {
            number: "05",
            icon: svgImages.vector_11,
            title: "Application Deployment",
            description:
                "Students learn how to prepare, test, and deploy applications, understanding how real software projects are delivered and maintained.",
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
                    className="text-left md:text-center mb-10 md:px-0"
                >
                    <div className="inline-flex items-center gap-2 mb-2 border border-[#1F76F9] p-1 px-2 rounded-[12px]">
                        <Image src={svgImages.star} alt="star" width={16} height={16} />
                        <span className="primary font-14 bold uppercase tracking-wider">
                            LEARNING PROCESS
                        </span>
                    </div>

                    <h2 className="text-black font-38 md:font-52 font-bold mb-2
  text-left md:text-center">
                        Learn <span className="text-[#0036F5]"> the Real Software Development Workflow</span>
                    </h2>

                    <p className="text-secondary font-16 md:font-18 max-w-2xl md:mx-auto">
                        Our structured training model follows the same workflow used by professional software development teams, helping learners gain practical coding experience and real project exposure.
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[400px_60px_1fr] gap-8 items-stretch">
                    <div>
                        <motion.div
                            ref={imageRef}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-end justify-center ">
                                <Image
                                    src={pngImages.girl_img}
                                    alt="Training Workflow"
                                    className="object-contain w-full max-w-[400px]"
                                />
                            </div>
                        </motion.div>
                    </div>

                    <div className="hidden lg:flex justify-center relative">
                        <div className="absolute top-16 bottom-16 border-l-3 border-dashed border-gray-400"></div>
                        <div className="relative z-10 flex flex-col justify-between py-16">
                            <div className="w-4 h-4 rounded-full bg-white border-2 border-[#1871f7] shadow-[0_0_12px_rgba(31,118,249,0.7)]"></div>
                            <div className="w-4 h-4 rounded-full bg-white border-2 border-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)]"></div>
                            <div className="w-4 h-4 rounded-full bg-white border-2 border-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.7)]"></div>
                            <div className="w-4 h-4 rounded-full bg-white border-2 border-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.7)]"></div>
                            <div className="w-4 h-4 rounded-full bg-white border-2 border-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.7)]"></div>
                        </div>
                    </div>

                    <div className="space-y-6 self-center">
                        {processSteps.map((step, index) => (
                            <ProcessStep key={index} {...step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
