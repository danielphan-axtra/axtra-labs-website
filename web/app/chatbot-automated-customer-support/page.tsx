import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/chatbot-automated-customer-support.css";

export const metadata: Metadata = pageMeta({
  title: "Chatbot for Automated Customer Support",
  description: "A travel and hospitality brand flooded agents with the same FAQs while high-intent booking chats died in transcripts. Guests bounced between bot and human without.",
  path: "/chatbot-automated-customer-support",
  type: "article"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="chatbot-automated-customer-support" />
    </>
  );
}
