import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import AboutSection from "@/components/sections/AboutSection";
import OurSkillsSection from "@/components/sections/OurSkills";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TeamGrid from "@/components/sections/TeamGrid";
import Testimonials from "@/components/sections/Testimonials";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import BlogGrid from "@/components/sections/BlogGrid";

export default function Home02() {
  return (
    <>
      <Hero variant="home-02" />
      <StatsBar />
      <AboutSection />
      <OurSkillsSection />
      <ServicesGrid variant="home-02" />
      <TeamGrid variant="home-02" />
      <Testimonials />
      <AppointmentCTA variant="home-02" />
      <BlogGrid limit={3} />
    </>
  );
}
