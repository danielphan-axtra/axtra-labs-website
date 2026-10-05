import { readContent } from "@/lib/content";
import PageJsonLd from "@/components/PageJsonLd";

type Props = {
  slug: string;
};

/** Server-rendered HTML fragment from `content/<slug>.html` (SSG + SEO). */
export default function HtmlPage({ slug }: Props) {
  const html = readContent(slug);
  return (
    <>
      <PageJsonLd slug={slug} />
      <div className="html-page" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
