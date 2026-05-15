"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { pngImages, svgImages } from "@/app/utils/localImages";

export default function StudentProject() {
  const projects = [
    {
      id: 1,
      title: "Student Management System",
      image: pngImages.image_1,
      tags: ["Java", "Spring Boot", "MySQL"],
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      image: pngImages.image_2,
      tags: ["Spring Boot", "React", "REST APIs"],
    },
    {
      id: 3,
      title: "Microservices Order System",
      image: pngImages.image_7,
      tags: ["Spring Cloud", "Docker"],
    },
    {
      id: 4,
      title: "Microservices Order System",
      image: pngImages.image_8,
      tags: ["Spring Cloud", "Docker"],
    },
    {
      id: 5,
      title: "Institute Management System",
      image: pngImages.image_9,
      tags: ["Java", "Spring Boot", "MySQL"],
    },
    {
      id: 6,
      title: "AI Chat Bot",
      image: pngImages.image_3,
      tags: ["Spring Boot", "React", "REST APIs"],
    },
  ];

  return (
    <section className="relative py-18 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left md:text-center mb-8 px-1 md:px-0"
        >
          <div className="inline-flex items-center gap-2 mb-2 border border-[#E5E7EB] p-1 px-3 rounded-full">
            <Image src={svgImages.star} alt="star" width={16} height={16} />
            <span className="text-primary font-14 font-medium uppercase tracking-wider">
              Student Projects
            </span>
          </div>

          <h2 className="text-black font-38 md:font-50 font-bold mb-2">
            Enterprise Projects Built by Our Developers
          </h2>

          <p className="text-secondary font-16 md:font-18 max-w-xl md:mx-auto">
            Students build complete applications using modern backend architectures and frameworks
          </p>
        </motion.div>

        {/* Projects Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Project Image */}
              <motion.div
                className="relative h-64 md:h-[484px] rounded-sm overflow-hidden mb-4"
                // whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:brightness-110 transition-all duration-300"
                />
              </motion.div>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
              >
                <h3 className="text-black font-24 md:font-28 semibold mb-3">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-4 py-2 bg-[#F2F6FA] text-[#475569] font-16 rounded-full"
                      whileHover={{ backgroundColor: "#E5E7EB" }}
                      transition={{ duration: 0.2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
