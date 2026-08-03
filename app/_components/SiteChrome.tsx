import Link from "next/link";
import type { ReactNode } from "react";

export function Header() {
  return (
    <header className="site-header inner-header">
      <Link className="brand" href="/" aria-label="Robin Logistics home">
        <img src="/robin-logo.png" alt="Robin Logistics" />
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/china-origin-management">China Operations</Link>
        <Link href="/industries">Who We Serve</Link>
        <Link href="/trade-lanes">Global Coverage</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link className="header-cta" href="/contact">Request a quote</Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-brand">
        <img src="/robin-logo.png" alt="Robin Logistics" />
        <p>Robin Logistics Supply Chain (Guangzhou) Co., Ltd.</p>
      </div>
      <div>
        <h3>Explore</h3>
        <Link href="/about">About Robin</Link>
        <Link href="/services">Services</Link>
        <Link href="/china-origin-management">China Operations</Link>
        <Link href="/industries">Who We Serve</Link>
        <Link href="/trade-lanes">Global Coverage</Link>
      </div>
      <div>
        <h3>Contact</h3>
        <a href="mailto:louis.zhong@robinlogisticsglobal.com">louis.zhong@robinlogisticsglobal.com</a>
        <a href="tel:+8613570293278">+86 135 7029 3278</a>
        <p>Room 5253, 5/F, No. 6 Lingshan East Road,<br />Tianhe District, Guangzhou, China</p>
      </div>
      <p className="copyright">© 2026 Robin Logistics. All rights reserved.</p>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  image = "/hero-port.png",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image?: string;
}) {
  return (
    <section className="page-hero">
      <img src={image} alt="" />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

export function QuoteStrip() {
  return (
    <section className="quote-strip">
      <div>
        <p className="eyebrow light">Plan your next shipment</p>
        <h2>Need a practical route from China?</h2>
      </div>
      <div className="quote-strip-actions">
        <Link className="button primary" href="/contact">Request a quote</Link>
        <a className="button ghost" href="https://wa.me/8613570293278" target="_blank" rel="noreferrer">WhatsApp Louis</a>
      </div>
    </section>
  );
}

export function PageLayout({ children }: { children: ReactNode }) {
  return <main><Header />{children}<QuoteStrip /><Footer /></main>;
}
