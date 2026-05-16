"use client";

import Image from "next/image";
import { svgImages, pngImages } from "@/app/utils/localImages";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import StudentGrowthCard from "./StudentGrowthCard";
import RoadWithCharacter from "./RoadWithCharacter";

interface JourneyStep {
  id: number;
  title: string;
  description: string;
  growthPoints: string[];
  chartColor: string;
}

const journeySteps: JourneyStep[] = [
  {
    id: 1,
    title: "Student",
    description: "Individuals who want to start their career in software development begin their journey by joining our Java learning program.",
    growthPoints: [
      "Understand programming basics",
      "Gain motivation & direction",
      "Build a strong learning foundation"
    ],
    chartColor: "#3B82F6"
  },
  {
    id: 2,
    title: "Java Training",
    description: "Students learn core Java concepts, object-oriented programming, frameworks, and industry development practices through guided training sessions.",
    growthPoints: [
      "Stronger problem-solving skills",
      "Deeper understanding of Java",
      "Confidence in coding"
    ],
    chartColor: "#8B5CF6"
  },
  {
    id: 3,
    title: "Real Projects",
    description: "Learners work on practical development projects that simulate real industry environments and strengthen their coding and problem-solving skills.",
    growthPoints: [
      "Real-world experience",
      "Hands-on learning",
      "Better understanding of tools and best practices"
    ],
    chartColor: "#3B82F6"
  },
  {
    id: 4,
    title: "Developer Portfolio",
    description: "Students build a strong developer portfolio including project work, code samples, and technical skills that showcase their abilities.",
    growthPoints: [
      "Professional portfolio",
      "Showcase technical skills",
      "Stand out to recruiters"
    ],
    chartColor: "#8B5CF6"
  },
  {
    id: 5,
    title: "Interview Preparation",
    description: "Focused preparation sessions help learners practice coding challenges, technical interviews, and communication skills required for developer roles.",
    growthPoints: [
      "Interview-ready confidence",
      "Strong communication skills",
      "Job-ready mindset"
    ],
    chartColor: "#3B82F6"
  }
];

export default function DeveloperJourney() {
  const headerRef = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const updateSectionHeight = () => {
      if (cardsContainerRef.current) {
        const height = cardsContainerRef.current.scrollHeight;
        setSectionHeight(height);
      }
    };

    // Initial update
    setTimeout(updateSectionHeight, 100);
    
    // Update on resize
    window.addEventListener('resize', updateSectionHeight);
    
    // Update when content changes
    const observer = new MutationObserver(updateSectionHeight);
    if (cardsContainerRef.current) {
      observer.observe(cardsContainerRef.current, {
        childList: true,
        subtree: true,
        attributes: true
      });
    }

    return () => {
      window.removeEventListener('resize', updateSectionHeight);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate when section is in viewport
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        // Calculate progress based on section position
        const visibleHeight = Math.min(windowHeight, sectionTop + sectionHeight) - Math.max(0, sectionTop);
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight)));
        
        setScrollProgress(progress);
        setCurrentStage(Math.min(Math.floor(progress * journeySteps.length), journeySteps.length - 1));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-20 bg-[#03091E] overflow-hidden min-h-screen">
      {/* Header Section */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16 px-4"
      >
        <div className="w-full flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#1E3A8A] rounded-full bg-[#0A1628]">
            <Image src={svgImages.star} alt="star" width={16} height={16} />
            <span className="text-[#79A4FF] font-14 font-medium uppercase tracking-wider">
              Developer Journey
            </span>
          </div>
        </div>

        <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
          From Student to Professional Java
          <br />
          Developer
        </h2>

        <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-6">
          Our training model transforms beginners into industry-ready developers through structured learning, real projects, and interview preparation.
        </p>

        <button className="px-6 py-3 bg-gradient-to-r from-[#38BDF8] to-[#A855F7] text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
          Developer Journey Timeline
        </button>
      </motion.div>

      {/* Journey Steps with Road */}
      <div className="relative px-4">
        <div className="flex gap-8 lg:gap-12 max-w-7xl mx-auto relative">
          
          {/* Left Side - Winding Road with Moving Character (Desktop Only) */}
          <div className="hidden lg:block lg:w-[350px] xl:w-[400px] flex-shrink-0 absolute left-0 top-0">
            <div 
              className="sticky top-24" 
              style={{ 
                height: sectionHeight ? `${sectionHeight}px` : '800px',
                maxHeight: 'none'
              }}
            >
              <RoadWithCharacter 
                scrollProgress={scrollProgress} 
                currentStage={currentStage}
                sectionHeight={sectionHeight}
              />
            </div>
          </div>

          {/* Right Side - Journey Cards */}
          <div ref={cardsContainerRef} className="flex-1 space-y-6 lg:ml-[380px] xl:ml-[430px]">
            {journeySteps.map((step, index) => (
              <div key={step.id}>
                <StudentGrowthCard
                  step={step}
                  index={index}
                />
              </div>
            ))}

            {/* Final Success Banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden  pl-10 min-h-[300px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={pngImages.route_bg}
                  alt="Success Background"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 z-[1]"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-white/90 text-sm md:text-base font-medium mb-2">
                    YOU'RE NOW A
                  </p>
                  <h3 className="text-white text-3xl md:text-4xl font-bold mb-2">
                    PROFESSIONAL JAVA
                    <br />
                    DEVELOPER!
                  </h3>
                  <p className="text-white/80 text-sm md:text-base">
                    Ready to build your career and create a lasting impact.
                  </p>
                </div>
                
                <div className="relative">
                    <Image 
                      src={svgImages.trophy} 
                      alt="Trophy" 
                      width={100} 
                      height={100}
                      className="w-auto h-auto animate-float"
                    />
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#38BDF8] to-[#A855F7] opacity-20 blur-2xl rounded-full"></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8B5CF6]/10 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
