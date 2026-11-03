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
    slug: "ai-powered-smart-surveillance-system",
    kind: "case-study",
    title: "AI-Powered Smart Surveillance System",
    description:
      "Case study: AI video surveillance with threat detection, facial recognition and real-time alerts that cut manual monitoring 50% and sped response 40%.",
  },
  {
    slug: "ai-fall-stroke-warning-system",
    kind: "case-study",
    title: "AI Fall & Stroke Warning System for Elderly Care",
    seoTitle: "AI Fall & Stroke Warning System",
    description:
      "Case study: on-premise computer vision that spots falls and visible stroke warning signs in older adults and raises an alert in seconds, with no video leaving the home.",
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
  {
    slug: "ai-powered-rfp-tender-response-platform",
    kind: "case-study",
    title: "AI-Powered RFP & Tender Response Platform",
    description:
      "Case study: a Gen AI drafting workspace that reuses past wins, pricing and compliance language to cut RFP and tender drafting time by 40%.",
  },
  {
    slug: "uk-infrastructure-project-tracking-portal",
    kind: "case-study",
    title: "Enterprise Project Tracking Portal",
    seoTitle: "Enterprise Project Tracking Portal, UK Infrastructure",
    description:
      "Case study: a project-tracking portal for a leading UK infrastructure and construction firm. Reporting delays reduced by 70%+ across 10+ departments and 400+ users.",
  },
  {
    slug: "uk-agency-kpi-tracking-portal",
    kind: "case-study",
    title: "KPIs Tracking Portal",
    seoTitle: "KPIs Tracking Portal for a UK Marketing Agency",
    description:
      "Case study: an ASP.NET and Power BI KPI portal for a mid-sized UK marketing agency. Weekly reporting effort reduced by 60%+, with real-time KPIs.",
  },
  {
    slug: "intelligent-loan-processing-platform",
    kind: "case-study",
    title: "Intelligent Loan Processing Platform",
    description:
      "Case study: loan-document intake with Azure Form Recognizer for a US fintech lender. The client processes thousands of documents a month. The contract was extended 7 times.",
  },
  {
    slug: "grafa-ai-market-intelligence",
    kind: "case-study",
    title: "AI Market Intelligence Platform for Grafa",
    seoTitle: "Grafa AI Market Intelligence Platform",
    description:
      "Case study: Next.js web and React Native apps with AI screening and trading signals for Grafa, a market-intelligence product in Australia. Team of 7, ongoing.",
  },
  {
    slug: "kidbank-kids-fintech-platform",
    kind: "case-study",
    title: "Kidbank Kids Fintech Platform",
    description:
      "Case study: a parent web platform and React Native apps for allowances, rewards and savings, built for Kidbank in the United States. Team of 6 over 4 months.",
  },
  {
    slug: "ai-powered-retail-traffic-analytics",
    kind: "case-study",
    title: "AI-Powered Retail Traffic Analytics",
    seoTitle: "Retail Footfall Analytics from Existing CCTV",
    description:
      "Case study: footfall and dwell-time analytics from existing CCTV for a regional shopping-mall operator in Thailand. People detection, tracking, a traffic engine and a heatmap dashboard.",
  },
  {
    slug: "ai-insurance-damage-assessment",
    kind: "case-study",
    title: "AI Insurance Damage Assessment",
    seoTitle: "AI Insurance Vehicle Damage Assessment",
    description:
      "Case study: vehicle damage detection, claim workflow and fraud checks for a fast-growing US InsurTech company. Team of 7 over 10 months, ongoing.",
  },
  {
    slug: "ai-powered-skin-analysis-platform",
    kind: "case-study",
    title: "AI-Powered Skin Analysis Platform",
    seoTitle: "AI Skin Analysis and Beauty Copilot",
    description:
      "Case study: computer vision across 20+ skin parameters, recommendations and an LLM beauty copilot for a Singapore skincare startup. Team of 7 over 12 months.",
  },
  {
    slug: "restaurant-floor-intelligence",
    kind: "case-study",
    title: "Restaurant Floor Intelligence",
    seoTitle: "Restaurant Floor Intelligence from CCTV",
    description:
      "Case study: restaurant-floor computer vision on CCTV for a US startup, with live table state, cover balancing and double-seating prevention. Team of 3, ongoing.",
  },
  {
    slug: "ai-recruiting-agent-platform",
    kind: "case-study",
    title: "AI Recruiting Agent Platform",
    description:
      "Case study: AI agents for sourcing, qualification, outreach and interview scheduling for an HK-based HRTech SaaS startup. Team of 8 over 10 months, ongoing.",
  },
  {
    slug: "ai-sales-automation-platform",
    kind: "case-study",
    title: "AI Sales Automation Platform",
    description:
      "Case study: lead enrichment, AI-personalized outreach and CRM updates for a fast-growing US SaaS accounting platform. Team of 3, ongoing.",
  },
  {
    slug: "ai-powered-remote-patient-monitoring",
    kind: "case-study",
    title: "AI-Powered Remote Patient Monitoring",
    seoTitle: "AI Remote Patient Monitoring Platform",
    description:
      "Case study: wearable remote patient monitoring with predictive alerts and FHIR integration for Epic and Cerner, for a US digital health startup. Team of 10 over 24 months.",
  },
  {
    slug: "ai-healthcare-appointment-assistant",
    kind: "case-study",
    title: "AI Healthcare Appointment Assistant",
    description:
      "Case study: an AI virtual assistant for booking, symptom triage and reminders for a healthcare SaaS provider in New Zealand. Team of 5 over 6 months.",
  },
  {
    slug: "ai-relationship-coaching-app",
    kind: "case-study",
    title: "AI Relationship Coaching App",
    description:
      "Case study: a relationship coaching app with a recommendation engine, secure chat and voice, gamification and well-being insights for a healthtech startup in Turkey. Team of 9 over 10 months.",
  },
  {
    slug: "vika-cube-ai-learning-companion",
    kind: "case-study",
    title: "Vika Cube AI Learning Companion",
    description:
      "Case study: embedded software, AI voice and a 2.4-inch TFT interface for Vika Cube, a children's learning companion from an HK-based technology company. Team of 3 over 6 months.",
  },
  {
    slug: "ai-companion-for-older-adults",
    kind: "case-study",
    title: "AI Companion for Older Adults",
    seoTitle: "AI Companion Device for Older Adults",
    description:
      "Case study: embedded conversational AI, reminders and a touch UI for an older-adult companion device from a Canada-based technology company. Team of 5 over 6 months.",
  },
  {
    slug: "home-robotics-engineering-platform",
    kind: "case-study",
    title: "Home Robotics Engineering Platform",
    description:
      "Case study: embedded robotics software, perception and SLAM for a US home-robotics company. Team of 3 over 10 months, ongoing, delivered Agile on time and materials.",
  },
  {
    slug: "web3-sportfi-platform",
    kind: "case-study",
    title: "Web3 SportFi Platform",
    description:
      "Case study: an omnichain SportFi platform with tokenomics, a social graph, audited Ethereum contracts and a cross-chain bridge. Mainnet launched. Team of 8 over 9 months.",
  },
  {
    slug: "crypto-igaming-platform",
    kind: "case-study",
    title: "Crypto iGaming Platform",
    description:
      "Case study: a crypto iGaming platform with game aggregation, crypto payments, two original games, VIP and loyalty, plus PWA, React Native and a Telegram bot. Team of 12 over 12 months.",
  },

  {
    slug: "uk-fintech-catalyst-tracker",
    kind: "case-study",
    title: "Equity Catalyst Tracker for a UK Fintech",
    seoTitle: "UK Fintech Equity Catalyst Tracker",
    description:
      "Case study: a UK fintech research platform for small-cap and mining equities. Phase 1 delivered a company and catalyst workspace with AI summaries. Phase 2, covering cash runway and reserve extraction, is ongoing.",
  },
  {
    slug: "uk-ecommerce-ads-ambassador-platform",
    kind: "case-study",
    title: "Ads and Ambassador Platform for a UK E-commerce Brand",
    seoTitle: "UK E-commerce Ads and Ambassador Platform",
    description:
      "Case study: an ongoing co-development engagement for a UK direct-to-consumer brand. One platform joins ad spend to store revenue. Another replaces a third-party ambassador app with a platform the brand owns.",
  },
  {
    slug: "german-regtech-kyc-platform",
    kind: "case-study",
    title: "Digital Identity and KYC Platform",
    seoTitle: "German RegTech KYC and Digital Identity Platform",
    description:
      "Case study: a digital-identity and KYC platform for a German RegTech scale-up serving fintech and insurtech. The MVP shipped in under 4 months. KYC onboarding takes under 2 minutes.",
  },
  {
    slug: "asia-multigame-igaming-platform",
    kind: "case-study",
    title: "Multi-Game iGaming Platform",
    seoTitle: "Multi-Game iGaming Platform for an Asian Operator",
    description:
      "Case study: a multi-game platform for sports, slots and cultural games, built for a fast-growing online gaming operator in Asia. Web and mobile, wallet, payments and 24/7 monitoring. Team of 13 over 12 months.",
  },
  {
    slug: "realtime-dice-game-platform",
    kind: "case-study",
    title: "Real-Time Dice Game Platform",
    seoTitle: "Real-Time Multiplayer Dice Game",
    description:
      "Case study: a real-time multiplayer over-and-under dice game for an emerging online gaming operator in Asia. Provably fair draws, an in-game wallet and cloud auto-scaling. Team of 9 over 10 months.",
  },
  {
    slug: "mystery-box-gaming-platform",
    kind: "case-study",
    title: "Mystery-Box Gaming Platform",
    seoTitle: "Mystery-Box Gaming Platform",
    description:
      "Case study: a mystery-box platform with prize logic, provably fair draws, battle mode, and crypto and card payments. Built for a Singapore gaming and e-commerce product. Team of 7 over 12 months.",
  },
  {
    slug: "civic-survey-ai-insights",
    kind: "case-study",
    title: "AI Survey Insights for a Research Platform",
    seoTitle: "AI Survey Insights for a Civic Research Platform",
    description:
      "Case study: AI summaries, sentiment classification and a database-restricted chatbot for open-ended survey answers, plus panel recruitment and management, for an Australian civic-research company.",
  },
  {
    slug: "audiology-clinical-documentation",
    kind: "case-study",
    title: "Clinical Documentation for an Audiology Practice",
    seoTitle: "Audiology Clinical Documentation Platform",
    description:
      "Case study: a clinical documentation platform for an audiology practice, replacing a spreadsheet system with forms, phrase libraries, insurance plans, procedure codes and e-signature.",
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
      "Case studies from Axtra Labs project references across healthcare, fintech, retail, robotics, embedded devices and enterprise portals. Outcome figures are included only where the reference states them.",
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
