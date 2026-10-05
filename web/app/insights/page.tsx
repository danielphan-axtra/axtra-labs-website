import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/pages/insights.css";
import PageInteractionsLoader from "@/components/PageInteractionsLoader";

export const metadata: Metadata = metaFor("insights");

export default function Page() {
  return (
    <>
      <PageInteractionsLoader page="insights" />
      <HtmlPage slug="insights" />
    </>
  );
}
