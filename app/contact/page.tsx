import { Footer, Header } from "../_components/SiteChrome";
import { QuoteForm } from "../_components/QuoteForm";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("Request a China Freight Quote | Robin Logistics", "Request an ocean freight, air freight, warehousing or China origin logistics quotation from Robin Logistics in Guangzhou.", "/contact");

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="contact-page contact-page-with-form">
        <div className="contact-intro">
          <p className="eyebrow light">Request a quote</p>
          <h1>Tell us about your next shipment.</h1>
          <p>Send the details below by email or WhatsApp. We will review the route, timing, cost and operational requirements.</p>
          <a href="mailto:louis.zhong@robinlogisticsglobal.com">louis.zhong@robinlogisticsglobal.com</a>
          <a href="https://wa.me/8613570293278" target="_blank" rel="noreferrer">WhatsApp: +86 135 7029 3278</a>
        </div>
        <QuoteForm />
      </section>
      <Footer />
    </main>
  );
}
