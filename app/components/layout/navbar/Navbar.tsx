
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pngImages, svgImages } from "@/app/utils/localImages";
import Button from "@/app/components/reusable/Button";
import { ArrowRight, X } from "lucide-react";
import { useState, useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import AboutAcademySection from "../../reusable/AboutAcademySection";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about", hasDropdown: true },
    { name: "Courses", href: "/course" },
    { name: "Curriculum", href: "/curriculum" },
    { name: "Projects", href: "/project" },
    { name: "Hire Developers", href: "/hire-developers" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsAboutHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsAboutHovered(false);
    }, 800); // 800ms delay before closing - increased for better UX
  };

  return (
    <div className="relative bg-white shadow-xl sticky top-0 z-50">
      <nav className="">
        <div className="max-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/">
                <Image
                  src={pngImages.logo}
                  alt="Java Professionals Logo"
                  width={200}
                  height={200}
                  className="h-10 w-40 sm:w-auto"
                />
              </Link>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && handleMouseEnter()}
                  onMouseLeave={() => link.hasDropdown && handleMouseLeave()}
                >
                  <Link
                    href={link.href}
                    className={`text-[18px] medium transition-all duration-300 ${pathname === link.href ? "primary" : "text-black"
                      }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>

            {/* Enroll Button - Desktop */}
            <div className="hidden lg:flex flex-shrink-0">
              <Button text="Enroll Now" icon={<ArrowRight size={16} strokeWidth={2} />} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-[16px] medium transition-all duration-300 py-2 ${pathname === link.href ? "primary" : "text-black"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <Button text="Enroll Now" icon={<ArrowRight size={16} strokeWidth={2} />} />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Full-width Dropdown - Outside navbar but positioned below it */}
      <AnimatePresence>
        {isAboutHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-gray-100 z-40 shadow-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full">
              <div className="max-w-7xl mx-auto">
                <AboutAcademySection />
              </div>
            </div>
          </motion.div>
         )} 
      </AnimatePresence>
    </div>
  );
} 