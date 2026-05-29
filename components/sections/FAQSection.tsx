"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { faqs } from "@/lib/data";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel text="FAQ" />
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={faq.question} delay={i * 0.05}>
              <div className="border border-brand-border rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-brand-dark font-sans text-sm hover:bg-brand-light transition-colors"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full border border-brand-border flex items-center justify-center transition-transform duration-200 ${
                      open === i ? "rotate-180 border-brand-teal" : ""
                    }`}
                  >
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path
                        d="M1 1L5 5L9 1"
                        stroke={open === i ? "#55D9D7" : "#79767C"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5">
                    <p className="text-brand-gray font-sans text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
