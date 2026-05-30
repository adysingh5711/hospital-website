"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    title: "Clinical Room Assessment",
    span: "col-span-12 md:col-span-8 aspect-video md:aspect-auto md:h-80",
  },
  {
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
    title: "Therapist Adjustments",
    span: "col-span-12 md:col-span-4 aspect-square md:h-80",
  },
  {
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80",
    title: "Acupuncture Placement",
    span: "col-span-12 md:col-span-4 aspect-square md:h-[400px]",
  },
  {
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=600&q=80",
    title: "Musculoskeletal Stretching",
    span: "col-span-12 md:col-span-8 aspect-video md:aspect-auto md:h-[400px]",
  },
];

export default function GalleryMasonry() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal className="mb-16">
          <SectionLabel text="Our Clinic Gallery" />
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark">
            Inside Sifoxen Facilities & Treatments
          </h2>
        </ScrollReveal>

        {/* Masonry Columns/Grid */}
        <div className="grid grid-cols-12 gap-6">
          {galleryItems.map((item, idx) => (
            <ScrollReveal key={item.title} className={item.span} delay={idx * 0.08}>
              <div className="w-full h-full rounded-3xl overflow-hidden relative shadow-lg group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Dark Hover Card Overlay */}
                <div className="absolute inset-0 bg-brand-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-left z-10">
                  <h4 className="font-serif text-lg sm:text-xl font-bold">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-brand-teal uppercase tracking-widest mt-1">
                    Sifoxen Clinical Standard
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
