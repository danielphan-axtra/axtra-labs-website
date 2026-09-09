#!/usr/bin/env python3
"""Migrate root *.html into Next.js pages using HTML fragments (SSG-safe)."""

from __future__ import annotations

import html as html_lib
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
if not (ROOT / "index.html").exists():
    ROOT = Path(__file__).resolve().parents[1]

WEB = ROOT / "web"
APP = WEB / "app"
CONTENT = WEB / "content"
STYLES_PAGES = WEB / "styles" / "pages"

SKIP = {"index.html", "contact.html"}

CSS_IMPORT_MAP = {
    "company-pages.css": "@/styles/company-pages.css",
    "contact.css": "@/styles/contact.css",
    "agent-layouts.css": "@/styles/agent-layouts.css",
    "industry-layouts.css": "@/styles/industry-layouts.css",
    "tech-icons.css": "@/styles/tech-icons.css",
}

INTERACTIVE = {"case-study", "insights", "embedded-software", "voice-ai-agent"}


def strip_query(name: str) -> str:
    return name.split("?", 1)[0]


def extract_meta(html: str) -> tuple[str, str]:
    title_m = re.search(r"<title>([^<]+)</title>", html, re.I)
    title = html_lib.unescape(title_m.group(1).strip()) if title_m else "Axtra Labs"
    title = re.sub(r"\s*[—\-–]\s*Axtra Labs\s*$", "", title).strip() or "Axtra Labs"
    desc_m = re.search(
        r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']+)["\']',
        html,
        re.I,
    )
    if not desc_m:
        desc_m = re.search(
            r'<meta\s+content=["\']([^"\']+)["\']\s+name=["\']description["\']',
            html,
            re.I,
        )
    desc = html_lib.unescape(desc_m.group(1).strip()) if desc_m else ""
    if not desc:
        p = re.search(r"<p[^>]*>([^<]{40,180})</p>", html)
        desc = re.sub(r"\s+", " ", html_lib.unescape(p.group(1))).strip() if p else title
    return title, desc


def linked_css(html: str) -> list[str]:
    links = re.findall(r'href="assets/css/([^"]+)"', html)
    out: list[str] = []
    seen: set[str] = set()
    for raw in links:
        name = strip_query(raw)
        imp = CSS_IMPORT_MAP.get(name)
        if imp and imp not in seen:
            seen.add(imp)
            out.append(imp)
    return out


def extract_style_blocks(html: str) -> str:
    blocks = re.findall(r"<style[^>]*>([\s\S]*?)</style>", html, re.I)
    css = "\n\n".join(b.strip() for b in blocks if b.strip())
    if not css:
        return ""
    css = css.replace("url('assets/", "url('/assets/")
    css = css.replace('url("assets/', 'url("/assets/')
    css = css.replace("url(assets/", "url(/assets/")
    drop_prefixes = (
        "header",
        "footer",
        ".nav",
        ".navlinks",
        ".nav-item",
        ".nav-toggle",
        ".dropdown",
        ".dd-",
        ".logo",
        ".caret",
        "body.nav-open",
    )
    kept: list[str] = []
    for part in re.split(r"(?<=})", css):
        chunk = part.strip()
        if not chunk:
            continue
        m = re.match(r"([^{]+)\{", chunk, re.S)
        if not m:
            kept.append(chunk)
            continue
        first = m.group(1).strip().split(",")[0].strip()
        if first.startswith(".logo-img-client") or first.startswith(".logo-cell") or first.startswith(".logo-wall"):
            kept.append(chunk)
            continue
        if any(first.startswith(p) or first == p.rstrip(".") for p in drop_prefixes):
            continue
        kept.append(chunk)
    return "\n".join(kept).strip() + "\n"


def extract_body(html: str) -> str:
    m = re.search(r"</header>\s*", html, re.I)
    f = re.search(r"<footer\b", html, re.I)
    if not m or not f:
        raise ValueError("Could not find header/footer boundaries")
    body = html[m.end() : f.start()]
    body = re.sub(r"<script\b[\s\S]*?</script>", "", body, flags=re.I)
    return body.strip()


def rewrite_urls(fragment: str) -> str:
    def href_sub(m: re.Match) -> str:
        path = m.group(1)
        if path.startswith(("http://", "https://", "mailto:", "tel:", "#", "/")):
            return m.group(0)
        if path.endswith(".html"):
            slug = path[:-5].lstrip("./")
            if slug in ("index", ""):
                return 'href="/"'
            return f'href="/{slug}"'
        if path.startswith("assets/"):
            return f'href="/{path}"'
        return m.group(0)

    fragment = re.sub(r'href="([^"]+)"', href_sub, fragment)

    def src_sub(m: re.Match) -> str:
        path = m.group(1)
        if path.startswith(("http://", "https://", "data:", "/")):
            return m.group(0)
        if path.startswith("assets/"):
            return f'src="/{path}"'
        return m.group(0)

    fragment = re.sub(r'src="([^"]+)"', src_sub, fragment)
    fragment = fragment.replace("url('assets/", "url('/assets/")
    fragment = fragment.replace('url("assets/', 'url("/assets/')
    fragment = fragment.replace("url(assets/", "url(/assets/")

    # Lazy-load images by default
    def _lazy(m: re.Match) -> str:
        attrs = m.group(1) or ""
        if "loading=" in attrs:
            return m.group(0)
        return f"<img{attrs} loading=\"lazy\" decoding=\"async\">"

    fragment = re.sub(r"<img(\s[^>]*)?>", _lazy, fragment, flags=re.I)

    # Accordion headers that used onclick
    fragment = re.sub(
        r'\s*onclick="toggleAcc\(this\)"',
        ' data-acc-toggle="1" role="button" tabindex="0"',
        fragment,
    )
    return fragment


def balance_divs(fragment: str) -> str:
    """Drop trailing extra </div> so browsers/React don't choke on structure."""
    opens = len(re.findall(r"<div\b", fragment, flags=re.I))
    closes = len(re.findall(r"</div>", fragment, flags=re.I))
    extra = closes - opens
    while extra > 0:
        new, n = re.subn(r"</div>\s*$", "", fragment.rstrip(), count=1, flags=re.I)
        if n == 0:
            # remove last occurrence
            idx = fragment.lower().rfind("</div>")
            if idx == -1:
                break
            fragment = fragment[:idx] + fragment[idx + 6 :]
            extra -= 1
        else:
            fragment = new
            extra -= 1
    return fragment.strip() + "\n"


def build_page(slug: str, title: str, desc: str, imports: list[str], has_page_css: bool) -> str:
    lines = [
        'import type { Metadata } from "next";',
        'import { pageMeta } from "@/lib/seo";',
        'import HtmlPage from "@/components/HtmlPage";',
    ]
    for imp in imports:
        lines.append(f'import "{imp}";')
    if has_page_css:
        lines.append(f'import "@/styles/pages/{slug}.css";')
    if slug in INTERACTIVE:
        lines.append('import PageInteractionsLoader from "@/components/PageInteractionsLoader";')

    meta_title = title.replace("\\", "\\\\").replace('"', '\\"')
    meta_desc = desc.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ")

    lines += [
        "",
        "export const metadata: Metadata = pageMeta({",
        f'  title: "{meta_title}",',
        f'  description: "{meta_desc}",',
        f'  path: "/{slug}",',
        "});",
        "",
        "export default function Page() {",
        "  return (",
        "    <>",
    ]
    if slug in INTERACTIVE:
        lines.append(f'      <PageInteractionsLoader page="{slug}" />')
    lines += [
        f'      <HtmlPage slug="{slug}" />',
        "    </>",
        "  );",
        "}",
        "",
    ]
    return "\n".join(lines)


def main() -> None:
    CONTENT.mkdir(parents=True, exist_ok=True)
    STYLES_PAGES.mkdir(parents=True, exist_ok=True)

    # wipe previously generated JSX-heavy pages except contact
    for path in APP.glob("*/page.tsx"):
        if path.parent.name in {"contact"}:
            continue
        # only delete if it was generated (has HtmlPage or large jsx) — regenerate all non-contact/home
        if path.parent.name == ".":
            continue

    migrated = []
    errors = []

    for path in sorted(ROOT.glob("*.html")):
        if path.name in SKIP:
            continue
        slug = path.stem
        try:
            html = path.read_text(encoding="utf-8")
            title, desc = extract_meta(html)
            imports = linked_css(html)
            css = extract_style_blocks(html)
            has_page_css = bool(css.strip())
            if has_page_css:
                (STYLES_PAGES / f"{slug}.css").write_text(css, encoding="utf-8")

            body = balance_divs(rewrite_urls(extract_body(html)))
            (CONTENT / f"{slug}.html").write_text(body, encoding="utf-8")

            out_dir = APP / slug
            out_dir.mkdir(parents=True, exist_ok=True)
            (out_dir / "page.tsx").write_text(
                build_page(slug, title, desc, imports, has_page_css),
                encoding="utf-8",
            )
            migrated.append(slug)
            print(f"OK  /{slug}")
        except Exception as e:
            errors.append((slug, str(e)))
            print(f"ERR /{slug}: {e}")

    print(f"\nMigrated {len(migrated)} pages, {len(errors)} errors")


if __name__ == "__main__":
    main()
