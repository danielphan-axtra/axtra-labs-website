import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/big-data-analytics-business-intelligence.css";

export const metadata: Metadata = pageMeta({
  title: "Big Data Analytics for Business Intelligence",
  description: "An Australian industrial supply business assembled a three-week reporting pack by hand across ERP extracts and Excel. Leadership decisions lagged the market, and.",
  path: "/big-data-analytics-business-intelligence",
  type: "article"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="big-data-analytics-business-intelligence" />
    </>
  );
}
