import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://images.pexels.com https://images.unsplash.com https://cdn.jsdelivr.net",
      "font-src 'self' data:",
      "media-src 'self'",
      "connect-src 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const longCache = [
  {
    key: "Cache-Control",
    value: "public, max-age=31536000, immutable",
  },
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/ai-care-navigation-healthtech-startup", destination: "/ai-healthcare-appointment-assistant", statusCode: 301 },
      { source: "/ai-credit-underwriting-fintech-startup", destination: "/intelligent-loan-processing-platform", statusCode: 301 },
      { source: "/ai-driven-personalized-ecommerce-recommendations", destination: "/ai-powered-retail-traffic-analytics", statusCode: 301 },
      { source: "/ai-fraud-detection-neobank-startup", destination: "/ai-insurance-damage-assessment", statusCode: 301 },
      { source: "/ai-optimized-logistics-route-planning", destination: "/case-study", statusCode: 301 },
      { source: "/ai-powered-healthcare-diagnosis-system", destination: "/ai-powered-remote-patient-monitoring", statusCode: 301 },
      { source: "/ai-powered-internal-hr-knowledge-talent-search-chatbot", destination: "/ai-recruiting-agent-platform", statusCode: 301 },
      { source: "/ai-powered-smart-surveillance-system", destination: "/ai-powered-retail-traffic-analytics", statusCode: 301 },
      { source: "/ai-returns-prevention-ecommerce-startup", destination: "/ai-powered-retail-traffic-analytics", statusCode: 301 },
      { source: "/big-data-analytics-business-intelligence", destination: "/uk-agency-kpi-tracking-portal", statusCode: 301 },
      { source: "/building-ai-powered-personal-trainer", destination: "/ai-relationship-coaching-app", statusCode: 301 },
      { source: "/chatbot-automated-customer-support", destination: "/ai-healthcare-appointment-assistant", statusCode: 301 },
      { source: "/computer-vision-qc-factory-lines", destination: "/home-robotics-engineering-platform", statusCode: 301 },
      { source: "/data-engineering-analytics-insurance-risk", destination: "/ai-insurance-damage-assessment", statusCode: 301 },
      { source: "/optimizing-gpt-4-prompt-engineering", destination: "/ai-powered-rfp-tender-response-platform", statusCode: 301 },
      { source: "/case-studies", destination: "/case-study", statusCode: 301 },
    ];
  },
  poweredByHeader: false,
  compress: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.jsdelivr.net" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/assets/:path*",
        headers: longCache,
      },
      {
        source: "/_next/static/:path*",
        headers: longCache,
      },
      {
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/llms-full.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;
