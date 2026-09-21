"use client";

import { useEffect, useRef } from "react";
import { photoSrcSet, photoUrl, type PhotoId } from "@/lib/images";

const path = (d: string) => (
  <svg viewBox="0 0 24 24" aria-hidden>
    <path d={d} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * A photo shown large over the page, with previous / next. Built on the native <dialog> (modal): it
 * traps focus, closes with Esc and puts focus back on the button that opened it. `index` null = closed.
 */
export function Lightbox({
  photos,
  index,
  onIndex,
  onClose,
  labels,
}: {
  photos: readonly PhotoId[];
  index: number | null;
  onIndex: (i: number) => void;
  onClose: () => void;
  labels: { close: string; prev: string; next: string; photo: string };
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const open = index !== null;
  const n = photos.length;

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
    document.documentElement.classList.toggle("has-lightbox", open);
    return () => document.documentElement.classList.remove("has-lightbox");
  }, [open]);

  const go = (dir: 1 | -1) => index !== null && onIndex((index + dir + n) % n);

  return (
    <dialog
      ref={dialog}
      className="lightbox"
      aria-label={labels.photo}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
    >
      {open && (
        <>
          <figure className="lightbox__figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoUrl(photos[index], 1535)}
              srcSet={photoSrcSet(photos[index], [1023, 1535, 1920])}
              sizes="100vw"
              alt=""
              referrerPolicy="no-referrer"
            />
          </figure>
          <p className="lightbox__count" aria-live="polite">
            {index + 1} / {n}
          </p>
          <button type="button" className="lightbox__btn lightbox__close" onClick={onClose} aria-label={labels.close} autoFocus>
            {path("M6 6l12 12M18 6L6 18")}
          </button>
          {n > 1 && (
            <>
              <button type="button" className="lightbox__btn lightbox__prev" onClick={() => go(-1)} aria-label={labels.prev}>
                {path("m15 5-7 7 7 7")}
              </button>
              <button type="button" className="lightbox__btn lightbox__next" onClick={() => go(1)} aria-label={labels.next}>
                {path("m9 5 7 7-7 7")}
              </button>
            </>
          )}
        </>
      )}
    </dialog>
  );
}
