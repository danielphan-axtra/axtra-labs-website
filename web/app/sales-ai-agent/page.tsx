import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/agent-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/sales-ai-agent.css";

export const metadata: Metadata = pageMeta({
  title: "Sales AI Agent",
  description: "From first touch to renewals, the Sales AI Agent works your CRM data, talk tracks, and playbooks across voice, email, and chat.",
  path: "/sales-ai-agent"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="sales-ai-agent" />
    </>
  );
}
