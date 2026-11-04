import { readFileSync } from "fs";
import { join } from "path";
import { cache } from "react";
import type { ArchAssets, ArchSpec } from "@/lib/architecture/types";

const ICON_TAG = /<(path|rect|line|circle|ellipse|polyline)\b([^>]*)\/?\s*>/gi;
const ICON_ATTR = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*"([^"]*)"/g;
const ALLOWED_ATTR =
  /^(d|x|y|x1|y1|x2|y2|width|height|rx|ry|cx|cy|r|points|fill|stroke|stroke-width|stroke-linecap|stroke-linejoin|opacity|fill-rule|clip-rule)$/;

/** Keep only the drawing elements shipped from Lucide. Drops anything else. */
export function sanitizeIcon(inner: string): string {
  const parts: string[] = [];
  for (const match of inner.matchAll(ICON_TAG)) {
    const tag = match[1].toLowerCase();
    const attrs: string[] = [];
    for (const attr of match[2].matchAll(ICON_ATTR)) {
      if (!ALLOWED_ATTR.test(attr[1])) continue;
      const value = attr[2].replace(/[<>&"]/g, "");
      attrs.push(`${attr[1]}="${value}"`);
    }
    parts.push(attrs.length ? `<${tag} ${attrs.join(" ")}/>` : `<${tag}/>`);
  }
  return parts.join("");
}

function sanitizeAssets(data: ArchAssets): ArchAssets {
  for (const [name, svg] of Object.entries(data.icons)) {
    data.icons[name] = sanitizeIcon(svg);
  }
  for (const logo of Object.values(data.logos)) {
    if (!/^[0-9A-Fa-f]{3,8}$/.test(logo.h)) logo.h = "5A6B82";
    if (/[<>"&]/.test(logo.p)) logo.p = "";
  }
  return data;
}

/**
 * Pre-resolved architecture specs plus inlined Lucide (ISC) and Simple Icons (CC0) marks.
 * See web/data/architecture/LICENSES.txt. Loaded once per server process.
 */
export const getArchitectureAssets = cache((): ArchAssets => {
  const file = join(process.cwd(), "data", "architecture", "arch-assets.json");
  const data = JSON.parse(readFileSync(file, "utf8")) as ArchAssets;
  return sanitizeAssets(data);
});

export function getArchitectureSpec(slug: string): ArchSpec | undefined {
  const spec = getArchitectureAssets().specs[slug];
  if (!spec || !Array.isArray(spec.stack)) return undefined;
  return spec;
}
