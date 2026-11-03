import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-powered-smart-surveillance-system.css";

export const metadata: Metadata = metaFor("ai-powered-smart-surveillance-system");

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-powered-smart-surveillance-system" />
    </>
  );
}
