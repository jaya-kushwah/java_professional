"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { svgImages, pngImages } from "@/app/utils/localImages";
import ProjectCard from "../../reusable/ProjectCard";
import Button from "../../reusable/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function StudentProjects() {
    const headerRef = useRef(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isHeaderInView = useInView(headerRef, { once: true });
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    // Check scroll position
    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    // Scroll to previous
    const scrollToPrevious = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -420, // Card width + gap
                behavior: "smooth",
            });
            setTimeout(checkScroll, 300);
        }
    };

    // Scroll to next
    const scrollToNext = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 420, // Card width + gap
                behavior: "smooth",
            });
            setTimeout(checkScroll, 300);
        }
    };

    const projects = [
        {
            title: "Student Management System",
            image: pngImages.image_1,
            technologies: ["Java", "Spring Boot", "MySQL"],
        },
        {
            title: "E-Commerce Platform",
            image: pngImages.image_2,
            technologies: ["Spring Boot", "React", "REST APIs"],
        },
        {
            title: "Microservices Architecture",
            image: pngImages.image_3,
            technologies: ["Spring Cloud", "Docker", "Kubernetes"],
        },
        {
            title: "Microservices Architecture",
            image: pngImages.image_1,
            technologies: ["Spring Cloud", "Docker", "Kubernetes"],
        },
        {
            title: "E-Commerce Platform",
            image: pngImages.image_2,
            technologies: ["Spring Boot", "React", "REST APIs"],
        },
    ];

    return (
        <section className="relative py-8 bg-[#010919] overflow-hidden">
            {/* Header Section - Contained */}
            <div className="max-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                            Student Projects
                        </span>
                    </div>

                    <h2 className="text-white font-38 md:font-50 font-semibold mb-2">
                        Enterprise Projects Built by Our Developers
                    </h2>

                    <p className="text-[#F2F6FA] font-16 md:font-18 max-w-xl md:mx-auto">
                        Students build complete applications using modern backend architectures and frameworks
                    </p>
                </motion.div>
            </div>

            {/* Projects Section - Full Width on Desktop */}
            <div className="relative">
                {/* Projects Horizontal Scroll Container */}
                <div className="md:pl-[max(1rem,calc((99vw-1370px)/2))] px-4 md:px-0 ">
                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`${index === 0 ? 'pl-0' : ''}`}
                            >
                                <ProjectCard {...project} index={index} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons - Contained */}
                <div className="flex justify-center md:justify-between items-center max-w-8xl mx-auto">
                    {/* Empty space for balance - Desktop only */}
                    <div className="hidden md:block w-24"></div>

                    {/* View All Button - Center */}
                    <Button
                        text="View All"
                        variant="secondary"
                        icon={<ArrowRight size={20} />}
                        className="bg-white mt-4 whitespace-nowrap primary border-none outline-none focus:outline-none focus:ring-0"
                    />

                    {/* Navigation Buttons - Right side (Desktop only) */}
                    <div className="hidden md:flex gap-4 mt-3">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToPrevious}
                            disabled={!canScrollLeft}
                              className="w-10 h-10 -ml-[80%] rounded-full bg-white cursor-pointer flex items-center justify-center text-[#181B1D] hover:text-white hover:bg-[#1F76F9] transition"
                            aria-label="Previous"
                        >
                            <ArrowLeft strokeWidth={1.25} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToNext}
                            disabled={!canScrollRight}
                            //   className="w-10 h-10 rounded-sm bg-white cursor-pointer flex items-center justify-center text-[#181B1D] hover:text-white hover:bg-[#1F76F9] transition"
                             className="w-10 h-10 rounded-full bg-[#1F76F9] cursor-pointer flex items-center justify-center text-white hover:bg-[#1a6ae6] transition"
                            aria-label="Next"
                        >
                            <ArrowRight strokeWidth={1.25} />
                        </motion.button>
                    </div>
                </div>
            </div>
            {/* </div> */}

            {/* Custom scrollbar hide styles */}
            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
        .scroll-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
        </section>
    );
}
