import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-driven-personalized-ecommerce-recommendations.css";

export const metadata: Metadata = pageMeta({
  title: "AI-Driven Personalized E-Commerce Recommendations",
  description: "A fashion and lifestyle retailer ran static homepage merchandising. Return visitors saw the same grid; conversion and repeat purchase lagged peers who personalized.",
  path: "/ai-driven-personalized-ecommerce-recommendations"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-driven-personalized-ecommerce-recommendations" />
    </>
  );
}
