import { Link } from "@/components/AppLink";

/** Typographic stand-in for the live logo image (original not available, TD-01 / Q-14). */
export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="ÇAKAR ENERJİ, Ana Sayfa">
      <svg viewBox="0 0 40 40" aria-hidden>
        <rect x="1.5" y="1.5" width="37" height="37" rx="4" style={{ fill: "var(--panel)" }} />
        <path
          d="M14 2v36M26 2v36M2 14h36M2 26h36"
          stroke="#c9d6dc"
          strokeOpacity=".35"
          strokeWidth="1"
        />
        <circle cx="26" cy="14" r="7.5" fill="#d9a03c" />
      </svg>
      <span className="logo__word">
        <b>Çakar</b>
        <span>Enerji</span>
      </span>
    </Link>
  );
}
