import { useState } from "react";
import { Scribble, useSeo, Reveal, CtaBand } from "../lib";
import { all, CATS, DISCLOSURE, Tool, tools } from "../data/tools";
const slug = (n: string) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
export const ToolCard = ({ t, tag = false }: { t: Tool; tag?: boolean }) => <div className="card flex h-full flex-col p-6">
  <div className="flex items-start gap-4"><img src={`/img/tools/${slug(t.n)}.png`} alt={`Logo ${t.n}`} width="48" height="48" loading="lazy" className="h-12 w-12 shrink-0 rounded-2xl border border-sable bg-white object-contain p-1.5"/>
    <div className="min-w-0"><h3 className="text-xl leading-tight">{t.n}</h3><div className="mt-1 flex flex-wrap gap-2 text-xs font-semibold">{tag && <span className="rounded-full border border-sable px-2 py-0.5 text-ink/70">{t.c}</span>}{t.aff && <span className="rounded-full bg-ink px-2 py-0.5 text-creme">Lien affilié</span>}</div></div></div>
  <p className="mt-4 text-[15px] text-ink/75">{t.d}</p>
  <div className="mt-auto flex flex-wrap gap-x-5 pt-4"><a href={t.u} target="_blank" rel={t.aff ? "sponsored noopener" : "noopener"} className="inline-flex min-h-[44px] items-center font-bold text-terra">Essayer {t.n} →</a>{t.guide && <a href={t.guide} className="inline-flex min-h-[44px] items-center text-sm font-semibold underline underline-offset-4">Mon guide</a>}</div></div>;
export default function Outils() {
  useSeo("Mes outils IA | Onur Karapinar", "Les outils que j'utilise vraiment pour écrire, dicter, créer, m'organiser et publier avec l'IA.");
  const [c, setC] = useState("Tous");
  const cats = c === "Tous" ? CATS : [c];
  return (<>
    <section className="mx-auto max-w-6xl px-5 pb-8 pt-14 md:pt-20"><Reveal><div className="kicker">Mes outils</div>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Les outils que j'utilise <Scribble>vraiment</Scribble>.</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/80">Pas de liste de 200 applis. Juste ce qui sert dans mes guides et dans ma semaine, avec une ligne pour dire pourquoi.</p>
      <p className="mt-3 text-sm font-semibold text-ink/60">{all.length} outils · mis à jour en octobre 2026</p>
      {DISCLOSURE && <p className="mt-2 text-sm text-ink/60">{DISCLOSURE}</p>}</Reveal>
      <div className="mt-8 flex flex-wrap gap-2" role="tablist">{["Tous", ...CATS].map(x => <button key={x} role="tab" aria-selected={c === x} onClick={() => setC(x)} className={"min-h-[44px] rounded-full border-2 px-4 text-sm font-bold transition " + (c === x ? "border-ink bg-ink text-creme" : "border-sable bg-white hover:border-ink/40")}>{x}</button>)}</div></section>
    {c === "Tous" && <section className="bg-pale"><div className="mx-auto max-w-6xl px-5 py-12"><h2 className="text-2xl">Mon quotidien</h2><p className="mt-2 text-ink/70">Les six que j'ouvre tous les jours. Si tu ne dois en tester qu'un, commence par le premier.</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{tools.map(t => <ToolCard key={t.n} t={t} tag/>)}</div></div></section>}
    {cats.map((k, i) => <section key={k} className={i % 2 ? "bg-pale" : ""}><div className="mx-auto max-w-6xl px-5 py-12">
      <h2 className="text-2xl">{k} <span className="text-base font-semibold text-ink/50">{all.filter(t => t.c === k).length}</span></h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{all.filter(t => t.c === k).map(t => <ToolCard key={t.n} t={t}/>)}</div></div></section>)}
    <CtaBand title="Un guide par outil, pas à pas." text="Une à deux fois par semaine, 10 minutes, gratuit."/>
  </>);
}
