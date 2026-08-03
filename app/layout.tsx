import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "./seo";

export const dynamic = "force-static";

const origin = siteUrl;
const title = "China Freight Forwarder & Logistics Company | Robin Logistics";
const description =
  "Robin Logistics coordinates suppliers, warehousing, customs, ocean freight, air freight and destination support from China.";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: origin,
    images: [{ url: `${origin}/og.png`, width: 1736, height: 907, alt: "Robin Logistics — Your Logistics Control Tower in China" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${origin}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Robin Logistics Supply Chain (Guangzhou) Co., Ltd.",
    alternateName: "Robin Logistics",
    url: siteUrl,
    logo: `${siteUrl}/robin-logo.png`,
    foundingDate: "2018",
    description: "Guangzhou-based freight forwarder providing China origin logistics, ocean freight, air freight, warehousing, consolidation, customs and international shipping support.",
    email: "louis.zhong@robinlogisticsglobal.com",
    telephone: "+86-135-7029-3278",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Room 5253, 5th Floor, No. 6 Lingshan East Road",
      addressLocality: "Guangzhou",
      addressRegion: "Guangdong",
      addressCountry: "CN",
    },
    areaServed: ["Asia", "Middle East", "Africa", "Europe", "North America", "South America"],
  };
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        {children}
      </body>
    </html>
  );
}
