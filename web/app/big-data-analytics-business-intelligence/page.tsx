import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/big-data-analytics-business-intelligence.css";

export const metadata: Metadata = metaFor("big-data-analytics-business-intelligence");

export default function Page() {
  return (
    <>
      <HtmlPage slug="big-data-analytics-business-intelligence" />
    </>
  );
}
