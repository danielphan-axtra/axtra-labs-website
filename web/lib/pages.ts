/**
 * Single source of truth for every content route: drives <title>/description,
 * per-page JSON-LD, the sitemap, and /llms.txt + /llms-full.txt.
 */

export type PageKind = "service" | "agent" | "industry" | "case-study" | "company";

export type PageEntry = {
  slug: string;
  kind: PageKind;
  /** Display name (breadcrumbs, schema `name`, llms.txt link text). */
  title: string;
  /** Search-result title; falls back to `title`. Site name is appended. */
  seoTitle?: string;
  description: string;
};

export const PAGES: PageEntry[] = [
  // Services
  {
    slug: "ai-services",
    kind: "service",
    title: "AI Services",
    seoTitle: "AI Services: Gen AI, RAG & LLM Development",
    description:
      "Gen AI applications, AI agents, RAG pipelines and LLM fine-tuning taken from proof of concept to production, with evals, guardrails and measurable business value.",
  },
  {
    slug: "data-bi",
    kind: "service",
    title: "Data & BI",
    seoTitle: "Data Engineering & BI Services",
    description:
      "Data engineering and business intelligence: pipelines, data warehouses and Power BI dashboards that keep working as your business grows.",
  },
  {
    slug: "embedded-software",
    kind: "service",
    title: "Embedded Software Engineering",
    seoTitle: "Embedded Software Engineering Services",
    description:
      "Embedded software engineering: firmware, RTOS, embedded Linux, drivers and edge AI for connected devices that survive real production hardware.",
  },
  {
    slug: "ai-robotics",
    kind: "service",
    title: "AI for Robotics",
    seoTitle: "AI for Robotics: Perception & Edge AI",
    description:
      "AI for robotics: perception, sensor fusion, navigation and edge inference on NVIDIA Jetson, built to handle dust, glare, occlusion and domain shift.",
  },
  {
    slug: "devops",
    kind: "service",
    title: "DevOps",
    seoTitle: "DevOps & MLOps Services",
    description:
      "DevOps and MLOps services: CI/CD, Kubernetes, infrastructure as code and observability so teams ship AI products faster on automated, reliable platforms.",
  },
  {
    slug: "ai-software-development",
    kind: "service",
    title: "AI-Software Development",
    seoTitle: "AI-Native Software Development",
    description:
      "AI-native software development: full-stack product teams that build web and mobile products where AI is core to the experience, architecture and delivery.",
  },

  // AI agent solutions
  {
    slug: "voice-ai-agent",
    kind: "agent",
    title: "Voice AI Agent",
    seoTitle: "Voice AI Agent Development",
    description:
      "Voice AI agents that answer calls, qualify leads and book appointments 24/7, trained on your docs, policies, FAQs and product catalog with human handoff.",
  },
  {
    slug: "document-knowledge-ai-agent",
    kind: "agent",
    title: "Document and Knowledge AI Agent",
    seoTitle: "Document & Knowledge AI Agent (RAG)",
    description:
      "Turn company knowledge into a searchable internal AI assistant with RAG: semantic retrieval, permissions and citations, not a black-box chatbot.",
  },
  {
    slug: "workflow-ai-agent",
    kind: "agent",
    title: "Workflow AI Agent",
    seoTitle: "Workflow AI Agent for Process Automation",
    description:
      "Workflow AI agents that automate business processes with LLM agents, a workflow engine, API orchestration and RPA, triggered by schedule, webhook, email or API.",
  },
  {
    slug: "sales-ai-agent",
    kind: "agent",
    title: "Sales AI Agent",
    seoTitle: "Sales AI Agent for Lead Qualification",
    description:
      "Sales AI agents that qualify leads, follow up and support renewals using your CRM data, talk tracks and playbooks across voice, email and chat.",
  },
  {
    slug: "multi-agent-system",
    kind: "agent",
    title: "Multi Agent System",
    seoTitle: "Multi-Agent System Development",
    description:
      "Multi-agent systems that compose AI agents sequentially, in parallel or under a supervisor, with humans approving critical actions before they execute.",
  },

  // Industries
  {
    slug: "manufacturing",
    kind: "industry",
    title: "Manufacturing",
    seoTitle: "AI & Robotics for Manufacturing",
    description:
      "AI and robotics for manufacturing: computer vision quality control, predictive maintenance, cobots and warehouse automation for real production lines.",
  },
  {
    slug: "retail",
    kind: "industry",
    title: "Retail & E-commerce",
    seoTitle: "AI for Retail & E-commerce",
    description:
      "AI for retail and e-commerce: personalized recommendations, demand forecasting, returns prevention and support automation that growing brands can put to work.",
  },
  {
    slug: "travel",
    kind: "industry",
    title: "Travel & Hospitality",
    seoTitle: "AI for Travel & Hospitality",
    description:
      "AI for travel and hospitality: booking assistants, dynamic pricing, guest support chatbots and personalization for OTAs, hotels and tour operators.",
  },
  {
    slug: "home-services",
    kind: "industry",
    title: "Home Services",
    seoTitle: "AI for Home Services Businesses",
    description:
      "AI for home services: job matching, smart dispatch and proactive customer updates for cleaning, repair, care and marketplace platforms.",
  },
  {
    slug: "fintech",
    kind: "industry",
    title: "Fintech",
    seoTitle: "AI for Fintech: Lending, Payments & Fraud",
    description:
      "AI for fintech: credit underwriting, fraud detection, risk analytics and compliance automation for lending, payments, wealth and banking platforms.",
  },
  {
    slug: "agriculture",
    kind: "industry",
    title: "Agriculture",
    seoTitle: "AI for Agriculture & Agritech",
    description:
      "AI for agriculture: crop monitoring, yield forecasting, field robotics and edge vision for growers, OEMs and agritech platforms working in dirt and dust.",
  },
  {
    slug: "logistics",
    kind: "industry",
    title: "Logistics",
    seoTitle: "AI for Logistics & Supply Chain",
    description:
      "AI for logistics and supply chain: route optimization, demand forecasting, warehouse vision and exception handling for 3PLs, carriers and shippers.",
  },
  {
    slug: "healthcare",
    kind: "industry",
    title: "Healthcare",
    seoTitle: "AI for Healthcare & Healthtech",
    description:
      "AI for healthcare: care navigation, clinical decision support and document automation for clinics, health systems and life sciences, built around privacy.",
  },

  // Case studies
  {
    slug: "ai-care-navigation-healthtech-startup",
    kind: "case-study",
    title: "AI Care Navigation for a Healthtech Startup",
    description:
      "Case study: an LLM care-navigation assistant that cut intake handling time 40% and sped up time-to-appointment for a healthtech startup, with clinician override.",
  },
  {
    slug: "ai-credit-underwriting-fintech-startup",
    kind: "case-study",
    title: "AI Credit Underwriting for a Lending Startup",
    description:
      "Case study: explainable ML credit underwriting that raised auto-decisions 28% for a Series A lending startup while keeping early delinquency flat.",
  },
  {
    slug: "ai-driven-personalized-ecommerce-recommendations",
    kind: "case-study",
    title: "AI-Driven Personalized E-Commerce Recommendations",
    description:
      "Case study: a personalization and ranking service using catalog, session and purchase signals that lifted conversion and repeat purchase for a fashion retailer.",
  },
  {
    slug: "ai-fraud-detection-neobank-startup",
    kind: "case-study",
    title: "AI Fraud Detection for a Neobank Startup",
    description:
      "Case study: real-time graph and behavioral fraud scoring that cut false declines 35% and doubled fraud catch rate for a neobank, at under 80 ms latency.",
  },
  {
    slug: "ai-optimized-logistics-route-planning",
    kind: "case-study",
    title: "AI-Optimized Logistics Route Planning",
    description:
      "Case study: an AI route optimizer respecting time windows, vehicle capacity and live traffic that lowered cost per stop and raised on-time delivery.",
  },
  {
    slug: "ai-powered-healthcare-diagnosis-system",
    kind: "case-study",
    title: "AI-Powered Healthcare Diagnosis System",
    description:
      "Case study: a clinical decision-support copilot that summarizes patient history from EHR notes and flags guideline findings, with a human in the loop.",
  },
  {
    slug: "ai-powered-internal-hr-knowledge-talent-search-chatbot",
    kind: "case-study",
    title: "AI-Powered Internal HR Knowledge & Talent Search Chatbot",
    seoTitle: "AI HR Knowledge & Talent Search Chatbot",
    description:
      "Case study: a RAG chatbot over HR policies and talent profiles with access control and citations that made policy answers 70% faster.",
  },
  {
    slug: "ai-powered-rfp-tender-response-platform",
    kind: "case-study",
    title: "AI-Powered RFP & Tender Response Platform",
    description:
      "Case study: a Gen AI drafting workspace that reuses past wins, pricing and compliance language to cut RFP and tender drafting time by 40%.",
  },
  {
    slug: "ai-powered-smart-surveillance-system",
    kind: "case-study",
    title: "AI-Powered Smart Surveillance System",
    description:
      "Case study: AI video surveillance with threat detection, facial recognition and real-time alerts that cut manual monitoring 50% and sped response 40%.",
  },
  {
    slug: "ai-returns-prevention-ecommerce-startup",
    kind: "case-study",
    title: "AI Returns Prevention for a D2C Ecommerce Startup",
    description:
      "Case study: size and fit recommendations plus return-risk scoring that lowered the return rate 18% for a fast-growing D2C apparel brand.",
  },
  {
    slug: "big-data-analytics-business-intelligence",
    kind: "case-study",
    title: "Big Data Analytics for Business Intelligence",
    description:
      "Case study: a modeled data warehouse and Power BI layer that shortened an industrial supplier's reporting cycle from 3 weeks to 2 days.",
  },
  {
    slug: "building-ai-powered-personal-trainer",
    kind: "case-study",
    title: "Building an AI-Powered Personal Trainer",
    description:
      "Case study: a fitness app with AI workout generation, on-device computer-vision form feedback and a coach inbox that improved week-4 retention.",
  },
  {
    slug: "chatbot-automated-customer-support",
    kind: "case-study",
    title: "Chatbot for Automated Customer Support",
    description:
      "Case study: a production support and sales chatbot with retrieval, booking tools and clean human handoff that deflected routine tickets for a travel brand.",
  },
  {
    slug: "computer-vision-qc-factory-lines",
    kind: "case-study",
    title: "Computer vision QC across 3 factory lines",
    seoTitle: "Computer Vision Quality Control on 3 Factory Lines",
    description:
      "Case study: real-time computer vision defect detection on NVIDIA Jetson, integrated with PLC reject signals, running in production on 3 factory lines.",
  },
  {
    slug: "data-engineering-analytics-insurance-risk",
    kind: "case-study",
    title: "Data Engineering and Analytics for Insurance Risk Assessment",
    seoTitle: "Data Engineering for Insurance Risk Assessment",
    description:
      "Case study: a data warehouse, feature pipelines and dashboards giving an insurer daily risk scoring refresh, fewer manual extracts and an audit trail.",
  },
  {
    slug: "optimizing-gpt-4-prompt-engineering",
    kind: "case-study",
    title: "Optimizing GPT-4 Prompt Engineering",
    description:
      "Case study: prompt packs, golden datasets and regression evals that made a GPT-4 support assistant measurable, safer on policy and repeatable to release.",
  },

  // Company
  {
    slug: "services",
    kind: "company",
    title: "Services",
    seoTitle: "Software Engineering Services: AI, Data, Embedded",
    description:
      "Explore Axtra Labs services: AI Services, Data & BI, Embedded Software, AI for Robotics, DevOps, and AI-Software Development — one delivery team.",
  },
  {
    slug: "about",
    kind: "company",
    title: "About",
    seoTitle: "About Us: AI Engineering Team in Vietnam",
    description:
      "Axtra Labs is an AI-augmented software engineering company based in Vietnam, specializing in Gen AI, data engineering, robotics, embedded systems, and DevOps.",
  },
  {
    slug: "case-study",
    kind: "company",
    title: "Case Studies",
    seoTitle: "Case Studies: AI, Data & Robotics Projects",
    description:
      "Case studies from Axtra Labs: Gen AI assistants, data platforms, computer vision QC, and production systems that improved operations and customer experience.",
  },
  {
    slug: "insights",
    kind: "company",
    title: "Insights",
    seoTitle: "Insights on Applied AI & Data Engineering",
    description:
      "How we take Gen AI, RAG and vision from a demo to something operators will actually use — evals, guardrails and the unglamorous integration work.",
  },
  {
    slug: "careers",
    kind: "company",
    title: "Careers",
    seoTitle: "Careers: AI & Software Engineering Jobs",
    description:
      "Careers at Axtra Labs: work beside senior engineers, speak with clients, and ship across AI, data, embedded and product. Promotion follows impact you can show.",
  },
  {
    slug: "our-rd",
    kind: "company",
    title: "Our R&D",
    seoTitle: "Our R&D: Edge AI, GPU & Robotics Research",
    description:
      "Axtra Labs R&D with the Posts and Telecommunications Institute of Technology (PTIT) on applied perception, autonomy, edge AI and Big Data.",
  },
  {
    slug: "contact",
    kind: "company",
    title: "Contact",
    seoTitle: "Contact Us: Start an AI Project",
    description:
      "Talk to an Axtra Labs engineer about your AI, data, or robotics project. Response within one business day.",
  },
];

export const PAGE_BY_SLUG: Record<string, PageEntry> = Object.fromEntries(
  PAGES.map((p) => [p.slug, p]),
);

export const KIND_LABEL: Record<PageKind, string> = {
  service: "Services",
  agent: "AI Agent Solutions",
  industry: "Industries",
  "case-study": "Case Studies",
  company: "Company",
};

export function getPage(slug: string): PageEntry {
  const page = PAGE_BY_SLUG[slug];
  if (!page) throw new Error(`Unknown page slug: ${slug}`);
  return page;
}
