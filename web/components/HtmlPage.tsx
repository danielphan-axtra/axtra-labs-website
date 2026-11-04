import { readContent } from "@/lib/content";
import PageJsonLd from "@/components/PageJsonLd";
import ArchitectureDiagram from "@/components/architecture/ArchitectureDiagram";
import { getArchitectureSpec } from "@/lib/architecture/load";
import { splitCaseStudyForArchitecture } from "@/lib/architecture/split";
import "@/styles/architecture.css";

type Props = {
  slug: string;
};

/** Server-rendered HTML fragment from `content/<slug>.html` (SSG + SEO). */
export default function HtmlPage({ slug }: Props) {
  const html = readContent(slug);
  const spec = getArchitectureSpec(slug);
  if (!spec) {
    return (
      <>
        <PageJsonLd slug={slug} />
        <div className="html-page" dangerouslySetInnerHTML={{ __html: html }} />
      </>
    );
  }

  const { before, after } = splitCaseStudyForArchitecture(html, slug);
  return (
    <>
      <PageJsonLd slug={slug} />
      <div className="html-page">
        <div dangerouslySetInnerHTML={{ __html: before }} />
        <ArchitectureDiagram spec={spec} />
        <div dangerouslySetInnerHTML={{ __html: after }} />
      </div>
    </>
  );
}
