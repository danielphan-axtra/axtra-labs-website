import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/agent-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/document-knowledge-ai-agent.css";

export const metadata: Metadata = metaFor("document-knowledge-ai-agent");

export default function Page() {
  return (
    <>
      <HtmlPage slug="document-knowledge-ai-agent" />
    </>
  );
}
