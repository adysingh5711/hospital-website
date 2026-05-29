import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProximityGroup from "@/components/ui/ProximityGroup";
import ProximityItem from "@/components/ui/ProximityItem";
import { blogPosts } from "@/lib/data";

interface Props {
  limit?: number;
  showHeader?: boolean;
}

export default function BlogGrid({ limit, showHeader = true }: Props) {
  const displayed = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <ScrollReveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
            <div>
              <SectionLabel text="Latest News" />
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark">
                Latest Articles &amp; Blogs
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-brand-teal font-medium font-sans text-sm hover:gap-2 transition-all"
            >
              View All Posts →
            </Link>
          </ScrollReveal>
        )}

        <ProximityGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.07}>
              <ProximityItem className="h-full">
                <article className="bg-brand-light rounded-2xl overflow-hidden h-full flex flex-col group">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-brand-teal text-brand-black text-xs font-semibold font-sans px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-brand-gray font-sans mb-3">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-brand-dark mb-3 leading-snug flex-1">
                      {post.title}
                    </h3>
                    <p className="text-brand-gray font-sans text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog#${post.slug}`}
                      className="inline-flex items-center gap-1 text-brand-teal text-sm font-medium font-sans hover:gap-2 transition-all"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              </ProximityItem>
            </ScrollReveal>
          ))}
        </ProximityGroup>
      </div>
    </section>
  );
}
