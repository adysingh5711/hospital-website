import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactInfo = [
  {
    icon: "📞",
    label: "Phone",
    value: "+91 0030 5640 669",
    href: "tel:+910030564066",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "info@sifoxen.com",
    href: "mailto:info@sifoxen.com",
  },
  {
    icon: "📍",
    label: "Address",
    value: "85 Ketch Harbour Road, Bensal, PA 19020, USA",
    href: "#",
  },
];

export default function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel text="Get In Touch" />
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark">
            Contact Us
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left — dark info panel */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="bg-brand-dark rounded-3xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-8">
                  We&apos;d Love to Hear From You
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-brand-muted mb-1">
                          {item.label}
                        </p>
                        <a
                          href={item.href}
                          className="text-white font-sans text-sm hover:text-brand-teal transition-colors"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="text-xs uppercase tracking-widest text-brand-muted mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {["FB", "TW", "IG", "YT"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs text-brand-muted hover:border-brand-teal hover:text-brand-teal transition-colors"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal direction="right" delay={0.1} className="lg:col-span-3">
            <div className="bg-brand-light rounded-3xl p-8 h-full">
              <h3 className="font-serif text-2xl font-semibold text-brand-dark mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-brand-gray font-sans mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-brand-dark placeholder-brand-gray/60 text-sm font-sans focus:outline-none focus:border-brand-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-brand-gray font-sans mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-brand-dark placeholder-brand-gray/60 text-sm font-sans focus:outline-none focus:border-brand-teal"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-brand-gray font-sans mb-1.5 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-brand-dark placeholder-brand-gray/60 text-sm font-sans focus:outline-none focus:border-brand-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-brand-gray font-sans mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your condition or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-brand-border text-brand-dark placeholder-brand-gray/60 text-sm font-sans focus:outline-none focus:border-brand-teal resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-brand-dark text-white font-semibold font-sans text-sm hover:bg-brand-purple transition-colors"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* Google Maps embed */}
        <ScrollReveal delay={0.2} className="mt-10 rounded-3xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97396.44398957027!2d-75.19348!3d40.0217747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7dc5fd88d17%3A0xdef951e6b4bfdb04!2sBensalem%2C%20PA!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sifoxen location map"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
