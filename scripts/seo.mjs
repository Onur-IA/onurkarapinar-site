// Après le prérendu : sitemap.xml avec lastmod réel, et JSON-LD par page.
// Person partout (vient d'index.html), Book seulement sur /livre, ItemList des guides seulement sur /guides.
import fs from "fs"; import { execSync } from "child_process";
const SITE = "https://www.onurkarapinar.com";
const guides = JSON.parse(fs.readFileSync("src/data/guides.json", "utf8"));
const book = JSON.parse(fs.readFileSync("src/data/book-ld.json", "utf8"));
const today = new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Paris" });
// Date de dernière modification d'un fichier : modifié non commité = aujourd'hui, sinon date du dernier commit.
function fdate(f) {
  try {
    if (execSync(`git status --porcelain -- "${f}"`).toString().trim()) return today;
    const d = execSync(`git log -1 --format=%cI -- "${f}"`).toString().trim();
    if (d) return new Date(d).toLocaleDateString("sv-SE", { timeZone: "Europe/Paris" });
  } catch {}
  return fs.statSync(f).mtime.toLocaleDateString("sv-SE", { timeZone: "Europe/Paris" });
}
const latest = guides.map(g => g.date).sort().at(-1);
const max = (...d) => d.sort().at(-1);
// route -> [fichier html dans dist, date]
const pages = {
  "/": ["index.html", max(fdate("src/pages/Home.tsx"), latest)],
  "/guides": ["guides.html", latest],
  "/prompts": ["prompts.html", fdate("src/pages/Prompts.tsx")],
  "/commencer-ici": ["commencer-ici.html", fdate("src/pages/Commencer.tsx")],
  "/outils": ["outils.html", max(fdate("src/pages/Outils.tsx"), fdate("src/data/tools.ts"))],
  "/livre": ["livre.html", fdate("src/pages/Livre.tsx")],
  "/a-propos": ["a-propos.html", fdate("src/pages/APropos.tsx")],
  "/mentions-legales": ["mentions-legales.html", fdate("src/pages/Mentions.tsx")],
};
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  Object.entries(pages).map(([r, [, d]]) => `  <url><loc>${SITE}${r}</loc><lastmod>${d}</lastmod></url>`).join("\n") + "\n</urlset>\n";
fs.writeFileSync("dist/sitemap.xml", xml); console.log(xml);
const itemList = { "@context": "https://schema.org", "@type": "ItemList", name: "Guides IA d'Onur Karapinar",
  itemListElement: guides.map((g, i) => ({ "@type": "ListItem", position: i + 1, url: g.url, name: g.title })) };
const RE = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/;
for (const f of fs.readdirSync("dist").filter(f => f.endsWith(".html"))) {
  const p = "dist/" + f; const h = fs.readFileSync(p, "utf8"); const m = h.match(RE);
  if (!m) { console.warn("pas de JSON-LD dans", f); continue; }
  let ld = JSON.parse(m[1]); ld = (Array.isArray(ld) ? ld : [ld]).filter(o => o["@type"] === "Person");
  if (f === "livre.html") ld.push(book);
  if (f === "guides.html") ld.push(itemList);
  const out = JSON.stringify(ld.length === 1 ? ld[0] : ld).replace(/</g, "\\u003c");
  fs.writeFileSync(p, h.replace(RE, () => `<script type="application/ld+json">${out}</script>`));
  console.log("JSON-LD", f, ld.map(o => o["@type"]).join(", "));
}
