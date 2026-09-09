import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/pages/careers.css";

export const metadata: Metadata = pageMeta({
  title: "Careers",
  description: "You work beside seniors, speak with clients, and ship across AI, data, embedded, and product. Promotion follows impact you can show.",
  path: "/careers"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="careers" />
    </>
  );
}
