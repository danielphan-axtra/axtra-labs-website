import { caseFacts, heroImage } from "@/lib/content";
import { KIND_LABEL, PAGES, getPage, type PageEntry } from "@/lib/pages";
import { SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/site";

const ORG = { "@id": `${SITE_URL}/#organization` };
const WEBSITE = { "@id": `${SITE_URL}/#website` };

const PARENT: Partial<Record<PageEntry["kind"], { name: string; path: string }>> = {
  service: { name: KIND_LABEL.service, path: "/services" },
  agent: { name: KIND_LABEL.agent, path: "/services" },
  industry: { name: KIND_LABEL.industry, path: "/#industries" },
  "case-study": { name: KIND_LABEL["case-study"], path: "/case-study" },
};

const COMPANY_PAGE_TYPE: Record<string, string> = {
  about: "AboutPage",
  contact: "ContactPage",
  "case-study": "CollectionPage",
  services: "CollectionPage",
  insights: "CollectionPage",
};

function abs(src: string): string {
  return src.startsWith("http") ? src : `${SITE_URL}${src}`;
}

/** Per-page JSON-LD (WebPage + BreadcrumbList + Service/Article/ItemList). */
export default function PageJsonLd({ slug }: { slug: string }) {
  const page = getPage(slug);
  const url = `${SITE_URL}/${slug}`;
  const image = abs(heroImage(slug) ?? SITE_OG_IMAGE);
  const parent = PARENT[page.kind];

  const crumbs = [
    { name: "Home", item: SITE_URL },
    ...(parent ? [{ name: parent.name, item: `${SITE_URL}${parent.path}` }] : []),
    { name: page.title, item: url },
  ];

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  };

  const webPage: Record<string, unknown> = {
    "@type": COMPANY_PAGE_TYPE[slug] ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.seoTitle ?? page.title,
    description: page.description,
    inLanguage: "en",
    isPartOf: WEBSITE,
    publisher: ORG,
    breadcrumb: { "@id": `${url}#breadcrumb` },
    primaryImageOfPage: { "@type": "ImageObject", url: image },
  };

  const graph: Record<string, unknown>[] = [webPage, breadcrumb];

  if (page.kind === "service" || page.kind === "agent" || page.kind === "industry") {
    const service = {
      "@type": "Service",
      "@id": `${url}#service`,
      name: page.kind === "industry" ? `AI solutions for ${page.title}` : page.title,
      serviceType: page.kind === "agent" ? "AI agent development" : page.title,
      description: page.description,
      url,
      image,
      provider: ORG,
      areaServed: "Worldwide",
      ...(page.kind === "industry"
        ? { audience: { "@type": "BusinessAudience", audienceType: page.title } }
        : {}),
    };
    graph.push(service);
    webPage.mainEntity = { "@id": service["@id"] };
  }

  if (page.kind === "case-study") {
    const facts = caseFacts(slug);
    const article = {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: page.title,
      description: page.description,
      url,
      image,
      inLanguage: "en",
      mainEntityOfPage: { "@id": `${url}#webpage` },
      author: ORG,
      publisher: ORG,
      articleSection: "Case Studies",
      about: [facts.industry, facts.expertise].filter(Boolean).map((name) => ({ "@type": "Thing", name })),
      keywords: [facts.industry, facts.expertise, ...facts.technologies].filter(Boolean).join(", "),
      ...(facts.challenge || facts.solution
        ? { abstract: [facts.challenge, facts.solution].filter(Boolean).join(" ") }
        : {}),
    };
    graph.push(article);
    webPage.mainEntity = { "@id": article["@id"] };
  }

  if (slug === "case-study" || slug === "services") {
    const kinds = slug === "case-study" ? ["case-study"] : ["service", "agent"];
    const items = PAGES.filter((p) => kinds.includes(p.kind));
    webPage.mainEntity = {
      "@type": "ItemList",
      name: slug === "case-study" ? `${SITE_NAME} case studies` : `${SITE_NAME} services`,
      numberOfItems: items.length,
      itemListElement: items.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${SITE_URL}/${p.slug}`,
        name: p.title,
      })),
    };
  }

  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
