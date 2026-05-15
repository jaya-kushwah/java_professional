"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { pngImages, svgImages } from "@/app/utils/localImages";

export default function Location() {
  return (
    <section className="relative py-18 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left md:text-center mb-8 px-2 md:px-0"
        >
          <div className="inline-flex items-center gap-2 mb-2 border border-[#E5E7EB] p-1 px-3 rounded-full">
            <Image src={svgImages.star} alt="star" width={16} height={16} />
            <span className="text-primary font-14 font-medium uppercase tracking-wider">
              Visit The Institute
            </span>
          </div>

          <h2 className="text-black font-38 md:font-50 font-bold mb-2">
            Our Training Location
          </h2>

          <p className="text-secondary font-16 md:font-18 max-w-3xl md:mx-auto">
            Students can visit the academy to learn more about the training program
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-96 md:h-[617px] rounded-sm overflow-hidden shadow-lg"
        >
          <Image
            src={pngImages.map}
            alt="Training Location Map"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
