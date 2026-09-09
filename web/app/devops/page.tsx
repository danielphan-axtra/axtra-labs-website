import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/tech-icons.css";
import "@/styles/pages/devops.css";

export const metadata: Metadata = pageMeta({
  title: "DevOps",
  description: "Instead of manual deployments and fragile release processes, we help teams ship faster with automated, observable infrastructure.",
  path: "/devops"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="devops" />
    </>
  );
}
