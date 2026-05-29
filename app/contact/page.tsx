import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1600&q=80"
      />
      <ContactSection />
    </>
  );
}
