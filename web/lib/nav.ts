export type NavLink = {
  href: string;
  title: string;
  sub?: string;
};

export type NavItem =
  | { type: "link"; href: string; label: string }
  | {
      type: "dropdown";
      label: string;
      variant?: "wide" | "grid4" | "company";
      links: NavLink[];
      foot?: { note: string; href: string; label: string };
    };

export const NAV: NavItem[] = [
  {
    type: "dropdown",
    label: "Services",
    variant: "wide",
    links: [
      { href: "/ai-services", title: "AI Services", sub: "Gen AI, agents, RAG, LLM fine-tuning" },
      { href: "/data-bi", title: "Data & BI", sub: "Pipelines, dashboards, decision intelligence" },
      { href: "/embedded-software", title: "Embedded Software Engineering", sub: "Firmware, RTOS, embedded Linux" },
      { href: "/ai-robotics", title: "AI for Robotics", sub: "Perception, navigation, edge AI" },
      { href: "/devops", title: "DevOps", sub: "CI/CD, Kubernetes, MLOps" },
      { href: "/ai-software-development", title: "AI-Software Development", sub: "Full-stack, AI-native products" },
    ],
    foot: { note: "6 services, one team", href: "/services", label: "View all services →" },
  },
  {
    type: "dropdown",
    label: "AI Agent Solution",
    variant: "wide",
    links: [
      { href: "/voice-ai-agent", title: "Voice AI Agent", sub: "White-label voice AI in your infrastructure" },
      { href: "/document-knowledge-ai-agent", title: "Document and Knowledge AI Agent", sub: "RAG, docs, enterprise knowledge" },
      { href: "/workflow-ai-agent", title: "Workflow AI Agent", sub: "Process automation & orchestration" },
      { href: "/sales-ai-agent", title: "Sales AI Agent", sub: "Outreach, qualification, follow-up" },
      { href: "/multi-agent-system", title: "Multi Agent System", sub: "Coordinated multi-agent teams" },
    ],
    foot: { note: "5 agent solutions", href: "/voice-ai-agent", label: "Explore Voice AI →" },
  },
  { type: "link", href: "/ai-robotics", label: "AI for Robotics" },
  {
    type: "dropdown",
    label: "Industries",
    variant: "grid4",
    links: [
      { href: "/manufacturing", title: "Manufacturing" },
      { href: "/retail", title: "Retail & E-commerce" },
      { href: "/travel", title: "Travel & Hospitality" },
      { href: "/home-services", title: "Home Services" },
      { href: "/fintech", title: "Fintech" },
      { href: "/agriculture", title: "Agriculture" },
      { href: "/logistics", title: "Logistics" },
      { href: "/healthcare", title: "Healthcare" },
    ],
    foot: { note: "8 industries served", href: "/#industries", label: "View all industries →" },
  },
  { type: "link", href: "/case-study", label: "Work" },
  {
    type: "dropdown",
    label: "About",
    variant: "company",
    links: [
      { href: "/about", title: "About Us", sub: "Who we are and how we work" },
      { href: "/insights", title: "Insights", sub: "Articles, ideas, and industry notes" },
      { href: "/careers", title: "Careers", sub: "Growth path, roles, and culture" },
      { href: "/our-rd", title: "Our R&D", sub: "PTIT lab, research, and applied AI" },
    ],
  },
];

export const FOOTER = {
  services: [
    { href: "/ai-services", label: "AI Services" },
    { href: "/data-bi", label: "Data & BI" },
    { href: "/embedded-software", label: "Embedded Software Engineering" },
    { href: "/ai-robotics", label: "AI for Robotics" },
    { href: "/devops", label: "DevOps" },
    { href: "/ai-software-development", label: "AI-Software Development" },
  ],
  industries: [
    { href: "/manufacturing", label: "Manufacturing" },
    { href: "/retail", label: "Retail & E-commerce" },
    { href: "/travel", label: "Travel" },
    { href: "/home-services", label: "Home Services" },
    { href: "/fintech", label: "Fintech" },
    { href: "/agriculture", label: "Agriculture" },
    { href: "/logistics", label: "Logistics" },
    { href: "/healthcare", label: "Healthcare" },
  ],
  agents: [
    { href: "/voice-ai-agent", label: "Voice AI Agent" },
    { href: "/document-knowledge-ai-agent", label: "Document & Knowledge" },
    { href: "/workflow-ai-agent", label: "Workflow AI Agent" },
    { href: "/sales-ai-agent", label: "Sales AI Agent" },
    { href: "/multi-agent-system", label: "Multi Agent System" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/insights", label: "Insights" },
    { href: "/careers", label: "Careers" },
    { href: "/our-rd", label: "Our R&D" },
    { href: "/case-study", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
};
