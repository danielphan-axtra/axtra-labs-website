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
    "OAI-SearchBot",
    "ChatGPT-User",
    "Google-Extended",
    "ClaudeBot",
    "Claude-SearchBot",
    "Claude-User",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Applebot",
    "Applebot-Extended",
    "Bingbot",
    "DuckAssistBot",
    "Amazonbot",
    "MistralAI-User",
    "cohere-ai",
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
