import Link from "next/link";
import { PageHero, PageLayout } from "./SiteChrome";

export function ServiceDetail({
  eyebrow,
  title,
  intro,
  image,
  capabilities,
  outcomes,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  capabilities: [string, string][];
  outcomes: string[];
}) {
  return (
    <PageLayout>
      <PageHero eyebrow={eyebrow} title={title} copy={intro} image={image} />
      <section className="subpage-section split-copy">
        <div>
          <p className="eyebrow">What we manage</p>
          <h2>Clear ownership at every step.</h2>
        </div>
        <div className="capability-list">
          {capabilities.map(([heading, copy]) => (
            <article key={heading}><h3>{heading}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>
      <section className="outcomes-section">
        <div className="subpage-section">
          <p className="eyebrow">What this means for you</p>
          <div className="outcome-grid">
            {outcomes.map((outcome, index) => (
              <article key={outcome}><span>0{index + 1}</span><p>{outcome}</p></article>
            ))}
          </div>
          <Link className="text-link" href="/services">View all services →</Link>
        </div>
      </section>
    </PageLayout>
  );
}
