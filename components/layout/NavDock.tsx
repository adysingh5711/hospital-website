"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, type PointerEvent } from "react";
import { navItems } from "@/lib/data";

export default function NavDock() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  function handleMove(e: PointerEvent<HTMLElement>) {
    if (!navRef.current) return;
    navRef.current.querySelectorAll<HTMLAnchorElement>("[data-dock]").forEach((el) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const t = Math.max(0, 1 - Math.abs(e.clientX - cx) / 120);
      const scale = 1 + t * 0.45;
      el.style.transform = `scale(${scale})`;
      el.style.letterSpacing = `${-0.02 + t * 0.04}em`;
    });
  }

  function handleLeave() {
    if (!navRef.current) return;
    navRef.current.querySelectorAll<HTMLAnchorElement>("[data-dock]").forEach((el) => {
      el.style.transform = "";
      el.style.letterSpacing = "";
    });
  }

  return (
    <nav
      ref={navRef}
      className="hidden lg:flex items-center gap-1"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            data-dock=""
            style={{ transition: "transform 150ms ease-out, letter-spacing 150ms ease-out" }}
            className={`nav-link px-3 py-2 text-sm font-medium font-sans rounded-md origin-bottom inline-block ${
              active
                ? "text-brand-teal active"
                : "text-brand-dark hover:text-brand-teal"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
