import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";

export const metadata: Metadata = metaFor("grafa-ai-market-intelligence");

export default function Page() {
  return (
    <>
      <HtmlPage slug="grafa-ai-market-intelligence" />
    </>
  );
}
