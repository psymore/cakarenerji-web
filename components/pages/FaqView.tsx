import { Blocks, Row } from "@/components/Blocks";
import { PageHero } from "@/components/PageHero";
import type { FaqPage } from "@/content/pages";
import { site } from "@/lib/site";

export function FaqView({ page }: { page: FaqPage }) {
  const [before, after] = page.intro.split(site.email);
  return (
    <>
      <PageHero title={page.h1}>
        <p className="meta">
          {before}
          <a className="textlink" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          {after}
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <div className="rows faq">
            {page.items.map((it, i) => (
              <Row key={i} heading={it.q}>
                <Blocks blocks={it.body} />
              </Row>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
