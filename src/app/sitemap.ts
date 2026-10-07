import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { getPosts, getServices } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  const latest = posts[0]?.date ?? new Date().toISOString().slice(0, 10);

  const pages: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: latest, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/uslugi`, lastModified: latest, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/blog`, lastModified: latest, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/portfolio`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const services: MetadataRoute.Sitemap = getServices().map((s) => ({
    url: `${site.url}/uslugi/${s.slug}`,
    lastModified: latest,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const articles: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: p.updated ?? p.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...services, ...articles];
}
