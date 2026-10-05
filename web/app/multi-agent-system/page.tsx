import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/agent-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/multi-agent-system.css";

export const metadata: Metadata = metaFor("multi-agent-system");

export default function Page() {
  return (
    <>
      <HtmlPage slug="multi-agent-system" />
    </>
  );
}
