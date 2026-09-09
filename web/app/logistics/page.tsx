import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/industry-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/logistics.css";

export const metadata: Metadata = pageMeta({
  title: "Logistics",
  description: "Practical use cases for 3PLs, carriers and shippers — systems that move freight and inventory with fewer exceptions.",
  path: "/logistics"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="logistics" />
    </>
  );
}
