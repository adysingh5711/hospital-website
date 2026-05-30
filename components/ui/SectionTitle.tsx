"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  tagline: string;
  title: string | React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export default function SectionTitle({
  tagline,
  title,
  align = "center",
  className = "",
  dark = false,
}: SectionTitleProps) {
  const isLeft = align === "left";
  const isRight = align === "right";

  return (
    <div
      className={`sec-title flex flex-col ${
        isLeft ? "items-start text-left" : isRight ? "items-end text-right" : "items-center text-center"
      } ${className}`}
    >
      <div className="sec-title__top flex items-center gap-2.5 mb-3.5">
        {/* Sifoxen signature leaf/shape icon */}
        <svg
          className="w-5 h-5 text-brand-teal flex-shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.8 8.17 6.67 9.53L12 18l3.33 3.53C19.2 20.17 22 16.42 22 12A10 10 0 0 0 12 2z" />
          <path d="M12 2v16" />
          <path d="M12 8h4" />
          <path d="M12 12H8" />
        </svg>

        <h6 className="sec-title__tagline text-xs font-bold font-sans tracking-[0.25em] text-brand-teal uppercase mt-0.5">
          {tagline}
        </h6>
      </div>

      <h3
        className={`sec-title__title font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight ${
          dark ? "text-white" : "text-brand-dark"
        }`}
      >
        {title}
      </h3>

      <div
        className={`w-14 h-1 bg-brand-teal rounded-full mt-5 transition-all duration-500`}
      />
    </div>
  );
}
