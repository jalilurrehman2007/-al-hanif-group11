import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import CtaBanner from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-horizon-gradient pt-20 pb-20">
        <div className="container-page max-w-3xl">
          <nav className="text-xs font-mono text-ink/60 mb-6">
            <Link href="/blog" className="hover:text-harbor transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-harbor">{post.category}</span>
          </nav>
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-signal">
            <span>{formatDate(post.date)}</span>
            <span className="text-sail">•</span>
            <span>{post.category}</span>
          </div>
          <h1 className="mt-4 font-display italic text-harbor text-3xl md:text-4xl leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="section-pad bg-white">
        <div className="container-page max-w-3xl prose-none">
          {post.body.map((para, i) => (
            <p key={i} className="text-ink/75 leading-relaxed mb-5 text-[1.05rem]">
              {para}
            </p>
          ))}
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
