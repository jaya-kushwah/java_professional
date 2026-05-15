"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pngImages } from "@/app/utils/localImages";
import Image from "next/image";

export default function AboutAcademySection() {
  const aboutDropdownData = {
    academy: [
      { title: "About Academy", description: "Academy overview", href: "/about" },
      { title: "Our Mission", description: "Developing training system", href: "/about#mission" },
      { title: "Our Journey", description: "Academic growth journey", href: "/about#journey" },
    ],
    training: [
      { title: "Trainers", description: "Experienced team members", href: "/about#trainers" },
      { title: "Training Methodology", description: "Structured training process", href: "/about#methodology" },
      { title: "Industry Tools", description: "Modern development tools", href: "/about#tools" },
    ],
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Header - Exact copy from navbar */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-12 bg-primary"></div>
          <div>
            <h3 className="text-black semibold font-22">About Academy</h3>
            <p className="text-gray-500 font-14">Training Developers for Real Software Work</p>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Side - Academy & Training - Exact copy from navbar */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-2 gap-8">
            {/* Academy Section */}
            <div>
              <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                Academy
              </h4>
              <div className="space-y-1">
                {aboutDropdownData.academy.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-black font-medium font-16 group-hover:text-primary transition-colors">
                          {item.title}
                        </span>
                        <ArrowRight size={16}  />
                      </div>
                      <p className="text-gray-500 font-12 mt-0.5">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Training Section */}
            <div>
              <h4 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                Training
              </h4>
              <div className="space-y-1">
                {aboutDropdownData.training.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-black font-medium font-16 group-hover:text-primary transition-colors">
                          {item.title}
                        </span>
                        <ArrowRight size={16} />
                      </div>
                      <p className="text-gray-500 font-12 mt-0.5">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

          <div className="bg-[#DDEBFF] p-4 backdrop-blur-sm shadow-lg mb-4">
              <Image
                src={pngImages.laptop}
                alt="Development Environment"
                width={320}
                height={200}
                className="w-full h-auto rounded-sm object-cover"
              />
            </div>
      </div>
    </div>
  );
}