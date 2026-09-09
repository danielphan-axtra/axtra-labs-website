import { readFileSync } from "fs";
import { join } from "path";
import { cache } from "react";

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const readContent = cache((slug: string) => {
  const file = join(process.cwd(), "content", `${slug}.html`);
  return readFileSync(file, "utf8");
});

type Props = {
  slug: string;
};

/** Server-rendered HTML fragment from `content/<slug>.html` (SSG + SEO). */
export default function HtmlPage({ slug }: Props) {
  if (!SLUG_RE.test(slug)) {
    throw new Error("Invalid page slug");
  }
  const html = readContent(slug);
  return <div className="html-page" dangerouslySetInnerHTML={{ __html: html }} />;
}
