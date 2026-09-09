import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-fraud-detection-neobank-startup.css";

export const metadata: Metadata = pageMeta({
  title: "AI Fraud Detection for a Neobank Startup",
  description: "Graph + behavioral fraud scoring that cut false declines while catching account-takeover rings for an early-stage neobank.",
  path: "/ai-fraud-detection-neobank-startup",
  type: "article"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-fraud-detection-neobank-startup" />
    </>
  );
}
