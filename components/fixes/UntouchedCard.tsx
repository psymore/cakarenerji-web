import type { Untouched } from "@/content/typo-notes";

/** A live-site error V0 did not change, with the reason. */
export function UntouchedCard({ item }: { item: Untouched }) {
  return (
    <article className="fix fix--kept">
      <header className="fix__head">
        <span>{item.where}</span>
        {item.ref ? <span className="fix__issue">{item.ref}</span> : null}
      </header>
      <figure>
        <figcaption>Canlı sitede, olduğu gibi</figcaption>
        <p className="fix__kept-text">{item.text}</p>
      </figure>
      <p className="fix__why">{item.why}</p>
    </article>
  );
}
