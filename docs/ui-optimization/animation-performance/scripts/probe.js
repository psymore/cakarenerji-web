const { chromium } = require("playwright-core");
(async () => {
  const b = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: false });
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage(); const c = await ctx.newCDPSession(p);
  await c.send("Performance.enable"); await c.send("Emulation.setCPUThrottlingRate",{rate:4});
  const m = async () => Object.fromEntries((await c.send("Performance.getMetrics")).metrics.map((x) => [x.name, x.value]));
  await p.goto("http://localhost:3100/", { waitUntil: "load" });
  const a = await m(); await p.waitForTimeout(1500); const a2 = await m();
  console.log("during rise (1.5s): recalc", a2.RecalcStyleCount - a.RecalcStyleCount, "task ms", Math.round((a2.TaskDuration - a.TaskDuration) * 1000));
  await p.waitForTimeout(3000); const b1 = await m(); await p.waitForTimeout(1500); const b2 = await m();
  console.log("after rise idle (1.5s): recalc", b2.RecalcStyleCount - b1.RecalcStyleCount, "task ms", Math.round((b2.TaskDuration - b1.TaskDuration) * 1000));
  console.log(await p.evaluate(() => document.getAnimations().length + " running animations"));
  await b.close();
})();
