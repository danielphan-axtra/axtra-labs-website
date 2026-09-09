import {
  OFFICES,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_LINKEDIN,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
} from "@/lib/site";

/** Organization + WebSite JSON-LD for search engines and AI crawlers. */
export default function JsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/assets/img/axtra-logo-dark.png`,
    image: `${SITE_URL}${SITE_OG_IMAGE}`,
    description: SITE_DESCRIPTION,
    email: SITE_EMAIL,
    sameAs: [SITE_LINKEDIN],
    areaServed: "Worldwide",
    knowsAbout: [
      "Generative AI",
      "Large language models",
      "RAG pipelines",
      "Data engineering",
      "Business intelligence",
      "Embedded software",
      "Robotics AI",
      "DevOps",
      "MLOps",
    ],
    address: OFFICES.map((o) => ({
      "@type": "PostalAddress",
      addressLocality: o.city,
      ...(o.region ? { addressRegion: o.region } : {}),
      addressCountry: o.country,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE_EMAIL,
        availableLanguage: ["English", "Vietnamese"],
        url: `${SITE_URL}/contact`,
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: `${SITE_NAME} — AI Software Engineering`,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
    serviceType: [
      "AI Services",
      "Data & BI",
      "Embedded Software Engineering",
      "AI for Robotics",
      "DevOps",
      "AI-Software Development",
    ],
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [org, website, service],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
