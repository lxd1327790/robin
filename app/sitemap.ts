import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

const routes = [
  "", "/about", "/services", "/china-origin-management", "/industries",
  "/trade-lanes", "/contact", "/services/ocean-freight", "/services/air-freight",
  "/services/warehousing-consolidation", "/services/customs-origin-services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-08-03"),
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.7,
  }));
}
