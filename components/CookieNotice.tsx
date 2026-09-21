"use client";

import { useState, useSyncExternalStore } from "react";

const KEY = "cakar-cookie-accepted";
const EVENT = "cakar-cookie";

const subscribe = (cb: () => void) => {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
};
const accepted = () => {
  try {
    return localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
};

/** Live text (first HTML, Turkish), one real button. Wording and behaviour wait on Q-23 / LGL-02. */
export function CookieNotice() {
  const stored = useSyncExternalStore(subscribe, accepted, () => true);
  const [dismissed, setDismissed] = useState(false);
  if (stored || dismissed) return null;

  const accept = () => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {}
    setDismissed(true);
    window.dispatchEvent(new Event(EVENT));
  };

  return (
    <div className="cookie" role="region" aria-label="Çerez bildirimi">
      <div className="wrap cookie__inner">
        <strong className="cookie__title">Bu web sitesinde çerez kullanılır.</strong>
        <p>
          Web sitesi trafiğini analiz etmek ve web sitesi deneyiminizi optimize etmek amacıyla çerezler
          kullanıyoruz. Çerez kullanımımızı kabul ettiğinizde, verileriniz tüm diğer kullanıcı verileriyle
          birlikte derlenir.
        </p>
        <button type="button" className="btn" onClick={accept}>
          Kabul Et
        </button>
      </div>
    </div>
  );
}
