import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <PageHeader
        title="Pricing Plans"
        image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1600&q=80"
      />
      <PricingSection />
      <FAQSection />
    </>
  );
}
