import raw from "./data/guides.json";
export type G = { slug: string; title: string; subtitle: string; date: string; cover: string; url: string };
export const guides = raw as G[];
export const cat = (g: G) => /linkedin/i.test(g.title) ? "LinkedIn" : /banana|graphique|chart/i.test(g.title + g.slug) ? "Images et visuels" : /cowork|computer|skills|projet|project/i.test(g.title + g.slug) ? "Automatiser" : /débutant|réglages|fichier|contexte|stratège/i.test(g.title + g.slug) ? "Bien démarrer" : "Bien démarrer";
export const fdate = (d: string) => new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
export const img = (u: string, w = 640) => u ? `https://substackcdn.com/image/fetch/w_${w},c_limit,f_auto,q_auto:good/${encodeURIComponent(u)}` : "";
export function GuideCard({ g }: { g: G }) {
  return <a href={g.url} className="card group flex h-full flex-col overflow-hidden">
    <div className="aspect-[16/9] overflow-hidden bg-sable"><img src={img(g.cover)} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/></div>
    <div className="flex flex-1 flex-col p-5"><div className="kicker">{cat(g)} · {fdate(g.date)}</div>
      <h3 className="mt-2 font-bold leading-snug">{g.title}</h3><p className="mt-2 line-clamp-2 text-sm text-ink/70">{g.subtitle}</p>
      <span className="mt-auto pt-4 text-sm font-bold text-terra">Lire le guide →</span></div></a>;
}
