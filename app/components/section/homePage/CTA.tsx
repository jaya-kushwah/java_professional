"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Button from "@/app/components/reusable/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { pngImages, svgImages } from "@/app/utils/localImages";

export default function CTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative py-18 sm:py-16 md:py-20 bg-[#0F172A] overflow-hidden"
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
                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-white text-[28px] sm:text-[34px] md:font-50 font-semibold mb-4"
                >
                    Become a Professional Java Developer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-gray-300 text-[14px] sm:font-16 md:font-18 max-w-2xl mx-auto mb-8"
                >
                    Join our training program and start building real software applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
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
