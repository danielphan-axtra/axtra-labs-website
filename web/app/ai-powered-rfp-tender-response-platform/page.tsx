import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-powered-rfp-tender-response-platform.css";

export const metadata: Metadata = metaFor("ai-powered-rfp-tender-response-platform");

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-powered-rfp-tender-response-platform" />
    </>
  );
}
