import type { Metadata } from "next";
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
} from "./site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  /** Use absolute title (no "— Axtra Labs" template). */
  absoluteTitle?: boolean;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
};

/** Build consistent Metadata (canonical, OG, Twitter) for every route. */
export function pageMeta({
  title,
  description,
  path,
  absoluteTitle = false,
  keywords,
  type = "website",
  image = SITE_OG_IMAGE,
}: PageMetaInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} — ${SITE_NAME}`;
  const desc = description.trim() || SITE_DESCRIPTION;
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: desc,
    keywords: [...(keywords ?? SITE_KEYWORDS)],
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description: desc,
      images: [{ url: ogImage, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}
