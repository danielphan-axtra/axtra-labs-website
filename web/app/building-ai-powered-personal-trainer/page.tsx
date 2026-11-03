import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/building-ai-powered-personal-trainer.css";

export const metadata: Metadata = metaFor("building-ai-powered-personal-trainer");

export default function Page() {
  return (
    <>
      <HtmlPage slug="building-ai-powered-personal-trainer" />
    </>
  );
}
