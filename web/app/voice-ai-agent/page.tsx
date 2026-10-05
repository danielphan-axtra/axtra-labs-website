import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/agent-layouts.css";
import "@/styles/pages/voice-ai-agent.css";
import PageInteractionsLoader from "@/components/PageInteractionsLoader";

export const metadata: Metadata = metaFor("voice-ai-agent");

export default function Page() {
  return (
    <>
      <PageInteractionsLoader page="voice-ai-agent" />
      <HtmlPage slug="voice-ai-agent" />
    </>
  );
}
