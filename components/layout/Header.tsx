"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import NavDock from "./NavDock";
import { navItems } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 130) {
        setIsStuck(true);
      } else {
        setIsStuck(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topbar = (
    <div className="topbar-one bg-brand-dark text-white/80 py-2.5 px-4 sm:px-6 lg:px-8 border-b border-white/5 text-xs font-medium font-sans">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        {/* Left Side Contact */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a href="mailto:needhelp@company.com" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
            <svg className="w-3.5 h-3.5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            needhelp@company.com
          </a>
          <a href="tel:+9156980036420" className="flex items-center gap-2 hover:text-brand-teal transition-colors">
            <svg className="w-3.5 h-3.5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +91 5698 0036 420
          </a>
        </div>

        {/* Right Side Clock & Socials */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-brand-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Mon to Fri 9:00am to 6:00pm</span>
          </div>
          <div className="flex items-center gap-3">
            {["facebook", "twitter", "instagram", "youtube"].map((social) => (
              <a
                key={social}
                href="#"
                className="hover:text-brand-teal transition-colors"
                aria-label={social}
              >
                <span className="text-[11px] capitalize">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const mainHeaderInner = (isClone: boolean) => (
    <div className={`main-header__inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${isClone ? "py-2" : "py-4"}`}>
      {/* Background SVG texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48c-2 0-3 1-4 2v4c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-4c0-1-1-2-2-2h-4c-2 0-3 1-4 2v4c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-4c0-1-1-2-2-2H8c-2 0-3 1-4 2v4c0 1-1 2-2 2H0v-2h2c1 0 2-1 2-2v-4c0-1 1-2 2-2h4c1 0 2 1 2 2v4c0 1 1 2 2 2h4c2 0 3-1 4-2v-4c0-1 1-2 2-2h4c1 0 2 1 2 2v4c0 1 1 2 2 2h4c2 0 3-1 4-2v-4c0-1 1-2 2-2h4c1 0 2 1 2 2v4c0 1 1 2 2 2h2v-2h-2zm-32-6c-2 0-3 1-4 2v4c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-4c0-1-1-2-2-2H2c-2 0-3 1-4 2v4c0 1-1 2-2 2h-2v-2h2c1 0 2-1 2-2v-4c0-1 1-2 2-2h4c1 0 2 1 2 2v4c0 1 1 2 2 2h4c2 0 3-1 4-2v-4c0-1 1-2 2-2h4c1 0 2 1 2 2v4c0 1 1 2 2 2h2v-2h-2zm16 0c-2 0-3 1-4 2v4c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-4c0-1-1-2-2-2H34c-2 0-3 1-4 2v4c0 1-1 2-2 2h-2v-2h2c1 0 2-1 2-2v-4c0-1 1-2 2-2h4c1 0 2 1 2 2v4c0 1 1 2 2 2h4c2 0 3-1 4-2v-4c0-1 1-2 2-2h4c1 0 2 1 2 2v4c0 1 1 2 2 2h2v-2h-2zm16 0c-2 0-3 1-4 2v4c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-4c0-1-1-2-2-2H50c-2 0-3 1-4 2v4c0 1-1 2-2 2h-2v-2h2c1 0 2-1 2-2v-4c0-1 1-2 2-2h4c1 0 2 1 2 2v4c0 1 1 2 2 2h4c2 0 3-1 4-2v-4c0-1 1-2 2-2h4c1 0 2 1 2 2v4c0 1 1 2 2 2h2v-2h-2z' fill='%23362048' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="flex items-center justify-between h-16 relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-brand-dark flex items-center justify-center">
            <span className="text-brand-teal font-serif font-extrabold text-sm">S</span>
          </span>
          <span className="font-serif text-xl font-bold text-brand-dark tracking-wide">
            Sifoxen
          </span>
        </Link>

        {/* Desktop Nav */}
        <NavDock />

        {/* Search, Cart & teal CTA Button */}
        <div className="flex items-center gap-5">
          {/* Search Icon */}
          <button className="hidden sm:block text-brand-dark hover:text-brand-teal transition-colors" aria-label="Search">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Cart Icon */}
          <button className="hidden sm:block text-brand-dark hover:text-brand-teal transition-colors relative" aria-label="Cart">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 bg-brand-teal text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-brand-teal text-white text-xs font-bold font-sans tracking-wide uppercase hover:bg-brand-dark hover:scale-[1.02] shadow-sm transition-all duration-300"
          >
            book appointment
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-brand-dark"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5.5 h-0.5 bg-current mb-1.5" />
            <span className="block w-5.5 h-0.5 bg-current mb-1.5" />
            <span className="block w-3.5 h-0.5 bg-current" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="relative z-40 bg-white border-b border-brand-border/40 shadow-sm flex flex-col">
        {/* Topbar Layer */}
        {topbar}

        {/* Main Nav Layer */}
        {mainHeaderInner(false)}
      </header>

      {/* Sticky clone duplicate navigation bar */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-md border-b border-brand-border/40 z-50 transition-all duration-300 transform ${
          isStuck ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {mainHeaderInner(true)}
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-brand-dark/50 z-50 lg:hidden flex justify-end">
          <div className="w-80 bg-brand-dark text-white p-6 h-full flex flex-col gap-6 relative animate-slide-in">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="font-serif text-xl font-bold text-white">Sifoxen Menu</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="text-brand-teal font-bold text-lg">
                ✕
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 px-3 rounded-lg text-sm font-semibold hover:bg-white/5 hover:text-brand-teal transition-all"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 py-3 px-4 rounded-xl bg-brand-teal text-white text-center text-xs font-bold uppercase tracking-wider shadow-md"
              >
                book appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
