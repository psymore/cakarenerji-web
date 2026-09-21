import { Link } from "@/components/AppLink";
import { Photo } from "@/components/Photo";

/**
 * Typographic stand-in for the live logo image (original not available, TD-01 / Q-14).
 * `image` shows the live logo instead (header and footer). It is light on transparent, so on light
 * themes the header gives it a dark chip (see `.logo--image` in globals.css).
 */
export function Logo({ image }: { image?: boolean }) {
  if (image) {
    return (
      <Link href="/" className="logo logo--image" aria-label="ÇAKAR ENERJİ, Ana Sayfa">
        <Photo id="logo" sizes="240px" widths={[274, 548, 822]} />
      </Link>
    );
  }
  return (
    <Link href="/" className="logo" aria-label="ÇAKAR ENERJİ, Ana Sayfa">
      <svg viewBox="0 0 40 40" aria-hidden>
        <rect x="1.5" y="1.5" width="37" height="37" rx="4" style={{ fill: "var(--panel)" }} />
        <path
          d="M14 2v36M26 2v36M2 14h36M2 26h36"
          style={{ stroke: "var(--silver)" }}
          strokeOpacity=".35"
          strokeWidth="1"
        />
        <circle cx="26" cy="14" r="7.5" style={{ fill: "var(--sun)" }} />
      </svg>
      <span className="logo__word">
        <b>Çakar</b>
        <span>Enerji</span>
      </span>
    </Link>
  );
}
