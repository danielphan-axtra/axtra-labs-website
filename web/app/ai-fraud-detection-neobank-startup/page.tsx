import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-fraud-detection-neobank-startup.css";

export const metadata: Metadata = metaFor("ai-fraud-detection-neobank-startup");

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-fraud-detection-neobank-startup" />
    </>
  );
}
