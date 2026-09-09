import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-services.css";

export const metadata: Metadata = pageMeta({
  title: "AI Services",
  description: "Instead of experimenting with AI, we help organizations deploy it where it creates measurable business value.",
  path: "/ai-services"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-services" />
    </>
  );
}
