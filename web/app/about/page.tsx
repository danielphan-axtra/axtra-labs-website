import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/pages/about.css";

export const metadata: Metadata = metaFor("about");

export default function Page() {
  return (
    <>
      <HtmlPage slug="about" />
    </>
  );
}
