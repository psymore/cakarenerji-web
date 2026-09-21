"use client";

import { Link } from "@/components/AppLink";
import { GalleryIcon } from "@/components/icons";

/** Header link to the typo gallery (/duzeltmeler). Uses the design-aware Link, so it opens inside the design being browsed. */
export function GalleryLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/duzeltmeler"
      className={`gallery-link ${className}`.trim()}
      aria-label="Yazım düzeltmeleri galerisi"
      title="Yazım düzeltmeleri galerisi"
    >
      <GalleryIcon />
    </Link>
  );
}
