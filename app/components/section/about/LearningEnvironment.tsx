"use client";
import { useEffect, useState, useRef } from 'react'
import Image from "next/image";
import { pngImages, svgImages } from "@/app/utils/localImages";
import { motion } from "framer-motion";

const BASE = [
    pngImages.image_1
    , pngImages.image_2
    , pngImages.image_3
    , pngImages.image_1
    , pngImages.image_2
    , pngImages.image_3
]

const GAP = 16

const getSizes = (small: boolean) => ({
    LANDSCAPE: small ? { width: 280, height: 210 } : { width: 480, height: 310 },
    PORTRAIT: small ? { width: 190, height: 260 } : { width: 320, height: 440 },
})

const LearningEnv = ({ }: { id?: string; courseData?: any }) => {
    const [small, setSmall] = useState(false)
    const containerRef = useRef(null);

    useEffect(() => {
        const check = () => setSmall(window.innerWidth < 768)
        check()
        window.addEventListener('resize', check)
        return () => window.removeEventListener('resize', check)
    }, [])

    const { LANDSCAPE, PORTRAIT } = getSizes(small)

    const doubled = [...BASE, ...BASE, ...BASE, ...BASE]

    return (
        <section ref={containerRef} className="relative py-18 px-2 md:px-8 lg:px-16 bg-[#0F172A] overflow-hidden">
            <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .marquee-container {
          display: flex;
          animation: marquee-scroll 40s linear infinite;
          gap: 1rem;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

            <div className="max-container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-left md:text-center mb-16 px-4 md:px-0"
                >
                    <div className="inline-flex items-center gap-2 mb-2 border border-[#FFFFFF33] p-1 px-2 rounded-full">
                        <Image src={svgImages.star} alt="star" width={16} height={16} />
                        <span className="text-white font-14 font-medium uppercase tracking-wider">
                            Learning Environment
                        </span>
                    </div>

                    <h2 className="text-white font-38 md:font-50 font-bold mb-2">
                        Inside Our Learning Environment
                    </h2>

                    <p className="text-white font-16 md:font-18 max-w-xl md:mx-auto">
                        A glimpse of our learning sessions, coding practice, and developer-focused training environment
                    </p>
                </motion.div>
            </div>

            <div className="marquee-container">
                {doubled.map((img, i) => {
                    const dim = i % 2 === 0 ? LANDSCAPE : PORTRAIT
                    const isLandscape = i % 2 === 0
                    return (
                        <div
                            key={i}
                            className={`shrink-0 overflow-hidden rounded-sm ${isLandscape ? 'mt-12' : ''}`}
                            style={{ width: dim.width, height: dim.height }}
                        >
                            <Image
                                src={img}
                                alt={`Learning environment ${(i % BASE.length) + 1}`}
                                className="w-full h-full object-cover select-none"
                                draggable={false}
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default LearningEnv


