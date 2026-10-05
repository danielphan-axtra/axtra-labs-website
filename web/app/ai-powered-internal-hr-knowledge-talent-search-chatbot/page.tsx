import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-powered-internal-hr-knowledge-talent-search-chatbot.css";

export const metadata: Metadata = metaFor("ai-powered-internal-hr-knowledge-talent-search-chatbot");

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-powered-internal-hr-knowledge-talent-search-chatbot" />
    </>
  );
}
