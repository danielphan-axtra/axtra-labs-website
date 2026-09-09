/** Shared site constants for metadata, JSON-LD, and AI-facing docs. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://axtralabs.com";

export const SITE_NAME = "Axtra Labs";

export const SITE_TAGLINE = "AI Software Engineering";

export const SITE_DESCRIPTION =
  "AI-augmented software engineering from Vietnam. Gen AI, data, robotics, and DevOps teams that ship production systems.";

export const SITE_EMAIL = "contact@axtralabs.com";

export const SITE_LINKEDIN = "https://www.linkedin.com/company/axtralabs/";

export const SITE_OG_IMAGE = "/assets/img/services/ai-services-hero.jpg";

export const SITE_KEYWORDS = [
  "AI software engineering",
  "Gen AI",
  "RAG",
  "LLM fine-tuning",
  "data engineering",
  "business intelligence",
  "embedded software",
  "AI robotics",
  "DevOps",
  "MLOps",
  "Vietnam software company",
  "Axtra Labs",
] as const;

export type Office = {
  city: string;
  country: string;
  region?: string;
};

export const OFFICES: Office[] = [
  { city: "Irvine", region: "California", country: "US" },
  { city: "Singapore", country: "SG" },
  { city: "Hong Kong", country: "HK" },
  { city: "Hanoi", country: "VN" },
];
