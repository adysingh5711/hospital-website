"use client";

import { useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProximityGroup from "@/components/ui/ProximityGroup";
import ProximityItem from "@/components/ui/ProximityItem";
import { pricingTiers } from "@/lib/data";

interface Props {
  showHeader?: boolean;
}

export default function PricingSection({ showHeader = true }: Props) {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <ScrollReveal className="text-center mb-10">
            <SectionLabel text="Pricing Plan" />
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
              Simple, Transparent Pricing
            </h2>

            {/* Toggle */}
            <div className="inline-flex items-center gap-3 bg-white rounded-full p-1 border border-brand-border">
              <button
                onClick={() => setYearly(false)}
                className={`px-5 py-2 rounded-full text-sm font-medium font-sans transition-colors ${
                  !yearly ? "bg-brand-dark text-white" : "text-brand-gray hover:text-brand-dark"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`px-5 py-2 rounded-full text-sm font-medium font-sans transition-colors flex items-center gap-2 ${
                  yearly ? "bg-brand-dark text-white" : "text-brand-gray hover:text-brand-dark"
                }`}
              >
                Yearly
                <span className="text-xs bg-brand-teal text-brand-black px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </ScrollReveal>
        )}

        <ProximityGroup className="grid md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.08}>
              <ProximityItem className="h-full">
                <div
                  className={`rounded-2xl p-8 h-full flex flex-col relative ${
                    tier.popular
                      ? "bg-brand-dark text-white"
                      : "bg-white text-brand-dark"
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-teal text-brand-black text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}

                  <div className="mb-6">
                    <h3
                      className={`font-serif text-2xl font-semibold mb-2 ${
                        tier.popular ? "text-white" : "text-brand-dark"
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={`text-sm font-sans leading-relaxed ${
                        tier.popular ? "text-brand-muted" : "text-brand-gray"
                      }`}
                    >
                      {tier.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <span className="font-serif text-5xl font-bold">
                      ${yearly ? tier.yearlyPrice : tier.monthlyPrice}
                    </span>
                    <span className={`text-sm font-sans ml-1 ${tier.popular ? "text-brand-muted" : "text-brand-gray"}`}>
                      /month
                    </span>
                    {yearly && (
                      <p className="text-xs font-sans text-brand-teal mt-1">
                        Billed annually — save ${(tier.monthlyPrice - tier.yearlyPrice) * 12}/yr
                      </p>
                    )}
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-sans">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            tier.popular ? "bg-brand-teal/20" : "bg-brand-teal/15"
                          }`}
                        >
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path
                              d="M1 4L3.5 6.5L9 1"
                              stroke="#55D9D7"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                        <span className={tier.popular ? "text-brand-light" : "text-brand-dark"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full flex items-center justify-center py-3.5 rounded-xl font-semibold font-sans text-sm transition-colors ${
                      tier.popular
                        ? "bg-brand-teal text-brand-black hover:bg-white"
                        : "bg-brand-dark text-white hover:bg-brand-purple"
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </ProximityItem>
            </ScrollReveal>
          ))}
        </ProximityGroup>
      </div>
    </section>
  );
}
