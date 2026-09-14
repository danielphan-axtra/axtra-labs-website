"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import SiteHeader from "./SiteHeader";

export default function SiteChrome() {
  const pathname = usePathname() || "/";
  const solid = pathname !== "/";
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.classList.toggle("homepage", isHome);
    return () => document.body.classList.remove("homepage");
  }, [isHome]);

  return <SiteHeader solid={solid} />;
}
