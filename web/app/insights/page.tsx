import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/pages/insights.css";
import PageInteractionsLoader from "@/components/PageInteractionsLoader";

export const metadata: Metadata = pageMeta({
  title: "Insights",
  description: "How we take Gen AI, RAG and vision from a demo to something operators will actually use — evals, guardrails and the unglamorous integration work.",
  path: "/insights"
});

export default function Page() {
  return (
    <>
      <PageInteractionsLoader page="insights" />
      <HtmlPage slug="insights" />
    </>
  );
}
