import { PageHero, PageLayout } from "../_components/SiteChrome";

const stages = [
  ["Supplier alignment","Confirm cargo-ready dates, quantities, packaging and pickup requirements."],
  ["Pickup planning","Coordinate factories and truckers around warehouse and carrier cut-offs."],
  ["Warehouse control","Receive, check, label, consolidate and prepare cargo for loading."],
  ["Customs & documents","Align export declarations and shipping documents before departure."],
  ["Freight execution","Book the right route and provide milestone-based shipment updates."],
];

export default function ChinaOriginPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="China Origin Management" title="One team across every supplier and handoff." copy="We act as your operating team in China, coordinating the work that happens before international transport begins." image="/warehouse.png" />
      <section className="subpage-section split-copy">
        <div><p className="eyebrow">Why it matters</p><h2>Multiple suppliers should not mean multiple problems.</h2></div>
        <div className="long-copy"><p>Different production schedules, packaging standards and documents can create delays long before cargo reaches the port.</p><p>Robin Logistics gives you one operating view across suppliers, pickups, warehouse receiving, customs and carrier cut-offs.</p></div>
      </section>
      <section className="origin-steps">
        <div className="subpage-section">
          <p className="eyebrow">How we manage origin</p>
          {stages.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>
    </PageLayout>
  );
}
