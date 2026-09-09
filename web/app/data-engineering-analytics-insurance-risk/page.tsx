import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/data-engineering-analytics-insurance-risk.css";

export const metadata: Metadata = pageMeta({
  title: "Data Engineering and Analytics for Insurance Risk Assessment",
  description: "An insurance carrier’s risk and fraud teams depended on weekly spreadsheet extracts. Models trained on stale features, investigators chased cases without a shared.",
  path: "/data-engineering-analytics-insurance-risk",
  type: "article"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="data-engineering-analytics-insurance-risk" />
    </>
  );
}
