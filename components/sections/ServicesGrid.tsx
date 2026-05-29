import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProximityGroup from "@/components/ui/ProximityGroup";
import ProximityItem from "@/components/ui/ProximityItem";
import { services } from "@/lib/data";

interface Props {
  limit?: number;
  showHeader?: boolean;
}

export default function ServicesGrid({ limit, showHeader = true }: Props) {
  const displayed = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <ScrollReveal className="text-center mb-14">
            <SectionLabel text="Our Best Service" />
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark">
              What We&apos;re Offering
            </h2>
          </ScrollReveal>
        )}

        <ProximityGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.07}>
              <ProximityItem className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col group">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                    <span className="absolute top-4 left-4 text-2xl">{service.icon}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-xl font-semibold text-brand-dark mb-3">
                      {service.name}
                    </h3>
                    <p className="text-brand-gray font-sans text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <Link
                      href={`/services#${service.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-brand-teal text-sm font-medium font-sans hover:gap-2 transition-all"
                    >
                      Learn More <span>→</span>
                    </Link>
                  </div>
                </div>
              </ProximityItem>
            </ScrollReveal>
          ))}
        </ProximityGroup>
      </div>
    </section>
  );
}
