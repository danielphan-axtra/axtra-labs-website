import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/optimizing-gpt-4-prompt-engineering.css";

export const metadata: Metadata = metaFor("optimizing-gpt-4-prompt-engineering");

export default function Page() {
  return (
    <>
      <HtmlPage slug="optimizing-gpt-4-prompt-engineering" />
    </>
  );
}
