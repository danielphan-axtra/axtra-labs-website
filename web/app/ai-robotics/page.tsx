import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/tech-icons.css";
import "@/styles/agent-layouts.css";
import "@/styles/pages/ai-robotics.css";

export const metadata: Metadata = metaFor("ai-robotics");

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-robotics" />
    </>
  );
}
