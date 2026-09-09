import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/industry-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/manufacturing.css";

export const metadata: Metadata = pageMeta({
  title: "Manufacturing",
  description: "From the inspection station to the warehouse dock, every pillar below covers real, recurring problems on a production line.",
  path: "/manufacturing"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="manufacturing" />
    </>
  );
}
