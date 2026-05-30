"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
  variant?: "home-01" | "home-02" | "home-03";
}

const slides = [
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
    subtitle: "Let's Be Healthy",
    title: "We Proudly Give\nQuality Treatments",
    description: "Our certified chiropractors and physiotherapists combine advanced clinical research with manual adjustments to restore your movement capability.",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    subtitle: "Effective Care Plans",
    title: "Dedicated Physical\nTherapy Solutions",
    description: "Align your spine, relieve chronic musculoskeletal compression, and activate your body's intrinsic capacity for active wellness.",
  },
  {
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1600&q=80",
    subtitle: "Experienced Specialists",
    title: "Holistic Clinical\nAcupuncture Support",
    description: "Accelerate your injury recovery pathways and manage chronic pain conditions without aggressive pharmaceutical interventions.",
  },
];

export default function Hero({ variant = "home-01" }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-[92vh] flex items-center bg-brand-dark overflow-hidden text-white">
        {/* Slides loop using framer-motion AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url("${slides[currentSlide].image}")` }}
          >
            {/* Deep overlay mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/75 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Ambient shapes & details */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(14,165,160,0.1)_0%,_transparent_50%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full z-10">
          <div className="max-w-2xl text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="main-slider__content"
              >
                <span className="main-slider__sub-title inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-brand-teal mb-4 font-sans">
                  {slides[currentSlide].subtitle}
                </span>
                
                <h1 className="main-slider__title font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6 whitespace-pre-line">
                  {slides[currentSlide].title}
                </h1>
                
                <p className="main-slider__text text-gray-300 font-sans text-sm sm:text-base leading-relaxed mb-10 max-w-xl">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="main-slider__btns flex flex-wrap items-center gap-6">
              <Link
                href="/services"
                className="sifoxen-btn px-8 py-4 rounded-full bg-brand-teal text-white hover:bg-white hover:text-brand-dark font-bold font-sans tracking-wide uppercase text-xs sm:text-sm shadow-lg transition-all duration-300"
              >
                Our Services
              </Link>

              {/* Pulsing Play Reel button */}
              <button
                onClick={() => setVideoOpen(true)}
                className="video-popup main-slider__video flex items-center gap-3 group focus:outline-none"
              >
                <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-teal shadow-xl transition-all duration-300 group-hover:scale-110">
                  {/* Pulsing ripple ring */}
                  <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping pointer-events-none" />
                  <span className="absolute inset-[-6px] rounded-full border border-white/20 animate-pulse pointer-events-none" />
                  
                  <svg className="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white group-hover:text-brand-teal transition-colors">
                  Play Reel
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Counter and Slide Buttons (03 / 01 style) */}
        <div className="absolute bottom-10 right-4 sm:right-10 lg:right-20 z-20 flex items-center gap-6">
          <div className="font-sans font-extrabold text-sm tracking-widest text-white/50">
            <span className="text-brand-teal text-lg">0{currentSlide + 1}</span> / 0{slides.length}
          </div>
          
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === i ? "bg-brand-teal w-6" : "bg-white/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video Iframe Overlay Modal */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="absolute top-6 right-6 z-50">
            <button
              onClick={() => setVideoOpen(false)}
              className="text-white hover:text-brand-teal text-2xl font-bold font-sans p-2 focus:outline-none"
            >
              ✕ CLOSE
            </button>
          </div>
          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Sifoxen Clinical Presentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
