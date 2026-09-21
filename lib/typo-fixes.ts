import { blogTemplate } from "@/content/blog-template";
import { postBody } from "@/content/blog-body";
import { posts } from "@/content/blog-posts";
import { home } from "@/content/home";
import { pages } from "@/content/pages";
import { hr } from "@/content/pages/hr";
import { href, navGroups, slugs } from "@/lib/site";

/** Every typo fix recorded in the content ({ t, fixed }), collected for the /duzeltmeler gallery. */
export type Excerpt = { pre: string; mid: string; post: string };
export type Fix = {
  where: string;
  href?: string;
  issue: string;
  before: Excerpt;
  after: Excerpt;
  visible: boolean;
};

const ISSUE: Record<string, string> = {
  Similasyonu: "YAZ-02",
  Kordinatlı: "YAZ-02",
  Alısveriş: "YAZ-03",
  "almak almak": "YAZ-04",
  Uygulamalar: "NAV-03",
  HİZİMETLERİMİZ: "YAZ-05",
  tesfiye: "YAZ-05",
  sarj: "YAZ-05",
};

type Raw = { t: string; fixed: string };

function walk(node: unknown, out: Raw[]) {
  if (Array.isArray(node)) node.forEach((n) => walk(n, out));
  else if (node && typeof node === "object") {
    const o = node as Record<string, unknown>;
    if (typeof o.t === "string" && typeof o.fixed === "string") out.push({ t: o.t, fixed: o.fixed });
    else Object.values(o).forEach((v) => walk(v, out));
  }
}

const WINDOW = 70;

function excerpt(text: string, needle: string, idx: number): Excerpt {
  let start = Math.max(0, idx - WINDOW);
  let end = Math.min(text.length, idx + needle.length + WINDOW);
  if (start > 0) start = text.indexOf(" ", start) + 1 || start;
  if (end < text.length) end = text.lastIndexOf(" ", end) > idx ? text.lastIndexOf(" ", end) : end;
  return {
    pre: (start > 0 ? "… " : "") + text.slice(start, idx),
    mid: needle,
    post: text.slice(idx + needle.length, end) + (end < text.length ? " …" : ""),
  };
}

function toFix(raw: Raw, where: string, link?: string): Fix {
  const [before, after] = raw.fixed.split(" → ");
  const idx = Math.max(0, raw.t.indexOf(after));
  const wrong = raw.t.replace(after, before);
  return {
    where,
    href: link,
    issue: ISSUE[before] ?? "yeni",
    before: excerpt(wrong, before, idx),
    after: excerpt(raw.t, after, idx),
    visible: true,
  };
}

function collect(node: unknown, where: string, link?: string): Fix[] {
  const raws: Raw[] = [];
  walk(node, raws);
  return raws.map((r) => toFix(r, where, link));
}

export function allFixes(): Fix[] {
  const fixes: Fix[] = [
    ...collect(home, "Ana sayfa", "/"),
    ...collect(navGroups, "Menü (tüm sayfalar)"),
  ];
  for (const [slug, page] of Object.entries(pages)) {
    fixes.push(...collect(page, page.title.replace(" | Çakar Enerji", ""), href(slug)));
  }
  fixes.push(...collect(hr, "İnsan Kaynakları", href(slugs.hr)));
  fixes.push(...collect(blogTemplate, "Blog: EPC bloğu (liste ve 7 yazı)", "/blog-1"));
  for (const p of posts) fixes.push(...collect(postBody(p.key), `Blog: ${p.title}`, `/blog-1/f/${p.slug}`));

  fixes.push({
    where: "Sekme başlığı: Solar Otopark Uygulamaları",
    href: href(slugs.carpark),
    issue: "NAV-03",
    before: { pre: "", mid: "Solar Otopark Uygulamalar", post: " | Çakar Enerji" },
    after: { pre: "", mid: "Solar Otopark Uygulamaları", post: " | Çakar Enerji" },
    visible: false,
  });
  return fixes;
}
