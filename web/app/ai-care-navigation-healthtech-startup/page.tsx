import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-care-navigation-healthtech-startup.css";

export const metadata: Metadata = metaFor("ai-care-navigation-healthtech-startup");

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-care-navigation-healthtech-startup" />
    </>
  );
}
