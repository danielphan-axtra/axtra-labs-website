import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/agent-layouts.css";
import "@/styles/pages/voice-ai-agent.css";
import PageInteractionsLoader from "@/components/PageInteractionsLoader";

export const metadata: Metadata = pageMeta({
  title: "Voice AI Agent",
  description: "Feed the agent your docs, policies, FAQs and product catalog. It learns your business, not a generic script.",
  path: "/voice-ai-agent"
});

export default function Page() {
  return (
    <>
      <PageInteractionsLoader page="voice-ai-agent" />
      <HtmlPage slug="voice-ai-agent" />
    </>
  );
}
