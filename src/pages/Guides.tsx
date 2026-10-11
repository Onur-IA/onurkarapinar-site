import { useMemo, useState } from "react";
import { Scribble, useSeo, Reveal, CtaBand } from "../lib";
import { guides, cat, GuideCard } from "../guides";
const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
export default function Guides() {
  useSeo("Guides IA gratuits | Onur Karapinar", "Tous les guides publiés : Claude, ChatGPT, images, LinkedIn. Des guides de 10 minutes, pas à pas, avec prompts à copier. Gratuits.");
  const [q, setQ] = useState(""); const [c, setC] = useState("Tous");
  const cats = ["Tous", ...Array.from(new Set(guides.map(cat)))];
  const list = useMemo(() => guides.filter(g => (c === "Tous" || cat(g) === c) && norm(g.title + " " + g.subtitle).includes(norm(q))), [q, c]);
  return (<>
    <section className="mx-auto max-w-6xl px-5 pb-8 pt-14 md:pt-20"><Reveal><div className="kicker">Guides gratuits</div>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">L'IA que tu peux <Scribble>vraiment</Scribble> utiliser.</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/80">{guides.length} guides publiés, chacun applicable en 10 minutes. Tape le nom d'un outil ou d'un problème, ou pioche au hasard.</p></Reveal>
      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
        <input value={q} onChange={e => setQ(e.target.value)} type="search" placeholder="Chercher : Claude, LinkedIn, images..." aria-label="Chercher un guide" className="w-full rounded-full border-2 border-sable bg-white px-5 py-3 outline-none focus:border-terra md:max-w-sm"/>
        <div className="flex flex-wrap gap-2">{cats.map(x => <button key={x} onClick={() => setC(x)} className={"rounded-full border-2 px-4 py-1.5 text-sm font-bold transition " + (c === x ? "border-ink bg-ink text-creme" : "border-sable hover:border-ink/40")}>{x}</button>)}</div>
      </div></section>
    <section className="mx-auto max-w-6xl px-5 pb-20">
      {list.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((g, i) => <Reveal key={g.slug} delay={(i % 3) * 80}><GuideCard g={g}/></Reveal>)}</div>
        : <p className="rounded-2xl bg-white p-10 text-center text-ink/70">Rien trouvé pour « {q} ». Ce guide n'existe pas encore. Réponds à une édition pour me le demander.</p>}
    </section>
    <CtaBand title="Le prochain guide, directement dans ta boîte." text="Une à deux fois par semaine, 10 minutes, gratuit."/>
  </>);
}
