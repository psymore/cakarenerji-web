import { Photo } from "@/components/Photo";

/**
 * The field photo as a strip. Which strip shows (under the hero or under "Hakkımızda"), and how tall,
 * depends on the home layout the visitor picked in the settings menu (CSS, see "Home layouts").
 */
export function PhotoStrip({ place }: { place: "hero" | "about" }) {
  return (
    <div className={`photo-strip photo-strip--${place}`} aria-hidden>
      <div className="photo-strip__divider" />
      <div className="photo-strip__img">
        <Photo id="homeField" sizes="100vw" widths={[767, 1023, 1535, 1920]} />
      </div>
    </div>
  );
}
