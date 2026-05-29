"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: Props) {
  const initial =
    direction === "up"
      ? { opacity: 0, y: 36 }
      : direction === "left"
      ? { opacity: 0, x: -36 }
      : direction === "right"
      ? { opacity: 0, x: 36 }
      : { opacity: 0 };

  const animate =
    direction === "up"
      ? { opacity: 1, y: 0 }
      : direction === "left" || direction === "right"
      ? { opacity: 1, x: 0 }
      : { opacity: 1 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
