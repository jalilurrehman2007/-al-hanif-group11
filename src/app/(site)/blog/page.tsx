import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import BlogCoverArt from "@/components/ui/BlogCoverArt";
import blogImages from "@/data/blog-images.json";

export const metadata: Metadata = {
  title: "Blog",
  description: "Logistics notes on freight, customs, sourcing, and warehousing from Alhanif Group.",
};

export default function BlogIndexPage() {
  const images = blogImages as Record<string, string>;
  return (
    <>
      <section className="bg-horizon-gradient pt-20 pb-24">
        <div className="container-page">
          <span className="manifest-eyebrow border-signal/50 text-signal">Industry Insights</span>
          <h1 className="mt-5 font-display italic text-harbor text-4xl md:text-5xl max-w-2xl leading-tight">
            Logistics notes worth reading
          </h1>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-sail-light rounded-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <BlogCoverArt category={post.category} slug={post.slug} image={post.coverImage ?? images[post.slug]} alt={post.title} />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-signal">
                  <span>{formatDate(post.date)}</span>
                  <span className="text-sail">•</span>
                  <span>{post.category}</span>
                </div>
                <h3 className="mt-3 font-display text-xl text-harbor group-hover:text-route transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
