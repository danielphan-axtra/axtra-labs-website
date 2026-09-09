import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/building-ai-powered-personal-trainer.css";

export const metadata: Metadata = pageMeta({
  title: "Building an AI-Powered Personal Trainer",
  description: "A consumer fitness startup wanted personalized plans and form feedback without staffing a large coaching bench. Retention dropped after week four when users lost.",
  path: "/building-ai-powered-personal-trainer",
  type: "article"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="building-ai-powered-personal-trainer" />
    </>
  );
}
