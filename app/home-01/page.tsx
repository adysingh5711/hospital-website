import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TeamGrid from "@/components/sections/TeamGrid";
import Testimonials from "@/components/sections/Testimonials";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import BlogGrid from "@/components/sections/BlogGrid";

export default function Home01() {
  return (
    <>
      <Hero variant="home-01" />
      <StatsBar />
      <AboutSection />
      <WhyChooseUs />
      <ServicesGrid variant="home-01" limit={6} />
      <TeamGrid variant="home-01" limit={3} />
      <Testimonials />
      <AppointmentCTA variant="home-01" />
      <BlogGrid limit={3} />
    </>
  );
}
