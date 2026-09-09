"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import RevealEffects from "./effects/RevealEffects";

const HomeEffects = dynamic(() => import("./effects/HomeEffects"), {
  ssr: false,
});

/**
 * Reveal runs eagerly (avoids blank .reveal content on first paint / SPA nav).
 * Home industries slider stays lazy — only needed on `/`.
 */
export default function ClientEffects() {
  const pathname = usePathname() || "/";
  const isHome = pathname === "/";

  return (
    <>
      <RevealEffects />
      {isHome ? <HomeEffects /> : null}
    </>
  );
}
