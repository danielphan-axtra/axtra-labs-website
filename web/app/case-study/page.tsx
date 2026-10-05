import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/pages/case-study.css";
import PageInteractionsLoader from "@/components/PageInteractionsLoader";

export const metadata: Metadata = metaFor("case-study");

export default function Page() {
  return (
    <>
      <PageInteractionsLoader page="case-study" />
      <HtmlPage slug="case-study" />
    </>
  );
}
