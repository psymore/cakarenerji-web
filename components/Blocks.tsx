import { T } from "@/lib/text";
import type { Block, Section } from "@/content/pages";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if ("p" in b) return <T key={i} v={b.p} />;
        if ("ul" in b)
          return (
            <ul className="ticks" key={i}>
              {b.ul.map((li, j) => (
                <T as="li" key={j} v={li} />
              ))}
            </ul>
          );
        return (
          <ul className="chips" key={i}>
            {b.chips.map((li, j) => (
              <T as="li" key={j} v={li} />
            ))}
          </ul>
        );
      })}
    </>
  );
}

/** Heading on the left, content on the right (a datasheet row). */
export function Row({ heading, children, level = 2 }: { heading?: Section["heading"]; children: React.ReactNode; level?: 2 | 3 }) {
  return (
    <div className="row">
      <div className="row__head">{heading ? <T as={level === 2 ? "h2" : "h3"} v={heading} /> : null}</div>
      <div className="row__body">{children}</div>
    </div>
  );
}
