import { chromium } from "playwright";
const B = "https://onur-ia.github.io/onurkarapinar-site";
const b = await chromium.launch();
for (const [dev, vp] of [["ordinateur", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
  const ctx = await b.newContext({ viewport: vp, deviceScaleFactor: dev === "mobile" ? 2 : 1, permissions: ["clipboard-read", "clipboard-write"] });
  const p = await ctx.newPage(); const errs = [];
  p.on("response", r => { if (r.status() >= 400) errs.push(r.status() + " " + r.url()); });
  for (const [n, path] of [["accueil", "/"], ["livre", "/livre"], ["a-propos", "/a-propos"], ["guides", "/guides"], ["merci", "/merci"], ["404", "/nimporte-quoi"]]) {
    await p.goto(B + path, { waitUntil: "networkidle" });
    await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 300) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 150)); } window.scrollTo(0, 0); });
    await p.waitForTimeout(800);
    const bad = await p.evaluate(() => [...document.images].filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src));
    const ow = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    console.log(dev, n, await p.title(), "| imgs KO:", bad.length, bad.slice(0, 2), "| overflow:", ow);
    if (!["merci", "404"].includes(n) || dev === "mobile") await p.screenshot({ path: `captures/${n}-${dev}.png`, fullPage: true });
  }
  await p.goto(B + "/", { waitUntil: "networkidle" }); await p.click("text=Mon mail le plus pénible"); await p.click("button:has-text('Copier le prompt')");
  console.log(dev, "copie:", (await p.evaluate(() => navigator.clipboard.readText())).slice(0, 40), "| btn:", await p.textContent("button:has-text('Copié')"));
  await p.goto(B + "/guides", { waitUntil: "networkidle" }); await p.fill("input[type=search]", "linkedin"); console.log("recherche linkedin:", await p.locator("a.card").count());
  console.log("http errors", errs.slice(0, 5));
}
await b.close();
