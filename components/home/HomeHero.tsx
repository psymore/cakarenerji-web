"use client";

import { useEffect, useRef } from "react";
import { home } from "@/content/home";
import { photoSrcSet, photoUrl } from "@/lib/images";
import { site } from "@/lib/site";
import { T } from "@/lib/text";

const GLOW = 420; // glow radius, px (matches .hero__glow width / 2)
const SPOT = 300; // lit-grid radius, px (matches .hero__lit width / 2)
const REST = [0.76, 0.62] as const; // where the sun settles, fractions of the hero
const START = [0.08, 1.12] as const; // where it rises from
const RISE_MS = 3200;
const RISE_EASE = "cubic-bezier(0.22, 0.8, 0.24, 1)";

/**
 * Home hero: a PV cell field lit by a "sun" that rises once, then follows the pointer.
 * The sun only ever moves by transform (compositor), never by changing a mask or CSS variable,
 * so pointer moves cost no style recalc and no repaint. The lit grid is a fixed-size masked
 * window that moves with the sun while its inner plane moves the opposite way, so the grid stays put.
 */
export function HomeHero() {
  const hero = useRef<HTMLElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  const spot = useRef<HTMLDivElement>(null);
  const plane = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = hero.current;
    const g = glow.current;
    const s = spot.current;
    const p = plane.current;
    if (!root || !g || !s || !p) return;

    let w = 0;
    let h = 0;
    let fx: number = REST[0];
    let fy: number = REST[1];
    let rise: Animation[] = [];
    let frame = 0;

    const tf = (x: number, y: number) => ({
      glow: `translate3d(${x - GLOW}px,${y - GLOW}px,0)`,
      spot: `translate3d(${x - SPOT}px,${y - SPOT}px,0)`,
      plane: `translate3d(${SPOT - x}px,${SPOT - y}px,0)`,
    });
    const place = (x: number, y: number) => {
      const t = tf(x, y);
      g.style.transform = t.glow;
      s.style.transform = t.spot;
      p.style.transform = t.plane;
    };
    const settle = () => place(fx * w, fy * h);
    const stopRise = () => {
      rise.forEach((a) => a.cancel());
      rise = [];
    };

    const ro = new ResizeObserver(([entry]) => {
      w = entry.contentRect.width;
      h = entry.contentRect.height;
      p.style.width = `${w}px`;
      p.style.height = `${h}px`;
      if (!rise.length) settle();
    });
    ro.observe(root);
    const r = root.getBoundingClientRect();
    w = r.width;
    h = r.height;
    p.style.width = `${w}px`;
    p.style.height = `${h}px`;

    settle();
    root.classList.add("is-armed");

    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const from = tf(START[0] * w, START[1] * h);
      const to = tf(REST[0] * w, REST[1] * h);
      const opts = { duration: RISE_MS, easing: RISE_EASE, fill: "forwards" as const };
      rise = [
        g.animate([{ transform: from.glow }, { transform: to.glow }], opts),
        s.animate([{ transform: from.spot }, { transform: to.spot }], opts),
        p.animate([{ transform: from.plane }, { transform: to.plane }], opts),
      ];
      rise[0].finished.then(stopRise, () => {});
    }

    let px = 0;
    let py = 0;
    const flush = () => {
      frame = 0;
      place(px, py);
    };
    const onMove = (e: PointerEvent) => {
      const b = root.getBoundingClientRect();
      px = e.clientX - b.left;
      py = e.clientY - b.top;
      fx = px / b.width;
      fy = py / b.height;
      if (rise.length) stopRise();
      if (!frame) frame = requestAnimationFrame(flush);
    };
    root.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      root.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
      stopRise();
      ro.disconnect();
    };
  }, []);

  return (
    <section className="hero" ref={hero}>
      <picture className="hero__photo">
        <source media="(max-width: 450px)" srcSet={photoSrcSet("homeSmall", [450])} />
        <img
          src={photoUrl("home", 1535)}
          srcSet={photoSrcSet("home")}
          sizes="100vw"
          alt=""
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      </picture>
      <div className="hero__glow" ref={glow} aria-hidden />
      <div className="hero__field" aria-hidden>
        <div className="plane plane--dim" />
        <div className="hero__lit" ref={spot}>
          <div className="hero__lit-plane" ref={plane}>
            <div className="plane plane--lit" />
          </div>
        </div>
      </div>
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
