import { Footer, Header } from "../_components/SiteChrome";

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="contact-page">
        <div className="contact-intro">
          <p className="eyebrow light">Request a quote</p>
          <h1>Tell us about your next shipment.</h1>
          <p>Send the details below by email or WhatsApp. We will review the route, timing, cost and operational requirements.</p>
          <a href="mailto:louis.zhong@robinlogisticsglobal.com">louis.zhong@robinlogisticsglobal.com</a>
          <a href="https://wa.me/8613570293278" target="_blank" rel="noreferrer">WhatsApp: +86 135 7029 3278</a>
        </div>
        <div className="contact-card">
          <p className="eyebrow">Shipment details</p>
          <h2>Include these six items.</h2>
          <ol>
            <li><span>01</span>Origin or supplier pickup address</li>
            <li><span>02</span>Commodity, cartons, weight and volume</li>
            <li><span>03</span>Port, airport or final destination</li>
            <li><span>04</span>Cargo-ready date and required arrival</li>
            <li><span>05</span>Incoterm and customs responsibilities</li>
            <li><span>06</span>Battery, oversized, fragile or special cargo</li>
          </ol>
          <a className="button primary" href="mailto:louis.zhong@robinlogisticsglobal.com?subject=Shipment%20Quotation%20Request">Email shipment details</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
