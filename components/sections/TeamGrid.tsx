"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { team } from "@/lib/data";

interface Props {
  limit?: number;
  showHeader?: boolean;
  variant?: "home-01" | "home-02" | "home-03";
}

export default function TeamGrid({ limit = 3, showHeader = true, variant = "home-01" }: Props) {
  const displayed = limit ? team.slice(0, limit) : team;
  const [centeredIndex, setCenteredIndex] = useState(2);

  // Variant 1 & 3: Redesigned Home-01 - bottom anchored sliding social drawers
  if (variant === "home-01" || variant === "home-03") {
    return (
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showHeader && (
            <ScrollReveal className="mb-16">
              <SectionTitle
                tagline="EXPERT PRACTITIONERS"
                title="Meet Our Expert Team"
                align="center"
              />
            </ScrollReveal>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayed.slice(0, 3).map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.08}>
                <div className="therapist-card relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group bg-brand-light">
                  {/* Full size doctor image link */}
                  <div className="therapist-card__image w-full h-full relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover scale-100 group-hover:scale-102 transition-transform duration-700"
                    />

                    {/* Standard base label when not hovered */}
                    <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-brand-dark/90 via-brand-dark/45 to-transparent text-white group-hover:opacity-0 transition-opacity duration-300">
                      <h4 className="font-serif text-xl font-bold">{member.name}</h4>
                      <p className="text-xs text-brand-teal uppercase tracking-wider font-bold mt-1">
                        {member.role}
                      </p>
                    </div>

                    {/* therapist-card__hover: bottom anchored panel sliding up */}
                    <div className="therapist-card__hover absolute bottom-0 inset-x-0 bg-brand-dark text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 flex flex-col gap-4">
                      {/* Social links row */}
                      <div className="social-links flex gap-2.5">
                        {Object.entries(member.socials).map(([platform, href]) => (
                          <a
                            key={platform}
                            href={href}
                            className="w-7 h-7 rounded-full bg-white/10 hover:bg-brand-teal flex items-center justify-center text-[10px] text-white transition-colors"
                            aria-label={platform}
                          >
                            <span className="capitalize">{platform[0]}</span>
                          </a>
                        ))}
                      </div>

                      {/* therapist-card__identity */}
                      <div className="therapist-card__identity border-t border-white/10 pt-3">
                        <h3 className="therapist-card__name font-serif text-lg font-bold">
                          <a href="#" className="hover:text-brand-teal transition-colors">
                            {member.name}
                          </a>
                        </h3>
                        <span className="therapist-card__designation text-xs text-brand-teal uppercase font-bold tracking-wider block mt-0.5">
                          {member.role}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Variant 2: Home-02 - Team Snap Carousel
  return (
    <section className="py-24 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <ScrollReveal className="mb-16">
            <SectionTitle
              tagline="EXPERT PRACTITIONERS"
              title="Clinical Team Carousel"
              align="center"
            />
          </ScrollReveal>
        )}

        <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-none items-center">
          {team.map((member, i) => {
            const isFeatured = centeredIndex === i;
            return (
              <div
                key={member.name}
                onClick={() => setCenteredIndex(i)}
                className={`flex-shrink-0 w-80 snap-center cursor-pointer transition-all duration-500 rounded-3xl overflow-hidden relative group shadow-md ${
                  isFeatured
                    ? "scale-105 border-2 border-brand-teal ring-4 ring-brand-teal/20 shadow-2xl z-20 aspect-[3/4]"
                    : "scale-95 opacity-60 aspect-[3/4]"
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent flex flex-col justify-end p-6 text-white">
                  <h4 className="font-serif text-lg font-bold">{member.name}</h4>
                  <p className="text-xs text-brand-teal uppercase tracking-wider font-bold mt-0.5 mb-2">
                    {member.role}
                  </p>
                  
                  {isFeatured && (
                    <p className="text-[11px] text-gray-300 font-sans leading-relaxed mt-1 block">
                      {member.bio}
                    </p>
                  )}
                  
                  <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {Object.entries(member.socials).map(([platform, href]) => (
                      <a
                        key={platform}
                        href={href}
                        className="w-7 h-7 rounded-full bg-white/20 hover:bg-brand-teal flex items-center justify-center text-[10px] text-white"
                      >
                        <span className="capitalize">{platform[0]}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {team.map((_, i) => (
            <button
              key={i}
              onClick={() => setCenteredIndex(i)}
              className={`w-3.5 h-3.5 rounded-full transition-all ${
                centeredIndex === i ? "bg-brand-teal w-8" : "bg-brand-dark/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
