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

export default function EnterpriseArchitecture() {
  // Define all icons at the top
  const springBootIcon = svgImages.spring3d;
  const dockerIcon = svgImages.docker3d;
  const gitIcon = svgImages.git3d;

  const features = [
    {
      title: "MVC Architecture",
      subtitle: "Separation of Concerns",
      icon: BriefcaseBusiness,
      color: "#63D15F",
      bg: "#63D15F1A",
    },
    {
      title: "Saga Pattern",
      subtitle: "Distributed Transactions",
      icon: Code2,
      color: "#A855F7",
      bg: "#A855F71A",
    },
    {
      title: "Event Driven",
      subtitle: "Asynchronous Flow",
      icon: ChartNoAxesColumn,
      color: "#FACC15",
      bg: "#FACC151A",
    },
    {
      title: "Reliable & Scalable",
      subtitle: "Enterprise Ready",
      icon: GraduationCap,
      color: "#A855F7",
      bg: "#A855F71A",
    },
  ];

  const technologies = [
    {
      name: "Spring Boot",
      icon: springBootIcon,
      type: "image"
    },
    {
      name: "Kafka",
      icon: "K",
      type: "text",
      bgColor: "bg-black"
    },
    {
      name: "PostgreSQL",
      icon: "P",
      type: "text",
      bgColor: "bg-blue-600"
    },
    {
      name: "Redis",
      icon: "R",
      type: "text",
      bgColor: "bg-red-600"
    },
    {
      name: "Docker",
      icon: dockerIcon,
      type: "image"
    },
    {
      name: "Kubernetes",
      icon: "K8s",
      type: "text",
      bgColor: "bg-blue-500",
      rounded: "rounded-full"
    },
    {
      name: "GitHub Actions",
      icon: gitIcon,
      type: "image"
    }
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
                  <span className="primary font-14 medium uppercase tracking-wider">
                    ENTERPRISE ARCHITECTURE
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl bold black leading-tight">
                  Build Distributed<br />
                  Systems with  <br /><span className="text-[#1A72F5]">MVC</span> &
                  <span className="text-[#1A72F5]">Saga Pattern</span>
                </h1>
                <p className="font-14 sm:text-xl black max-w-xl mt-4">
                  Design scalable, reliable and fault-tolerant applications using modern architecture principles and patterns.
                </p>


                <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
                  <Link
                    href="/curriculum"
                    className=" sm:w-auto w-fit flex md:inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2 bg-[#1A72F5] text-white rounded-md transition-all duration-300 text-sm sm:text-base"
                  >
                    Explore Architecture
                    <ArrowRight size={16} />
                  </Link>

                  <Link
                    href="/course"
                    // className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-sm sm:text-base"
                    className=" sm:w-auto w-fit flex md:inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2 border border-[#475569] text-[#0F172A] rounded-md transition-all duration-300 text-sm sm:text-base"
                  >
                    Watch Workflow Demo
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="sm:mb-20 mt-4 md:mt-28 w-full px-0 lg:px-0 rounded-md">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-25">
                  {features.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div key={index} className="flex items-start gap-3">

                        {/* Icon */}
                        <div
                          className="w-8 h-8 md:w-11 md:h-11 rounded-full flex items-center justify-center shrink-0 "
                          style={{
                            backgroundColor: item.bg,
                          }}
                        >
                          <Icon
                            className="w-5 h-5 "
                            style={{ color: item.color }}
                          />
                        </div>

                        {/* Content */}
                        <div>
                          <h3 className="text-[#111827] semibold font-14 leading-[20px] whitespace-nowrap">
                            {item.title}
                          </h3>

                          <p className="text-[#6B7280] font-14 leading-[18px] mt-0 md:mt-1 whitespace-nowrap">
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
                  src={pngImages.architecture}
                  alt="System Design Architecture"
                  fill
                  className="object-contain "
                />
              </div>
            </div>
          </div>

          <div className="lg:px-0 mt-[-42px] relative z-20 hidden lg:block">
            <div className="w-full bg-[#F8FAFC] rounded-xl px-4 sm:px-6 lg:px-8 py-5 shadow-sm overflow-hidden">
              <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-5 gap-x-6">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                  >
                    {/* Icon */}
                    {tech.type === "image" ? (
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    ) : (
                      <div
                        className={`min-w-[28px] h-7 px-2 ${tech.bgColor} ${tech.rounded || "rounded-md"
                          } flex items-center justify-center`}
                      >
                        <span className="text-white text-[11px] font-semibold">
                          {tech.icon}
                        </span>
                      </div>
                    )}

                    {/* Name */}
                    <span className="text-sm sm:text-[15px] font-medium text-[#334155] whitespace-nowrap">
                      {tech.name}
                    </span>

                    {/* Divider */}
                    {index !== technologies.length - 1 && (
                      <div className="hidden lg:block w-10 h-[2px] bg-[#CBD5E1] rounded-full ml-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}









