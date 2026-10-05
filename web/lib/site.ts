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
  street: string;
  postalCode?: string;
};

export const OFFICES: Office[] = [
  { city: "Hanoi", region: "Cau Giay", country: "VN", street: "Viet A Tower, 9 Duy Tan Street" },
  { city: "Singapore", country: "SG", street: "03-15 Jalan Besar Plaza, 101 Kitchener Rd" },
  { city: "Hong Kong", region: "Kwun Tong", country: "HK", street: "King Palace Plaza, 55 King Yip Street" },
  { city: "Irvine", region: "CA", country: "US", street: "100 Spectrum Center Drive", postalCode: "92618" },
];
