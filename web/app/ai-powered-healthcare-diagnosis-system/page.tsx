import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-powered-healthcare-diagnosis-system.css";

export const metadata: Metadata = pageMeta({
  title: "AI-Powered Healthcare Diagnosis System",
  description: "A specialty clinic network asked clinicians to reconstruct patient history from fragmented EHR notes before each decision. Review time crowded out patient time, and.",
  path: "/ai-powered-healthcare-diagnosis-system",
  type: "article"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-powered-healthcare-diagnosis-system" />
    </>
  );
}
