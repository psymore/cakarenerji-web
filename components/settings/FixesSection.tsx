"use client";

import { Link } from "@/components/AppLink";
import { GalleryIcon } from "@/components/icons";

/** Settings section "Yazım düzeltmeleri": link to the typo gallery (/duzeltmeler), opened inside the design being browsed. */
export function FixesSection({ panelId, onNavigate }: { panelId: string; onNavigate: () => void }) {
  const title = `${panelId}-fixes`;
  return (
    <section className="settings-menu__section" aria-labelledby={title}>
      <p className="settings-menu__title" id={title}>
        Yazım düzeltmeleri
      </p>
      <ul>
        <li>
          <Link href="/duzeltmeler" className="settings-menu__item" onClick={onNavigate}>
            <GalleryIcon className="settings-menu__icon" />
            <span>Hata galerisi</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
