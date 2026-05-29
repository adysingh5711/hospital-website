import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const highlights = [
  "Personalised treatment plans tailored to your goals",
  "Evidence-based physiotherapy and manual therapy",
  "State-of-the-art facilities with expert therapists",
  "Flexible scheduling including evening and weekend appointments",
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image column */}
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80"
                alt="Physiotherapy clinic"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Years badge */}
            <div className="absolute -bottom-6 -right-6 bg-brand-dark rounded-2xl px-6 py-5 text-center shadow-2xl">
              <p className="font-serif text-4xl font-bold text-brand-teal">15+</p>
              <p className="text-xs text-brand-muted uppercase tracking-widest mt-1">
                Years of Experience
              </p>
            </div>
            {/* Decorative dot grid */}
            <div
              className="absolute -top-6 -left-6 w-32 h-32 opacity-20"
              style={{
                backgroundImage: "radial-gradient(#55D9D7 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />
          </div>
        </ScrollReveal>

        {/* Text column */}
        <ScrollReveal direction="right">
          <SectionLabel text="About Us" />
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark mb-6">
            We Are Best Physical Therapy Clinic in Town
          </h2>
          <p className="text-brand-gray font-sans leading-relaxed mb-6">
            At Sifoxen, we believe that movement is medicine. Our team of expert physiotherapists,
            chiropractors, and massage therapists work together to deliver holistic, patient-centred
            care that addresses the root cause of your pain — not just the symptoms.
          </p>
          <p className="text-brand-gray font-sans leading-relaxed mb-8">
            From acute sports injuries to chronic conditions, our evidence-based approach combines
            hands-on therapy, exercise rehabilitation, and education to get you back to the life you
            love — faster.
          </p>

          <ul className="space-y-3 mb-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-brand-dark font-sans text-sm">
                <span className="w-5 h-5 rounded-full bg-brand-teal/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#55D9D7" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-dark text-white font-medium font-sans text-sm hover:bg-brand-purple transition-colors duration-200"
          >
            Know More About Us
            <span>→</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
