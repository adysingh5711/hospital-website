"use client";

import Link from "next/link";

const footerServices = [
  "Physiotherapy",
  "Massage Therapy",
  "Chiropractic Care",
  "Acupuncture",
  "Laser Therapy",
];

const hours = [
  { day: "Monday – Friday", time: "9:00 am – 6:00 pm" },
  { day: "Saturday", time: "9:00 am – 2:00 pm" },
  { day: "Sunday", time: "Closed" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white relative overflow-hidden font-sans border-t border-white/5">
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 1. main-footer__top — Newsletter Topbar Layer */}
      <div className="main-footer__top border-b border-white/10 relative z-10 py-10 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Top Logo */}
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-brand-teal/20 flex items-center justify-center border border-brand-teal/40">
              <span className="text-brand-teal font-serif font-extrabold text-lg">S</span>
            </span>
            <span className="font-serif text-2xl font-black text-white tracking-wide">
              Sifoxen
            </span>
          </div>

          {/* Newsletter Form */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <span className="text-xs uppercase font-bold text-gray-300 font-sans tracking-widest text-center sm:text-left">
              Join Our Clinic Newsletter
            </span>
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full sm:w-auto gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 sm:w-60 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder-white/30 focus:outline-none focus:border-brand-teal focus:bg-white/10 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-brand-teal text-white hover:bg-white hover:text-brand-dark text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main widgets grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* 2. footer-widget--about */}
        <div className="footer-widget--about flex flex-col items-start text-left">
          <h4 className="font-serif text-lg font-bold text-white mb-4">About Sifoxen</h4>
          <div className="w-10 h-0.5 bg-brand-teal mb-6 rounded-full" />
          
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 font-sans">
            Sifoxen is a leading provider of physical care, focused on spinal alignment, joint mobilization, sports injury rehabilitation, and therapeutic acupuncture.
          </p>
          
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white text-xs font-bold uppercase tracking-wide transition-all duration-300"
          >
            Book Appointment
          </Link>
        </div>

        {/* 3. footer-widget--links */}
        <div className="footer-widget--links flex flex-col items-start text-left">
          <h4 className="font-serif text-lg font-bold text-white mb-4">Our Services</h4>
          <div className="w-10 h-0.5 bg-brand-teal mb-6 rounded-full" />
          
          <ul className="space-y-3 font-sans text-xs sm:text-sm">
            {footerServices.map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-brand-teal flex items-center gap-2.5 transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/40 group-hover:bg-brand-teal flex-shrink-0" />
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. footer-widget--contact: Opening Times & Address */}
        <div className="footer-widget--contact flex flex-col items-start text-left">
          <h4 className="font-serif text-lg font-bold text-white mb-4">Opening Hours</h4>
          <div className="w-10 h-0.5 bg-brand-teal mb-6 rounded-full" />
          
          <table className="w-full text-left text-xs sm:text-sm text-gray-400 border-collapse">
            <tbody>
              {hours.map((h) => (
                <tr key={h.day} className="border-b border-white/5 last:border-0">
                  <td className="py-2 pr-4 font-bold text-gray-300">{h.day}</td>
                  <td className="py-2 text-right">{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Address and Socials Widget */}
        <div className="flex flex-col items-start text-left">
          <h4 className="font-serif text-lg font-bold text-white mb-4">Contact Info</h4>
          <div className="w-10 h-0.5 bg-brand-teal mb-6 rounded-full" />
          
          <ul className="space-y-3 font-sans text-xs sm:text-sm text-gray-400">
            <li className="flex items-start gap-2.5">
              <span className="text-brand-teal">📍</span>
              <span>85 Ketch Harbour Road, Bensal, PA 19020, USA</span>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-brand-teal">✉️</span>
              <a href="mailto:info@sifoxen.com" className="hover:text-brand-teal transition-colors">
                info@sifoxen.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <span className="text-brand-teal">📞</span>
              <a href="tel:+910030564066" className="hover:text-brand-teal transition-colors">
                +91 5698 0036 420
              </a>
            </li>
          </ul>

          {/* Social media icons */}
          <div className="flex gap-2.5 mt-6">
            {["facebook", "twitter", "instagram", "youtube"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-brand-teal hover:text-brand-teal flex items-center justify-center transition-all"
                aria-label={social}
              >
                <span className="text-[10px] uppercase font-bold">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* 5. Copyright bar bottom */}
      <div className="border-t border-white/10 relative z-10 bg-brand-dark/40 py-6 text-xs text-gray-400 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© 2026 Sifoxen Chiropractic & Physiotherapy Clinic. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-brand-teal transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-teal transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
