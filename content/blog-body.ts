import fs from "node:fs";
import path from "node:path";
import type { Txt } from "@/lib/text";

export type BodyNode =
  | { h: 3 | 4; v: Txt }
  | { p: Txt }
  | { ul: Txt[] };

/** Typo fixes inside post bodies: [post key, live text, fixed text]. */
const bodyFixes: [string, string, string][] = [
  ["sulama", "Yönetemi", "Yöntemi"],
  ["yenilenebilir", "olur.Dünyada", "olur. Dünyada"],
];

const isBullet = (l: string) => l.startsWith("· ") || l.startsWith("· ");

function apply(key: string, line: string): Txt {
  for (const [k, from, to] of bodyFixes) {
    if (k === key && line.includes(from)) {
      return { t: line.replace(from, to), fixed: `${from} → ${to}` };
    }
  }
  return line;
}

/** Parses a post body text file into headings, paragraphs and lists. */
export function postBody(key: string): BodyNode[] {
  const raw = fs.readFileSync(path.join(process.cwd(), "content", "blog", `${key}.txt`), "utf8");
  const nodes: BodyNode[] = [];
  let bullets: Txt[] | null = null;
  const flush = () => {
    if (bullets) nodes.push({ ul: bullets });
    bullets = null;
  };

  for (const block of raw.replace(/\r/g, "").split(/\n\s*\n/)) {
    // Merge hard-wrapped lines (a line starting lowercase continues the previous one).
    const lines: string[] = [];
    for (const l of block.split("\n").map((s) => s.trim()).filter(Boolean)) {
      if (lines.length && /^[a-zçğıöşü]/.test(l)) lines[lines.length - 1] += " " + l;
      else lines.push(l);
    }
    if (!lines.length) continue;

    if (lines.every(isBullet)) {
      bullets ??= [];
      for (const l of lines) bullets.push(apply(key, l.slice(2)));
      continue;
    }
    flush();

    if (lines.length >= 3 && lines.every((l) => l.length < 70)) {
      nodes.push({ ul: lines.map((l) => apply(key, l)) });
      continue;
    }
    for (const l of lines) {
      const num = l.match(/^(\d+(?:\.\d+)+)\.?\s/);
      if (num && l.length < 110) nodes.push({ h: num[1].split(".").length > 2 ? 4 : 3, v: apply(key, l) });
      else if (l.length < 80 && l.endsWith("?")) nodes.push({ h: 3, v: apply(key, l) });
      else nodes.push({ p: apply(key, l) });
    }
  }
  flush();
  return nodes;
}

