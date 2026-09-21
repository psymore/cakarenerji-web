"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Link, stripBase } from "@/components/AppLink";
import { Chevron, CloseIcon, MenuIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navGroups, navHome, navTail, type NavItem } from "@/lib/site";
import { T } from "@/lib/text";

function Item({ item, path }: { item: NavItem; path: string }) {
  const current = decodeURIComponent(path) === decodeURIComponent(item.href);
  return (
    <Link href={item.href} aria-current={current ? "page" : undefined}>
      <T as="span" v={item.label} />
    </Link>
  );
}

export function SiteHeader() {
  const rawPath = usePathname();
  const path = stripBase(rawPath);
  const [open, setOpen] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close menus on navigation (state reset during render, not in an effect).
  const [lastPath, setLastPath] = useState(rawPath);
  if (lastPath !== rawPath) {
    setLastPath(rawPath);
    setOpen(null);
    setDrawer(false);
  }

  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setDrawer(false);
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="wrap site-header__bar">
        <Logo />

        <nav className="nav" aria-label="Ana menü" ref={navRef}>
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" href={navHome.href} aria-current={path === "/" ? "page" : undefined}>
                {navHome.label as string}
              </Link>
            </li>
            {navGroups.map((g) => (
              <li className="nav__item" key={g.label} data-open={open === g.label}>
                <button
                  type="button"
                  className="nav__btn"
                  aria-expanded={open === g.label}
                  aria-controls={`menu-${g.label}`}
                  onClick={() => setOpen(open === g.label ? null : g.label)}
                >
                  {g.label}
                  <Chevron />
                </button>
                <div className="nav__menu" id={`menu-${g.label}`}>
                  {g.items.map((it) => (
                    <Item key={it.href} item={it} path={path} />
                  ))}
                </div>
              </li>
            ))}
            {navTail.map((it) => (
              <li className="nav__item" key={it.href}>
                <Link
                  className="nav__link"
                  href={it.href}
                  aria-current={decodeURIComponent(path) === decodeURIComponent(it.href) ? "page" : undefined}
                >
                  {it.label as string}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__tools">
          <ThemeToggle />
          <button
            type="button"
            className="burger"
            aria-expanded={drawer}
            aria-controls="drawer"
            aria-label={drawer ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setDrawer(!drawer)}
          >
            {drawer ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div className="drawer" id="drawer" data-open={drawer}>
        <nav className="wrap drawer__inner" aria-label="Mobil menü">
          <Link href={navHome.href}>{navHome.label as string}</Link>
          {navGroups.map((g) => (
            <div key={g.label}>
              <p className="drawer__group">{g.label}</p>
              {g.items.map((it) => (
                <Item key={it.href} item={it} path={path} />
              ))}
            </div>
          ))}
          <div className="drawer__tail">
            {navTail.map((it) => (
              <Link key={it.href} href={it.href}>
                {it.label as string}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
