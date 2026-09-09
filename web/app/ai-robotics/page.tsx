import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HtmlPage from "@/components/HtmlPage";
import "@/styles/tech-icons.css";
import "@/styles/agent-layouts.css";
import "@/styles/pages/ai-robotics.css";

export const metadata: Metadata = pageMeta({
  title: "AI for Robotics",
  description: "Dust, glare, occlusion, and domain shift crush models trained only on clean datasets. We design for sensor fusion and continuous evaluation.",
  path: "/ai-robotics"
});

export default function Page() {
  return (
    <>
      <HtmlPage slug="ai-robotics" />
    </>
  );
}
