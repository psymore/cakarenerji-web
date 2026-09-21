const { chromium } = require("playwright-core");
(async () => {
  const b = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
  const B = "http://localhost:3100";
  // desktop
  let ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  let p = await ctx.newPage();
  await p.goto(B + "/"); await p.waitForTimeout(3600);
  const res = {};
  // keyboard: tab through header
  const seq = [];
  for (let i = 0; i < 12; i++) { await p.keyboard.press("Tab"); seq.push(await p.evaluate(() => { const e = document.activeElement; const cs = getComputedStyle(e); return (e.textContent || e.getAttribute("aria-label") || e.tagName).trim().slice(0, 22) + "|outline:" + cs.outlineStyle + " " + cs.outlineWidth; })); }
  res.tabOrder = seq;
  // dropdown by keyboard
  await p.goto(B + "/"); await p.waitForTimeout(500);
  const btn = p.locator(".nav__btn").first();
  await btn.focus(); await p.keyboard.press("Enter");
  res.menuOpenByEnter = await p.evaluate(() => document.querySelector('.nav__item[data-open="true"]') !== null);
  await p.keyboard.press("Escape");
  res.menuClosesOnEsc = await p.evaluate(() => document.querySelector('.nav__item[data-open="true"]') === null);
  await btn.click(); await p.mouse.move(700, 500); await p.mouse.click(700, 500);
  res.menuClosesOnOutsideClick = await p.evaluate(() => document.querySelector('.nav__item[data-open="true"]') === null);
  // hover open screenshot
  await btn.hover(); await p.waitForTimeout(200); await p.screenshot({ path: "ux/d-dropdown.png" });
  // sticky header over hero / dark hero contrast: header is white
  await p.goto(B + "/i̇letişim"); await p.waitForTimeout(500); await p.screenshot({ path: "ux/d-contact.png", fullPage: true });
  await p.goto(B + "/sık-sorulan-sorular"); await p.waitForTimeout(400); await p.screenshot({ path: "ux/d-faq.png" });
  await p.goto(B + "/i̇nsan-kaynakları"); await p.waitForTimeout(400); await p.screenshot({ path: "ux/d-hr.png", fullPage: true });
  await p.goto(B + "/blog-1"); await p.waitForTimeout(400); await p.screenshot({ path: "ux/d-blog.png" });
  await p.goto(B + "/projeleri̇mi̇z-1"); await p.waitForTimeout(400); await p.screenshot({ path: "ux/d-projects.png" });
  await ctx.close();
  // mobile
  ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  p = await ctx.newPage();
  await p.goto(B + "/"); await p.waitForTimeout(3600); await p.screenshot({ path: "ux/m-home.png" });
  await p.locator(".cookie button").click().catch(() => {});
  await p.locator(".burger").tap(); await p.waitForTimeout(300); await p.screenshot({ path: "ux/m-drawer.png" });
  res.drawerScrollLock = await p.evaluate(() => getComputedStyle(document.body).overflow);
  res.drawerEscCloses = await (async () => { await p.keyboard.press("Escape"); return p.evaluate(() => document.querySelector('.drawer[data-open="true"]') === null); })();
  await p.goto(B + "/i̇letişim"); await p.waitForTimeout(400); await p.screenshot({ path: "ux/m-contact.png", fullPage: true });
  await p.goto(B + "/hizmetlerimiz"); await p.waitForTimeout(400); await p.screenshot({ path: "ux/m-services.png" });
  // reduced motion
  await ctx.close();
  ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  p = await ctx.newPage(); await p.goto(B + "/"); await p.waitForTimeout(400);
  res.reducedMotionHeroAnim = await p.evaluate(() => getComputedStyle(document.querySelector(".hero")).animationName);
  // cookie notice
  await ctx.close();
  console.log(JSON.stringify(res, null, 1));
  await b.close();
})();
