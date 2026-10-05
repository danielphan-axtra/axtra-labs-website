import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/industry-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/manufacturing.css";

export const metadata: Metadata = metaFor("manufacturing");

export default function Page() {
  return (
    <>
      <HtmlPage slug="manufacturing" />
    </>
  );
}
