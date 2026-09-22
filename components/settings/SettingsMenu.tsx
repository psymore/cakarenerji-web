"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { DesignSection } from "@/components/settings/DesignSection";
import { FixesSection } from "@/components/settings/FixesSection";
import { LayoutSection } from "@/components/settings/LayoutSection";
import { ThemeSection } from "@/components/settings/ThemeSection";
import { SettingsIcon } from "@/components/icons";
import { applyHomeLayout, resolveHomeLayout } from "@/lib/home-layout";
import { applyTheme, resolveTheme } from "@/lib/theme";

/**
 * Header settings button. Opens one panel with four titled sections: theme, home page layout, design (1 / 2)
 * and the typo gallery. It is small enough to fit a phone screen without scrolling. The sections live in their own files; this one only owns open/close and focus.
 */
export function SettingsMenu() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  // Dev Strict Mode remounts <html> and clears the attributes the inline script set; put them back. No-op in production.
  useLayoutEffect(() => {
    applyTheme(resolveTheme());
    applyHomeLayout(resolveHomeLayout());
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      button.current?.focus();
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="settings-menu" ref={root}>
      <button
        ref={button}
        type="button"
        className="settings-toggle"
        aria-label="Ayarlar"
        title="Ayarlar: tema, ana sayfa düzeni, tasarım, yazım düzeltmeleri"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        <SettingsIcon />
      </button>
      <div className="settings-menu__panel" id={panelId} hidden={!open}>
        <ThemeSection panelId={panelId} onPick={() => { close(); button.current?.focus(); }} />
        <LayoutSection panelId={panelId} onPick={() => { close(); button.current?.focus(); }} />
        <DesignSection panelId={panelId} onNavigate={close} />
        <FixesSection panelId={panelId} onNavigate={close} />
      </div>
    </div>
  );
}
