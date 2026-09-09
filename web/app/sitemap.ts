import type { MetadataRoute } from "next";
import { readdirSync } from "fs";
import { join } from "path";
import { SITE_URL } from "@/lib/site";

const HIGH = new Set(["", "/contact", "/ai-services", "/services", "/case-study", "/about"]);
const MID = new Set([
  "/data-bi",
  "/embedded-software",
  "/ai-robotics",
  "/devops",
  "/ai-software-development",
  "/insights",
  "/careers",
  "/our-rd",
  "/fintech",
  "/healthcare",
  "/manufacturing",
  "/logistics",
  "/retail",
  "/voice-ai-agent",
]);

function appRoutes(): string[] {
  const appDir = join(process.cwd(), "app");
  const routes = [""];
  for (const name of readdirSync(appDir, { withFileTypes: true })) {
    if (!name.isDirectory() || name.name.startsWith("_")) continue;
    try {
      const files = readdirSync(join(appDir, name.name));
      if (files.includes("page.tsx") || files.includes("page.js")) {
        routes.push(`/${name.name}`);
      }
    } catch {
      /* skip */
    }
  }
  return routes.sort((a, b) => a.localeCompare(b));
}

function priorityFor(path: string): number {
  if (path === "") return 1;
  if (HIGH.has(path)) return 0.9;
  if (MID.has(path)) return 0.8;
  return 0.65;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return appRoutes().map((path) => ({
    url: `${SITE_URL}${path || "/"}`,
    lastModified: now,
    changeFrequency:
      path === "" || path === "/contact" || path === "/insights" ? "weekly" : "monthly",
    priority: priorityFor(path),
  }));
}
