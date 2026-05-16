
import Image from "next/image";
import { pngImages, svgImages } from "@/app/utils/localImages";
import Link from "next/link";
import {
  ArrowRight, BriefcaseBusiness,
  Code2,
  ChartNoAxesColumn,
  GraduationCap, BrainCircuit,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function SpringAi() {
  const stat = [
    {
      title: "AI-Powered\nLearning",
      icon: BrainCircuit,
      color: "#66E36A",
      bg: "rgba(102, 227, 106, 0.12)",
    },
    {
      title: "Enterprise\nGrade",
      icon: ShieldCheck,
      color: "#8B5CF6",
      bg: "rgba(139, 92, 246, 0.12)",
    },
    {
      title: "Hands-on\nProjects",
      icon: BriefcaseBusiness,
      color: "#FACC15",
      bg: "rgba(250, 204, 21, 0.12)",
    },
    {
      title: "Mentorship\nFrom Experts",
      icon: Users,
      color: "#A855F7",
      bg: "rgba(168, 85, 247, 0.12)",
    },
  ];

  const features = [
    {
      title: "Learn In-Demand Skills",
      description:
        "Master Spring AI, LLMs, and modern frameworks used by top companies.",
      icon: BriefcaseBusiness,
      color: "#63D15F",
      bg: "#63D15F1A"
    },
    {
      title: "Hands-on Learning",
      description:
        "Work on real-world scenarios and build production-ready applications.",
      icon: Code2,
      color: "#F9CE04",
      bg: "#F9CE041A"
    },
    {
      title: "Industry-Relevant",
      description:
        "Curriculum designed with inputs from industry experts and practitioners.",
      icon: ChartNoAxesColumn,
      color: "#1A72F5",
      bg: "#1F76F91A"
    },
    {
      title: "Guided by Experts",
      description:
        "Learn from experienced developers and get mentorship at every step.",
      icon: GraduationCap,
      color: "#F9CE04",
      bg: "#F9CE041A"
    },
  ];

  return (
    <section className="relative h-[81vh] md:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={pngImages.spring_img}
          alt="Hero Background"
          fill
          className="object-fill"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-[1400] mx-auto">
          <div className="flex ">

            {/* Left Side - Content */}
            <div className="text-white flex flex-col items-start  h-full justify-around px-4 lg:px-0">

              <div className="max-w-7xl mt-12">
                <div className="inline-flex items-center gap-2 border border-[#63D15F] p-1 px-2 rounded-full">
                  <Image src={svgImages.star} alt="star" width={16} height={16} />
                  <span className="white font-14 font-medium uppercase tracking-wider">
                    Spring AI + Project-Based Learning
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl bold white leading-tight">
                  Build Smarter Apps <br />
                  with <span className="text-[#63D15F]">Spring AI.</span><br /> Deliver Real Impact.
                </h1>
                <p className="font-14 sm:text-xl white max-w-xl mt-4">
                  Learn modern Java technologies and build real enterprise applications through practical, project-based training.
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
                    className=" sm:w-auto w-fit flex md:inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-2 bg-transparent border border-white text-white rounded-md transition-all duration-300 text-sm sm:text-base"
                  >
                    View Cirriculum
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="mt-27">
                <div className="flex flex-wrap lg:flex-nowrap items-center">
                  {stat.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-1 px-4 flex-1 ${index !== features.length - 1
                          ? "border-b lg:border-b-0 lg:border-r border-white/10"
                          : ""
                          }`}
                      >
                        {/* Icon */}
                        <div
                          className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: item.bg }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: item.color }}
                          />
                        </div>

                        <p className="text-white medium font-14 leading-[18px] whitespace-preline">
                          {item.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="flex items-end justify-start relative w-full ">
              <div className="relative w-full h-[480px]">
                <Image
                  src={pngImages.technology}
                  alt="Technology"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="px-4 lg:px-0 mt-6">
            <div className="bg-[#001333] rounded-[18px] p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="relative flex items-start gap-4 rounded-xl p-3"
                    >
                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                        style={{ border: `1px solid ${item.color}`, backgroundColor: item.bg }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3 className="text-white semibold font-18 leading-[24px]">
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




