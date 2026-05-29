import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProximityGroup from "@/components/ui/ProximityGroup";
import ProximityItem from "@/components/ui/ProximityItem";
import { team } from "@/lib/data";

interface Props {
  limit?: number;
  showHeader?: boolean;
}

export default function TeamGrid({ limit, showHeader = true }: Props) {
  const displayed = limit ? team.slice(0, limit) : team;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <ScrollReveal className="text-center mb-14">
            <SectionLabel text="Expert Team Members" />
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark">
              Meet Our Expert Team
            </h2>
          </ScrollReveal>
        )}

        <ProximityGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.08}>
              <ProximityItem className="h-full">
                <div className="bg-brand-light rounded-2xl overflow-hidden h-full group text-center">
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Social overlay */}
                    <div className="absolute inset-0 bg-brand-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      {Object.entries(member.socials).map(([platform, href]) => (
                        <a
                          key={platform}
                          href={href}
                          className="w-9 h-9 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white text-xs hover:bg-brand-teal hover:border-brand-teal transition-colors"
                          aria-label={platform}
                        >
                          {platform[0].toUpperCase()}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-brand-dark">
                      {member.name}
                    </h3>
                    <p className="text-brand-teal text-xs font-medium uppercase tracking-wider mt-1 mb-3">
                      {member.role}
                    </p>
                    <p className="text-brand-gray font-sans text-sm leading-relaxed">{member.bio}</p>
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
