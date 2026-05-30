"use client";

import Link from "next/link";
import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/lib/data";

interface Props {
  limit?: number;
  showHeader?: boolean;
  variant?: "home-01" | "home-02" | "home-03";
}

const serviceIcons = [
  // Sports Injury Therapy
  <svg key="1" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  // Acupuncture Therapy
  <svg key="2" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>,
  // Joint Mobilization
  <svg key="3" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.27 15H18" />
  </svg>,
  // Heat & Cold Therapy
  <svg key="4" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>,
  // Cardiorespiratory Rehab
  <svg key="5" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>,
  // Pain Management
  <svg key="6" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
];

export default function ServicesGrid({ limit = 4, showHeader = true, variant = "home-01" }: Props) {
  const displayed = limit ? services.slice(0, limit) : services;
  const [activeTab, setActiveTab] = useState(0);

  // Variant 1: Redesigned Home-01 - 4-card grid (service-one) with overlapping flaticons
  if (variant === "home-01") {
    return (
      <section className="py-24 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showHeader && (
            <ScrollReveal className="mb-16">
              <SectionTitle
                tagline="OUR SERVICES"
                title="What We're Offering"
                align="center"
              />
            </ScrollReveal>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayed.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.08}>
                <div className="service-card-one bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-500 flex flex-col h-full group">
                  {/* Top Image Box */}
                  <div className="service-card-one__image w-full aspect-[4/3] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20" />
                  </div>

                  {/* Overlapping Icon Box */}
                  <div className="service-card-one__icon w-16 h-16 rounded-full bg-brand-teal flex items-center justify-center -mt-8 mx-auto relative z-10 shadow-lg border-4 border-white transition-transform duration-500 group-hover:rotate-6">
                    {serviceIcons[i] || serviceIcons[0]}
                  </div>

                  {/* Content Container */}
                  <div className="service-card-one__content p-6 pt-4 text-center flex flex-col flex-1">
                    <h3 className="font-serif text-xl font-bold text-brand-dark mb-3.5 group-hover:text-brand-teal transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-brand-gray font-sans text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-brand-border text-brand-dark group-hover:border-brand-teal group-hover:bg-brand-teal group-hover:text-white font-bold font-sans text-xs uppercase tracking-wide transition-all duration-300"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Variant 2: Home-02 - Tabbed Specialties
  if (variant === "home-02") {
    const tabsData = [
      {
        title: "Chiropractic Care",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80",
        description: "Spinal adjustments and manipulations to alleviate nerve compression, pain in the lower back, neck, joints, and headaches.",
        features: ["Spinal Realignment", "Joint Decompression", "Postural Assessment", "Nerve Relief"],
      },
      {
        title: "Acupuncture Therapy",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=700&q=80",
        description: "Inserting thin medical-grade needles at specific meridian points to activate blood flow and relieve tension and chronic headaches.",
        features: ["Chronic Pain Release", "Stress & Anxiety Relief", "Blood Circulation Boost", "Targeted Point Activation"],
      },
      {
        title: "Massage Therapy",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=80",
        description: "Deep tissue massage, sports massage, and manual stretching to release muscle spasms, adhesions, and mental fatigue.",
        features: ["Deep Tissue Release", "Sports Recovery", "Lymphatic Drainage", "Muscle Tension Relief"],
      },
      {
        title: "Laser Therapy",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=700&q=80",
        description: "High-intensity photobiomodulation to stimulate cellular repair, reduce acute swelling, and accelerate tissue recovery.",
        features: ["Cellular Fast Healing", "Non-Invasive Process", "Rapid Swelling Control", "Joint Pain Reduction"],
      },
    ];

    return (
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showHeader && (
            <ScrollReveal className="mb-16">
              <SectionTitle
                tagline="WHAT WE DO BEST"
                title="Clinic Specialties & Care Tabs"
                align="center"
              />
            </ScrollReveal>
          )}

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabsData.map((tab, idx) => (
              <button
                key={tab.title}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider font-sans transition-all duration-300 border ${
                  activeTab === idx
                    ? "bg-brand-dark text-white border-brand-dark shadow-lg scale-105"
                    : "bg-brand-light text-brand-dark border-brand-border hover:bg-brand-teal hover:text-white"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center bg-brand-light rounded-3xl p-8 lg:p-12">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={tabsData[activeTab].image}
                alt={tabsData[activeTab].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-brand-teal" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-brand-dark/70 font-bold font-sans">
                  Rated 5/5, Clinical rating for this service
                </span>
              </div>

              <h3 className="font-serif text-3xl font-extrabold text-brand-dark mb-4">
                {tabsData[activeTab].title}
              </h3>
              <p className="text-brand-gray font-sans text-sm leading-relaxed mb-6">
                {tabsData[activeTab].description}
              </p>

              <ul className="grid grid-cols-2 gap-3 mb-8">
                {tabsData[activeTab].features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-xs font-bold text-brand-dark">
                    <span className="w-5 h-5 rounded-full bg-brand-teal/15 flex items-center justify-center text-brand-teal">
                      ✓
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3.5 bg-brand-teal text-white hover:bg-brand-dark font-bold rounded-full font-sans text-xs sm:text-sm tracking-wide uppercase transition-all duration-300 shadow-md"
              >
                Book This Treatment
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Variant 3: Home-03 - Snap Horizontal Cards
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=80")` }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showHeader && (
          <ScrollReveal className="mb-16">
            <SectionTitle
              tagline="THERAPY OPTIONS"
              title="Horizontal Care Catalog"
              align="left"
              dark
            />
          </ScrollReveal>
        )}

        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-brand-teal/40">
          {displayed.map((service, i) => (
            <div
              key={service.slug}
              className="flex-shrink-0 w-80 bg-white/5 border border-white/10 rounded-2xl p-6 snap-start flex flex-col justify-between hover:bg-white hover:text-brand-dark hover:border-white transition-all duration-300 group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-brand-teal/20">
                  {service.icon}
                </div>
                <h4 className="font-serif text-xl font-bold mb-3">
                  {service.name}
                </h4>
                <p className="text-gray-300 group-hover:text-brand-gray font-sans text-xs leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <Link
                href={`/services#${service.slug}`}
                className="inline-flex items-center gap-1.5 text-brand-teal text-xs font-bold font-sans tracking-wide"
              >
                DISCOVER DETAIL <span className="group-hover:translate-x-1.5 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
