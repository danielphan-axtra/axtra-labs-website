import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/industry-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/agriculture.css";

export const metadata: Metadata = pageMeta({
  title: "Agriculture",
  description: "Practical use cases for growers, OEMs and agritech platforms — systems that work in dirt, dust and seasonal windows.",
  path: "/agriculture"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="agriculture" />
    </>
  );
}
