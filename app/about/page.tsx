import { PageHero, PageLayout } from "../_components/SiteChrome";

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        title="A China-based team built for international trade."
        copy="We give overseas customers one accountable team for origin operations, international freight and destination coordination."
      />
      <section className="subpage-section split-copy">
        <div>
          <p className="eyebrow">Who we are</p>
          <h2>Local knowledge, international focus.</h2>
        </div>
        <div className="long-copy">
          <p>Robin Logistics Supply Chain (Guangzhou) Co., Ltd. was established in 2018 to support businesses shipping from China to markets worldwide.</p>
          <p>Our 50+ specialists work across Sales, Commercial, Operations, Documentation, Finance and Warehousing. Together, we handle more than 50,000 TEUs of ocean freight annually.</p>
          <p>We focus on practical execution: keeping suppliers aligned, preparing cargo correctly, protecting shipping schedules and resolving exceptions before they become larger problems.</p>
        </div>
      </section>
      <section className="number-section">
        <div><strong>2018</strong><span>Established in Guangzhou</span></div>
        <div><strong>50+</strong><span>Logistics professionals</span></div>
        <div><strong>50,000+</strong><span>TEUs handled annually</span></div>
      </section>
      <section className="subpage-section">
        <p className="eyebrow">Our departments</p>
        <h2>The right specialists around every shipment.</h2>
        <div className="simple-grid six">
          {["Sales","Commercial","Operations","Documentation","Finance","Warehousing"].map((item) => <article key={item}><h3>{item}</h3></article>)}
        </div>
      </section>
    </PageLayout>
  );
}
