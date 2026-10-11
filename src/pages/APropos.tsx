import { Link } from "react-router-dom";
import { A, useSeo, Reveal, SubscribeForm, Quote, Stats, CtaBand, Scribble, Hl } from "../lib";
import { guides, GuideCard } from "../guides";
const H = "/img";
const start = ["claude-guide-debutant", "fichier-voix-claude", "claude-skills"];
const chapters: [string, string, string][] = [
  ["Collège et lycée", "Le gamin curieux qui rate tout de peu", "Brevet raté **à 4 points près**, une seconde redoublée, un bac STI électrotechnique alors que j'aimais surtout les mots. La veille de l'épreuve la plus importante, j'avais révisé un seul sujet sur six. C'est **celui qui est tombé**. Et un prof de philo qui a pris le temps de m'écrire, toute l'année, m'a appris qu'une deuxième chance, ça se saisit."],
  ["Université", "Pousser toutes les portes", "Sorbonne Nouvelle, licence de communication et lettres modernes, puis un master 1. J'ai dit oui à tout : une émission de radio hebdo, un stage à **France Culture**, une mission au ministère, et même **des sketchs pour un humoriste**. Ça explique certaines blagues de mes guides."],
  ["2015", "Le déclic entrepreneur", "Le tour **Ticket for Change**, une des plus belles expériences humaines de ma vie, puis la formation Lion de The Family. Conclusion : je voulais construire mes propres projets."],
  ["2017 à 2019", "Écrire en public", "Je lance Essentiel sur Medium et ma newsletter La Minute Essentielle. Début 2018, j'annonce à mes abonnés que je veux écrire un livre. **Eyrolles m'appelle deux semaines plus tard.** En 2019 sort « Petites habitudes, grandes réussites », vendu depuis à **plus de 15 000 exemplaires**."],
  ["2020 à aujourd'hui", "Accompagner", "Je crée le Cercle Essentiel pour faire progresser des entrepreneurs ensemble, puis je me recentre sur le **coaching de dirigeants**, que je pratique toujours en indépendant. Plus de 100 personnes coachées, plus de 500 formées."],
  ["30 novembre 2022", "Le jour où tout bascule", "ChatGPT sort. Je teste, je bidouille, je passe la nuit dessus. Un mentor me dit : « **Onur, ne traîne pas, c'est le futur.** » Je n'ai pas traîné. Aujourd'hui, je suis **Head of Content chez France IA**, et j'écris Apprendre l'IA pour 13 000 lecteurs."],
];
const facts = [
  "J'ai écrit des sketchs pour un humoriste. Oui, avant de parler de prompts.",
  "J'ai fait un stage à France Culture pendant mes études.",
  "J'ai annoncé en public que j'écrirais un livre. Eyrolles m'a contacté deux semaines après.",
  "En fac, j'ai découvert en fin d'année une matière où j'étais inscrit sans le savoir. Je ne suis jamais allé au cours. Je l'ai rattrapée quand même.",
  "Ce site, je l'ai codé avec l'IA. Sans être développeur.",
];
export default function APropos() {
  useSeo("À propos | Onur Karapinar", "Head of Content chez France IA, coach de dirigeants, auteur chez Eyrolles. Je t'aide à apprendre l'IA simplement, 10 minutes par guide.");
  return (<>
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1.2fr_.8fr] md:py-20">
      <Reveal><div className="kicker">Salut, moi c'est Onur</div><h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Tu n'as pas raté le train de l'IA. <Scribble>Tu es pile à l'heure.</Scribble></h1>
        <p className="mt-5 text-lg text-ink/80">Je teste l'IA tous les jours et je te la rends simple, en français, 10 minutes par guide. Head of Content chez France IA, coach de dirigeants, auteur chez Eyrolles. Et ancien élève qui a raté son brevet.</p>
        <div className="mt-7"><SubscribeForm/></div><p className="mt-3 text-sm text-ink/60">Gratuit. Rejoins 13 000 lecteurs. Désinscription en un clic.</p></Reveal>
      <Reveal delay={150}><img src={`${A}/portrait-collage-720.webp`} alt="Portrait d'Onur Karapinar" width="384" height="480" className="mx-auto w-full max-w-sm"/></Reveal>
    </section>
    <section className="border-y border-sable bg-white/60"><div className="mx-auto max-w-6xl px-5 py-12"><Stats items={[["12 M", "de vues en 10 ans, toutes plateformes"], ["13 000", "lecteurs de la newsletter"], ["30 000", "abonnés LinkedIn"], ["15 000+", "livres vendus"], ["100+", "dirigeants et pros coachés"], ["500+", "personnes formées"]]}/></div></section>
    <section className="mx-auto max-w-4xl px-5 py-20"><Reveal><div className="kicker">Mon histoire, en six chapitres</div><h2 className="h2 mt-3">Rien ne me prédestinait à écrire. Sauf la curiosité.</h2></Reveal>
      <ol className="mt-10 border-l-2 border-sable">{chapters.map(([d, t, x], i) => <Reveal key={d} delay={i * 60} className="mb-10 last:mb-0"><li className="relative pl-8"><span aria-hidden="true" className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-creme bg-terra"/><div className="text-sm font-bold uppercase tracking-wider text-terra">{d}</div><h3 className="mt-1 text-xl font-extrabold">{t}</h3><p className="mt-2 leading-relaxed text-ink/85"><Hl t={x}/></p></li></Reveal>)}</ol>
    </section>
    <section className="bg-ink text-creme"><div className="mx-auto max-w-4xl px-5 py-20"><Reveal><div className="kicker !text-terral">Ce que je crois</div>
      <p className="mt-4 text-2xl font-bold leading-snug md:text-3xl">Comme dit la formule, le futur est déjà là. Il n'est juste pas encore distribué. <span className="text-terral">Ma mission : prévenir tout le monde.</span></p>
      <div className="mt-8 grid gap-6 text-creme/85 md:grid-cols-3">
        <p>L'IA est la technologie la plus puissante jamais mise entre les mains de l'humanité. Pas réservée aux ingénieurs : à toi.</p>
        <p>Beaucoup ont raté le début d'Internet. Moi, j'étais trop jeune. Cette fois, on est pile à l'heure, et c'est maintenant que ça se joue.</p>
        <p>La preuve : ce site, je l'ai codé avec l'IA, sans être développeur. Bien utilisée, c'est franchement addictif. Dans le bon sens.</p></div></Reveal></div></section>
    <section className="mx-auto max-w-5xl px-5 py-20"><Reveal><div className="kicker">Ce que tu reçois</div><h2 className="h2 mt-3">Un guide, une action.</h2><p className="mt-3 text-ink/70">Tu lis, tu ouvres l'outil, tu refais. Ma règle : si quelqu'un qui n'a jamais ouvert ChatGPT ne peut pas suivre, j'ai raté mon guide.</p></Reveal>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">{["Le problème de départ, tiré de ta vraie journée.", "Les étapes numérotées, avec captures d'écran et la méthode détaillée.", "Ce qui a marché chez moi. Et ce qui a raté, parce que ça arrive.", "Ce qui est disponible en France, et ce qui ne l'est pas encore."].map((x, i) => <Reveal key={i} delay={i * 60}><div className="card flex h-full gap-4 p-5"><span className="text-2xl font-extrabold text-terra">{i + 1}</span><p>{x}</p></div></Reveal>)}</div>
    </section>
    <section className="bg-pale"><div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-20 md:grid-cols-[.8fr_1.2fr]">
      <Reveal><img src={`${A}/portrait-studio.webp`} alt="Onur Karapinar en studio" loading="lazy" className="mx-auto w-full max-w-xs rounded-2xl shadow-xl"/></Reveal>
      <Reveal delay={100}><div className="kicker">5 choses que tu ne sais pas sur moi</div>
        <ul className="mt-5 space-y-4">{facts.map((f, i) => <li key={i} className="flex gap-4"><span className="font-extrabold text-terra">{i + 1}.</span><span>{f}</span></li>)}</ul></Reveal>
    </div></section>
    <section className="mx-auto max-w-6xl px-5 py-20"><Reveal><h2 className="h2">Ce que les lecteurs m'ont répondu.</h2></Reveal>
      <div className="mt-8 columns-1 gap-5 md:columns-3">
        <Quote q="Depuis que je t'ai découvert (hier), **j'ai créé 6 projets !** […] C'est un peu enivrant ! Mais passionnant quand on commence à piger." n="Le Hamac" src="Le fichier contexte Claude" img={`${H}/t-hamac.jpg`}/>
        <Quote q="Je suis choqué par la **quantité de valeur** que tu viens de délivrer. Merci. Je m'abonne." n="Nirmoo" src="Claude Cowork, le guide complet"/>
        <Quote q="Banger, **très pédagogique & divertissant**. J'enregistre précieusement ce guide ! Merci Onur :)" n="Pierre Cartier" src="Nano Banana 2" img={`${H}/t-pierre.jpg`}/>
      </div></section>
    <section className="bg-white/60"><div className="mx-auto max-w-6xl px-5 py-20"><Reveal><h2 className="h2">Par où commencer ? Ces trois guides.</h2></Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{start.map(s => guides.find(g => g.slug === s)).filter(Boolean).map((g, i) => <Reveal key={i} delay={i * 100}><GuideCard g={g!}/></Reveal>)}</div>
      <Reveal className="mt-10 rounded-2xl bg-pale/60 p-8"><h3 className="text-xl font-bold">Une dernière chose</h3><p className="mt-2">Pose-moi ta question bête. Réponds à n'importe quel guide, je lis tout. Les meilleures questions deviennent des guides. Et si tu veux lire mon livre, <Link to="/livre" className="font-bold text-terra underline underline-offset-4">c'est par ici</Link>.</p></Reveal></div></section>
    <CtaBand title="Le prochain guide IA arrive bientôt." text="Apprendre l'IA simplement, 10 minutes par guide. Gratuit, une à deux fois par semaine, désinscription en un clic."/>
  </>);
}
