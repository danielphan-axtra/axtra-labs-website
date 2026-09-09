import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-returns-prevention-ecommerce-startup.css";

export const metadata: Metadata = pageMeta({
  title: "AI Returns Prevention for a D2C Ecommerce Startup",
  description: "Size and fit recommendation plus return-risk scoring that lowered return rate for a fast-growing D2C apparel brand.",
  path: "/ai-returns-prevention-ecommerce-startup",
  type: "article"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-returns-prevention-ecommerce-startup" />
    </>
  );
}
