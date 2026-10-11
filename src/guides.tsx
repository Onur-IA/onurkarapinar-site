import raw from "./data/guides.json";
export type G = { slug: string; title: string; subtitle: string; date: string; cover: string; url: string };
export const guides = raw as G[];
export const cat = (g: G) => /linkedin/i.test(g.title) ? "LinkedIn" : /banana|graphique|chart/i.test(g.title + g.slug) ? "Images et visuels" : /cowork|computer|skills|projet|project/i.test(g.title + g.slug) ? "Automatiser" : /débutant|réglages|fichier|contexte|stratège/i.test(g.title + g.slug) ? "Bien démarrer" : "Bien démarrer";
export const fdate = (d: string) => new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
export const img = (u: string, w = 640) => u ? `https://substackcdn.com/image/fetch/w_${w},c_limit,f_auto,q_auto:good/${encodeURIComponent(u)}` : "";
export function GuideCard({ g, big = false }: { g: G; big?: boolean }) {
  return <a href={g.url} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-sable bg-white transition duration-300 hover:-translate-y-1.5 hover:border-ink/20 hover:shadow-[0_20px_40px_-20px_rgba(43,43,43,.35)]">
    <div className="relative aspect-[16/10] overflow-hidden bg-sable"><img src={img(g.cover, big ? 800 : 640)} alt={`Couverture du guide ${g.title}`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"/>
      <span className="absolute left-3 top-3 rounded-full bg-creme/95 px-3 py-1 text-xs font-bold text-ink backdrop-blur">{cat(g)}</span></div>
    <div className="flex flex-1 flex-col p-6"><div className="text-sm text-ink/55">{fdate(g.date)} · 10 min</div>
      <h3 className="mt-2 text-xl leading-snug">{g.title}</h3><p className="mt-2 line-clamp-2 text-[15px] text-ink/70">{g.subtitle}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-5 font-bold text-terra">Lire le guide <span className="transition group-hover:translate-x-1.5">→</span></span></div></a>;
}
