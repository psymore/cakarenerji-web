import { Countdown } from "@/components/Countdown";
import { PageHero } from "@/components/PageHero";
import { PhotoGallery } from "@/components/PhotoGallery";
import type { SoonPage, StubPage } from "@/content/pages";
import { T } from "@/lib/text";

/** Pages that are only a heading on the live site (BRK-01), optionally with the live photo slider. */
export function StubView({ page }: { page: StubPage }) {
  return (
    <>
      <PageHero title={page.h1} solo />
      {page.gallery && (
        <section className="section">
          <div
            className={`wrap slider${page.gallery.contain ? " slider--contain" : ""}`}
            style={{ "--ratio": page.gallery.ratio } as React.CSSProperties}
          >
            <PhotoGallery photos={page.gallery.photos} />
          </div>
        </section>
      )}
    </>
  );
}

/** "Yakında" placeholder with countdown (BRK-02). */
export function SoonView({ page }: { page: SoonPage }) {
  return (
    <PageHero title={page.h1} solo photo={page.photo}>
      <T className="lead" v={page.text} />
      <Countdown />
    </PageHero>
  );
}
