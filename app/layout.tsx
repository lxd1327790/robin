import type { Metadata } from "next";
import "./globals.css";

export const dynamic = "force-static";

const origin = "https://robin-logistics-global.sanjiumbrella.chatgpt.site";
const title = "Robin Logistics | China-Origin Freight & Supply Chain Support";
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
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
