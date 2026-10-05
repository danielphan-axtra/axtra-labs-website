import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-software-development.css";

export const metadata: Metadata = metaFor("ai-software-development");

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-software-development" />
    </>
  );
}
