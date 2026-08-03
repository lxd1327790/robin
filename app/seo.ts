import type { Metadata } from "next";

export const siteUrl = "https://robin-logistics-global.sanjiumbrella.chatgpt.site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: "Robin Logistics",
      images: [{ url: `${siteUrl}/og.png`, width: 1736, height: 907, alt: "Robin Logistics freight forwarding and supply chain services in China" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/og.png`] },
  };
}
