import { PageHero, PageLayout } from "../_components/SiteChrome";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("International Shipping from China | Global Freight Coverage", "International freight forwarding from China to Southeast Asia, the Middle East, Africa, Europe, North America and South America.", "/trade-lanes");

const lanes = [
  ["Southeast Asia","Regional ocean and air options connecting China with key Southeast Asian markets."],
  ["Middle East","FCL, LCL and air freight support to major Gulf and Middle Eastern gateways."],
  ["North Africa","China-origin coordination and destination partner support across North African markets."],
  ["Europe & Mediterranean","Ocean, air and multimodal planning to European and Mediterranean destinations."],
  ["West Africa","Routing and documentation support for complex West African destination requirements."],
  ["North America","Ocean and air options to the United States and Canada, supported by destination partners."],
  ["South America","Structured origin control and routing from China to major South American gateways."],
];

export default function TradeLanesPage() {
  return (
    <PageLayout>
      <PageHero title="From China to your market." copy="Our network connects Chinese suppliers with destinations across Asia, the Middle East, Africa, Europe and the Americas." image="/hero-port.png" />
      <section className="subpage-section">
        <p className="eyebrow">Markets we serve</p><h2>Seven regions. One team in China.</h2>
        <div className="lane-grid">{lanes.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>
    </PageLayout>
  );
}
