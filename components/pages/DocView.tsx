import { Link } from "@/components/AppLink";
import { Blocks, Row } from "@/components/Blocks";
import { Modules } from "@/components/Modules";
import { PageHero } from "@/components/PageHero";
import type { DocPage } from "@/content/pages";

/** Generic content page: hero, then heading-left / content-right rows. */
export function DocView({ page }: { page: DocPage }) {
  return (
    <>
      <PageHero title={page.h1} solo={page.layout === "datasheet"} photo={page.photo} />
      <section className="section">
        <div className="wrap">
          <div className="rows" data-layout={page.layout}>
            {page.sections.map((s, i) => (
              <Row key={i} heading={s.heading}>
                <Blocks blocks={s.body} />
                {s.cards ? <Modules cards={s.cards} /> : null}
              </Row>
            ))}
          </div>
          {page.cta ? (
            <div className="cta-row">
              <Link className="btn" href={page.cta.href}>
                {page.cta.label}
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
