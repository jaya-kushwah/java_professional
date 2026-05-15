// import Image from "next/image";
// import { pngImages, svgImages } from "@/app/utils/localImages";
// import Link from "next/link";
// import { ArrowRight, Plus } from "lucide-react";

// export default function HeroSection() {
//   const technologies = [
//     { name: "Java", icon: svgImages.javaa },
//     { name: "Spring", icon: svgImages.spring3d },
//     { name: "Hibernate", icon: svgImages.zigzag3d },
//     { name: "React", icon: svgImages.react3d },
//     { name: "Angular", icon: svgImages.angular3d },
//     { name: "Docker", icon: svgImages.docker3d },
//     { name: "GitHub", icon: svgImages.git3d },
//     { name: "AI", icon: svgImages.ai },
//   ];

//   const features = [
//     {
//       title: "Work on real-time Enterprise projects",
//       description: "Get hands-on experience with live industry projects"
//     },
//     {
//       title: "Learn Industry-standard tools & frameworks",
//       description: "Master the technologies used by top companies"
//     },
//     {
//       title: "Build a professional developer portfolio",
//       description: "Create impressive projects for your career"
//     },
//     {
//       title: "Get trained for real software development roles",
//       description: "Prepare for actual developer positions"
//     }
//   ];

//   return (
//     <section className="relative h-[81vh] md:h-[89vh] bg-[#0a1628] overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={pngImages.java_img}
//           alt="Hero Background"
//           fill
//           className="object-fill"
//           priority
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 w-full">
//         <div className="max-w-[1400] mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">

//             {/* Left Side - Content */}
//             <div className="text-white flex flex-col items-start  h-full justify-around px-4 lg:px-0">

//               <div className="max-w-7xl mt-10">
//                 <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl semibold leading-tight">
//                   Become an Industry-<br />
//                   Ready Java Developer
//                 </h1>
//                 <p className="font-14 sm:text-xl text-[#F2F6FA] max-w-xl mt-4">
//                   Learn modern Java technologies and build real enterprise applications through practical, project-based training
//                 </p>

//                 <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full sm:w-auto">
//                   <Link
//                     href="/curriculum"
//                     // className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white text-white rounded-lg transition-all duration-300 text-sm sm:text-base"
//                        className=" sm:w-auto w-fit flex md:inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border border-white text-white rounded-md transition-all duration-300 text-sm sm:text-base"
//                   >
//                     View Curriculum
//                     <ArrowRight size={16} />
//                   </Link>

//                   <Link
//                     href="/course"
//                     // className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-sm sm:text-base"
//                        className=" sm:w-auto w-fit flex md:inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-900 rounded-md transition-all duration-300 text-sm sm:text-base"
//                   >
//                     Start Developer Training
//                     <ArrowRight size={16} />
//                   </Link>
//                 </div>
//               </div>


//               <div className="sm:mb-33 mt-8 w-full px-0 lg:px-0">
//                 <div className="border-l-4 border-l-[#FFF700]">
//                   <div className=" inline-block border-4 border-l-0 border-[#FFFFFF4D] rounded-r-full">
//                     <div className=" bg-[#FFF700] text-black px-5 py-2 rounded-r-full text-sm medium shadow-md">
//                       Technologies You Will Master
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-4 border-r-4 border-r-[#FFF700] sm:grid-cols-8 p-4 gap-6 bg-[linear-gradient(90deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.14)_100%)]">
//                     {technologies.map((tech, index) => (
//                       <div key={index} className="relative aspect-square">
//                         <div className="absolute -top-3 -left-3"><Plus /></div>
//                         <div className="absolute -right-3 -top-3"><Plus /></div>
//                         <div className="absolute -bottom-3 -left-3"><Plus /></div>
//                         <div className="absolute -bottom-3 -right-3"><Plus /></div>
//                         <div
//                           className="border-4 border-[#FFFFFF4D] flex items-center justify-center transition-all duration-300"
//                         >

//                           <div className="bg-white p-3">

//                             <Image
//                               src={tech.icon}
//                               alt={tech.name}
//                               className="object-contain "
//                             />
//                           </div>

//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>


//             {/* Right Side - Student Image with Blue Background */}
//             {/* <div className="hidden lg:flex justify-center">
//               <div className="relative mt-20">
//                 <div className="absolute z-0 -inset-8 translate-x-20 mt-10">
//                   <Image
//                     src={svgImages.blue}
//                     alt="Blue Background"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//                 <div className="relative">
//                   <Image
//                     src={pngImages.hero}
//                     alt="Java Developer Student"
//                     className="object-contain"
//                   />
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </div>

//         <div className="border-t border-b border-[#FFFFFF4D] px-48 w-full absolute bottom-10 hidden md:block">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className=" border-4 border-gray-600 p-4 transition-all duration-300 bg-[#0F172A]"
//               >
//                 <h3 className="text-[#FFF700] semibold font-20 leading-tight ">
//                   {feature.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







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

export default function HeroSection() {
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
        <div className="max-w-[1400] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ">

            {/* Left Side - Content */}
            <div className="text-white flex flex-col items-start  h-full justify-around px-4 lg:px-0">

              <div className="max-w-7xl mt-12">
                <div className="inline-flex items-center gap-2 border border-[#1A72F5] p-1 px-2 rounded-full">
                  <Image src={svgImages.star} alt="star" width={16} height={16} />
                  <span className="primary font-14 font-medium uppercase tracking-wider">
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
                <div className="flex flex-wrap lg:flex-nowrap items-start ">
                  {roadmap.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-5"
                      >
                        {/* Card */}
                        <div className="min-w-[120px] text-center">

                          {/* Icon */}
                          <div
                            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
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

                          <h3 className="text-[15px] font-semibold text-[#0F172A] mt-4 leading-[20px] whitespace-nowrap">
                            {item.title}
                          </h3>

                          <p className="text-[12px] leading-[18px] text-[#64748B] mt-2">
                            {item.subtitle}
                          </p>
                        </div>
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









