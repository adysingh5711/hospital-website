import StatCounter from "@/components/ui/StatCounter";
import ScrollReveal from "@/components/ui/ScrollReveal";

const customStats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 2800, suffix: "+", label: "Happy Customers" },
  { value: 150, suffix: "+", label: "Project Completed" },
  { value: 12, suffix: "+", label: "Expert Therapist" },
];

export default function StatsBar() {
  return (
    <section className="bg-brand-dark py-20 relative overflow-hidden">
      {/* Faint therapeutic background image at 10% opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=80")`,
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-white/10">
          {customStats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
