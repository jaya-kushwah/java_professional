"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { pngImages, svgImages } from "@/app/utils/localImages";
import FAQItem from "../../reusable/FAQItem";

export default function FAQ() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Second item open by default (index 1)

  const faqs = [
    {
      question: "What is the focus of this Java training program?",
      answer:
        "Our training program focuses on building practical backend development skills using Java, Spring Boot, and modern frameworks. You'll learn to build real-world applications, work with databases, create REST APIs, and understand microservices architecture.",
    },
    {
      question: "Do I need prior programming experience to join?",
      answer:
        "No prior programming experience is required. The training starts with programming fundamentals and gradually moves toward advanced Java development. We provide a structured learning path suitable for beginners.",
    },
    {
      question: "What kind of projects will I work on?",
      answer:
        "You'll work on enterprise-level projects including student management systems, e-commerce platforms, and microservices-based applications. These projects simulate real-world development scenarios and help you build a strong portfolio.",
    },
    {
      question: "Will I receive guidance for developer interviews?",
      answer:
        "Yes, we provide comprehensive interview preparation including mock interviews, coding practice, resume building, and guidance on common technical interview questions for Java developer positions.",
    },
    {
      question: "How can I enroll in the program?",
      answer:
        "You can enroll by filling out the registration form on our website or contacting our admissions team. We offer flexible batch timings and both online and offline training options.",
    },
    {
      question: "Is the training suitable for beginners?",
      answer:
        "Absolutely! Our training is designed for beginners with no prior coding experience. We start with programming basics and gradually progress to advanced Java development concepts.",
    },
    {
      question: "What technologies will be covered in the program?",
      answer:
        "The program covers Java, Spring Boot, Hibernate, MySQL, PostgreSQL, REST APIs, Microservices, Docker, Git, and modern development tools. You'll also learn about deployment and DevOps basics.",
    },
    {
      question: "Can graduates from non-technical backgrounds join?",
      answer:
        "Yes, graduates from any background can join. Our curriculum is designed to accommodate learners from diverse educational backgrounds and focuses on building practical development skills from scratch.",
    },
  ];

  return (
    <section className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(360deg, #E5EDFB 0%, #FFFFFF 100%)" }}>
      <div className="max-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
          {/* Left Side - Header */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 "
          >
            <div
              className="mt-2 rounded-md relative bg-white"
            >
              <div className="p-4">
                <div className="inline-flex items-center gap-2 mb-1 border border-[#E5E7EB] p-1 px-2 rounded-full">
                  <Image src={svgImages.star} alt="star" width={16} height={16} />
                  <span className="text-black font-14 font-medium uppercase tracking-wider">
                    FAQ
                  </span>
                </div>
                <h2 className="text-black font-38 md:font-50 bold mb-2 max-w-xl">
                  Frequently Asked <br /> Questions
                </h2>

                <div className="w-20 h-[4px] bg-[#0C78E9] rounded-full mb-4"></div>

                <p className="text-secondary font-14 md:font-16 leading-relaxed">
                  Find answers to common questions about our Java training program,
                  learning approach, and enrollment process
                </p>
              </div>
              
              {/* Image positioned at bottom */}
              <div className="relative w-full h-[229px] md:h-[400px] md:mt-37">
                <Image
                  src={pngImages.faq}
                  alt="FAQ Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - FAQ Items */}
          <div className="lg:col-span-8">
            <div className=" rounded-lg mt-2 border-gray-200 divide-y divide-gray-200 flex flex-col gap-2">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  {...faq}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



