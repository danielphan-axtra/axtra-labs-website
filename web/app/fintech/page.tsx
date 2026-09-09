import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/industry-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/fintech.css";

export const metadata: Metadata = pageMeta({
  title: "Fintech",
  description: "Practical use cases for lending, payments, wealth and banking platforms — systems that decide under regulation, not just in a notebook.",
  path: "/fintech"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="fintech" />
    </>
  );
}
