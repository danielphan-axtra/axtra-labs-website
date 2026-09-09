import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/pages/our-rd.css";

export const metadata: Metadata = pageMeta({
  title: "Our R&D",
  description: "We collaborate with Posts and Telecommunications Institute of Technology on applied perception, autonomy, Big Data, and the talent that feeds delivery.",
  path: "/our-rd"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="our-rd" />
    </>
  );
}
