import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import AboutSection from "@/components/sections/AboutSection";
import GalleryMasonry from "@/components/sections/GalleryMasonry";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TeamGrid from "@/components/sections/TeamGrid";
import Testimonials from "@/components/sections/Testimonials";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import BlogGrid from "@/components/sections/BlogGrid";

export default function Home03() {
  return (
    <>
      <Hero variant="home-03" />
      <StatsBar />
      <AboutSection />
      <GalleryMasonry />
      <ServicesGrid variant="home-03" limit={6} />
      <TeamGrid variant="home-03" limit={3} />
      <Testimonials />
      <AppointmentCTA variant="home-03" />
      <BlogGrid limit={3} />
    </>
  );
}
