import { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about-us",
    "/services",
    "/gallery",
    "/blog",
    "/faq",
    "/contact-us",
    "/privacy-policy",
  ].map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${site.domain}/services/${s.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${site.domain}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
