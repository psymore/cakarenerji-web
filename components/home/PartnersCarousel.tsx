"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { Photo } from "@/components/Photo";
import type { PhotoId } from "@/lib/images";

type Partner = { id: PhotoId; alt: string };

const COPIES = 3; // the list is rendered three times so it can loop without a visible jump
const DWELL_MS = 3400;

/**
 * Partner logos as a carousel: turns by itself, and can be swiped, dragged with the arrows or scrolled.
 * Native scroll-snap does the sliding. The middle copy is the real one: whenever the track rests in
 * the first or last copy it is moved by exactly one copy's width (same picture), so it never ends.
 * Auto-turning stops while the pointer or focus is inside, while a finger is down, when the strip is
 * off screen or the tab is hidden, and never runs with reduced motion.
 */
export function PartnersCarousel({ items }: { items: Partner[] }) {
  const track = useRef<HTMLUListElement>(null);
  const n = items.length;

  useLayoutEffect(() => {
    const el = track.current;
    if (!el) return;
    const setWidth = () => el.children[n].getBoundingClientRect().left - el.children[0].getBoundingClientRect().left;
    el.scrollLeft = setWidth();

    let idle = 0;
    const recentre = () => {
      const w = setWidth();
      if (el.scrollLeft < w * 0.5) el.scrollLeft += w;
      else if (el.scrollLeft > w * 1.5) el.scrollLeft -= w;
    };
    const onScroll = () => {
      clearTimeout(idle);
      idle = window.setTimeout(recentre, 140);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(() => (el.scrollLeft = setWidth()));
    ro.observe(el);
    return () => {
      clearTimeout(idle);
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [n]);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const size = el.children[1].getBoundingClientRect().left - el.children[0].getBoundingClientRect().left;
    el.scrollBy({ left: dir * size, behavior: "smooth" });
  };

  useEffect(() => {
    const el = track.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = el.parentElement as HTMLElement;
    let held = false; // pointer, focus or finger inside
    let visible = false;
    const hold = (v: boolean) => () => (held = v);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(box);
    const timer = window.setInterval(() => {
      if (!held && visible && !document.hidden) step(1);
    }, DWELL_MS);

    const on = hold(true);
    const off = hold(false);
    // A touch that ends keeps the strip still for one more dwell so the visitor can look.
    let resume = 0;
    const touchEnd = () => {
      clearTimeout(resume);
      resume = window.setTimeout(off, DWELL_MS);
    };
    box.addEventListener("pointerenter", (e) => e.pointerType === "mouse" && on());
    box.addEventListener("pointerleave", (e) => e.pointerType === "mouse" && off());
    box.addEventListener("focusin", on);
    box.addEventListener("focusout", off);
    box.addEventListener("touchstart", on, { passive: true });
    box.addEventListener("touchend", touchEnd, { passive: true });
    box.addEventListener("touchcancel", touchEnd, { passive: true });
    return () => {
      clearInterval(timer);
      clearTimeout(resume);
      io.disconnect();
    };
  }, []);

  return (
    <div className="partners__box" role="region" aria-roledescription="carousel" aria-label="İş ortakları">
      <ul className="partners__list" ref={track}>
        {Array.from({ length: COPIES }, (_, c) =>
          items.map((p) => (
            <li key={`${c}-${p.id}`} aria-hidden={c === 1 ? undefined : true}>
              <Photo id={p.id} alt={c === 1 ? p.alt : ""} sizes="200px" widths={[285, 570]} />
            </li>
          )),
        ).flat()}
      </ul>
      <div className="partners__nav">
        <button type="button" onClick={() => step(-1)} aria-label="Önceki logolar">
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="m15 5-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Sonraki logolar">
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
