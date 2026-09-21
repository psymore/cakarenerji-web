"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

const COPIES = 3; // the list is rendered three times so it can loop without a visible jump

/**
 * Self-turning carousel that can also be swiped, scrolled, moved with the arrows or the dots.
 * Native scroll-snap does the sliding; the look of the slides (peeking neighbours, parallax) is CSS
 * driven by the scroll position (see `.slider` in globals.css). The middle copy is the real one:
 * whenever the track rests in the first or last copy it is moved by exactly one copy's width (same
 * picture), so it never ends.
 * The timing is a CSS animation on the active dot (`loop-fill`): when it ends the next slide comes.
 * That makes the progress visible and lets "pause" be a plain animation-play-state. It is paused
 * (`data-held`) while the pointer or focus is inside, a finger is down, the strip is off screen or the
 * tab is hidden, or while the parent says so (`paused`, e.g. a picture is enlarged), and does not exist with
 * reduced motion. A button lets the visitor stop and restart it for good.
 */
export function LoopCarousel({
  items,
  label,
  className,
  prevLabel,
  nextLabel,
  dotLabel,
  dwell = 4500,
  pauseLabel,
  playLabel,
  paused = false,
  onZoom,
  zoomLabel,
}: {
  items: ReactNode[];
  label: string;
  className?: string;
  prevLabel: string;
  nextLabel: string;
  /** Prefix of the dot buttons' names: "Fotoğraf" gives "Fotoğraf 3". */
  dotLabel: string;
  dwell?: number;
  /** Names of the stop / restart button (it is one button that swaps). */
  pauseLabel: string;
  playLabel: string;
  /** Held from outside, e.g. while a picture is shown enlarged. */
  paused?: boolean;
  /** When given, every slide gets a "zoom" button that calls this with the slide's index. */
  onZoom?: (index: number) => void;
  zoomLabel?: string;
}) {
  const box = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [stopped, setStopped] = useState(false);
  const holdRef = useRef<((key: string, on: boolean) => void) | null>(null);
  const n = items.length;

  // Layout positions (offsetLeft), not getBoundingClientRect: the slides are scaled by scroll-driven animations.
  const slideSize = () => {
    const el = track.current!;
    return (el.children[1] as HTMLElement).offsetLeft - (el.children[0] as HTMLElement).offsetLeft;
  };
  const setWidth = () => {
    const el = track.current!;
    return (el.children[n] as HTMLElement).offsetLeft - (el.children[0] as HTMLElement).offsetLeft;
  };
  const step = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * slideSize(), behavior: "smooth" });
  const goTo = (i: number) => {
    const el = track.current!;
    el.scrollTo({ left: setWidth() + i * slideSize(), behavior: "smooth" });
  };

  // Start on the middle copy, keep the track in it, and follow which slide is in front.
  useLayoutEffect(() => {
    const el = track.current;
    if (!el) return;
    el.scrollLeft = setWidth();

    let idle = 0;
    let frame = 0;
    const recentre = () => {
      const w = setWidth();
      if (el.scrollLeft < w * 0.5) el.scrollLeft += w;
      else if (el.scrollLeft > w * 1.5) el.scrollLeft -= w;
    };
    const onScroll = () => {
      clearTimeout(idle);
      idle = window.setTimeout(recentre, 140);
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const i = Math.round((el.scrollLeft - setWidth()) / slideSize());
        setIndex(((i % n) + n) % n);
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    const ro = new ResizeObserver(() => (el.scrollLeft = setWidth()));
    ro.observe(el);
    return () => {
      clearTimeout(idle);
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  // Pausing: set on the element (no re-render); CSS reads it.
  useEffect(() => {
    const root = box.current;
    if (!root) return;
    const holds = new Set<string>();
    const hold = (key: string, on: boolean) => {
      if (on) holds.add(key);
      else holds.delete(key);
      root.dataset.held = String(holds.size > 0);
    };
    holdRef.current = hold;
    hold("offscreen", true);
    const io = new IntersectionObserver(([e]) => hold("offscreen", !e.isIntersecting));
    io.observe(root);
    const tab = () => hold("hidden", document.hidden);
    const enter = (e: PointerEvent) => e.pointerType === "mouse" && hold("pointer", true);
    const leave = (e: PointerEvent) => e.pointerType === "mouse" && hold("pointer", false);
    const touchOn = () => hold("touch", true);
    const touchOff = () => hold("touch", false);
    // Only keyboard focus holds it: after a click on the stop/restart button the carousel must run again.
    const focusOn = (e: FocusEvent) => hold("focus", (e.target as HTMLElement).matches(":focus-visible"));
    const focusOff = () => hold("focus", false);
    // The dot's animation ended: time for the next slide.
    const onEnd = (e: AnimationEvent) => e.animationName === "loop-fill" && step(1);
    root.addEventListener("pointerenter", enter);
    root.addEventListener("pointerleave", leave);
    root.addEventListener("focusin", focusOn);
    root.addEventListener("focusout", focusOff);
    root.addEventListener("touchstart", touchOn, { passive: true });
    root.addEventListener("touchend", touchOff, { passive: true });
    root.addEventListener("touchcancel", touchOff, { passive: true });
    root.addEventListener("animationend", onEnd);
    document.addEventListener("visibilitychange", tab);
    return () => {
      holdRef.current = null;
      io.disconnect();
      root.removeEventListener("pointerenter", enter);
      root.removeEventListener("pointerleave", leave);
      root.removeEventListener("focusin", focusOn);
      root.removeEventListener("focusout", focusOff);
      root.removeEventListener("touchstart", touchOn);
      root.removeEventListener("touchend", touchOff);
      root.removeEventListener("touchcancel", touchOff);
      root.removeEventListener("animationend", onEnd);
      document.removeEventListener("visibilitychange", tab);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => holdRef.current?.("parent", paused), [paused]);
  useEffect(() => holdRef.current?.("user", stopped), [stopped]);

  return (
    <div
      ref={box}
      className={`loop ${className ?? ""}`}
      style={{ "--dwell": `${dwell}ms` } as CSSProperties}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <ul className="loop__list" ref={track}>
        {Array.from({ length: COPIES }, (_, c) =>
          items.map((item, i) => (
            <li key={`${c}-${i}`} aria-hidden={c === 1 ? undefined : true}>
              {item}
              {onZoom && (
                <button
                  type="button"
                  className="loop__zoom"
                  onClick={() => onZoom(i)}
                  aria-label={`${zoomLabel} ${i + 1}`}
                  tabIndex={c === 1 ? undefined : -1}
                >
                  <svg viewBox="0 0 24 24" aria-hidden>
                    <path
                      d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </li>
          )),
        ).flat()}
      </ul>
      <div className="loop__nav">
        <button type="button" className="loop__arrow" onClick={() => step(-1)} aria-label={prevLabel}>
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="m15 5-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="loop__dots">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className="loop__dot"
              aria-label={`${dotLabel} ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <button type="button" className="loop__arrow" onClick={() => step(1)} aria-label={nextLabel}>
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          className="loop__arrow loop__pause"
          onClick={() => setStopped((v) => !v)}
          aria-label={stopped ? playLabel : pauseLabel}
        >
          <svg viewBox="0 0 24 24" aria-hidden>
            {stopped ? (
              <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
            ) : (
              <path d="M8 5v14M16 5v14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}
