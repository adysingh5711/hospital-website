import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AboutSection from "@/components/sections/AboutSection";
import StatsBar from "@/components/sections/StatsBar";
import TeamGrid from "@/components/sections/TeamGrid";
import AppointmentCTA from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80"
      />
      <AboutSection />
      <StatsBar />
      <TeamGrid limit={4} />
      <AppointmentCTA />
    </>
  );
}
