import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom"; import { useSeo, Copy, SubscribeForm } from "../lib";
import { guides } from "../guides";
type Item = { t: string; to: string; ext?: boolean; k: string };
const norm = (x: string) => x.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const pages: Item[] = [["Accueil", "/", "accueil home"], ["Commencer ici", "/commencer-ici", "commencer debuter start ici nouveau"], ["Tous les guides", "/guides", "guides tutoriels newsletter articles"], ["Mes outils IA", "/outils", "outils tools stack"], ["Le livre", "/livre", "livre book petites habitudes grandes reussites extrait pdf"], ["À propos", "/a-propos", "a propos about onur qui bio"], ["Les 50 prompts IA", "/prompts", "prompts prompt chatgpt claude exemples modeles"], ["Mentions légales", "/mentions-legales", "mentions legales cgu confidentialite"]].map(([t, to, k]) => ({ t, to, k: norm(t + " " + k) }));
const all: Item[] = [...pages, ...guides.map(g => ({ t: g.title, to: g.url, ext: true, k: norm(g.title + " " + g.slug + " " + (g.subtitle || "")) }))];
const lev = (a: string, b: string) => { const d = Array.from({ length: b.length + 1 }, (_, i) => i); for (let i = 1; i <= a.length; i++) { let p = d[0]; d[0] = i; for (let j = 1; j <= b.length; j++) { const t = d[j]; d[j] = Math.min(d[j] + 1, d[j - 1] + 1, p + (a[i - 1] === b[j - 1] ? 0 : 1)); p = t; } } return d[b.length]; };
const score = (q: string, it: Item) => { const qs = norm(q).split(" ").filter(w => w.length > 1); if (!qs.length) return 0; const ws = it.k.split(" "); return qs.reduce((s, w) => s + Math.max(0, ...ws.map(x => x.startsWith(w) || w.startsWith(x) && x.length > 2 ? 1 : 1 - lev(w, x) / Math.max(w.length, x.length))), 0) / qs.length; };
const ItemLink = ({ it }: { it: Item }) => it.ext ? <a href={it.to} target="_blank" rel="noopener" className="flex min-h-[44px] items-center justify-between gap-3 rounded-xl border border-sable bg-white px-4 py-2 text-left font-semibold hover:border-ink"><span>{it.t}</span><span aria-hidden="true" className="text-terra">→</span></a> : <Link to={it.to} className="flex min-h-[44px] items-center justify-between gap-3 rounded-xl border border-sable bg-white px-4 py-2 text-left font-semibold hover:border-ink"><span>{it.t}</span><span aria-hidden="true" className="text-terra">→</span></Link>;
const P = "Une page web a disparu. Écris-lui un avis de recherche émouvant en 4 lignes, façon affiche de chat perdu.";
export default function NotFound() {
  useSeo("Page introuvable | Onur Karapinar", "Cette page n'existe pas. Même l'IA ne l'a pas trouvée.", true);
  const { pathname } = useLocation();
  const typed = decodeURIComponent(pathname).replace(/[\/_-]+/g, " ");
  const sugg = useMemo(() => all.map(it => ({ it, s: score(typed, it) })).filter(x => x.s > 0.55).sort((a, b) => b.s - a.s).slice(0, 3).map(x => x.it), [typed]);
  const defaults = ["/prompts", "/commencer-ici", "/guides"].map(to => pages.find(p => p.to === to)!);
  const shown = [...sugg, ...defaults.filter(d => !sugg.includes(d))].slice(0, Math.max(3, sugg.length + 1));
  const [q, setQ] = useState("");
  const res = q.trim().length > 1 ? all.map(it => ({ it, s: score(q, it) })).filter(x => x.s > 0.5).sort((a, b) => b.s - a.s).slice(0, 6).map(x => x.it) : [];
  return <section className="mx-auto max-w-2xl px-5 py-16 text-center md:py-20">
    <svg viewBox="0 0 320 200" role="img" aria-label="Un voyageur avec une boussole devant un panneau indicateur, sur un chemin qui serpente" className="mx-auto h-auto w-full max-w-[340px]">
      <rect x="0" y="0" width="320" height="200" rx="24" fill="#F5F1E8"/>
      <circle cx="252" cy="52" r="20" fill="#D96A4E" opacity=".9"/>
      <path d="M0 140 C 50 112, 90 124, 140 108 S 240 92, 320 112 L320 200 L0 200 Z" fill="#E8E2D6"/>
      <path d="M0 162 C 60 146, 120 160, 180 146 S 270 136, 320 150 L320 200 L0 200 Z" fill="#DCD3C2"/>
      <path d="M150 200 C 160 176, 120 166, 150 148 S 210 124, 196 108" fill="none" stroke="#FDFBF7" strokeWidth="10" strokeLinecap="round" strokeDasharray="1 16"/>
      <g transform="translate(222 70)"><rect x="-3" y="0" width="6" height="58" rx="2" fill="#2B2B2B"/><path d="M-2 8 h38 l8 7 -8 7 h-38 z" fill="#C2553A"/><path d="M2 28 h-36 l-8 7 8 7 h36 z" fill="#2B2B2B"/><text x="16" y="19" fontSize="9" fontWeight="800" fill="#FDFBF7" textAnchor="middle" fontFamily="system-ui,sans-serif">IA</text><text x="-14" y="39" fontSize="8" fontWeight="800" fill="#FDFBF7" textAnchor="middle" fontFamily="system-ui,sans-serif">404</text></g>
      <g className="wander"><g transform="translate(96 82)">
        <circle cx="0" cy="0" r="9" fill="#2B2B2B"/>
        <path d="M-10 -4 q10 -12 20 0 z" fill="#C2553A"/><rect x="-13" y="-5" width="26" height="3" rx="1.5" fill="#C2553A"/>
        <path d="M-8 12 q8 -4 16 0 l3 28 h-22 z" fill="#2B2B2B"/>
        <rect x="-17" y="14" width="10" height="20" rx="4" fill="#D96A4E"/>
        <path d="M-6 40 l-5 22 M6 40 l6 22" stroke="#2B2B2B" strokeWidth="5" strokeLinecap="round"/>
        <path d="M6 18 l14 6" stroke="#2B2B2B" strokeWidth="4" strokeLinecap="round"/>
        <g transform="translate(24 25)"><circle r="7" fill="#FDFBF7" stroke="#2B2B2B" strokeWidth="2"/><path className="needle" d="M0 -5 L2 0 L0 5 L-2 0 Z" fill="#C2553A"/></g>
        <path d="M-20 0 l-6 64" stroke="#8a6b52" strokeWidth="3" strokeLinecap="round"/>
      </g></g>
      <path d="M40 60 q6 -6 12 0 q6 -6 12 0" fill="none" stroke="#2B2B2B" strokeWidth="2" strokeLinecap="round" opacity=".5"/>
    </svg>
    <div className="kicker mt-6">Erreur 404</div>
    <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">Cette page s'est perdue en chemin.</h1>
    <blockquote className="mt-5 text-lg italic text-ink/80">« Tous ceux qui errent ne sont pas perdus. »<span className="mt-1 block text-sm not-italic text-ink/70">J.R.R. Tolkien</span></blockquote>
    <p className="mt-5 text-lg text-ink/80">Toi, tu n'es pas perdu. Cette page, si. J'ai demandé à l'IA où elle était : elle m'a donné une adresse, très sûre d'elle. L'adresse était fausse. <b>Leçon gratuite : on vérifie toujours ce que dit une IA.</b></p>
    {shown.length > 0 && <div className="mt-8 text-left"><h2 className="text-lg font-extrabold">Tu cherchais peut-être…</h2><div className="mt-3 grid gap-2">{shown.map(it => <ItemLink key={it.to} it={it}/>)}</div></div>}
    <form role="search" onSubmit={e => e.preventDefault()} className="mt-8 text-left"><label htmlFor="q404" className="text-lg font-extrabold">Ou cherche directement</label><input id="q404" type="search" value={q} onChange={e => setQ(e.target.value)} placeholder="Ex. Claude, livre, LinkedIn…" className="mt-3 min-h-[48px] w-full rounded-full border border-sable bg-white px-5 outline-none focus:border-ink"/>
      <div aria-live="polite" className="mt-3 grid gap-2">{res.map(it => <ItemLink key={it.to} it={it}/>)}{q.trim().length > 1 && !res.length && <p className="text-sm text-ink/70">Rien trouvé. Essaie un autre mot, ou va voir <Link to="/guides" className="font-semibold underline">tous les guides</Link>.</p>}</div></form>
    <nav aria-label="Pistes pour repartir" className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/" className="btn">Retour à l'accueil</Link><Link to="/commencer-ici" className="btn-ghost">Commencer ici</Link><Link to="/guides" className="btn-ghost">Voir les guides</Link></nav>
    <div className="mt-10 rounded-2xl bg-ink p-6 text-left text-creme"><div className="kicker !text-pale">Lot de consolation</div><pre className="mt-3 whitespace-pre-wrap font-mono text-[15px]">{P}</pre><div className="mt-4"><Copy text={P}/></div></div>
    <div className="card mt-8 p-6 text-left"><p className="font-display text-lg font-extrabold">Tant qu'on y est : reçois le prochain guide</p><p className="mt-1 text-sm text-ink/70">Gratuit, une à deux fois par semaine. Lui, il arrive toujours à destination.</p><div className="mt-4"><SubscribeForm/></div></div>
  </section>;
}
