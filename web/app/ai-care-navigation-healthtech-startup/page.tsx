import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-care-navigation-healthtech-startup.css";

export const metadata: Metadata = pageMeta({
  title: "AI Care Navigation for a Healthtech Startup",
  description: "Intake triage and care-routing assistant that helped a healthtech startup cut time-to-appointment without replacing clinicians.",
  path: "/ai-care-navigation-healthtech-startup",
  type: "article"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-care-navigation-healthtech-startup" />
    </>
  );
}
