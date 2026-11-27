import type { Metadata } from "next";
import { site } from "@/lib/site";

// Builds a page's title, description, canonical link and social-sharing tags.
// Pages that pass no title or description get the site-wide ones.
export function pageMetadata(
  path: string,
  title: string = site.title,
  description: string = site.description,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      images: ["/images/logo-black.png"],
    },
    twitter: { card: "summary", title, description, images: ["/images/logo-black.png"] },
  };
}
