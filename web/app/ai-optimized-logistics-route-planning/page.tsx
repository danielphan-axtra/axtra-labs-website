import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/ai-optimized-logistics-route-planning.css";

export const metadata: Metadata = pageMeta({
  title: "AI-Optimized Logistics Route Planning",
  description: "A regional logistics operator planned routes in spreadsheets. Time windows and vehicle capacity were approximated by experience; fuel spend and late deliveries.",
  path: "/ai-optimized-logistics-route-planning"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-optimized-logistics-route-planning" />
    </>
  );
}
