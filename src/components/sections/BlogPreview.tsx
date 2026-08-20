import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import BlogCoverArt from "@/components/ui/BlogCoverArt";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import blogImages from "@/data/blog-images.json";

export default function BlogPreview() {
  const items = blogPosts.slice(0, 3);
  const images = blogImages as Record<string, string>;
  return (
    <section className="section-pad bg-manifest">
      <div className="container-page">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHeading
            eyebrow="Industry Insights"
            title="Logistics notes worth reading"
          />
          <Button href="/blog" variant="dark" className="mb-14">View All Articles</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((post) => (
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
      </div>
    </section>
  );
}
