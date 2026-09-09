import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/agent-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/multi-agent-system.css";

export const metadata: Metadata = pageMeta({
  title: "Multi Agent System",
  description: "Real deployments compose agents sequentially, in parallel, or under a supervisor — with humans approving critical actions before they execute.",
  path: "/multi-agent-system",
  type: "article"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="multi-agent-system" />
    </>
  );
}
