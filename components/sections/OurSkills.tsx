"use client";

import { useEffect, useState, useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const skills = [
  { name: "Spinal Adjustment", percentage: 90 },
  { name: "Joint Mobilization", percentage: 85 },
  { name: "Acupuncture Therapy", percentage: 95 },
  { name: "Sports Rehabilitation", percentage: 88 },
];

function SkillCircle({ name, percentage }: { name: string; percentage: number }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const timer = setInterval(() => {
            current += 1;
            if (current >= percentage) {
              setProgress(percentage);
              clearInterval(timer);
            } else {
              setProgress(current);
            }
          }, 15);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [percentage]);

  const radius = 45;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="bg-white rounded-3xl p-6 border border-brand-border/60 text-center flex flex-col items-center shadow-md">
      {/* SVG Circle */}
      <div className="relative w-28 h-28 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            className="stroke-brand-light"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            className="stroke-brand-teal transition-all"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
        <span className="absolute font-serif text-xl font-bold text-brand-dark tabular-nums">
          {progress}%
        </span>
      </div>
      <h4 className="font-serif font-bold text-brand-dark text-sm sm:text-base mt-4">
        {name}
      </h4>
    </div>
  );
}

export default function OurSkillsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Descriptive texts */}
        <div className="lg:col-span-5 text-left">
          <ScrollReveal direction="left">
            <SectionLabel text="Our Clinical Skills" />
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark mb-6 leading-tight">
              Highly Qualified Experts Working For You
            </h2>
            <p className="text-brand-gray font-sans text-sm sm:text-base leading-relaxed mb-6">
              Our clinical success rates speak for themselves. We combine state-of-the-art diagnostic technology with years of clinical experience to guide you through personalized spinal adjustments, joint mobilizations, and acupuncture therapy.
            </p>
            <p className="text-brand-gray font-sans text-sm leading-relaxed mb-8">
              At Sifoxen, our treatment plans focus on restoring your full capacity for dynamic movement while educating you on long-term preventative care.
            </p>
            
            <div className="flex gap-6 items-center">
              <div className="text-center">
                <span className="font-serif text-4xl font-extrabold text-brand-teal">98%</span>
                <p className="text-[10px] text-brand-gray uppercase tracking-widest font-bold mt-1">Recovery success</p>
              </div>
              <div className="w-px h-12 bg-brand-border" />
              <div className="text-center">
                <span className="font-serif text-4xl font-extrabold text-brand-teal">12K+</span>
                <p className="text-[10px] text-brand-gray uppercase tracking-widest font-bold mt-1">Adjustments made</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Skills Circle Grid */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill) => (
                <SkillCircle key={skill.name} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
