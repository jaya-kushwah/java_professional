
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { svgImages } from "@/app/utils/localImages";
import Image from "next/image";

export default function BuildingSkills() {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true });
    const stats = [
        {
            number: "500+",
            label: "Students Trained",
            icon: svgImages.icon_7,
            circleColor: "linear-gradient(to bottom, #DBE4FE, #FFFFFF)",
            numberColor: "#1F76F9",
            Color: "#CEDAFD",
            underlineColor: "#CBD8FD",
        },
        {
            number: "120+",
            label: "Practical Projects",
            icon: svgImages.icon_8,
            circleColor: "linear-gradient(to bottom, #CBFACA, #FFFFFF)",
            numberColor: "#33BE31",
            Color: "#D4FCD1",
            underlineColor: "#c7dfd0ff",
        },
        {
            number: "40+",
            label: "Hiring Connections",
            icon: svgImages.icon_9,
            circleColor: "linear-gradient(to bottom, #EEE7FE, #FFFFFF)",
            numberColor: "#9160F4",
            Color: "#E1D1FD",
            underlineColor: "#cbb3e1ff",
        },
        {
            number: "90%",
            label: "Dev Learners",
            icon: svgImages.icon_10,
            circleColor: "linear-gradient(to bottom, #FFE8D3, #FFFFFF)",
            numberColor: "#FE7703",
            Color: "#FEDABA",
            underlineColor: "#e3c3adff",
        },
    ];

    return (
        <section className="relative py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
                                Our Impacts
                            </span>
                        </div>
                    </div>

                    <h2 className="text-black font-38 md:font-52 font-bold mb-2
  text-left md:text-center">
                        Building Skilled <span className="text-[#0036F5]">Java Developers</span>
                    </h2>

                    <p className="text-[#475569] font-16 md:font-18 max-w-xl mx-auto mb-2 
  text-left md:text-center">
                        Our structured training approach has helped many learners build real development
                        skills and grow their careers in software development.
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
                                className="relative bg-white rounded-[12px] shadow-sm
  border border-gray-100 h-37 md:h-[260px] md:w-75 
  flex flex-col items-center justify-start text-center overflow-hidden"
                            >
                                <div
                                    className="relative z-10 
  w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20
  rounded-full shrink-0 border mt-3 md:mt-7
  flex items-center justify-center"
                                    style={{
                                        background: stat.circleColor,
                                        borderColor: stat.Color,
                                    }}
                                >
                                    <Image
                                        src={stat.icon}
                                        alt={stat.label}
                                        width={40}
                                        height={40}
                                        className="w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                                    />
                                </div>

                                <h3
                                    className="relative z-10 
        text-[22px] sm:text-[42px] md:text-[38px]
        leading-none font-bold mt-2 md:mt-4 "
                                    style={{ color: stat.numberColor }}
                                >
                                    {stat.number}
                                </h3>

                                <div
                                    className="relative z-10 
        w-8 sm:w-12 h-[3px] rounded-sm mt-2"
                                    style={{ background: stat.numberColor }}
                                ></div>

                                <p
                                    className="relative z-10 
text-xs sm:text-base md:text-lg
leading-[140%] font-bold text-gray-700 mt-2 md:mt-4"
                                >
                                    {stat.label}
                                </p>

                                <div
                                    className="absolute bottom-0 left-0 w-full h-1"
                                    style={{ background: stat.numberColor }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}






