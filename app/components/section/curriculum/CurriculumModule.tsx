"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { svgImages } from "@/app/utils/localImages";
import { Dot, Plus, X } from "lucide-react";

interface Module {
    id: number;
    title: string;
    moduleNumber: string;
    tools: string[];
    technologies: string[];
    topics?: string[];
}

export default function CurriculumModule() {
    const [expandedModule, setExpandedModule] = useState<number | null>(null);

    const modules: Module[] = [
        {
            id: 1,
            moduleNumber: "Module 1",
            title: "Java Programming Basics",
            tools: ["IntelliJ IDEA / Eclipse", "IntelliJ IDEA / Eclipse"],
            technologies: ["Java", "JDK"],
            topics: [
                "Introduction to programming concepts",
                "Understanding Java syntax and program structure",
                "Variables, data types, and operators",
                "Conditional statements and control flow",
                "Loops and basic program logic",
                "Writing and running simple Java programs",
                "Basic coding exercises",
            ],
        },
        {
            id: 2,
            moduleNumber: "Module 2",
            title: "Object-Oriented Programming",
            tools: ["IntelliJ IDEA / Eclipse"],
            technologies: ["Core Java", "OOP Concepts"],
            topics: [
                "Introduction to programming concepts",
                "Understanding Java syntax and program structure",
                "Variables, data types, and operators",
                "Conditional statements and control flow",
                "Loops and basic program logic",
                "Writing and running simple Java programs",
                "Basic coding exercises",
            ],
        },
    ];

    return (
        <section className="relative px-4 md:px-8 lg:px-16 bg-[#F2F6FA]">
            <div className="max-container mx-auto flex justify-center">
                <div className="border-l-0 md:border-l-3 border-r-0 md:border-r-3 border-[#E5E7EB] w-full md:w-fit px-0 md:px-30 relative">

                    <div className="hidden md:block absolute -left-3 top-16">
                        <Plus color="#94A3B8" strokeWidth={1.25} />
                    </div>

                    {/* Top Right Star */}
                    <div className="hidden md:block absolute -right-3 top-16">
                        <Plus color="#94A3B8" strokeWidth={1.25} />
                    </div>

                    {/* Middle Left Star */}
                    <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2">
                        <Plus color="#94A3B8" strokeWidth={1.25} />
                    </div>

                    {/* Middle Right Star */}
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2">
                        <Plus color="#94A3B8" strokeWidth={1.25} />
                    </div>

                    {/* Bottom Left Star */}
                    <div className="hidden md:block absolute -left-3 bottom-24">
                        <Plus color="#94A3B8" strokeWidth={1.25} />
                    </div>

                    {/* Bottom Right Star */}
                    <div className="hidden md:block absolute -right-3 bottom-28">
                        <Plus color="#94A3B8" strokeWidth={1.25} />
                    </div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-left md:text-center mb-4 px-1 md:px-0"
                    >
                        <div className="inline-flex items-center gap-2 mb-2 border border-[#E5E7EB] p-1 px-3 mt-14 rounded-full">
                            <Image src={svgImages.star} alt="star" width={16} height={16} />
                            <span className="text-primary font-12 sm:font-14 font-medium uppercase tracking-wider">
                                Curriculum Modules
                            </span>
                        </div>

                        <h2 className="text-black font-38 md:font-50 font-bold mb-2">
                            Complete Java Developer Curriculum
                        </h2>

                        <p className="text-secondary font-14 sm:font-16 md:font-18 max-w-2xl md:mx-auto">
                            A step-by-step learning structure covering essential programming concepts, backend development, and professional coding practices
                        </p>
                    </motion.div>

                    {/* Modules List */}
                    <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 pb-6 sm:pb-8">
                        {modules.map((module, index) => (
                            <motion.div
                                key={module.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-sm duration-300"
                            >
                                {/* Module Header */}
                                <button
                                    onClick={() =>
                                        setExpandedModule(
                                            expandedModule === module.id ? null : module.id
                                        )
                                    }
                                    className="w-full px-4 sm:px-6 py-6 flex items-start justify-between transition-colors"
                                >
                                    <div className="text-left flex-1">
                                        <p className="primary font-18 sm:font-18 semibold mb-2">
                                            {module.moduleNumber}
                                        </p>
                                        <h3 className="text-black font-24 sm:font-24 md:font-28 medium mb-4">
                                            {module.title}
                                        </h3>

                                        {expandedModule !== module.id && (
                                            <>
                                                <div className="mt-4 border-t border-[#E5E7EB]">
                                                    <p className="text-[#475569] medium font-14 mt-4">Tools</p>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {module.tools.map((tool, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="text-black semibold font-14"
                                                            >
                                                                {tool}
                                                                {idx < module.tools.length - 1 && " | "}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="mt-3">
                                                    <p className="text-[#475569] medium font-14 mb-2">Technologies</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {module.technologies.map((tech, idx) => (
                                                            <span
                                                                key={idx}
                                                                className="text-black semiboldfont-14"
                                                            >
                                                                {tech}
                                                                {idx < module.technologies.length - 1 && "  | "}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <motion.div
                                        animate={{
                                            rotate: expandedModule === module.id ? 0 : 0,
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0 ml-2 sm:ml-4"
                                    >
                                        {expandedModule === module.id ? (
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer bg-black flex items-center justify-center">
                                                <X className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                                            </div>
                                        ) : (
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer bg-[#E5E7EB] flex items-center justify-center">
                                                <Plus strokeWidth={1.25} className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </div>
                                        )}
                                    </motion.div>
                                </button>

                                {/* Module Content - Expandable */}
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: expandedModule === module.id ? "auto" : 0,
                                        opacity: expandedModule === module.id ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-4 sm:px-6 pb-6">
                                        {/* Topics */}
                                        {module.topics && module.topics.length > 0 && (
                                            <div className="mb-6 border border-[#E5E7EB] p-3 sm:p-4">
                                                <ul className="space-y-2">
                                                    {module.topics.map((topic, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="text-[#0F172A] medium font-14 sm:font-14 flex items-start gap-2 sm:gap-3"
                                                        >
                                                            <Dot strokeWidth={1} className="flex-shrink-0 mt-0.5" />
                                                            <span>{topic}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Show Tools and Technologies when expanded */}
                                        <div className="mt-4">
                                            <p className="text-[#475569] medium font-12 sm:font-14 mb-2">Tools</p>
                                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                                {module.tools.map((tool, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-black semibold font-12 sm:font-14"
                                                    >
                                                        {tool}
                                                        {idx < module.tools.length - 1 && " | "}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <p className="text-[#475569] medium font-12 sm:font-14 mb-2">Technologies</p>
                                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                                {module.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-black semibold font-12 sm:font-14"
                                                    >
                                                        {tech}
                                                        {idx < module.technologies.length - 1 && " | "}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
