import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-driven-personalized-ecommerce-recommendations.css";

export const metadata: Metadata = metaFor("ai-driven-personalized-ecommerce-recommendations");

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-driven-personalized-ecommerce-recommendations" />
    </>
  );
}
