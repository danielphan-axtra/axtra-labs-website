import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/tech-icons.css";
import "@/styles/pages/embedded-software.css";
import PageInteractionsLoader from "@/components/PageInteractionsLoader";

export const metadata: Metadata = metaFor("embedded-software");

export default function Page() {
  return (
    <>
      <PageInteractionsLoader page="embedded-software" />
      <HtmlPage slug="embedded-software" />
    </>
  );
}
