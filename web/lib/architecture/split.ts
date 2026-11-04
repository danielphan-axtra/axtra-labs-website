/**
 * Split a case-study HTML fragment so an Architecture section can be rendered
 * between the solution narrative and the delivery / results sections.
 *
 * The hero, key details, and the rest of the prose stay byte-for-byte intact.
 * Only the section wrapper class and the surrounding containers change, so the
 * diagram can sit at the full content width.
 */

const BREAK_HEADINGS = new Set([
  "How we delivered",
  "Engagement",
  "What was delivered",
  "Business impact",
  "Outcome",
]);

const VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

type OpenEl = { tag: string; cls: string };

function headingText(inner: string): string {
  return inner
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function findArchitectureSplit(html: string): number {
  const re = /<h2>([\s\S]*?)<\/h2>/gi;
  for (const match of html.matchAll(re)) {
    if (BREAK_HEADINGS.has(headingText(match[1] ?? ""))) {
      return match.index ?? -1;
    }
  }
  return -1;
}

function openElements(html: string): OpenEl[] {
  const stack: OpenEl[] = [];
  const re = /<!--[\s\S]*?-->|<\/([a-zA-Z0-9]+)\s*>|<([a-zA-Z0-9]+)([^>]*)>/g;
  for (const match of html.matchAll(re)) {
    if (match[0].startsWith("<!--")) continue;
    if (match[1]) {
      const tag = match[1].toLowerCase();
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].tag === tag) {
          stack.splice(i);
          break;
        }
      }
      continue;
    }
    const tag = match[2].toLowerCase();
    const attrs = match[3] ?? "";
    if (VOID_TAGS.has(tag) || /\/\s*$/.test(attrs)) continue;
    const cls = attrs.match(/\bclass\s*=\s*"([^"]*)"/)?.[1] ?? "";
    stack.push({ tag, cls });
  }
  return stack;
}

function hasClass(cls: string, name: string): boolean {
  return cls.split(/\s+/).includes(name);
}

function assertSolutionDepth(stack: OpenEl[], slug: string): void {
  const expected = [
    ["section", "csd"],
    ["div", "wrap"],
    ["div", "csd-layout"],
    ["div", "csd-main"],
    ["div", "csd-body"],
  ] as const;
  const ok =
    stack.length === expected.length &&
    expected.every(([tag, cls], i) => stack[i]?.tag === tag && hasClass(stack[i].cls, cls));
  if (!ok) {
    const got = stack.map((el) => `${el.tag}.${el.cls || "(no class)"}`).join(" > ");
    throw new Error(`Cannot place architecture section in ${slug}; open elements: ${got}`);
  }
}

export type CaseStudySplit = {
  /** Hero through the end of the solution, including the sidebar. */
  before: string;
  /** Delivery, results, and the contact band. */
  after: string;
};

export function splitCaseStudyForArchitecture(html: string, slug: string): CaseStudySplit {
  const insertAt = findArchitectureSplit(html);
  if (insertAt < 0) {
    throw new Error(`No solution/results boundary for architecture section in ${slug}`);
  }

  const asideRe = /<aside\s+class="csd-side">[\s\S]*?<\/aside>/;
  const aside = asideRe.exec(html);
  if (!aside || aside.index < insertAt) {
    throw new Error(`Case study sidebar missing after the solution in ${slug}`);
  }

  assertSolutionDepth(openElements(html.slice(0, insertAt)), slug);

  const asideHtml = aside[0];
  const beforeInner = html.slice(0, insertAt).replace(
    /<section\s+class="csd">/,
    '<section class="csd csd-split">',
  );
  const afterInner = html.slice(insertAt, aside.index) + html.slice(aside.index + asideHtml.length);

  const before = `${beforeInner}</div></div>\n${asideHtml}\n</div></div></section>\n`;
  const after = `<section class="csd-after"><div class="wrap"><div class="csd-layout csd-layout-rest"><div class="csd-main"><div class="csd-body">\n${afterInner}`;

  if (openElements(before).length !== 0 || openElements(after).length !== 0) {
    throw new Error(`Architecture split left unbalanced HTML in ${slug}`);
  }

  return { before, after };
}
