"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import { pngImages, svgImages } from "@/app/utils/localImages";

export default function Footer() {
  const stats = [
    {
      icon: svgImages.developer,
      number: "10K+",
      label: "Developers Trained",
      color: "#3B82F6",
      bgColor: "#3B82F620"
    },
    {
      icon: svgImages.hiring,
      number: "200+",
      label: "Hiring Partners",
      color: "#8B5CF6",
      bgColor: "#8B5CF620"
    },
    {
      icon: svgImages.success_rate,
      number: "95%",
      label: "Success Rate",
      color: "#3B82F6",
      bgColor: "#3B82F620"
    },
    {
      icon: svgImages.code,
      number: "500+",
      label: "Projects Completed",
      color: "#F59E0B",
      bgColor: "#F59E0B20"
    },
    {
      icon: svgImages.learning_rate,
      number: "4.8/5",
      label: "Learner Rating",
      color: "#8B5CF6",
      bgColor: "#8B5CF620"
    }
  ];

  return (
    <footer className="bg-[#020817] text-white">
      {/* Main Footer Content */}
      <div className="max-container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Logo + About */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src={pngImages.footer}
                alt="Java Professional Logo"
                width={200}
                height={60}
                className="h-12 w-auto mb-4"
              />
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Empowering aspiring Java developers with industry-focused training through real-world projects, and career success.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-base">Follow us</h4>
              <div className="flex gap-3">
                <Link href="#" className="w-10 h-10 border border-primary rounded-full flex items-center justify-center hover:bg-[#1E293B] transition-colors cursor-pointer">
                  <FaXTwitter className="text-white transition-colors" size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 border border-primary rounded-full flex items-center justify-center hover:bg-[#1E293B] transition-colors cursor-pointer">
                  <FaInstagram className="text-white transition-colors" size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 border border-primary rounded-full flex items-center justify-center hover:bg-[#1E293B] transition-colors cursor-pointer">
                  <FaLinkedin className="text-white transition-colors" size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 border border-primary rounded-full flex items-center justify-center hover:bg-[#1E293B] transition-colors cursor-pointer">
                  <FaFacebook className="text-white transition-colors" size={18} />
                </Link>
                <Link href="#" className="w-10 h-10 border border-primary rounded-full flex items-center justify-center hover:bg-[#1E293B] transition-colors cursor-pointer">
                  <FaYoutube className="text-white transition-colors" size={18} />
                </Link>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-[#1A72F5] bg-[#1A72F51A] rounded-lg flex items-center justify-center p-2">
                <Image 
                  src={svgImages.code_desktop} 
                  alt="Programs"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-white font-semibold text-lg">Programs</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className=" text-[#3B82F6] group-hover:translate-x-1 transition-transform font-20">›</span> 
                  <span className="font-semibold font-16">Java Full Stack</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className=" text-[#3B82F6] group-hover:translate-x-1 transition-transform font-20">›</span> 
                  <span className="font-semibold font-16">Spring Boot Backend</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className=" text-[#3B82F6] group-hover:translate-x-1 transition-transform font-20">›</span> 
                  <span className="font-semibold font-16">Microservices Training</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className=" text-[#3B82F6] group-hover:translate-x-1 transition-transform font-20">›</span> 
                  <span className="font-semibold font-16">AI with Java</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-[#1A72F5] bg-[#1A72F51A] rounded-lg flex items-center justify-center p-2">
                <Image 
                  src={svgImages.doc} 
                  alt="Resources"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-white font-semibold text-lg">Resources</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="text-[#3B82F6] group-hover:translate-x-1 font-20  transition-transform">›</span> 
                  <span className="font-semibold font-16 text-white">Curriculum</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="text-[#3B82F6] group-hover:translate-x-1 font-20  transition-transform">›</span> 
                  <span className="font-semibold font-16 text-white">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="text-[#3B82F6] group-hover:translate-x-1 font-20  transition-transform">›</span> 
                  <span className="font-semibold font-16 text-white">Success Stories</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="text-[#3B82F6] group-hover:translate-x-1 font-20  transition-transform">›</span> 
                  <span className="font-semibold font-16 text-white">FAQ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-[#1A72F5] bg-[#1A72F51A] rounded-lg flex items-center justify-center p-2">
                <Image 
                  src={svgImages.headphone} 
                  alt="Contact"
                  width={24}
                  height={24}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-white font-semibold text-lg">Contact</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-white font-semibold font-16 mb-2 ">Phone Numbers</p>
                <div className="flex gap-2 font-16">
 <p className="">+91-9109954955</p>
                <p className="">+91-9109977337</p>
                </div>
               
              </div>

              <div>
                <p className="text-white font-medium text-sm mb-2">Emails General</p>
                <p className="text-[#94A3B8] text-sm">info@renaissance.ac.in</p>
              </div>

              <div>
                <p className="text-white font-medium text-sm mb-2">Address</p>
                <p className="text-[#94A3B8] text-sm">Indore</p>
              </div>

              <button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors mt-4">
                Apply Now
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-10 p-4 bg-[#FFFFFF05] border border-[#FFFFFF1F] rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center md:items-start">
                <div className="flex items-center gap-3 mb-2">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center p-2"
                    style={{ backgroundColor: stat.bgColor }}
                  >
                    <Image 
                      src={stat.icon} 
                      alt={stat.label}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <div 
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: stat.color }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-[#94A3B8] text-xs md:text-sm whitespace-nowrap">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#1E293B] bg-[#020817]">
        <div className="max-container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#64748B] text-sm">
              © 2026 Java Professional Academy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-[#64748B] hover:text-white text-sm transition-colors"
              >
                Privacy & policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-[#64748B] hover:text-white text-sm transition-colors"
              >
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
