// "use client";

// import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
// import Image from "next/image";
// import { svgImages } from "@/app/utils/localImages";

// export default function ProgramFeatures() {
//   const headerRef = useRef(null);
//   const isHeaderInView = useInView(headerRef, { once: true });

//   const features = [
//     {
//       title: "Interactive Mentor Sessions",
//       description: "Mentors guide learners through concepts, coding techniques, and practical development scenarios.",
//       borderColor: "#F9CE04",
//       icon: svgImages.feature_1,
//       accentColor: "border-b-yellow-500"
//     },
//     {
//       title: "Interactive Mentor Sessions",
//       description: "Mentors guide learners through concepts, coding techniques, and practical development scenarios.",
//       borderColor: "#0846CC",
//       icon: svgImages.feature_2,
//       accentColor: "border-b-blue-500"
//     },
//     {
//       title: "Interactive Mentor Sessions",
//       description: "Mentors guide learners through concepts, coding techniques, and practical development scenarios.",
//       borderColor: "#914FD2",
//       icon: svgImages.feature_3,
//       accentColor: "border-b-purple-500"
//     },
//     {
//       title: "Interactive Mentor Sessions",
//       description: "Mentors guide learners through concepts, coding techniques, and practical development scenarios.",
//       borderColor: "#00BAB9",
//       icon: svgImages.feature_4,
//       accentColor: "border-b-teal-500"
//     }
//   ];

//   return (
//     <section className="relative py-18 bg-[#010919] overflow-hidden">
//       <div className="max-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <motion.div
//           ref={headerRef}
//           initial={{ opacity: 0, y: 30 }}
//           animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.6 }}
//           className="text-left md:text-center mb-8  md:px-0"
//         >
//           <div className="inline-flex items-center gap-2 mb-2 border border-[#1F76F9] p-1 px-2 rounded-[12px]">
//             <Image src={svgImages.star} alt="star" width={16} height={16} />
//             <span className="primary font-14 bold uppercase tracking-wider">
//               Learning Environment
//             </span>
//           </div>

//           <h2 className="text-white font-38 md:font-50 font-semibold mb-2">
//             What Makes Our Training Different
//           </h2>

//           <p className="text-[#F2F6FA] font-16 md:font-18 max-w-lg md:mx-auto">
//             Our training focuses on real software development experience instead of only theoretical learning.
//           </p>
//         </motion.div>

//         {/* Features Grid - 2x2 Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-8xl ">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className={` rounded-2xl p-4 md:p-6 transition-all duration-300 border-b-4`}
//               style={{
//                 border: `1px solid ${feature.borderColor}`,
//                 borderBottom: `4px solid ${feature.borderColor}`,
//               }}
//             >
//               <div className="flex items-start justify-between h-full">
//                 <div className="flex-1 pr-4">
//                   <h3 className="white text-[16px] md:text-[24px] semibold mb-2 leading-snug max-w-[180px] md:max-w-[220px]">
//                     {feature.title}
//                   </h3>
//                   <div
//                     className="
//   w-8 sm:w-12 h-[2px] md:h-[3px] rounded-md mb-3 md:mb-5"
//                     style={{ background: feature.borderColor }}
//                   ></div>
//                   <p className="text-gray-300 text-[10px] md:text-[16px] leading-relaxed">
//                     {feature.description}
//                   </p>
//                 </div>

//                 <div className="shrink-0 mt-[25px] md:mt-0">
//                   <div className="flex items-center justify-center relative "
//                    style={{
//                       backdropFilter:'blur(18px)'
//                      }}
//                   >
//                     <Image
//                       src={feature.icon}
//                       alt={feature.title}
//                       width={80}
//                       height={80}
//                       className="w-25 h-25 md:w-60 md:h-60 object-contain z-10"
//                     />
//                      <div className="absolute w-50 h-20 rounded-full bg-[#B44C07]  right-0 bottom-0"  />

//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { svgImages } from "@/app/utils/localImages";

export default function ProgramFeatures() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const features = [
    {
      title: "Interactive Mentor Sessions",
      description: "Mentors guide learners through concepts, coding techniques, and practical development scenarios.",
      borderColor: "#F9CE04",
      icon: svgImages.feature_1,
      accentColor: "border-b-yellow-500",
      background: "#B44C07"
    },
    {
      title: "Interactive Mentor Sessions",
      description: "Mentors guide learners through concepts, coding techniques, and practical development scenarios.",
      borderColor: "#0846CC",
      icon: svgImages.feature_2,
      accentColor: "border-b-blue-500",
      background: "#1439BC"
    },
    {
      title: "Interactive Mentor Sessions",
      description: "Mentors guide learners through concepts, coding techniques, and practical development scenarios.",
      borderColor: "#914FD2",
      icon: svgImages.feature_3,
      accentColor: "border-b-purple-500",
      background: "#7E42B2"
    },
    {
      title: "Interactive Mentor Sessions",
      description: "Mentors guide learners through concepts, coding techniques, and practical development scenarios.",
      borderColor: "#00BAB9",
      icon: svgImages.feature_4,
      accentColor: "border-b-teal-500",
      background: "#469CA6"
    }
  ];

  return (
    <section className="relative py-18 bg-[#010919] overflow-hidden">
      <div className="max-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-left md:text-center mb-8  md:px-0"
        >
          <div className="inline-flex items-center gap-2 mb-2 border border-[#1F76F9] p-1 px-2 rounded-[12px]">
            <Image src={svgImages.star} alt="star" width={16} height={16} />
            <span className="primary font-14 bold uppercase tracking-wider">
              Learning Environment
            </span>
          </div>

          <h2 className="text-white font-38 md:font-50 font-semibold mb-2">
            What Makes Our Training Different
          </h2>

          <p className="text-[#F2F6FA] font-16 md:font-18 max-w-lg md:mx-auto">
            Our training focuses on real software development experience instead of only theoretical learning.
          </p>
        </motion.div>

        {/* Features Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-8xl ">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={` rounded-2xl p-4 md:p-6 transition-all duration-300 border-b-4 relative`}
              style={{
                border: `1px solid ${feature.borderColor}`,
                borderBottom: `4px solid ${feature.borderColor}`,
              }}
            >
              <div className="flex items-start justify-between h-full">
                <div className="flex-1 pr-4">
                  <h3 className="white text-[16px] md:text-[24px] semibold mb-2 leading-snug max-w-[180px] md:max-w-[220px]">
                    {feature.title}
                  </h3>
                  <div
                    className="w-8 sm:w-12 h-[2px] md:h-[3px] rounded-md mb-3 md:mb-5"
                    style={{ background: feature.borderColor }}
                  ></div>
                  <p className="text-gray-300 text-[10px] md:text-[16px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="shrink-0 mt-[25px] md:mt-0">
                  <div className="flex items-center justify-center">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={80}
                      height={80}
                      className="w-25 h-25 md:w-60 md:h-60 object-contain z-10"
                    />
                  </div>
                </div>
              </div>
              <div className={`absolute rounded-[50%] bottom-10 right-8 w-60 h-20 blur-3xl `}
              style={{
                background: feature.background
              }}/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}