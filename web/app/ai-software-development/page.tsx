import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-software-development.css";

export const metadata: Metadata = pageMeta({
  title: "AI-Software Development",
  description: "Instead of wrapping a chatbot around legacy software, we help teams build products where AI is core to the experience, architecture and delivery.",
  path: "/ai-software-development"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-software-development" />
    </>
  );
}
