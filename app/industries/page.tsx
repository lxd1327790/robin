import { PageHero, PageLayout } from "../_components/SiteChrome";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("China Logistics for Importers, Brands & Retailers | Robin Logistics", "Freight forwarding and China supply chain support for importers, distributors, brands, retailers, e-commerce and industrial cargo customers.", "/industries");

const industries = [
  ["Importers & distributors","Consolidate suppliers, protect schedules and simplify origin operations in China."],
  ["Brands & retailers","Coordinate packaging, documentation and shipping plans around launch and replenishment needs."],
  ["E-commerce businesses","Support frequent shipments, labeling, warehouse preparation and flexible routing."],
  ["Consumer goods","Manage mixed suppliers, seasonal volume and container utilization."],
  ["Industrial cargo","Plan handling, equipment, routing and documentation for non-standard requirements."],
  ["Trading companies","Provide a dependable operating layer across factories, customers and overseas partners."],
];

export default function IndustriesPage() {
  return (
    <PageLayout>
      <PageHero title="Logistics shaped around how your business ships." copy="We support importers, distributors, brands, retailers and other businesses sourcing and shipping from China." image="/control-room.png" />
      <section className="subpage-section">
        <p className="eyebrow">Industries & customers</p><h2>Practical solutions for different shipping models.</h2>
        <div className="industry-grid">{industries.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
    </PageLayout>
  );
}
