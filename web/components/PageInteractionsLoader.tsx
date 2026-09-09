"use client";

import dynamic from "next/dynamic";

const PageInteractions = dynamic(() => import("./PageInteractions"), {
  ssr: false,
});

type Page = "case-study" | "insights" | "embedded-software" | "voice-ai-agent";

/** Client-only loader so interactive pages stay out of the SSR/server bundle path. */
export default function PageInteractionsLoader({ page }: { page: Page }) {
  return <PageInteractions page={page} />;
}
