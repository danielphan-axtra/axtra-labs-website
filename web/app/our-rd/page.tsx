import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/pages/our-rd.css";

export const metadata: Metadata = metaFor("our-rd");

export default function Page() {
  return (
    <>
      <HtmlPage slug="our-rd" />
    </>
  );
}
