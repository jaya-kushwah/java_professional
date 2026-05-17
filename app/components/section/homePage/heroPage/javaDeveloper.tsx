

import Image from "next/image";
import { pngImages, svgImages } from "@/app/utils/localImages";
import Link from "next/link";
import {
  ArrowRight, BriefcaseBusiness,
  Code2,
  ChartNoAxesColumn,
  GraduationCap,
} from "lucide-react";


export default function JavaDeveloper() {
  const technologies = [
    { name: "Java", icon: svgImages.javaa },
    { name: "Spring", icon: svgImages.spring3d },
    { name: "Hibernate", icon: svgImages.zigzag3d },
    { name: "React", icon: svgImages.react3d },
    { name: "Angular", icon: svgImages.angular3d },
    { name: "Docker", icon: svgImages.docker3d },
    { name: "GitHub", icon: svgImages.git3d },
    { name: "AI", icon: svgImages.ai },
  ];

  const features = [
    {
      title: "Work on real-time enterprise projects",
      description:
        "Gain hands-on experience by building industry-level applications.",
      icon: BriefcaseBusiness,
      color: "#1F76F9",
    },
    {
      title: "Learn industry-standard tools & frameworks",
      description:
        "Gain hands-on experience by building industry-level applications.",
      icon: Code2,
      color: "#6D28F8",
    },
    {
      title: "Build a professional developer portfolio",
      description:
        "Create impactful projects that showcase your skills.",
      icon: ChartNoAxesColumn,
      color: "#11C5D9",
    },
    {
      title: "Get trained for real software development roles",
      description:
        "Preparation and career support.",
      icon: GraduationCap,
      color: "#FF9800",
    },
  ];

  return (
    <section className="relative h-[81vh] md:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={pngImages.java_img}
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

              <div className="max-w-7xl mt-3 md:mt-10">
                <div className="inline-flex items-center gap-2 border border-[#1A72F5] p-1 px-2 rounded-full">
                  <Image src={svgImages.star} alt="star" width={16} height={16} />
                  <span className="primary font-14 font-medium uppercase tracking-wider">
                    Learning Environment
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl bold black leading-tight">
                  Become an <br />Industry-
                  Ready<br /> <span className="text-[#1A72F5]">Java Developer</span>
                </h1>
                <p className="font-14 sm:text-xl text-[#0F172A] max-w-xl mt-2">
                  Learn modern Java technologies and build real enterprise applications through practical, project-based training
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-3 w-full sm:w-auto">
                  <Link
                    href="/curriculum"
                    className=" sm:w-auto w-fit flex md:inline-flex items-center justify-center gap-2 px-2 sm:px-6 py-1 sm:py-2 bg-[#1A72F5] text-white rounded-md transition-all duration-300 text-sm sm:text-base"
                  >
                    Start Developer Training
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    href="/course"
                    // className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-sm sm:text-base"
                    className=" sm:w-auto w-fit flex md:inline-flex items-center justify-center gap-2 px-2 sm:px-6 py-1 sm:py-2 border border-[#0F172A] text-[#0F172A] rounded-md transition-all duration-300 text-sm sm:text-base"
                  >
                    View Cirriculum
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="sm:mb-20 mt-3 md:mt-4 w-full px-0 lg:px-0 bg-white rounded-[18px]">
                <div className=" inline-block  border-[#FFFFFF4D] ">
                  <div className="flex items-center gap-2 px-2 md:px-4 py-2">
                    <span className="relative flex h-4 w-4">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-30"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB] m-auto"></span>
                    </span>

                    <span className="font-20 bold text-black">
                      Technologies You Will Master
                    </span>
                  </div>


                  <div className="grid grid-cols-4 sm:grid-cols-8 px-1 md:px-4 pb-0 md:pb-2 bg-[linear-gradient(90deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.14)_100%)]">
                    {technologies.map((tech, index) => (
                      <div key={index} className="relative aspect-square">
                        <div
                          className="border-4 border-[#FFFFFF4D] flex items-center justify-center transition-all duration-300"
                        >

                          <div className="w-[60px] h-[53px] md:w-[88px] md:h-[74px] bg-[#FBFDFF] border border-[#D3E2F9] rounded-md flex flex-col items-center justify-center">
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              width={28}
                              height={28}
                              className="h-6 w-6 md:w-12 md:h-12 object-contain"
                            />

                            <span className="font-12 bold text-black">
                              {tech.name}
                            </span>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 lg:px-0 mt-[-62px] hidden lg:block">
            <div className="bg-[#06152F] rounded-[18px] p-2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="relative flex items-start gap-4 rounded-xl p-2"
                    >
                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-white font-semibold text-[18px] leading-[24px]">
                          {item.title}
                        </h3>

                        <p className="text-[#B8C7E0] text-[13px] leading-[20px] mt-1">
                          {item.description}
                        </p>

                        <div
                          className="w-10 h-[3px] rounded-full mt-2"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div></div>
        </div>
      </div>
    </section>
  );
}




