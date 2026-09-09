import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/pages/services.css";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description: "Explore Axtra Labs services: AI Services, Data & BI, Embedded Software, AI for Robotics, DevOps, and AI-Software Development — one delivery team.",
  path: "/services"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="services" />
    </>
  );
}
