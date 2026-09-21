import { Photo } from "@/components/Photo";

/**
 * Second photo of the home hero: the field with panel rows, cropped (never scaled down) into a strip
 * under the sunset hero, with a shadowed gold divider between them.
 */
export function HeroField() {
  return (
    <>
      <div className="hero-divider" aria-hidden />
      <div className="hero-field" aria-hidden>
        <Photo id="homeField" sizes="max(100vw, 90svh)" widths={[767, 1023, 1535, 1920]} />
      </div>
    </>
  );
}
