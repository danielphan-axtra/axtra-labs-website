import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/industry-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/logistics.css";

export const metadata: Metadata = metaFor("logistics");

export default function Page() {
  return (
    <>
      <HtmlPage slug="logistics" />
    </>
  );
}
