import { T, type Txt } from "@/lib/text";

/** PV-module style grid of short titled texts (Hakkımızda: Anahtar Teslim Solar Sistemler). */
export function Modules({ cards }: { cards: { heading: string; text: Txt }[] }) {
  return (
    <div className="modules">
      {cards.map((c) => (
        <article className="module" key={c.heading}>
          <h3>{c.heading}</h3>
          <T v={c.text} />
        </article>
      ))}
    </div>
  );
}
