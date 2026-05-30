"use client";

import { useEffect, useRef, useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { testimonials } from "@/lib/data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        if (carouselRef.current) {
          const cardWidth = carouselRef.current.children[0]?.getBoundingClientRect().width || 0;
          carouselRef.current.scrollTo({
            left: next * (cardWidth + 24), // width + gap
            behavior: "smooth",
          });
        }
        return next;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      {/* Decorative backing */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Trust Badge Info Section */}
        <div className="lg:col-span-4 text-left">
          <ScrollReveal direction="left">
            <SectionTitle
              tagline="TESTIMONIALS"
              title="What Patients Say"
              align="left"
              className="mb-8"
            />
            
            {/* trust badge container */}
            <div className="bg-white rounded-3xl p-6 border border-brand-border/60 shadow-xl inline-flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-serif text-5xl font-extrabold text-brand-dark">5.0</span>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[10px] text-brand-teal font-semibold tracking-wider mt-1 uppercase">Satisfied Client Ratings</p>
                </div>
              </div>
              <p className="text-brand-gray font-sans text-xs leading-relaxed border-t border-brand-border/60 pt-3">
                Verified reviews based on independent follow-up surveys of patients recovering from spinal injuries, chronic back aches, and clinical acupuncture care.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Quotes Carousel */}
        <div className="lg:col-span-8 relative">
          <ScrollReveal direction="right">
            {/* Scrollable container */}
            <div
              ref={carouselRef}
              className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-none py-4"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={t.name}
                  className={`flex-shrink-0 w-full sm:w-[380px] bg-white rounded-3xl p-8 border border-brand-border/50 snap-start shadow-[0_15px_35px_rgba(0,0,0,0.03)] relative overflow-hidden transition-all duration-300 flex flex-col justify-between ${
                    activeIndex === idx ? "border-brand-teal ring-4 ring-brand-teal/5" : ""
                  }`}
                >
                  {/* Large absolute quotation background */}
                  <span className="absolute -top-6 -left-2 text-[140px] text-brand-teal/5 font-serif font-extrabold select-none leading-none">
                    &ldquo;
                  </span>

                  <div className="relative z-10">
                    <StarRating count={t.rating} />
                    <p className="text-brand-gray font-sans text-sm italic leading-relaxed mt-6 mb-8 relative">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-brand-border/60 pt-4 relative z-10">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-teal/15"
                    />
                    <div>
                      <h4 className="font-serif text-base font-bold text-brand-dark leading-none">
                        {t.name}
                      </h4>
                      <p className="text-xs text-brand-gray font-sans mt-1">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination bullets */}
            <div className="flex gap-2 justify-center sm:justify-start mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    if (carouselRef.current) {
                      const cardWidth = carouselRef.current.children[0]?.getBoundingClientRect().width || 0;
                      carouselRef.current.scrollTo({
                        left: i * (cardWidth + 24),
                        behavior: "smooth",
                      });
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "bg-brand-teal w-6" : "bg-brand-dark/20"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
