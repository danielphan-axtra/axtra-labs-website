import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-powered-smart-surveillance-system.css";

export const metadata: Metadata = pageMeta({
  title: "AI-Powered Smart Surveillance System",
  description: "A facilities and security operator monitored dozens of camera feeds manually. Alerts were noisy, night shifts missed events, and compliance reviews required hours.",
  path: "/ai-powered-smart-surveillance-system",
  type: "article"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-powered-smart-surveillance-system" />
    </>
  );
}
