import { blogTemplate } from "@/content/blog-template";
import { T } from "@/lib/text";

/** The unrelated "EPC" block the live blog template repeats under every post and the list (kept as on live, see BLG-02). */
export function BlogTemplate() {
  return (
    <section className="section section--white template" aria-label={blogTemplate.title}>
      <div className="wrap">
        <div className="split split--wide-left" style={{ alignItems: "start" }}>
          <div>
            <h2>{blogTemplate.title}</h2>
            <p className="slogan" style={{ marginTop: 14 }}>
              {blogTemplate.slogan}
            </p>
            <p className="label" style={{ marginTop: 14 }}>
              {blogTemplate.company}
            </p>
          </div>
        </div>
        {blogTemplate.sections.map((s, i) => (
          <div key={i} style={{ marginTop: 56 }}>
            <T as="h2" v={s.heading} />
            <div className="rows" style={{ marginTop: 22 }}>
              {s.groups.map((g, j) => (
                <div className="row" key={j}>
                  <div className="row__head">
                    {g.heading ? <T as="h3" v={g.heading} /> : null}
                    {g.lead ? <p className="label" style={{ marginTop: 8 }}>{g.lead}</p> : null}
                  </div>
                  <div className="row__body">
                    {g.paras?.map((p, k) => <T key={k} v={p} />)}
                    {g.list ? (
                      <>
                        {g.listLabel ? <p className="list-label">{g.listLabel}</p> : null}
                        <ul className="ticks">
                          {g.list.map((li, k) => <T as="li" key={k} v={li} />)}
                        </ul>
                      </>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
