import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProximityGroup from "@/components/ui/ProximityGroup";
import ProximityItem from "@/components/ui/ProximityItem";
import { testimonials } from "@/lib/data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#55D9D7">
          <path d="M7 1l1.545 3.09L12 4.635l-2.5 2.435.59 3.43L7 8.845l-3.09 1.655L4.5 7.07 2 4.635l3.455-.545L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel text="Testimonials" />
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark">
            What Patients Say
          </h2>
        </ScrollReveal>

        <ProximityGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <ProximityItem className="h-full">
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col">
                  <span className="text-4xl text-brand-teal font-serif leading-none mb-4">&ldquo;</span>
                  <StarRating count={t.rating} />
                  <p className="text-brand-gray font-sans text-sm leading-relaxed mt-4 flex-1">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-brand-border">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-brand-dark font-sans text-sm">{t.name}</p>
                      <p className="text-xs text-brand-gray font-sans">{t.role}</p>
                    </div>
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
