import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/tech-icons.css";
import "@/styles/pages/embedded-software.css";
import PageInteractionsLoader from "@/components/PageInteractionsLoader";

export const metadata: Metadata = pageMeta({
  title: "Embedded Software Engineering",
  description: "Instead of prototype code that never leaves the devkit, we help organizations build firmware that survives real production hardware.",
  path: "/embedded-software"
});

export default function Page() {
  return (
    <>
      <PageInteractionsLoader page="embedded-software" />
      <HtmlPage slug="embedded-software" />
    </>
  );
}
