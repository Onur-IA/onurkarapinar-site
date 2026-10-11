import { Scribble, useSeo, Reveal, CtaBand } from "../lib";
import { tools, moreTools, DISCLOSURE, Tool } from "../data/tools";
export const ToolCard = ({ t }: { t: Tool }) => <div className="card flex h-full flex-col p-6"><h3 className="text-xl">{t.n}</h3><p className="mt-2 text-[15px] text-ink/75">{t.d}</p>
  <div className="mt-auto flex flex-wrap gap-x-5 pt-4"><a href={t.u} target="_blank" rel="noopener" className="inline-flex min-h-[44px] items-center font-bold text-terra">Découvrir {t.n.split(" ")[0]} →</a>{t.guide && <a href={t.guide} className="inline-flex min-h-[44px] items-center text-sm font-semibold underline underline-offset-4">Mon guide</a>}</div></div>;
export default function Outils() {
  useSeo("Mes outils IA | Onur Karapinar", "Les outils que j'utilise vraiment pour écrire, créer des visuels et m'organiser avec l'IA.");
  return (<>
    <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:pt-20"><Reveal><div className="kicker">Mes outils</div>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Les outils que j'utilise <Scribble>vraiment</Scribble>.</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/80">Pas de liste de 200 applis. Juste ce qui sert dans mes guides et dans ma semaine.</p>
      {DISCLOSURE && <p className="mt-3 text-sm text-ink/60">{DISCLOSURE}</p>}</Reveal></section>
    <section className="mx-auto max-w-6xl px-5 pb-12"><h2 className="text-2xl">Au quotidien</h2><div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{tools.map(t => <ToolCard key={t.n} t={t}/>)}</div></section>
    <section className="bg-pale"><div className="mx-auto max-w-6xl px-5 py-16"><h2 className="text-2xl">Pour le reste</h2><div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{moreTools.map(t => <ToolCard key={t.n} t={t}/>)}</div></div></section>
    <CtaBand title="Un guide par outil, pas à pas." text="Une à deux fois par semaine, 10 minutes, gratuit."/>
  </>);
}
