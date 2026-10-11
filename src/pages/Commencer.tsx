import { Link } from "react-router-dom";
import { useSeo, Reveal, CtaBand, SubscribeForm, Hl } from "../lib";
import { guides, GuideCard } from "../guides";
const picks = ["claude-guide-debutant", "fichier-contexte-claude", "3-reglages-invisibles-qui-transforment"];
const why = ["Installer Claude et le régler correctement dès le départ.", "Lui donner ton contexte une fois pour toutes.", "Les réglages qui changent la qualité de toutes tes réponses."];
export default function Commencer() {
  useSeo("Commence ici | Onur Karapinar", "Nouveau ? Les 3 guides à lire en premier pour bien démarrer avec l'IA, en une demi-heure.");
  const list = picks.map(s => guides.find(g => g.slug === s)!).filter(Boolean);
  return (<>
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-12 pt-14 md:grid-cols-[1.1fr_.9fr] md:pt-20 [&>*]:min-w-0">
      <Reveal><div className="kicker">Commence ici</div>
        <h1 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">Nouveau ici ? Voici par où commencer.</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/80"><Hl t="Tu n'as jamais vraiment utilisé l'IA, ou tu l'utilises sans en tirer grand-chose ? Lis ces **trois guides dans l'ordre**. En **une demi-heure**, ton IA te connaît et te répond mieux."/></p>
        <ul className="mt-6 space-y-2 text-ink/80">{["Pas de jargon, pas de code.", "Des captures à chaque étape et la méthode détaillée.", "Uniquement des guides déjà publiés, testés sur mon écran."].map(x => <li key={x} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terra"/>{x}</li>)}</ul>
      </Reveal>
      <Reveal delay={120}><div className="card p-6"><p className="font-display text-lg font-extrabold">Reçois le prochain guide</p><p className="mt-1 text-sm text-ink/70">Gratuit, une à deux fois par semaine. Rejoins 13 000 lecteurs.</p><div className="mt-4"><SubscribeForm/></div></div></Reveal>
    </section>
    <section className="bg-white/60"><div className="mx-auto max-w-6xl px-5 py-16"><Reveal><h2 className="h2">Ton parcours en 3 étapes</h2><p className="mt-2 text-ink/70">Environ 10 minutes par guide.</p></Reveal>
      <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{list.map((g, i) => <li key={g.slug}><Reveal delay={i * 80}><div className="mb-3 font-display text-lg font-extrabold"><span className="text-terra">Étape {i + 1}</span><br/>{why[i]}</div><GuideCard g={g}/></Reveal></li>)}</ol>
      <Reveal className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2"><span className="font-bold">Tu as fini les trois ?</span><Link to="/guides" className="inline-flex min-h-[44px] items-center font-bold text-terra underline underline-offset-4">Explore tous les guides</Link><Link to="/outils" className="inline-flex min-h-[44px] items-center font-bold text-terra underline underline-offset-4">Vois les outils que j'utilise</Link></Reveal>
    </div></section>
    <section className="mx-auto max-w-3xl px-5 py-16 text-center"><Reveal><blockquote className="text-xl leading-relaxed md:text-2xl">« Depuis que je t'ai découvert (hier), <b>j'ai créé 6 projets !</b> [...] C'est un peu enivrant ! Mais passionnant quand on commence à piger. »</blockquote><p className="mt-4 text-sm text-ink/60"><b className="text-ink">Le Hamac</b>, lecteur, à propos du fichier contexte Claude</p></Reveal></section>
    <CtaBand title="Pas encore abonné ?" text="Une à deux fois par semaine, un guide IA de 10 minutes. Gratuit, désinscription en un clic."/>
  </>);
}
