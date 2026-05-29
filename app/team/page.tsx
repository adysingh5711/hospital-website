import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import TeamGrid from "@/components/sections/TeamGrid";
import AppointmentCTA from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = { title: "Our Team" };

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Therapists"
        image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=80"
      />
      <TeamGrid showHeader={false} />
      <AppointmentCTA />
    </>
  );
}
