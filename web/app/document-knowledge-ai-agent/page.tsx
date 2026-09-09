import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/agent-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/document-knowledge-ai-agent.css";

export const metadata: Metadata = pageMeta({
  title: "Document and Knowledge AI Agent",
  description: "Turn company knowledge into a searchable internal AI assistant. Semantic retrieval, permissions, and citations — not a black-box chatbot.",
  path: "/document-knowledge-ai-agent"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="document-knowledge-ai-agent" />
    </>
  );
}
