import type { MetadataRoute } from "next";
import { PAGES, type PageKind } from "@/lib/pages";
import { SITE_URL } from "@/lib/site";

const HIGH = new Set(["contact", "ai-services", "services", "case-study", "about"]);

const KIND_PRIORITY: Record<PageKind, number> = {
  service: 0.8,
  agent: 0.8,
  industry: 0.8,
  "case-study": 0.7,
  company: 0.6,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...PAGES.map((p) => ({
      url: `${SITE_URL}/${p.slug}`,
      lastModified: now,
      changeFrequency: (p.slug === "contact" || p.slug === "insights" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: HIGH.has(p.slug) ? 0.9 : KIND_PRIORITY[p.kind],
    })),
  ];
}
