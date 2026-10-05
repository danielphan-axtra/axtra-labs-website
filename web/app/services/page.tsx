import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/pages/services.css";

export const metadata: Metadata = metaFor("services");

export default function Page() {
  return (
    <>
      <HtmlPage slug="services" />
    </>
  );
}
