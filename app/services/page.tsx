import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ProximityGroup from "@/components/ui/ProximityGroup";
import ProximityItem from "@/components/ui/ProximityItem";
import { whyChooseUs } from "@/lib/data";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        image="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=1600&q=80"
      />

      <ServicesGrid showHeader={false} />

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <SectionLabel text="Our Advantage" light />
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white">
              Why Choose Us
            </h2>
          </ScrollReveal>

          <ProximityGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.07}>
                <ProximityItem>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-brand-teal/40 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/15 flex items-center justify-center mb-4">
                      <span className="text-brand-teal text-lg">✓</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-brand-muted font-sans text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ProximityItem>
              </ScrollReveal>
            ))}
          </ProximityGroup>
        </div>
      </section>
    </>
  );
}
