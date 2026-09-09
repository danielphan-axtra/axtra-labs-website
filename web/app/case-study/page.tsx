import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/pages/case-study.css";
import PageInteractionsLoader from "@/components/PageInteractionsLoader";

export const metadata: Metadata = pageMeta({
  title: "Case Studies",
  description: "Case studies from Axtra Labs: Gen AI assistants, data platforms, computer vision QC, and production systems that improved operations and customer experience.",
  path: "/case-study"
});

export default function Page() {
  return (
    <>
      <PageInteractionsLoader page="case-study" />
      <HtmlPage slug="case-study" />
    </>
  );
}
