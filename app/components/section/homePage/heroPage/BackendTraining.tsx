

import Image from "next/image";
import { pngImages, svgImages } from "@/app/utils/localImages";
import Link from "next/link";
import {
  ArrowRight, BriefcaseBusiness,
  Code2,
  ChartNoAxesColumn,
  GraduationCap,
  Layers3,
  Users,
  BookOpen,
} from "lucide-react";

export default function BackendTraining() {
  const features = [
    {
      title: "High Availability",
      subtitle: "99.99% Uptime",
      icon: BriefcaseBusiness,
      color: "#63D15F",
      bg: "#63D15F1A",
    },
    {
      title: "Scalable",
      subtitle: "Auto Scaling",
      icon: Code2,
      color: "#A855F7",
      bg: "#A855F71A",
    },
    {
      title: "Secure",
      subtitle: "Best Practices",
      icon: ChartNoAxesColumn,
      color: "#FACC15",
      bg: "#FACC151A",
    },
    {
      title: "Fault Tolerant",
      subtitle: "Resilient Systems",
      icon: GraduationCap,
      color: "#A855F7",
      bg: "#A855F71A",
    },
  ];


  const roadmap = [
    {
      title: "Java Fundamentals",
      subtitle: "Core Java, Collections, Exception Handling",
      icon: Code2,
      color: "#63D15F",
      bg: "#63D15F1A",
      arrow: "#8B5CF6",
    },
    {
      title: "OOP & Advanced Java",
      subtitle: "OOP Principles, Generics, Streams, Concurrency",
      icon: Layers3,
      color: "#A855F7",
      bg: "#A855F71A",
      arrow: "#F97316",
    },
    {
      title: "SOLID Principles",
      subtitle: "Write clean, maintainable and scalable code",
      icon: ChartNoAxesColumn,
      color: "#F97316",
      bg: "#F973161A",
      arrow: "#2563EB",
    },
    {
      title: "Design Patterns",
      subtitle: "Creational, Structural & Behavioral Patterns",
      icon: Users,
      color: "#2563EB",
      bg: "#2563EB1A",
      arrow: "#63D15F",
    },
    {
      title: "LLD",
      subtitle: "Class Diagrams, OOP Design, Best Practices",
      icon: BookOpen,
      color: "#63D15F",
      bg: "#63D15F1A",
      arrow: "#8B5CF6",
    },
    {
      title: "HLD",
      subtitle: "Architecture Components, Databases, APIs",
      icon: Layers3,
      color: "#A855F7",
      bg: "#A855F71A",
      arrow: "#F97316",
    },
    {
      title: "Scalable Systems",
      subtitle: "Microservices, Distributed Systems, Real-world Scale",
      icon: ChartNoAxesColumn,
      color: "#F97316",
      bg: "#F973161A",
    },
  ];

  return (
    <section className="relative h-[81vh] md:h-[85vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={pngImages.backendTraining}
          alt="Hero Background"
          fill
          className="object-fill"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">

            {/* Left Side - Content */}
            <div className="text-white flex flex-col items-start  h-full justify-around px-4 lg:px-0">

              <div className="max-w-7xl mt-6 md:mt-12">
                <div className="inline-flex items-center gap-2 border border-[#1A72F5] p-1 px-2 rounded-full">
                  <Image src={svgImages.star} alt="star" width={16} height={16} />
                  <span className="primary font-10 medium uppercase tracking-wider">
                    Industry-Focused Backend Engineering Training
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl bold black leading-tight">
                  Master System<br />
                  Design. Build <span className="text-[#1A72F5]">Scalable Java Applications.</span>
                </h1>
                <p className="font-14 sm:text-xl black max-w-xl mt-4">
                  Learn LLD, HLD, SOLID Principles, Design Patterns, Microservices and Distributed Architecture through real-world Java projects.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
                  <Link
                    href="/curriculum"
                    className=" sm:w-auto w-fit flex md:inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2 bg-[#1A72F5] text-white rounded-md transition-all duration-300 text-sm sm:text-base"
                  >
                    Start Developer Training
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    href="/course"
                    // className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-sm sm:text-base"
                    className=" sm:w-auto w-fit flex md:inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2 border border-[#475569] text-[#0F172A] rounded-md transition-all duration-300 text-sm sm:text-base"
                  >
                    View Cirriculum
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="sm:mb-20 mt-22 w-full px-0 lg:px-0 rounded-md">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {features.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div key={index} className="flex items-start gap-3">

                        {/* Icon */}
                        <div
                          className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: item.bg,
                          }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: item.color }}
                          />
                        </div>

                        {/* Content */}
                        <div>
                          <h3 className="text-[#111827] semibold font-14 leading-[20px] whitespace-nowrap">
                            {item.title}
                          </h3>

                          <p className="text-[#6B7280] font-14 leading-[18px] mt-1 whitespace-nowrap">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:flex items-center justify-center relative ">
              <div className="relative w-full h-[620px] ">
                <Image
                  src={pngImages.webImg}
                  alt="System Design Architecture"
                  fill
                  className="object-contain "
                />
              </div>
            </div>
          </div>

          <div className="lg:px-0 mt-[-52px]">
            <div className="w-[160vh] bg-[#F8FAFC] rounded-md px-3 py-2 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-2 items-center">

                {/* Left Content */}
                <div>
                  <p className="text-[#2563EB] font-16 semibold">
                    Learn In-Demand Skills
                  </p>

                  <h2 className="leading-[42px] font-28 bold text-[#0F172A] mb-2">
                    Industry-Ready
                    Backend Engineer
                  </h2>

                  <p className="text-[#64748B] font-14 leading-[22px]">
                    Master Spring AI, LLMs and modern frameworks used by top companies.
                  </p>
                </div>

                {/* Roadmap */}
                <div className="flex flex-wrap lg:flex-nowrap items-start">
                  {roadmap.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-start"
                      >
                           
                        {/* Card */}
                        <div className="min-w-[120px] text-center">

                          {/* Icon + Arrow */}
                          <div className="flex items-center justify-center">

                            {/* Icon */}
                            <div
                              className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 "
                              style={{
                                backgroundColor: item.bg,
                                border: `1px solid ${item.color}`,
                              }}
                            >
                              <Icon
                                className="w-6 h-6"
                                style={{ color: item.color }}
                              />
                            </div>

                         
                          </div>

                          <h3 className="font-12 font-bold text-[#0F172A] mt-4 leading-[20px] whitespace-nowrap">
                            {item.title}
                          </h3>

                          <p className="font-12 leading-[18px] text-[#475569] mt-1">
                            {item.subtitle}
                          </p>
                        </div>
                        {/* Arrow */}
                            {index !== roadmap.length - 1 && (
                              <div className="hidden lg:flex items-center pt-8">
                                <Image
                                  src={svgImages.arrow}
                                  alt="arrow"
                                  className="object-contain px-2 w-full h-full"
                                  style={{
                                    filter:
                                      item.arrow === "#8B5CF6"
                                        ? "invert(45%) sepia(78%) saturate(748%) hue-rotate(235deg)"
                                        : item.arrow === "#F97316"
                                          ? "invert(58%) sepia(88%) saturate(1861%) hue-rotate(351deg)"
                                          : item.arrow === "#2563EB"
                                            ? "invert(32%) sepia(99%) saturate(1806%) hue-rotate(217deg)"
                                            : "invert(67%) sepia(47%) saturate(602%) hue-rotate(67deg)",
                                  }}
                                />
                              </div>
                            )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}









