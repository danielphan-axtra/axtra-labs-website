import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/agent-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/workflow-ai-agent.css";

export const metadata: Metadata = pageMeta({
  title: "Workflow AI Agent",
  description: "LLM agents, a workflow engine, API orchestration and RPA connectors — triggered by schedule, webhook, email, file upload, or API call.",
  path: "/workflow-ai-agent"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="workflow-ai-agent" />
    </>
  );
}
