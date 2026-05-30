"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { whyChooseUs } from "@/lib/data";

const icons = [
  // 100% Satisfaction
  <svg key="1" className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // Expert Team
  <svg key="2" className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>,
  // Modern Technology
  <svg key="3" className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>,
  // Advanced Manual Therapy
  <svg key="4" className="w-6 h-6 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
];

export default function WhyChooseUsSection() {
  // Use first 4 features for a 4-feature grid
  const items = whyChooseUs.slice(0, 4);

  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal className="mb-16">
          <SectionLabel text="Why Choose Us" />
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark">
            Clinical Standards You Can Rely On
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <ScrollReveal key={item.title} delay={idx * 0.1}>
              <div className="bg-white rounded-3xl p-8 border border-brand-border/60 hover:border-brand-teal hover:shadow-[0_20px_50px_rgba(14,165,160,0.1)] transition-all duration-300 h-full flex flex-col justify-between group">
                <div className="text-left">
                  {/* Icon wrap */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                    {icons[idx] || icons[0]}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray font-sans text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
