import type { ReactNode } from "react";
import { Photo } from "@/components/Photo";
import type { PhotoId } from "@/lib/images";
import { T, type Txt } from "@/lib/text";

/** Dark module-blue band with the page's h1. `sup` sits above the h1, `children` below it. `photo` is the live page's hero image. */
export function PageHero({
  title,
  sup,
  children,
  solo,
  photo,
}: {
  title: Txt;
  sup?: ReactNode;
  children?: ReactNode;
  solo?: boolean;
  photo?: PhotoId;
}) {
  return (
    <section className={photo ? "page-hero page-hero--photo" : "page-hero"}>
      {photo ? (
        <div className="page-hero__photo" aria-hidden>
          <Photo id={photo} eager />
        </div>
      ) : null}
      <div className="flat-field flat-cells" aria-hidden />
      <div className="wrap">
        {sup ? <div className="page-hero__sup">{sup}</div> : null}
        <T as="h1" v={title} className={solo ? "solo" : undefined} />
        {children}
      </div>
    </section>
  );
}
