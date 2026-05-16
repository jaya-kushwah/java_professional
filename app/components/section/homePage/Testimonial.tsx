"use client";
import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { pngImages, svgImages } from '../../../utils/localImages'
import Image from 'next/image'
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const EMBEDDED_CSS = `
.cascade-slider_container { position:relative; max-width:1200px; margin:0 auto; height:420px; user-select:none; -webkit-user-select:none; touch-action:pan-y; overflow: visible; }
.cascade-slider_slides { position:relative; height:100%; display: flex; align-items: center; justify-content: center;}
.cascade-slider_item { position:absolute; top:50%; left:50%; transform:translateY(-50%) translateX(-50%) scale(0.3); transition:all 0.7s ease; opacity:0; z-index:1; cursor:grab; width: 100%; max-width: 800px; }
.cascade-slider_item.now { cursor:default; }
.cascade-slider_item:active { cursor:grabbing; }
.cascade-slider_item.next { left:60%; transform:translateY(-50%) translateX(-160%) scale(0.85); opacity:0.6; z-index:4; }
.cascade-slider_item.prev { left:40%; transform:translateY(-50%) translateX(60%) scale(0.85); opacity:0.6; z-index:4; }
.cascade-slider_item.now  { top:50%; left:50%; transform:translateY(-50%) translateX(-50%) scale(1); opacity:1; z-index:5; }
@media (max-width: 768px) {
 .cascade-slider_container { height:600px; }
  .cascade-slider_item { width: 310px; }
  .cascade-slider_item.next { transform:translateY(-50%) translateX(-140%) scale(0.75); opacity:0.4; }
  .cascade-slider_item.prev { transform:translateY(-50%) translateX(40%) scale(0.75); opacity:0.4; }
}
`

const testimonials = [
  { 
    id: 1, 
    quote: '"Before joining, I only knew basic Java. During the training I worked on real projects like a Student Management System and learned Spring Boot development."', 
    name: 'Anjali Verma', 
    role: 'MCA Student',
    image: pngImages.image_10
  },
  { 
    id: 2, 
    quote: '"The faculty here genuinely cares about your growth. The moot court sessions gave me real confidence to argue cases in front of an audience."', 
    name: 'Rahul Sharma', 
    role: 'LL.B Student',
    image: pngImages.image_11
  },
  { 
    id: 3, 
    quote: '"Renaissance University gave me exposure to international law programs and exchange opportunities I never expected from a local university."', 
    name: 'Priya Nair', 
    role: 'Law Graduate',
    image: pngImages.image_3
  },
]

const getClass = (index: number, active: number, total: number) => {
  const diff = index - active
  if (diff === 0) return 'now'
  if (diff === 1 || diff === -(total - 1)) return 'next'
  if (diff === -1 || diff === total - 1) return 'prev'
  return ''
}

const Testimonial = ({ id, courseData, isFormSubmitted, onShowVirtualTourMessage, onRequestVirtualTour }: { id?: string; courseData?: any; isFormSubmitted?: boolean; onShowVirtualTourMessage?: () => void; onRequestVirtualTour?: () => void }) => {
  const testimonialData = courseData?.testimonials || testimonials;
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [active, setActive] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const startX = useRef(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = testimonialData.length

  const go = useCallback((dir: 'next' | 'prev') => {
    if (!isMounted) return
    setActive(c => dir === 'next' ? (c + 1) % total : (c - 1 + total) % total)
  }, [total, isMounted])

  const startAuto = useCallback(() => {
    if (!isMounted) return
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => go('next'), 3500)
  }, [go, isMounted])

  const stopAuto = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  useEffect(() => {
    setIsMounted(true)
    return () => {
      setIsMounted(false)
      stopAuto()
    }
  }, [stopAuto])

  useEffect(() => { 
    if (isMounted) {
      startAuto()
      return stopAuto
    }
  }, [startAuto, stopAuto, isMounted])

  const handleStart = (x: number) => { 
    if (!isMounted) return
    setIsDragging(true); startX.current = x; stopAuto() 
  }
  const handleEnd = (x: number) => {
    if (!isDragging || !isMounted) return
    const dist = x - startX.current
    if (Math.abs(dist) > 50) go(dist < 0 ? 'next' : 'prev')
    setIsDragging(false)
    startAuto()
  }

  const handleVirtualTourClick = () => {
    console.log('Virtual Tour clicked, isFormSubmitted:', isFormSubmitted);

    if (!isFormSubmitted) {
      // Notify parent to show message in HeroSection
      if (onShowVirtualTourMessage) {
        onShowVirtualTourMessage();
      }

      // Request to open virtual tour after form submission
      if (onRequestVirtualTour) {
        onRequestVirtualTour();
      }

      // Scroll to the form section (HeroSection)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Open virtual tour in new tab
    console.log('Opening virtual tour...');
    window.open('https://renaissance.ac.in/virtual360', '_blank')
  }

  const handleVirtualTourClick2 = () => {
    console.log('Virtual Tour (mobile) clicked, isFormSubmitted:', isFormSubmitted);

    if (!isFormSubmitted) {
      // Notify parent to show message in HeroSection
      if (onShowVirtualTourMessage) {
        onShowVirtualTourMessage();
      }

      // Request to open virtual tour after form submission
      if (onRequestVirtualTour) {
        onRequestVirtualTour();
      }

      // Scroll to the form section (HeroSection)
      window.scrollTo({ top: 440, behavior: 'smooth' })
      return
    }

    // Open virtual tour in new tab
    console.log('Opening virtual tour (mobile)...');
    window.open('https://renaissance.ac.in/virtual360', '_blank')
  }

  return (
    <section className="relative py-18 bg-[#f7f9fd] overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: EMBEDDED_CSS }} />
      <div className="max-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="text-left md:text-center mb-8 px-2 md:px-0"
        >
          <div className="inline-flex items-center gap-2 mb-2 border border-[#E5E7EB] p-1 px-2 rounded-full">
            <Image src={svgImages.star} alt="star" width={16} height={16} />
            <span className="text-primary font-14 font-medium uppercase tracking-wider">
              STUDENT SUCCESS
            </span>
          </div>

          <h2 className="text-black font-38 md:font-50 font-semibold mb-2">
            Success Stories from Our Java Developers
          </h2>

          <p className="text-secondary font-16 md:font-18 max-w-3xl md:mx-auto">
            Our program builds the complete skillset required for backend and full-stack Java development.
          </p>
        </motion.div>

        {/* 3D Cascade Carousel */}
        <div className="mt-4">
          <div
            className="cascade-slider_container"
            onMouseEnter={stopAuto}
            onMouseLeave={(e) => { if (isDragging) handleEnd(e.clientX); startAuto() }}
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseUp={(e) => handleEnd(e.clientX)}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
          >
            <div className="cascade-slider_slides">
              {testimonialData.map((t: any, i: number) => (
                <div key={t.id} className={`cascade-slider_item ${getClass(i, active, total)}`}>
                  <div className="bg-white rounded-sm overflow-hidden shadow-lg h-full flex flex-col md:flex-row">
                    {/* Left Side - Image */}
                    <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                      <Image
                        src={t.image || pngImages.image_10}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition">
                          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 px-4 md:p-6 flex flex-col justify-between">
                      {/* Quote */}
                      <p className="font-16 md:font-18 medium text-[#475569] mb-10 py-2">{t.quote}</p>

                      {/* Author Info */}
                      <div>
                        <div className="flex items-center gap-3 mt-6">
                          <Image
                            src={svgImages.girl_icon}
                            alt={t.name}
                            width={56}
                            height={56}
                            className="w-14 h-14 rounded-sm object-cover"
                          />
                          <div>
                            <p className="font-18 md:font-16 semibold text-[#181B1D]">{t.name}</p>
                            <p className="font-14 md:font-14 medium text-[#475569]">{t.role}</p>
                          </div>
                        </div>

                        <div className="pt-4 pb-4 flex flex-row md:flex-col md:items-start">

                          <p className="text-blue-600 font-16 medium mr-3 md:mr-0 md:mb-2">
                            Java Full Stack Program
                          </p>

                          <div className="flex items-center">
                            <svg className="w-3 h-3 fill-yellow-400" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                            <span className="font-18 semibold text-[#181B1D] ml-1">
                              4.8/5
                            </span>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex justify-center gap-3 md:gap-4">
            <button
              onClick={() => { 
                if (isMounted) {
                  go('next'); 
                  startAuto() 
                }
              }}
              className={`w-10 h-10 rounded-sm cursor-pointer flex items-center justify-center transition ${
                active > 0 
                  ? "bg-[#1F76F9] text-white hover:bg-[#1a6ae6]" 
                  : "bg-white text-[#181B1D] hover:text-white hover:bg-[#1F76F9]"
              }`}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => { 
                if (isMounted) {
                  go('prev'); 
                  startAuto() 
                }
              }}
              className={`w-10 h-10 rounded-sm cursor-pointer flex items-center justify-center transition ${
                active < total - 1 
                  ? "bg-[#1F76F9] text-white hover:bg-[#1a6ae6]" 
                  : "bg-white text-[#181B1D] hover:text-white hover:bg-[#1F76F9]"
              }`}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
