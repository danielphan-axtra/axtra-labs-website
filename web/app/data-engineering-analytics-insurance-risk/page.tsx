import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/data-engineering-analytics-insurance-risk.css";

export const metadata: Metadata = metaFor("data-engineering-analytics-insurance-risk");

export default function Page() {
  return (
    <>
      <HtmlPage slug="data-engineering-analytics-insurance-risk" />
    </>
  );
}
