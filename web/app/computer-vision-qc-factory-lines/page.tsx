import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/computer-vision-qc-factory-lines.css";

export const metadata: Metadata = metaFor("computer-vision-qc-factory-lines");

export default function Page() {
  return (
    <>
      <HtmlPage slug="computer-vision-qc-factory-lines" />
    </>
  );
}
