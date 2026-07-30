const services = [
  {
    number: "01",
    title: "Supplier & PO Coordination",
    copy: "We keep factories, cargo-ready dates, pickup schedules and purchase orders aligned with your shipping plan.",
  },
  {
    number: "02",
    title: "Warehousing & Consolidation",
    copy: "Receiving, cargo checks, labeling, palletizing, consolidation and container loading under one roof.",
  },
  {
    number: "03",
    title: "Customs & Documentation",
    copy: "Export declarations and accurate shipping documents prepared around carrier and destination requirements.",
  },
  {
    number: "04",
    title: "International Freight",
    copy: "Ocean, air and multimodal options matched to your cargo, timeline, budget and operational risk.",
  },
  {
    number: "05",
    title: "Destination Support",
    copy: "Trusted local partners support arrival, customs clearance and final delivery beyond China.",
  },
];

const process = [
  ["01", "Shipment brief", "Cargo, suppliers, destination and timing"],
  ["02", "Route planning", "Schedule, cost and operating requirements"],
  ["03", "Origin operations", "Pickup, warehouse, customs and loading"],
  ["04", "In-transit updates", "Milestones, documents and exception alerts"],
  ["05", "Delivery support", "Arrival coordination and local follow-up"],
];

const advantages = [
  ["Local control", "A Guangzhou-based team close to factories, warehouses, ports and airports."],
  ["Practical solutions", "Recommendations tailored to your cargo, timing and commercial priorities."],
  ["Clear accountability", "One point of contact for every activity at origin."],
  ["Partner network", "Trusted destination partners extend our support beyond China."],
  ["Responsive service", "Prompt follow-up on schedules, documents, exceptions and changes."],
  ["Long-term thinking", "A service model built for repeat business, not just a single shipment."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Robin Logistics home">
          <img src="/robin-logo.png" alt="Robin Logistics" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#process">How we work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#quote">Request a quote</a>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="/hero-port.png" alt="Container vessel at an international port" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">China-origin logistics</p>
          <h1>Your Logistics<br />Control Tower in China</h1>
          <p className="hero-copy">
            One accountable team for supplier coordination, origin operations and international freight.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#quote">Plan your shipment <span>→</span></a>
            <a className="button ghost" href="#services">Explore our services</a>
          </div>
        </div>
        <div className="hero-proof">
          <div><strong>2018</strong><span>Established</span></div>
          <div><strong>50+</strong><span>Team members</span></div>
          <div><strong>50,000+</strong><span>TEUs annually</span></div>
        </div>
      </section>

      <section className="intro section" id="about">
        <div>
          <p className="eyebrow">Our role</p>
          <h2>We manage your logistics at origin in China.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Sourcing from China often means different suppliers, schedules, documents and handoffs.
            Robin Logistics brings them together through one operating team and one clear line of accountability.
          </p>
          <p>
            Headquartered in Guangzhou, our 50+ specialists work across Sales, Commercial, Operations,
            Documentation, Finance and Warehousing.
          </p>
        </div>
      </section>

      <section className="stats-band">
        <p className="eyebrow light">Key trade lanes</p>
        <div className="trade-lanes">
          <span>Southeast Asia</span><span>Middle East</span><span>North Africa</span>
          <span>Europe & Mediterranean</span><span>West Africa</span>
          <span>North America</span><span>South America</span>
        </div>
      </section>

      <section className="origin-feature">
        <div className="origin-image">
          <img src="/warehouse.png" alt="Warehouse team consolidating export cargo" />
        </div>
        <div className="origin-content">
          <p className="eyebrow">Origin operations</p>
          <h2>One coordinated shipment from multiple suppliers.</h2>
          <p>
            We track cargo-ready dates, manage pickups, receive and check goods, consolidate orders,
            review shipping documents and prepare cargo for departure.
          </p>
          <ul>
            <li>Cargo-ready date tracking</li>
            <li>Pickup and inbound receiving</li>
            <li>Cargo checks and consolidation</li>
            <li>Shipping document review</li>
          </ul>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <p className="eyebrow">What we manage</p>
          <h2>End-to-end support at origin in China.</h2>
          <p>A practical operating layer between your suppliers and your destination.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service" key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="routing">
        <img src="/multimodal.png" alt="Ocean, air and road freight operations" />
        <div className="routing-overlay" />
        <div className="routing-content">
          <p className="eyebrow light">Routing flexibility</p>
          <h2>The best route for your cargo.</h2>
          <div className="mode-tags"><span>Ocean FCL / LCL</span><span>Air freight</span><span>Road & rail</span></div>
          <p>
            We weigh transit time, total cost, available capacity and operational risk to recommend
            the best option for your cargo.
          </p>
        </div>
      </section>

      <section className="process section" id="process">
        <div className="section-heading">
          <p className="eyebrow">How we work</p>
          <h2>One clear process. One accountable team.</h2>
        </div>
        <div className="process-grid">
          {process.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <p className="process-note">
          A dedicated operations contact stays with your shipment from booking through arrival.
        </p>
      </section>

      <section className="audiences section">
        <div className="section-heading">
          <p className="eyebrow">Where we add value</p>
          <h2>For businesses that need better control over their China logistics.</h2>
        </div>
        <div className="audience-grid">
          <article><h3>Importers & distributors</h3><p>Consolidate multiple suppliers and simplify origin operations in China.</p></article>
          <article><h3>Brands & retailers</h3><p>Protect shipping schedules, documentation and packaging standards.</p></article>
          <article><h3>E-commerce businesses</h3><p>Coordinate frequent shipments, labeling and warehouse preparation.</p></article>
          <article><h3>Project & industrial cargo</h3><p>Plan non-standard handling, routing and documentation requirements.</p></article>
        </div>
      </section>

      <section className="advantages section">
        <div className="section-heading">
          <p className="eyebrow">Our approach</p>
          <h2>Why work with Robin Logistics?</h2>
        </div>
        <div className="advantage-grid">
          {advantages.map(([title, copy]) => (
            <article key={title}><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="quote" id="quote">
        <div className="quote-image">
          <img src="/control-room.png" alt="Logistics operations team coordinating shipments" />
        </div>
        <div className="quote-content">
          <p className="eyebrow light">Request a quote</p>
          <h2>Tell us about your next shipment.</h2>
          <p>For a faster, more accurate quote, include:</p>
          <div className="quote-details">
            <span>Origin / pickup address</span><span>Cargo, weight and volume</span>
            <span>Destination</span><span>Cargo-ready date</span>
            <span>Incoterm</span><span>Special handling needs</span>
          </div>
          <div className="quote-actions">
            <a className="button primary" href="mailto:louis.zhong@robinlogisticsglobal.com?subject=Shipment%20Quotation%20Request">Email shipment details</a>
            <a className="button ghost" href="https://wa.me/8613570293278" target="_blank" rel="noreferrer">WhatsApp Louis</a>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-brand">
          <img src="/robin-logo.png" alt="Robin Logistics" />
          <p>Robin Logistics Supply Chain (Guangzhou) Co., Ltd.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:louis.zhong@robinlogisticsglobal.com">louis.zhong@robinlogisticsglobal.com</a>
          <a href="tel:+8613570293278">+86 135 7029 3278</a>
        </div>
        <div>
          <h3>Guangzhou office</h3>
          <p>Room 5253, 5/F, No. 6 Lingshan East Road,<br />Tianhe District, Guangzhou, China</p>
        </div>
        <p className="copyright">© 2026 Robin Logistics. All rights reserved.</p>
      </footer>
    </main>
  );
}
