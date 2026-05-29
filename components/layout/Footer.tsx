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
    <footer className="bg-brand-black text-white">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-serif text-2xl font-semibold">Sifoxen</span>
            <p className="text-sm text-brand-muted mt-0.5">Subscribe for health tips & updates</p>
          </div>
          <form className="flex w-full sm:w-auto gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 sm:w-64 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-teal"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-full bg-brand-teal text-brand-black font-semibold text-sm hover:bg-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">About Sifoxen</h4>
          <p className="text-sm text-brand-muted leading-relaxed mb-5">
            A leading healthcare therapy provider focused on the diagnosis and treatment of
            musculoskeletal, neurological, and cardiorespiratory conditions.
          </p>
          <Link
            href="/contact"
            className="inline-block px-5 py-2 rounded-full border border-brand-teal text-brand-teal text-sm font-medium hover:bg-brand-teal hover:text-brand-black transition-colors"
          >
            Book Appointment
          </Link>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2">
            {footerServices.map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-sm text-brand-muted hover:text-brand-teal transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-teal flex-shrink-0" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Opening Hours</h4>
          <ul className="space-y-3">
            {hours.map((h) => (
              <li key={h.day} className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-brand-muted">{h.day}</span>
                <span className="text-sm text-white">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-brand-muted">
            <li className="flex gap-2">
              <span>📍</span>
              <span>85 Ketch Harbour Road, Bensal, PA 19020, USA</span>
            </li>
            <li className="flex gap-2">
              <span>✉️</span>
              <a href="mailto:info@sifoxen.com" className="hover:text-brand-teal transition-colors">
                info@sifoxen.com
              </a>
            </li>
            <li className="flex gap-2">
              <span>📞</span>
              <a href="tel:+910030564066" className="hover:text-brand-teal transition-colors">
                +91 0030 5640 669
              </a>
            </li>
          </ul>

          {/* Social icons */}
          <div className="flex gap-3 mt-5">
            {[
              { label: "Facebook", symbol: "f" },
              { label: "Twitter", symbol: "t" },
              { label: "Instagram", symbol: "ig" },
              { label: "YouTube", symbol: "yt" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-brand-muted hover:border-brand-teal hover:text-brand-teal transition-colors"
              >
                {s.symbol}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-brand-muted">
          <span>© 2025 Sifoxen. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-brand-teal transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-teal transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
