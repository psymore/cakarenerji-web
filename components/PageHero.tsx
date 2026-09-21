import type { ReactNode } from "react";
import { T, type Txt } from "@/lib/text";

/** Dark module-blue band with the page's h1. `sup` sits above the h1, `children` below it. */
export function PageHero({
  title,
  sup,
  children,
  solo,
}: {
  title: Txt;
  sup?: ReactNode;
  children?: ReactNode;
  solo?: boolean;
}) {
  return (
    <section className="page-hero">
      <div className="flat-field flat-cells" aria-hidden />
      <div className="wrap">
        {sup ? <div className="page-hero__sup">{sup}</div> : null}
        <T as="h1" v={title} className={solo ? "solo" : undefined} />
        {children}
      </div>
    </section>
  );
}
