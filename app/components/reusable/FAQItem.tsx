"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  index?: number;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ question, answer, index = 0, isOpen, onToggle }: FAQItemProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-b-0 "
    >
      {/* Question Button */}
      <button
        onClick={onToggle}
        className="w-full bg-white rounded-md cursor-pointer p-4 md:p-6 flex items-center justify-between text-left transition-colors duration-200 group "
      >
        <span className="text-gray-900 font-16 medium group-hover:text-primary transition-colors">
          {question}
        </span>

        {/* Toggle Icon */}
        <motion.div
          // animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 w-5 h-5 md:w-8 md:h-8 rounded-full flex items-center justify-center ${isOpen ? "bg-black text-white" : "bg-[#F2F6FA] text-gray-600"
            } transition-colors duration-300`}
        >
            <ArrowDown strokeWidth={2} size={18}/>
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden pb-3 md:pb-6 px-3 md:px-6 bg-white rounded-b"
          >
            <div className=" pr-6 bg-[#EFF4FF] p-3 rounded-md">
              <p className="text-gray-600 font-14 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
