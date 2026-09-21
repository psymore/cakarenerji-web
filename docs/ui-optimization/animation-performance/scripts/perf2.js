const { chromium } = require("playwright-core");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const URL = "http://localhost:3100/";

const variants = {
  current: "",
  "no-lit-mask": ".hero__lit{-webkit-mask-image:none!important;mask-image:none!important}",
  "no-glow": ".hero__glow{display:none!important}",
  "no-mask-no-glow": ".hero__lit{-webkit-mask-image:none!important;mask-image:none!important}.hero__glow{display:none!important}",
  "no-lit-at-all": ".hero__lit,.hero__glow{display:none!important}",
};

async function run(browser, name, css, throttle, w, h) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: global.DPR||1 });
  const page = await ctx.newPage();
  const cdp = await ctx.newCDPSession(page);
  await page.goto(URL, { waitUntil: "load" });
  if (css) await page.addStyleTag({ content: css });
  await page.waitForTimeout(3800); // sunrise done
  if (throttle > 1) await cdp.send("Emulation.setCPUThrottlingRate", { rate: throttle });
  await cdp.send("Performance.enable");
  await page.evaluate(() => {
    window.__d = [];
    let last = performance.now();
    const tick = (t) => { window.__d.push(t - last); last = t; window.__raf = requestAnimationFrame(tick); };
    window.__raf = requestAnimationFrame(tick);
  });
  const m = async () => Object.fromEntries((await cdp.send("Performance.getMetrics")).metrics.map((x) => [x.name, x.value]));
  const a = await m();
  // sweep pointer in the hero: ~3s, 1000Hz-ish bursts like a gaming mouse (steps every ~4ms)
  const t0 = Date.now();
  let i = 0;
  while (Date.now() - t0 < 3000) {
    const p = (Date.now() - t0) / 3000;
    const x = w * (0.1 + 0.8 * (0.5 + 0.5 * Math.sin(p * 12)));
    const y = h * (0.25 + 0.5 * (0.5 + 0.5 * Math.cos(p * 9)));
    await page.mouse.move(x, y);
    i++;
    await page.waitForTimeout(4);
  }
  const b = await m();
  const d = await page.evaluate(() => { cancelAnimationFrame(window.__raf); return window.__d.slice(2); });
  d.sort((x, y) => x - y);
  const q = (p) => d[Math.min(d.length - 1, Math.floor(d.length * p))];
  const avg = d.reduce((s, x) => s + x, 0) / d.length;
  const dropped = d.filter((x) => x > 25).length;
  const out = {
    name, throttle, viewport: `${w}x${h}`, moves: i, frames: d.length,
    fps: +(1000 / avg).toFixed(1), p50: +q(0.5).toFixed(1), p95: +q(0.95).toFixed(1), p99: +q(0.99).toFixed(1), max: +d[d.length - 1].toFixed(1), slow_gt25ms: dropped,
    recalcStyle: b.RecalcStyleCount - a.RecalcStyleCount, layout: b.LayoutCount - a.LayoutCount,
    styleMs: +((b.RecalcStyleDuration - a.RecalcStyleDuration) * 1000).toFixed(0),
    layoutMs: +((b.LayoutDuration - a.LayoutDuration) * 1000).toFixed(0),
    taskMs: +((b.TaskDuration - a.TaskDuration) * 1000).toFixed(0),
    scriptMs: +((b.ScriptDuration - a.ScriptDuration) * 1000).toFixed(0),
  };
  await ctx.close();
  return out;
}

(async () => {
  const headed = process.argv[2] === "headed";
  const mode = process.argv[3] || "hidpi";
  const browser = await chromium.launch({ executablePath: CHROME, headless: !headed, args: mode === "sw" ? ["--disable-gpu"] : [] });
  const rows = [];
  global.DPR = mode === "hidpi" ? 2 : 1;
  const [w, h] = mode === "hidpi" ? [1920, 1080] : [1440, 900];
  for (const throttle of [1, 6]) {
    for (const name of ["current", "no-lit-at-all"]) {
      rows.push(await run(browser, mode + ":" + name, variants[name], throttle, w, h));
    }
  }
  await browser.close();
  console.table(rows);
})();
