import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import BlogGrid from "@/components/sections/BlogGrid";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1600&q=80"
      />
      <BlogGrid showHeader={false} />
    </>
  );
}
