import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import AboutSection from "@/components/sections/AboutSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TeamGrid from "@/components/sections/TeamGrid";
import Testimonials from "@/components/sections/Testimonials";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import BlogGrid from "@/components/sections/BlogGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSection />
      <ServicesGrid limit={6} />
      <TeamGrid limit={4} />
      <Testimonials />
      <AppointmentCTA />
      <BlogGrid limit={3} />
    </>
  );
}
