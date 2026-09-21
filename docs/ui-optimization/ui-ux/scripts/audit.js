const { chromium } = require("playwright-core");
const fs = require("fs");
const axeSrc = fs.readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const BASE = "http://localhost:3100";
const routes = JSON.parse(fs.readFileSync("routes.json", "utf8"));

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true });
  const out = { axe: {}, overflow: [], small: {}, headings: {}, misc: {}, focus: {} };
  for (const [vw, vh, tag] of [[1440, 900, "d"], [768, 1024, "t"], [390, 844, "m"], [320, 640, "s"]]) {
    const ctx = await browser.newContext({ viewport: { width: vw, height: vh } });
    const page = await ctx.newPage();
    for (const r of routes) {
      await page.goto(BASE + r, { waitUntil: "load" });
      await page.waitForTimeout(300);
      const info = await page.evaluate(() => {
        const de = document.documentElement;
        const over = de.scrollWidth - de.clientWidth;
        // small tap targets (interactive, visible)
        const small = [...document.querySelectorAll("a,button,input,select,textarea,summary")].filter((e) => {
          const b = e.getBoundingClientRect();
          const cs = getComputedStyle(e);
          return b.width > 0 && b.height > 0 && cs.visibility !== "hidden" && (b.height < 44 || b.width < 44) && !(e.tagName === "A" && e.closest("p,li") && b.height < 44 && e.closest("p"));
        }).map((e) => `${e.tagName.toLowerCase()}:${(e.textContent || e.getAttribute("aria-label") || "").trim().slice(0, 28)}:${Math.round(e.getBoundingClientRect().width)}x${Math.round(e.getBoundingClientRect().height)}`);
        const hs = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].map((h) => +h.tagName[1]);
        const jumps = hs.some((h, i) => i && h - hs[i - 1] > 1);
        const imgsNoAlt = [...document.querySelectorAll("img:not([alt])")].length;
        const iframes = document.querySelectorAll("iframe").length;
        const fs12 = [...document.querySelectorAll("body *")].filter((e) => e.children.length === 0 && e.textContent.trim() && parseFloat(getComputedStyle(e).fontSize) < 12).length;
        return { over, small, h1: hs.filter((h) => h === 1).length, jumps, hs: hs.join(""), imgsNoAlt, iframes, fs12, title: document.title, lang: de.lang, hasMain: !!document.querySelector("main"), skip: !!document.querySelector('a[href="#main"],a[href="#icerik"],.skip') };
      });
      if (info.over > 0) out.overflow.push(`${tag} ${r} +${info.over}px`);
      out.small[`${tag} ${r}`] = info.small.length;
      if (tag === "d" || tag === "m") out.small[`${tag} ${r} list`] = info.small.slice(0, 12);
      if (tag === "d") out.headings[r] = { h1: info.h1, jumps: info.jumps, seq: info.hs.slice(0, 40), title: info.title, lang: info.lang, main: info.hasMain, skip: info.skip, iframes: info.iframes, fs12: info.fs12 };
      if (tag === "d" || tag === "m") {
        await page.evaluate(axeSrc);
        const res = await page.evaluate(() => axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa", "best-practice"] } }).then((r) => r.violations.map((v) => ({ id: v.id, impact: v.impact, n: v.nodes.length, sample: v.nodes.slice(0, 2).map((n) => n.target.join(" ") + " | " + (n.failureSummary || "").split("\n")[1]) }))));
        out.axe[`${tag} ${r}`] = res;
      }
    }
    await ctx.close();
  }
  fs.writeFileSync("audit.json", JSON.stringify(out, null, 1));
  // summarize
  const agg = {};
  for (const [k, v] of Object.entries(out.axe)) for (const x of v) { (agg[x.id] ||= { impact: x.impact, pages: new Set(), nodes: 0, sample: x.sample[0] }); agg[x.id].pages.add(k); agg[x.id].nodes += x.n; }
  console.log("AXE violations aggregate:");
  for (const [id, a] of Object.entries(agg)) console.log(` ${id} [${a.impact}] pages=${a.pages.size} nodes=${a.nodes}\n    ${a.sample}`);
  console.log("\nOVERFLOW:", out.overflow.length ? out.overflow : "none");
  console.log("\nHEADINGS/meta (desktop):");
  for (const [r, h] of Object.entries(out.headings)) console.log(` ${decodeURI(r)} h1=${h.h1} jumps=${h.jumps} main=${h.main} skip=${h.skip} iframes=${h.iframes} fs<12=${h.fs12} title="${h.title}" seq=${h.seq}`);
  await browser.close();
})();
