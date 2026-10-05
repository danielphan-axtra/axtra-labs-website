import type { Metadata } from "next";
import { metaFor } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/company-pages.css";
import "@/styles/tech-icons.css";
import "@/styles/pages/chatbot-automated-customer-support.css";

export const metadata: Metadata = metaFor("chatbot-automated-customer-support");

export default function Page() {
  return (
    <>
      <HtmlPage slug="chatbot-automated-customer-support" />
    </>
  );
}
