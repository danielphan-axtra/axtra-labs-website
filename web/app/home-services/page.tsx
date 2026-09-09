import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/industry-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/home-services.css";

export const metadata: Metadata = pageMeta({
  title: "Home Services",
  description: "Practical use cases for cleaning, repair, care and marketplace platforms — systems that match jobs to the right pro and keep customers informed.",
  path: "/home-services"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="home-services" />
    </>
  );
}
