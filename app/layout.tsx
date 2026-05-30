import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
  weight: ["400", "500", "700"],
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sifoxen — Chiropractic & Physiotherapy",
    template: "%s | Sifoxen",
  },
  description:
    "Leading chiropractic and physiotherapy clinic. Expert therapists delivering personalised treatment for musculoskeletal conditions, sports injuries, and chronic pain.",
  keywords: ["physiotherapy", "chiropractic", "sports injury", "pain management", "acupuncture"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${dmsans.variable} ${garamond.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
