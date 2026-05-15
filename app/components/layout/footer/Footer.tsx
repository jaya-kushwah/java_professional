"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaXTwitter, FaInstagram, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import { pngImages, svgImages } from "@/app/utils/localImages";

export default function Footer() {
  const stats = [
    {
      icon: "👥",
      number: "10K+",
      label: "Developers Trained",
      color: "#3B82F6"
    },
    {
      icon: "💎",
      number: "200+",
      label: "Hiring Partners",
      color: "#8B5CF6"
    },
    {
      icon: "📊",
      number: "95%",
      label: "Success Rate",
      color: "#0EA5E9"
    },
    {
      icon: "💻",
      number: "500+",
      label: "Projects Completed",
      color: "#F59E0B"
    },
    {
      icon: "⭐",
      number: "4.8/5",
      label: "Learner Rating",
      color: "#EC4899"
    }
  ];

  return (
    <footer className="bg-[#0A1628] text-white">
      {/* Main Footer Content */}
      <div className="max-container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
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
                Empowering aspiring Java developers with industry-focused training through real-world projects and career success.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Follow us</h4>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center hover:bg-[#334155] transition-colors cursor-pointer">
                  <FaXTwitter className="text-[#94A3B8] hover:text-white" size={18} />
                </div>
                <div className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center hover:bg-[#334155] transition-colors cursor-pointer">
                  <FaInstagram className="text-[#94A3B8] hover:text-white" size={18} />
                </div>
                <div className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center hover:bg-[#334155] transition-colors cursor-pointer">
                  <FaLinkedin className="text-[#94A3B8] hover:text-white" size={18} />
                </div>
                <div className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center hover:bg-[#334155] transition-colors cursor-pointer">
                  <FaFacebook className="text-[#94A3B8] hover:text-white" size={18} />
                </div>
                <div className="w-10 h-10 bg-[#1E293B] rounded-lg flex items-center justify-center hover:bg-[#334155] transition-colors cursor-pointer">
                  <FaYoutube className="text-[#94A3B8] hover:text-white" size={18} />
                </div>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1E40AF] rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">📚</span>
              </div>
              <h3 className="text-white font-semibold">Programs</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span>›</span> Java Full Stack
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span>›</span> Spring Boot Backend
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span>›</span> Microservices Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span>›</span> AI with Java
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1E40AF] rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">📖</span>
              </div>
              <h3 className="text-white font-semibold">Resources</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span>›</span> Curriculum
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span>›</span> Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span>›</span> Success Stories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span>›</span> FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1E40AF] rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">📞</span>
              </div>
              <h3 className="text-white font-semibold">Contact</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium text-sm mb-1">Phone Numbers</p>
                <p className="text-[#94A3B8] text-sm">+91-9109954955</p>
                <p className="text-[#94A3B8] text-sm">+91-9109977337</p>
              </div>

              <div>
                <p className="text-white font-medium text-sm mb-1">Emails General</p>
                <p className="text-[#94A3B8] text-sm">info@renaissance.ac.in</p>
              </div>

              <div>
                <p className="text-white font-medium text-sm mb-1">Address</p>
                <p className="text-[#94A3B8] text-sm">Indore</p>
              </div>

              <button className="bg-[#1E40AF] hover:bg-[#1D4ED8] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                Apply Now
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 pt-8 border-t border-[#1E293B]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <span className="text-lg">{stat.icon}</span>
                  </div>
                  <div className="text-left">
                    <div 
                      className="text-2xl font-bold"
                      style={{ color: stat.color }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-[#94A3B8] text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#1E293B] bg-[#0F172A]">
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