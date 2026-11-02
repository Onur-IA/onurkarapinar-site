import { chromium } from "playwright"; import { spawn } from "child_process"; import fs from "fs";
const srv = spawn("npx", ["vite", "preview", "--port", "4317", "--strictPort"], { stdio: "ignore" });
await new Promise(r => setTimeout(r, 2500));
const b = await chromium.launch(); const p = await b.newPage();
for (const r of ["/", "/livre", "/a-propos", "/guides", "/merci", "/outils", "/commencer-ici", "/mentions-legales", "/prompts", "/404"]) {
  await p.goto("http://localhost:4317" + r, { waitUntil: "networkidle" });
  let html = await p.content(); html = html.replace(/class="reveal /g, 'class="reveal in ');
  const f = r === "/" ? "dist/index.html" : r === "/404" ? "dist/404.html" : "dist" + r + ".html";
  fs.writeFileSync(f, "<!doctype html>" + html.replace(/^<!DOCTYPE html>/i, "")); console.log("prerendered", r);
}
await b.close(); srv.kill();
// Sitemap (lastmod réel) + JSON-LD par page. Lancé ici pour que toute copie de ce script (prérendu box) le fasse aussi.
import { spawnSync } from "child_process";
const seo = spawnSync("node", ["scripts/seo.mjs"], { stdio: "inherit" }); if (seo.status !== 0) process.exit(1);
