"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-dark overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Decorative teal blob */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-brand-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-purple/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — text */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block uppercase tracking-[0.25em] text-xs font-semibold font-sans text-brand-teal mb-5 px-4 py-1.5 rounded-full bg-brand-teal/10"
          >
            Physiotherapy & Chiropractic
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Let&apos;s Be{" "}
            <span className="text-brand-teal italic">Healthy</span>
            <br />
            Unlocking Your Body
            <br />
            <span className="text-brand-muted text-4xl sm:text-5xl lg:text-6xl">
              For Optimal Wellness
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-muted font-sans text-lg leading-relaxed mb-8 max-w-xl"
          >
            We are a healthcare therapy provider focused on the diagnosis and treatment of
            musculoskeletal conditions — helping you move better, live better, and feel better.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-teal text-brand-black font-semibold font-sans hover:bg-white transition-colors duration-200 text-sm"
            >
              Our Services
              <span>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-medium font-sans hover:border-brand-teal hover:text-brand-teal transition-colors duration-200 text-sm"
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>

        {/* Right — image card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=700&q=80"
              alt="Physiotherapy treatment"
              className="w-full h-full object-cover"
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 rounded-2xl px-5 py-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-serif font-bold text-brand-dark">15+</span>
                <div>
                  <p className="text-xs text-brand-gray uppercase tracking-wider">Years of</p>
                  <p className="text-sm font-semibold text-brand-dark">Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative circle */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-brand-teal/30" />
          <div className="absolute -bottom-4 right-12 w-12 h-12 rounded-full bg-brand-purple/40" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-brand-muted uppercase tracking-widest font-sans">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="w-0.5 h-8 bg-brand-teal/50 rounded-full"
        />
      </motion.div>
    </section>
  );
}
