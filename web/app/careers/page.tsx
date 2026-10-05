import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/pages/careers.css";

export const metadata: Metadata = metaFor("careers");

export default function Page() {
  return (
    <>
      <HtmlPage slug="careers" />
    </>
  );
}
