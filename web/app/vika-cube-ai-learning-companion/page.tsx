import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";

export const metadata: Metadata = metaFor("vika-cube-ai-learning-companion");

export default function Page() {
  return (
    <>
      <HtmlPage slug="vika-cube-ai-learning-companion" />
    </>
  );
}
