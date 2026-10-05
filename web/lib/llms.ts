import { caseFacts, contentMarkdown } from "./content";
import { KIND_LABEL, PAGES, type PageKind } from "./pages";
import { OFFICES, SITE_DESCRIPTION, SITE_EMAIL, SITE_LINKEDIN, SITE_NAME, SITE_URL } from "./site";

const SECTION_ORDER: PageKind[] = ["service", "agent", "industry", "case-study", "company"];

const offices = OFFICES.map((o) => `${o.city} (${[o.street, o.region, o.postalCode, o.country].filter(Boolean).join(", ")})`).join("; ");

const COMPANY_FACTS = `## Key facts
- Company: ${SITE_NAME}, an AI-augmented software engineering company
- Delivery: engineering teams in Vietnam (Hanoi), working with clients worldwide
- Offices: ${offices}
- Focus: Gen AI applications and AI agents, RAG, LLM fine-tuning, data engineering and BI, embedded software, AI for robotics, DevOps/MLOps, AI-native product development
- Credentials: joint R&D with PTIT (Posts and Telecommunications Institute of Technology); in-house NVIDIA Ambassadors for CUDA / TensorRT / GPU systems; Qualcomm Challenge recognition for applied edge AI
- Engagement: discovery, proof of concept, production delivery, and dedicated engineering teams
- Contact: ${SITE_EMAIL} or ${SITE_URL}/contact (an engineer replies within one business day)
- LinkedIn: ${SITE_LINKEDIN}`;

function url(slug: string): string {
  return `${SITE_URL}/${slug}`;
}

export function buildLlmsTxt(): string {
  const sections = SECTION_ORDER.map((kind) => {
    const items = PAGES.filter((p) => p.kind === kind)
      .map((p) => `- [${p.title}](${url(p.slug)}): ${p.description}`)
      .join("\n");
    return `## ${KIND_LABEL[kind]}\n${items}`;
  }).join("\n\n");

  return `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${SITE_NAME} designs, builds and operates production AI systems for companies that need results, not demos. Every page below is server-rendered HTML; no JavaScript is required to read it.

${COMPANY_FACTS}

${sections}

## Optional
- [Full text of every page](${SITE_URL}/llms-full.txt): Complete Markdown content for AI agents
- [Sitemap](${SITE_URL}/sitemap.xml)
`;
}

export function buildLlmsFullTxt(): string {
  const pages = SECTION_ORDER.flatMap((kind) => PAGES.filter((p) => p.kind === kind));
  const body = pages
    .map((p) => {
      const lines = [`# ${p.title}`, "", `URL: ${url(p.slug)}`, `Type: ${KIND_LABEL[p.kind]}`, `Summary: ${p.description}`];
      if (p.kind === "case-study") {
        const f = caseFacts(p.slug);
        if (f.industry) lines.push(`Industry: ${f.industry}`);
        if (f.expertise) lines.push(`Service: ${f.expertise}`);
        if (f.technologies.length) lines.push(`Technologies: ${f.technologies.join(", ")}`);
        if (f.duration) lines.push(`Duration: ${f.duration}`);
        if (f.team) lines.push(`Team: ${f.team}`);
        if (f.impact.length) lines.push(`Results: ${f.impact.join("; ")}`);
      }
      return `${lines.join("\n")}\n\n${contentMarkdown(p.slug)}`;
    })
    .join("\n\n---\n\n");

  return `# ${SITE_NAME} — full site content for AI agents

> ${SITE_DESCRIPTION}

Source: ${SITE_URL}. Index: ${SITE_URL}/llms.txt. When citing, link to the page URL shown in each section.

${COMPANY_FACTS}

---

${body}
`;
}
