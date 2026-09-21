import { Link } from "@/components/AppLink";
import { Mark } from "@/components/fixes/Mark";
import type { Fix } from "@/lib/typo-fixes";

/** One fix: the live site's wrong text (red border) next to the corrected text. */
export function FixCard({ fix }: { fix: Fix }) {
  return (
    <article className="fix">
      <header className="fix__head">
        {fix.href ? <Link href={fix.href}>{fix.where}</Link> : <span>{fix.where}</span>}
        <span className="fix__kind">{fix.kind}</span>
      </header>
      <div className="fix__pair">
        <figure>
          <figcaption>Canlı sitede</figcaption>
          <p className="typo-fixed">
            <Mark x={fix.before} />
          </p>
        </figure>
        <figure>
          <figcaption>Düzeltildi{fix.visible ? "" : " (sayfada görünmez)"}</figcaption>
          <p>
            <Mark x={fix.after} />
          </p>
        </figure>
      </div>
    </article>
  );
}
