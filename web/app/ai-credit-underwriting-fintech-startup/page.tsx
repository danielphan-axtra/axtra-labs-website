import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-credit-underwriting-fintech-startup.css";

export const metadata: Metadata = pageMeta({
  title: "AI Credit Underwriting for a Lending Startup",
  description: "Real-time underwriting models that helped a Series A lending startup approve more good borrowers without raising loss rates.",
  path: "/ai-credit-underwriting-fintech-startup",
  type: "article"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-credit-underwriting-fintech-startup" />
    </>
  );
}
