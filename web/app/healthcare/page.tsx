import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/industry-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/healthcare.css";

export const metadata: Metadata = metaFor("healthcare");

export default function Page() {
  return (
    <>
      <HtmlPage slug="healthcare" />
    </>
  );
}
