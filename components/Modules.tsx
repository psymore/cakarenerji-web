import { Photo } from "@/components/Photo";
import type { PhotoId } from "@/lib/images";
import { T, type Txt } from "@/lib/text";

/** PV-module style grid of short titled texts (Hakkımızda: Anahtar Teslim Solar Sistemler). */
export function Modules({ cards }: { cards: { heading: string; text: Txt; photo?: PhotoId }[] }) {
  return (
    <div className="modules">
      {cards.map((c) => (
        <article className="module" key={c.heading}>
          {c.photo ? (
            <div className="module__photo">
              <Photo id={c.photo} sizes="(min-width: 720px) 33vw, 100vw" widths={[450, 767, 1023]} />
            </div>
          ) : null}
          <h3>{c.heading}</h3>
          <T v={c.text} />
        </article>
      ))}
    </div>
  );
}
