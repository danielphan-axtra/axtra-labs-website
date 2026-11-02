import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";

export const metadata: Metadata = metaFor("ai-recruiting-agent-platform");

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-recruiting-agent-platform" />
    </>
  );
}
