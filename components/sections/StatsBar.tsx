import StatCounter from "@/components/ui/StatCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="bg-brand-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
