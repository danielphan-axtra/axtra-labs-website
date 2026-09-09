"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "./SiteHeader";

export default function SiteChrome() {
  const pathname = usePathname() || "/";
  const solid = pathname !== "/";

  return <SiteHeader solid={solid} />;
}
