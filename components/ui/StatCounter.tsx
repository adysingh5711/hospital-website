"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCounter({ value, suffix = "", label }: Props) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-5xl font-bold text-brand-teal tabular-nums">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-widest text-brand-muted font-sans">
        {label}
      </p>
    </div>
  );
}
