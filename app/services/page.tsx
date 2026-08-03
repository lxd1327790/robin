import Link from "next/link";
import { PageHero, PageLayout } from "../_components/SiteChrome";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("Freight Forwarding Services from China | Robin Logistics", "Ocean freight, air freight, China warehousing, consolidation, customs documentation and supplier coordination for international shipments.", "/services");

const services = [
  ["/services/ocean-freight", "Ocean Freight", "FCL and LCL solutions supported by origin coordination, documentation and destination partners."],
  ["/services/air-freight", "Air Freight", "Time-sensitive airport-to-airport and door-to-door options for general and special cargo."],
  ["/services/warehousing-consolidation", "Warehousing & Consolidation", "Receiving, cargo checks, labeling, palletizing, supplier consolidation and loading."],
  ["/services/customs-origin-services", "Customs & Origin Services", "Pickup, export declarations, shipping documents and factory coordination in China."],
  ["/china-origin-management", "China Supply Chain Coordination", "One operating team across multiple suppliers, purchase orders and shipment milestones."],
  ["/contact", "Destination Support", "Arrival, clearance and delivery coordination through trusted local partners."],
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero title="End-to-end support at origin in China." copy="Choose the transport mode you need, or let us coordinate the complete origin process." image="/multimodal.png" />
      <section className="subpage-section">
        <p className="eyebrow">What we manage</p>
        <h2>Services built around the shipment.</h2>
        <div className="service-card-grid">
          {services.map(([href, title, copy], index) => (
            <Link href={href} className="service-card" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><strong>Learn more →</strong>
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
