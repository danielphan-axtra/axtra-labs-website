import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/industry-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/travel.css";

export const metadata: Metadata = pageMeta({
  title: "Travel & Hospitality",
  description: "Practical use cases for OTAs, hotels and tour operators — systems that convert browsers into booked trips.",
  path: "/travel"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="travel" />
    </>
  );
}
