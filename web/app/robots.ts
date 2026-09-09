import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Allow search engines and major AI crawlers to index the public site. */
export default function robots(): MetadataRoute.Robots {
  const allowAll = {
    userAgent: "*",
    allow: "/",
  } as const;

  const aiAgents = [
    "GPTBot",
    "ChatGPT-User",
    "Google-Extended",
    "ClaudeBot",
    "Anthropic-AI",
    "PerplexityBot",
    "Applebot-Extended",
    "Bytespider",
    "CCBot",
    "meta-externalagent",
  ].map((userAgent) => ({
    userAgent,
    allow: "/",
  }));

  return {
    rules: [allowAll, ...aiAgents],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
