import { Countdown } from "@/components/Countdown";
import { PageHero } from "@/components/PageHero";
import type { SoonPage, StubPage } from "@/content/pages";
import { T } from "@/lib/text";

/** Pages that are only a heading on the live site (BRK-01). Not filled: no content available. */
export function StubView({ page }: { page: StubPage }) {
  return <PageHero title={page.h1} solo />;
}

/** "Yakında" placeholder with countdown (BRK-02). */
export function SoonView({ page }: { page: SoonPage }) {
  return (
    <PageHero title={page.h1} solo>
      <T className="lead" v={page.text} />
      <Countdown />
    </PageHero>
  );
}
