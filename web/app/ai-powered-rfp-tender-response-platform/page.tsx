import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-powered-rfp-tender-response-platform.css";

export const metadata: Metadata = pageMeta({
  title: "AI-Powered RFP & Tender Response Platform",
  description: "A professional-services firm responding to dozens of RFPs each quarter. Winning language lived in old Word files and email; pricing sat in spreadsheets that bid.",
  path: "/ai-powered-rfp-tender-response-platform"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-powered-rfp-tender-response-platform" />
    </>
  );
}
