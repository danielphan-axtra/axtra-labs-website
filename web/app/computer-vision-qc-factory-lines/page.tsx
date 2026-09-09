import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/computer-vision-qc-factory-lines.css";

export const metadata: Metadata = pageMeta({
  title: "Computer vision QC across 3 factory lines",
  description: "A manufacturer running three similar lines relied on manual QC at line speed. Escape rates rose on later shifts, and false rejects from earlier automation attempts.",
  path: "/computer-vision-qc-factory-lines",
  type: "article"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="computer-vision-qc-factory-lines" />
    </>
  );
}
