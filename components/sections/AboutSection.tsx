"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";

const bulletItems = [
  "Personalised treatment plans tailored to your goals",
  "Evidence-based physiotherapy and manual therapy",
  "State-of-the-art facilities with expert therapists",
  "Flexible scheduling including evening and weekend appointments",
];

export default function AboutSection() {
  const [odometerVal, setOdometerVal] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const target = 15;
          const timer = setInterval(() => {
            current += 1;
            if (current >= target) {
              setOdometerVal(target);
              clearInterval(timer);
            } else {
              setOdometerVal(current);
            }
          }, 80);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: about-one__image stack */}
        <div className="lg:col-span-6 relative pb-12 lg:pb-0 pr-8 sm:pr-12">
          <ScrollReveal direction="left">
            <div className="about-one__image relative">
              {/* Main large image */}
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80"
                  alt="Sifoxen clinic therapist"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Smaller floated image, absolute positioned bottom right */}
              <div className="about-one__image__floated absolute -bottom-10 -right-8 w-44 sm:w-56 h-56 sm:h-72 rounded-3xl overflow-hidden border-[8px] border-white shadow-2xl z-20">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80"
                  alt="Therapy space"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience odometer badge bottom left */}
              <div className="about-one__experience absolute bottom-8 -left-8 bg-brand-dark rounded-2xl p-5 sm:p-6 text-center shadow-2xl z-20 min-w-[140px] text-white">
                <span className="about-one__experience__number block font-serif text-4xl sm:text-5xl font-extrabold text-brand-teal tabular-nums">
                  {odometerVal}
                </span>
                <span className="about-one__experience__text block text-[9px] sm:text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-1.5 leading-none">
                  Years Of <br /> Experience
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Text & Bullets */}
        <div className="lg:col-span-6">
          <ScrollReveal direction="right">
            {/* Tagline Leaf Section Title */}
            <SectionTitle
              tagline="ABOUT SIFOXEN"
              title="We Are the Best Physical Therapy Clinic in Town"
              align="left"
              className="mb-6"
            />
            
            <p className="text-brand-gray font-sans text-sm sm:text-base leading-relaxed mb-8">
              At Sifoxen, we believe that movement is medicine. Our clinical team of expert physiotherapists, chiropractors, and massage practitioners collaborate to deliver holistic, patient-centered programs that address root physical causes.
            </p>

            {/* Checkmark List (list-unstyled about-one__list) */}
            <ul className="about-one__list space-y-4 mb-10">
              {bulletItems.map((item) => (
                <li key={item} className="flex items-start gap-3.5 text-brand-dark font-sans text-sm font-semibold">
                  <span className="w-5 h-5 rounded-full bg-brand-teal/15 flex items-center justify-center flex-shrink-0 mt-0.5 text-brand-teal font-sans font-bold text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-teal text-white hover:bg-brand-dark hover:scale-[1.02] font-bold font-sans text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 shadow-md"
            >
              Know More About Us
              <span className="text-xs">→</span>
            </Link>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
