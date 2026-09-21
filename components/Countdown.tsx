"use client";

import { useEffect, useState } from "react";

/**
 * Target is derived from the live capture (131 days 02:44:26 left at 2026-09-21 16:15:53 +03:00).
 * The live site's real target date and purpose are unknown (BRK-02, Q-07): approximate.
 */
const TARGET = new Date("2027-01-30T19:00:19+03:00").getTime();

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown() {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, TARGET - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const s = left === null ? null : Math.floor(left / 1000);
  const parts: [string, string][] = [
    [s === null ? "00" : pad(Math.floor(s / 86400)), "Gün"],
    [s === null ? "00" : pad(Math.floor((s % 86400) / 3600)), "Saat"],
    [s === null ? "00" : pad(Math.floor((s % 3600) / 60)), "Dakika"],
    [s === null ? "00" : pad(s % 60), "Saniye"],
  ];

  return (
    <div className="countdown" role="timer" aria-live="off">
      {parts.map(([n, l]) => (
        <div key={l}>
          <b>{n}</b>
          <span>{l}</span>
        </div>
      ))}
    </div>
  );
}
