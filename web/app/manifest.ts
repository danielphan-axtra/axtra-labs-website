import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_OG_IMAGE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — AI Software Engineering`,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#F7F5F0",
    theme_color: "#0B2A4A",
    icons: [
      {
        src: "/assets/img/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: SITE_OG_IMAGE,
        sizes: "1200x630",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
