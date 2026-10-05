import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/industry-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/home-services.css";

export const metadata: Metadata = metaFor("home-services");

export default function Page() {
  return (
    <>
      <HtmlPage slug="home-services" />
    </>
  );
}
