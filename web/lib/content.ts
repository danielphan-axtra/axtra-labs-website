import { existsSync, readFileSync } from "fs";
import { join } from "path";
import { cache } from "react";

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function contentPath(slug: string): string {
  if (!SLUG_RE.test(slug)) throw new Error("Invalid page slug");
  return join(process.cwd(), "content", `${slug}.html`);
}

export const readContent = cache((slug: string): string => readFileSync(contentPath(slug), "utf8"));

/** Like `readContent`, but "" for JSX-only routes (e.g. /contact). */
const readContentIfAny = cache((slug: string): string => {
  const file = contentPath(slug);
  return existsSync(file) ? readFileSync(file, "utf8") : "";
});

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  mdash: "—",
  ndash: "–",
  rarr: "→",
  larr: "←",
  times: "×",
  middot: "·",
  hellip: "…",
  rsquo: "’",
  lsquo: "‘",
  rdquo: "”",
  ldquo: "“",
};

function decode(s: string): string {
  return s.replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e: string) => {
    if (e[0] === "#") {
      const code = e[1] === "x" || e[1] === "X" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : m;
    }
    return ENTITIES[e.toLowerCase()] ?? m;
  });
}

function text(fragment: string | undefined): string {
  if (!fragment) return "";
  return decode(fragment.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

/** First non-icon content image, used for OG cards and schema `image`. */
export const heroImage = cache((slug: string): string | undefined => {
  const html = readContentIfAny(slug);
  for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = m[0];
    if (/class="[^"]*(tp-icon|logo|icon)[^"]*"/i.test(tag)) continue;
    const src = tag.match(/\bsrc="([^"]+)"/i)?.[1];
    if (src && !src.endsWith(".svg")) return decode(src);
  }
  return undefined;
});

export type CaseFacts = {
  industry?: string;
  expertise?: string;
  challenge?: string;
  solution?: string;
  technologies: string[];
  duration?: string;
  team?: string;
  impact: string[];
};

export const caseFacts = cache((slug: string): CaseFacts => {
  const html = readContentIfAny(slug);
  const meta = [...(html.match(/class="csd-meta">([\s\S]*?)<\/div>/)?.[1] ?? "").matchAll(/<span>([\s\S]*?)<\/span>/g)].map(
    (m) => text(m[1]),
  );
  const key = (k: string) => text(html.match(new RegExp(`<th>${k}</th><td>([\\s\\S]*?)</td>`))?.[1]);
  const dd = (k: string) => text(html.match(new RegExp(`<dt>${k}</dt><dd>([\\s\\S]*?)</dd>`))?.[1]);
  const impactBlock = html.match(/class="csd-impact">([\s\S]*?)<\/div>\s*\n/)?.[1] ?? "";
  const impact = [...impactBlock.matchAll(/<strong>([\s\S]*?)<\/strong>([\s\S]*?)<\/div>/g)].map(
    (m) => `${text(m[1])} ${text(m[2])}`.trim(),
  );
  return {
    industry: meta[0],
    expertise: meta[1],
    challenge: key("Challenge") || undefined,
    solution: key("Solution") || undefined,
    technologies: key("Technologies")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    duration: dd("Duration") || undefined,
    team: dd("Team") || undefined,
    impact,
  };
});

/** Readable Markdown version of a page for AI agents (/llms-full.txt). */
export const contentMarkdown = cache((slug: string): string => {
  let html = readContentIfAny(slug)
    .replace(/<(script|style|svg|form|noscript|button|select|textarea)\b[\s\S]*?<\/\1>/gi, " ")
    .replace(/<div class="breadcrumb">[\s\S]*?<\/div>/gi, " ")
    .replace(/<section id="contact"[\s\S]*?<\/section>/gi, " ");

  html = html
    .replace(/<h([1-4])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, n: string, inner: string) => {
      const t = text(inner);
      return t ? `\n\n${"#".repeat(Math.min(Number(n) + 1, 5))} ${t}\n\n` : "";
    })
    .replace(/<tr\b[^>]*>\s*<th\b[^>]*>([\s\S]*?)<\/th>\s*<td\b[^>]*>([\s\S]*?)<\/td>\s*<\/tr>/gi, (_, k: string, v: string) => `\n- ${text(k)}: ${text(v)}`)
    .replace(/<dt\b[^>]*>([\s\S]*?)<\/dt>\s*<dd\b[^>]*>([\s\S]*?)<\/dd>/gi, (_, k: string, v: string) => `\n- ${text(k)}: ${text(v)}`)
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_, inner: string) => `\n- ${text(inner)}`)
    .replace(/<(p|figcaption|blockquote)\b[^>]*>([\s\S]*?)<\/\1>/gi, (_, _t: string, inner: string) => `\n\n${text(inner)}\n\n`)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(div|section|article|header|footer|aside|ul|ol|table|figure|a)>/gi, "\n")
    .replace(/<[^>]+>/g, " ");

  return decode(html)
    .split("\n")
    .map((l) => l.replace(/[ \t]+/g, " ").trim())
    .filter((l, i, arr) => l !== "" || (arr[i - 1] ?? "") !== "")
    .filter((l, i, arr) => !(l.startsWith("- ") && l === arr[i - 1]))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
});
