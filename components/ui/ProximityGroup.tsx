"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  radius?: number;
  maxScale?: number;
}

export default function ProximityGroup({
  children,
  className = "",
  radius = 220,
  maxScale = 0.07,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (!ref.current) return;
    ref.current.querySelectorAll<HTMLElement>("[data-prox]").forEach((el) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      const t = Math.max(0, 1 - dist / radius);
      const scale = 1 + t * maxScale;
      el.style.transform = `scale(${scale})`;
      el.style.boxShadow =
        t > 0.05
          ? `0 ${8 + t * 16}px ${20 + t * 32}px rgba(85,217,215,${(t * 0.28).toFixed(2)})`
          : "";
    });
  }

  function handleLeave() {
    if (!ref.current) return;
    ref.current.querySelectorAll<HTMLElement>("[data-prox]").forEach((el) => {
      el.style.transform = "";
      el.style.boxShadow = "";
    });
  }

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {children}
    </div>
  );
}
