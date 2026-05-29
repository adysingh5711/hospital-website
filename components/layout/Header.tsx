"use client";

import Link from "next/link";
import { useState } from "react";
import NavDock from "./NavDock";
import { navItems } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center">
              <span className="text-brand-teal font-serif font-bold text-sm">S</span>
            </span>
            <span className="font-serif text-xl font-semibold text-brand-dark tracking-wide">
              Sifoxen
            </span>
          </Link>

          {/* Desktop nav */}
          <NavDock />

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-brand-dark text-white text-sm font-medium font-sans hover:bg-brand-purple transition-colors duration-200"
            >
              Book Appointment
            </Link>

            <button
              className="lg:hidden p-2 rounded-md text-brand-dark"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-5 h-0.5 bg-current mb-1" />
              <span className="block w-3 h-0.5 bg-current" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-brand-border bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-3 rounded-md text-sm font-medium font-sans text-brand-dark hover:text-brand-teal hover:bg-brand-light transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 py-2 px-4 rounded-full bg-brand-dark text-white text-sm font-medium font-sans text-center"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
