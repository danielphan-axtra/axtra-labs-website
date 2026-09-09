import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/tech-icons.css";
import "@/styles/pages/data-bi.css";

export const metadata: Metadata = pageMeta({
  title: "Data & BI",
  description: "Instead of one-off reports, we help organizations build data systems that keep working as they grow.",
  path: "/data-bi"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="data-bi" />
    </>
  );
}
