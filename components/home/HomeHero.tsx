"use client";

import { useEffect, useRef } from "react";
import { home } from "@/content/home";
import { photoSrcSet, photoUrl } from "@/lib/images";
import { site } from "@/lib/site";
import { T } from "@/lib/text";

const GLOW = 420; // glow radius, px (matches .hero__glow width / 2)
const REST = [0.76, 0.3] as const; // where the sun settles, fractions of the hero
const START = [0.9, 1.15] as const; // where it rises from
const RISE_TAU = 0.9; // seconds: how slowly the sun climbs to REST on load
const FOLLOW_TAU = 0.14; // seconds: how softly it trails the pointer or finger

/**
 * Home hero: the live photo with a warm "sun" glow that rises once, then glides to wherever the
 * pointer or finger is. The glow only moves by transform. The position is eased in one rAF loop
 * (exponential smoothing), so sparse touch events still give a smooth glide, and the loop sleeps
 * when the glow has arrived. Touch uses touchmove because pointermove stops once a scroll starts;
 * the glow stays under the finger while the page scrolls.
 */
export function HomeHero() {
  const hero = useRef<HTMLElement>(null);
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = hero.current;
    const g = glow.current;
    if (!root || !g) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    const measure = () => {
      const r = root.getBoundingClientRect();
      w = r.width;
      h = r.height;
    };
    measure();

    // Current and target position (px inside the hero); `input` holds viewport coords while the visitor points.
    let cx = (reduced ? REST[0] : START[0]) * w;
    let cy = (reduced ? REST[1] : START[1]) * h;
    let tx = REST[0] * w;
    let ty = REST[1] * h;
    let input: { x: number; y: number } | null = null;
    let tau = reduced ? 0 : RISE_TAU;
    let frame = 0;
    let last = 0;

    const draw = () => g.style.setProperty("transform", `translate3d(${cx - GLOW}px,${cy - GLOW}px,0)`);
    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (input) {
        const b = root.getBoundingClientRect();
        tx = input.x - b.left;
        ty = input.y - b.top;
      }
      const k = tau > 0 ? 1 - Math.exp(-dt / tau) : 1;
      cx += (tx - cx) * k;
      cy += (ty - cy) * k;
      draw();
      // Keep running while following a finger (it may scroll under it) or while still gliding.
      frame = input || Math.hypot(tx - cx, ty - cy) > 0.5 ? requestAnimationFrame(step) : 0;
    };
    const wake = () => {
      if (frame) return;
      last = performance.now();
      frame = requestAnimationFrame(step);
    };

    const point = (x: number, y: number) => {
      input = { x, y };
      tau = FOLLOW_TAU;
      wake();
    };
    const release = () => {
      input = null;
      wake();
    };
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "touch") point(e.clientX, e.clientY);
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) point(t.clientX, t.clientY);
    };

    const ro = new ResizeObserver(() => {
      measure();
      if (!input) {
        tx = REST[0] * w;
        ty = REST[1] * h;
        wake();
      }
    });
    ro.observe(root);

    draw();
    root.classList.add("is-armed");
    wake();

    root.addEventListener("pointermove", onPointer, { passive: true });
    root.addEventListener("touchstart", onTouch, { passive: true });
    root.addEventListener("touchmove", onTouch, { passive: true });
    root.addEventListener("touchend", release, { passive: true });
    root.addEventListener("touchcancel", release, { passive: true });

    return () => {
      root.removeEventListener("pointermove", onPointer);
      root.removeEventListener("touchstart", onTouch);
      root.removeEventListener("touchmove", onTouch);
      root.removeEventListener("touchend", release);
      root.removeEventListener("touchcancel", release);
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, []);

  return (
    <section className="hero" ref={hero}>
      <div className="hero__photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoUrl("home", 1535)}
          srcSet={photoSrcSet("home")}
          sizes="max(100vw, 130svh)" /* on a phone the photo is cropped by height: ask for the width it is really drawn at */
          alt=""
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="hero__glow" ref={glow} aria-hidden />
      <div className="wrap hero__inner">
        <h1>ÇAKAR ENERJİ</h1>
        <p className="hero__tag">{site.tagline}</p>
        <div className="hero__actions">
          <a className="btn" href={`tel:${site.phone.tel}`}>
            İletişim Kurun
          </a>
          <T as="a" v={home.heroPhone} className="hero__phone" href={`tel:${site.phone.tel}`} />
        </div>
      </div>
    </section>
  );
}
