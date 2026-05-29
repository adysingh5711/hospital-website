import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AppointmentCTA() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-purple/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="left">
          <span className="inline-block uppercase tracking-[0.2em] text-xs font-semibold font-sans text-brand-teal bg-brand-teal/10 px-4 py-1.5 rounded-full mb-5">
            Get Appointment
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-5">
            Start Up Your Health Care With Us
          </h2>
          <p className="text-brand-muted font-sans leading-relaxed mb-8">
            Book your initial assessment today and take the first step toward pain-free living. Our
            therapists will create a personalised plan designed around your goals and lifestyle.
          </p>
          <div className="flex gap-3 text-sm font-sans text-brand-muted">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-teal" />
              Same-week appointments
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-teal" />
              Health fund accepted
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.1}>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="font-serif text-2xl font-semibold text-white mb-6">
              Request an Appointment
            </h3>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-sans focus:outline-none focus:border-brand-teal"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-sans focus:outline-none focus:border-brand-teal"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-sans focus:outline-none focus:border-brand-teal"
              />
              <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white/70 text-sm font-sans focus:outline-none focus:border-brand-teal">
                <option value="" className="bg-brand-dark">Select Service</option>
                <option value="sports" className="bg-brand-dark">Sports Injury Therapy</option>
                <option value="acupuncture" className="bg-brand-dark">Acupuncture</option>
                <option value="joint" className="bg-brand-dark">Joint Mobilization</option>
                <option value="pain" className="bg-brand-dark">Pain Management</option>
              </select>
              <textarea
                placeholder="Describe your condition (optional)"
                rows={3}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm font-sans focus:outline-none focus:border-brand-teal resize-none"
              />
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-teal text-brand-black font-semibold font-sans text-sm hover:bg-white transition-colors"
              >
                Book Appointment →
              </Link>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
