import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/pages/about.css";

export const metadata: Metadata = pageMeta({
  title: "About",
  description: "Axtra Labs is an AI-augmented software engineering company based in Vietnam, specializing in Gen AI, data engineering, robotics, embedded systems, and DevOps.",
  path: "/about"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="about" />
    </>
  );
}
