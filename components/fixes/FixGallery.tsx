import { FixCard } from "@/components/fixes/FixCard";
import { UntouchedCard } from "@/components/fixes/UntouchedCard";
import { PageHero } from "@/components/PageHero";
import { untouched } from "@/content/typo-notes";
import { allFixes } from "@/lib/typo-fixes";

/** Review page: the typos found on the live site and how V0 fixed them. Not one of the live site's routes. */
export function FixGallery() {
  const fixes = allFixes();
  return (
    <>
      <PageHero title="Yazım düzeltmeleri" solo>
        <p className="lead">
          Canlı sitedeki yazım hataları ve bu sürümde nasıl düzeltildikleri. Kırmızı çerçeve, canlı sitedeki hatalı metni gösterir.
        </p>
        <p className="meta">
          {fixes.length} düzeltme, {untouched.length} hata olduğu gibi bırakıldı
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <div className="gallery">
            {fixes.map((f, i) => (
              <FixCard key={i} fix={f} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="wrap">
          <h2 className="big-h" style={{ marginTop: 0, marginBottom: 36, fontSize: "clamp(1.6rem,3vw,2.3rem)" }}>
            Olduğu gibi bırakılanlar
          </h2>
          <div className="gallery">
            {untouched.map((u, i) => (
              <UntouchedCard key={i} item={u} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
