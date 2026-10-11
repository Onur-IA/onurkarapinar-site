import { Scribble, useSeo, Reveal, CtaBand } from "../lib";
import { guides, GuideCard } from "../guides";
const picks = ["claude-guide-debutant", "fichier-contexte-claude", "3-reglages-invisibles-qui-transforment"];
const why = ["Installer Claude et le régler correctement dès le départ.", "Lui donner ton contexte une fois pour toutes.", "Les réglages qui changent la qualité de toutes tes réponses."];
export default function Commencer() {
  useSeo("Commence ici | Onur Karapinar", "Nouveau ? Les 3 guides à lire en premier pour bien démarrer avec l'IA.");
  const list = picks.map(s => guides.find(g => g.slug === s)!).filter(Boolean);
  return (<>
    <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:pt-20"><Reveal><div className="kicker">Commence ici</div>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Trois guides pour <Scribble>bien démarrer</Scribble>.</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/80">Lis-les dans l'ordre. En une demi-heure, ton IA te connaît et répond mieux.</p></Reveal></section>
    <section className="mx-auto max-w-6xl px-5 pb-20"><ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((g, i) => <li key={g.slug}><div className="mb-3 font-display text-lg font-extrabold"><span className="text-terra">0{i + 1}</span> {why[i]}</div><GuideCard g={g}/></li>)}</ol></section>
    <CtaBand title="Pas encore abonné ?" text="Une à deux fois par semaine, un guide de 10 minutes. Gratuit."/>
  </>);
}
