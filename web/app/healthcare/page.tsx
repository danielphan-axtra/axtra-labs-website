import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/industry-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/healthcare.css";

export const metadata: Metadata = pageMeta({
  title: "Healthcare",
  description: "Practical use cases for clinics, health systems and life sciences — systems that respect workflow, privacy and clinical feedback.",
  path: "/healthcare"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="healthcare" />
    </>
  );
}
