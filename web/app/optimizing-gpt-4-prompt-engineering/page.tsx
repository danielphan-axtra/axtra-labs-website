import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/optimizing-gpt-4-prompt-engineering.css";

export const metadata: Metadata = pageMeta({
  title: "Optimizing GPT-4 Prompt Engineering",
  description: "A customer-support product shipped an LLM assistant that looked good in demos but drifted in production. Policy answers hallucinated, tone varied by prompt tweak.",
  path: "/optimizing-gpt-4-prompt-engineering",
  type: "article"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="optimizing-gpt-4-prompt-engineering" />
    </>
  );
}
