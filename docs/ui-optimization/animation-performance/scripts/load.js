const { chromium } = require("playwright-core");
const V = { current: "", "no-sunrise-anim": ".hero{animation:none!important}", "no-anim-no-lit": ".hero{animation:none!important}.hero__lit,.hero__glow{display:none!important}" };
(async () => {
  const b = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: false });
  const rows = [];
  for (const [n, css] of Object.entries(V)) for (const [vw, vh, dpr, thr] of [[390, 844, 3, 4], [1440, 900, 1, 4]]) {
    const ctx = await b.newContext({ viewport: { width: vw, height: vh }, deviceScaleFactor: dpr, isMobile: vw < 500, hasTouch: vw < 500 });
    const p = await ctx.newPage(); const c = await ctx.newCDPSession(p);
    await c.send("Emulation.setCPUThrottlingRate", { rate: thr }); await c.send("Performance.enable");
    await p.addInitScript((css) => { document.addEventListener("DOMContentLoaded", () => { const s = document.createElement("style"); s.textContent = css; document.head.appendChild(s); }); window.__f = []; let l = performance.now(); const t = (x) => { window.__f.push(x - l); l = x; requestAnimationFrame(t); }; requestAnimationFrame(t); }, css);
    await p.goto("http://localhost:3100/", { waitUntil: "load" });
    const t0 = Date.now(); await p.waitForTimeout(4500);
    const m = Object.fromEntries((await c.send("Performance.getMetrics")).metrics.map((x) => [x.name, x.value]));
    const f = await p.evaluate(() => window.__f.slice(1)); const slow = f.filter((x) => x > 33).length;
    rows.push({ variant: n, vp: `${vw}x${vh}@${dpr} ${thr}x`, styleMs: Math.round(m.RecalcStyleDuration * 1000), styleCount: m.RecalcStyleCount, taskMs: Math.round(m.TaskDuration * 1000), frames: f.length, slowFrames: slow, maxFrame: Math.round(Math.max(...f)) });
    await ctx.close();
  }
  console.table(rows); await b.close();
})();
