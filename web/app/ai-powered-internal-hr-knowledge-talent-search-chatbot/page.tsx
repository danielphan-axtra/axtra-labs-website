import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-powered-internal-hr-knowledge-talent-search-chatbot.css";

export const metadata: Metadata = pageMeta({
  title: "AI-Powered Internal HR Knowledge & Talent Search Chatbot",
  description: "An internal chatbot that searches HR policy and talent profiles so recruiters find answers in seconds.",
  path: "/ai-powered-internal-hr-knowledge-talent-search-chatbot"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-powered-internal-hr-knowledge-talent-search-chatbot" />
    </>
  );
}
