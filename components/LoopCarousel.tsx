"use client";

import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

const COPIES = 3; // the list is rendered three times so it can loop without a visible jump

/**
 * Self-turning carousel that can also be swiped, scrolled or moved with the arrow buttons.
 * Native scroll-snap does the sliding. The middle copy is the real one: whenever the track rests in
 * the first or last copy it is moved by exactly one copy's width (same picture), so it never ends.
 * Auto-turning stops while the pointer or focus is inside, while a finger is down, when the strip is
 * off screen or the tab is hidden, and never runs with reduced motion.
 * How many items are in view and how they look is up to the CSS of `className` (`--per-view`, `--gap`).
 */
export function LoopCarousel({
  items,
  label,
  className,
  prevLabel,
  nextLabel,
  dwell = 3400,
}: {
  items: ReactNode[];
  label: string;
  className?: string;
  prevLabel: string;
  nextLabel: string;
  dwell?: number;
}) {
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
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(box);
    const timer = window.setInterval(() => {
      if (!held && visible && !document.hidden) step(1);
    }, dwell);

    // A touch that ends keeps the strip still for one more dwell so the visitor can look.
    let resume = 0;
    const touchEnd = () => {
      clearTimeout(resume);
      resume = window.setTimeout(() => (held = false), dwell);
    };
    const enter = (e: PointerEvent) => e.pointerType === "mouse" && (held = true);
    const leave = (e: PointerEvent) => e.pointerType === "mouse" && (held = false);
    const hold = () => (held = true);
    const free = () => (held = false);
    box.addEventListener("pointerenter", enter);
    box.addEventListener("pointerleave", leave);
    box.addEventListener("focusin", hold);
    box.addEventListener("focusout", free);
    box.addEventListener("touchstart", hold, { passive: true });
    box.addEventListener("touchend", touchEnd, { passive: true });
    box.addEventListener("touchcancel", touchEnd, { passive: true });
    return () => {
      clearInterval(timer);
      clearTimeout(resume);
      io.disconnect();
      box.removeEventListener("pointerenter", enter);
      box.removeEventListener("pointerleave", leave);
      box.removeEventListener("focusin", hold);
      box.removeEventListener("focusout", free);
      box.removeEventListener("touchstart", hold);
      box.removeEventListener("touchend", touchEnd);
      box.removeEventListener("touchcancel", touchEnd);
    };
  }, [dwell]);

  return (
    <div className={`loop ${className ?? ""}`} role="region" aria-roledescription="carousel" aria-label={label}>
      <ul className="loop__list" ref={track}>
        {Array.from({ length: COPIES }, (_, c) =>
          items.map((item, i) => (
            <li key={`${c}-${i}`} aria-hidden={c === 1 ? undefined : true}>
              {item}
            </li>
          )),
        ).flat()}
      </ul>
      <div className="loop__nav">
        <button type="button" onClick={() => step(-1)} aria-label={prevLabel}>
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="m15 5-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" onClick={() => step(1)} aria-label={nextLabel}>
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
