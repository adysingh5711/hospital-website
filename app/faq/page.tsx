import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import FAQSection from "@/components/sections/FAQSection";
import AppointmentCTA from "@/components/sections/AppointmentCTA";

export const metadata: Metadata = { title: "FAQ" };

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1600&q=80"
      />
      <FAQSection />
      <AppointmentCTA />
    </>
  );
}
