import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/tech-icons.css";
import "@/styles/pages/devops.css";

export const metadata: Metadata = metaFor("devops");

export default function Page() {
  return (
    <>
      <HtmlPage slug="devops" />
    </>
  );
}
