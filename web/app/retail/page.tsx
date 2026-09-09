import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/industry-layouts.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/retail.css";

export const metadata: Metadata = pageMeta({
  title: "Retail & E-commerce",
  description: "The four most practical use cases in each category, focused on what an independent retailer or growing brand can actually put to work, not an enterprise wishlist.",
  path: "/retail"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="retail" />
    </>
  );
}
