"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Button from "@/app/components/reusable/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { pngImages, svgImages } from "@/app/utils/localImages";

const features = [
  {
    id: 1,
    title: "Hands-On Learning",
    description: "Work on real projects and gain practical experience.",
    color: "#216CFD",
    bgGradient: "bg-[#06153C]",
    // Blue filter for #216CFD
    filter: "brightness(0) saturate(100%) invert(35%) sepia(98%) saturate(2447%) hue-rotate(210deg) brightness(102%) contrast(98%)"
  },
  {
    id: 2,
    title: "Expert Mentors",
    description: "Learn from industry professionals.",
    color: "#8B5CF6",
    bgGradient: "bg-[#7E23FB1A]",
    // Purple filter for #8B5CF6
    filter: "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(2466%) hue-rotate(246deg) brightness(98%) contrast(95%)"
  },
  {
    id: 3,
    title: "Career Growth",
    description: "Build in-demand skills and advance your career.",
    color: "#216CFD",
    bgGradient: "bg-[#122F70]",
    // Blue filter for #216CFD
    filter: "brightness(0) saturate(100%) invert(35%) sepia(98%) saturate(2447%) hue-rotate(210deg) brightness(102%) contrast(98%)"
  },
  {
    id: 4,
    title: "Certification",
    description: "Earn a certificate and boost your profile.",
    color: "#F38402",
    bgGradient: "bg-[#F384021A]",
    // Keep original orange color - no filter needed
    filter: "sepia(1) saturate(6) hue-rotate(-10deg) brightness(1.05)"
  }
];

export default function CTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative py-18 sm:py-16 md:py-20 bg-[#010714] overflow-hidden"
        >
            {/* Decorative SVG Elements */}
            <div className="absolute bottom-0 left-0 w-15 h-23 sm:w-28 sm:h-44 md:w-40 md:h-60 opacity-60 sm:opacity-75 md:opacity-90">
                <Image
                    src={pngImages.image_6}
                    alt="decoration"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="absolute top-0 right-0 w-15 h-23 sm:w-28 sm:h-44 md:w-40 md:h-60 opacity-60 sm:opacity-75 md:opacity-90">
                <Image
                    src={pngImages.image_6}
                    alt="decoration"
                    fill
                    className="object-contain  rotate-180"
                />
            </div>

            <div className="absolute top-1/2 left-4 sm:left-8 md:left-50 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-50 sm:opacity-60 md:opacity-70">
                <Image
                    src={svgImages.flag}
                    alt="rocket decoration"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Right Side Decorations */}
            <div className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 opacity-70 sm:opacity-85 md:opacity-100">
                <Image
                    src={svgImages.zigzag}
                    alt="zigzag decoration"
                    fill
                    className="object-contain"
                />
            </div>

            <div className="absolute top-4 right-4 sm:right-12 md:right-70 w-14 h-14 sm:w-18 sm:h-18 md:w-24 md:h-24 opacity-50 sm:opacity-60 md:opacity-70">
                <Image
                    src={svgImages.rocket}
                    alt="flag decoration"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Content */}
            <div className="max-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#1E3A8A] rounded-full bg-[#0A1628]">
                        <Image src={svgImages.star} alt="star" width={16} height={16} />
                        <span className="text-[#79A4FF] font-14 font-medium uppercase tracking-wider">
                            Learning Environment
                        </span>
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-white font-62 leading-tight font-semibold mb-4" 
                >
                    Become a Professional
                    <br />  <span className="primary ">Java Developer</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-300 font-16 max-w-2xl mx-auto mb-12"
                >
                    Join our training program and start building real software applications.
                </motion.p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl  mx-auto ">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                            className="flex justify-center flex-col items-center"
                        >
                            {/* Icon Container */}
                            <div 
                                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden mx-auto"
                                style={{ 
                                    background: `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}10 100%)`,
                                    border: `1px solid #122F70`
                                }}
                            >
                                {/* Glow Effect */}
                                <div 
                                    className="absolute inset-0 blur-xl opacity-30"
                                    style={{ background: feature.color }}
                                ></div>
                                
                                {/* Icon */}
                                <div className="relative z-10">
                                    <Image
                                        src={svgImages.mind_icon}
                                        alt={feature.title}
                                        width={32}
                                        height={32}
                                        className="object-contain"
                                        style={{ 
                                            filter: feature.filter,
                                            WebkitFilter: feature.filter
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="font-24 font-bold mb-2 text-white">
                                {feature.title}
                            </h3>
                            <p className="text-white/80 font-16 leading-relaxed w-60">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Book Demo Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex justify-center"
                >
                    <Button
                        text="Book Demo Class"
                        icon={<ArrowRight size={18} strokeWidth={1.75} />}
                        variant="secondary"
                        className="primary border-none"
                    />
                </motion.div>
            </div>
        </section>
    );
}
