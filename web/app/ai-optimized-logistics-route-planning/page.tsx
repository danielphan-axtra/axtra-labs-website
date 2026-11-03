import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-optimized-logistics-route-planning.css";

export const metadata: Metadata = metaFor("ai-optimized-logistics-route-planning");

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-optimized-logistics-route-planning" />
    </>
  );
}
