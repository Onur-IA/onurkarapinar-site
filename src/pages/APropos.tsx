import { Link } from "react-router-dom";
import { A, useSeo, Reveal, SubscribeForm, Stats, CtaBand, Scribble, Hl } from "../lib";
const PIXAR = "https://medium.com/essentiels/10-astuces-qu-une-ex-employ%C3%A9e-de-pixar-m-a-appris-sur-l-%C3%A9criture-cr%C3%A9ative-3d52c4a63afe";
const chapters: [string, string, string][] = [
  ["Le lycée", "Le roi du « de justesse »", "Brevet obtenu **de justesse**. Seconde redoublée. Bac électrotechnique alors que j'aimais surtout les mots. La veille de l'épreuve la plus importante, j'avais révisé un seul sujet sur six. **C'est celui qui est tombé.** Un prof de philo a cru en moi avant moi. Depuis, je sais qu'une deuxième chance, ça se saisit."],
  ["La fac", "Dire oui à tout", "Sorbonne Nouvelle, communication et lettres modernes. J'ai produit une émission de radio, fait un stage à **France Culture**, une mission au ministère, et même écrit **des sketchs pour un humoriste**."],
  ["2015", "Ticket for Change", "Ce tour a **changé la trajectoire de ma vie**. J'y ai découvert un monde que j'ignorais : des entrepreneurs, des humains bienveillants qui voulaient vraiment changer les choses. J'en suis ressorti avec une idée fixe : entreprendre, mais autrement."],
  ["2015", "The Family, programme Lion", "Une émulation folle, l'excitation des débuts de startup. Certains de ma promo sont devenus **millionnaires grâce à leurs parts**. Moi, j'en suis ressorti avec quelque chose de moins liquide mais très rentable : l'envie de construire."],
  ["Mars 2016", "Écrire pour comprendre", "Après une belle collection d'échecs, je me pose une question simple : **c'est quoi, les ingrédients d'une vie réussie ?** Pour trouver, je lis les best-sellers de ceux qui sont tout en haut, j'apprends l'anglais au passage, je résume et je partage. Premier article sur Medium : <a>la créativité chez Pixar</a>. Suivront la productivité, les habitudes, l'écriture, la philosophie, et 120 autres articles."],
  ["2017 à 2019", "Le livre", "Je lance Essentiel sur Medium et ma newsletter La Minute Essentielle. Début 2018, j'annonce en public que je vais écrire un livre. **Eyrolles m'appelle deux semaines plus tard.** En 2019 sort « Petites habitudes, grandes réussites », vendu à **plus de 15 000 exemplaires**."],
  ["2020 à 2022", "Accompagner", "Je crée le Cercle Essentiel pour faire grandir des entrepreneurs ensemble, puis je coache des dirigeants. Plus de 100 personnes coachées, plus de 500 formées."],
  ["30 novembre 2022", "Le jour où tout bascule", "ChatGPT sort. Je teste, je bidouille, je recommence. Un mentor me glisse : « **Onur, ne traîne pas, c'est le futur.** » Je n'ai pas traîné : je suis parmi **les premiers à parler d'IA sur LinkedIn**, puis je lance la newsletter Apprendre l'IA."],
  ["Aujourd'hui", "Deux casquettes", "**Head of Content chez France IA** le jour, solopreneur avec Apprendre l'IA le reste du temps. Et toujours ce besoin de comprendre, puis d'expliquer."],
];
const facts = [
  "J'ai écrit des sketchs pour un humoriste. Les prompts, c'est venu après.",
  "J'ai fait un stage à France Culture. J'ai gardé la voix, pas l'horaire.",
  "J'ai annoncé en public que j'écrirais un livre. Eyrolles m'a appelé deux semaines après. Depuis, je fais attention à ce que j'annonce.",
  "J'ai bouclé Hyrox Paris en 2 h 00 min 41 s. Oui, 41 secondes de plus que 2 heures. Je ne veux pas en parler.",
  "Mon équipe d'employés IA négocie pour moi. Elle a obtenu un remboursement de Squarespace. Moi, je n'aurais pas osé.",
];
const Tl = ({ t }: { t: string }) => { const [a, b] = t.split("<a>"); if (!b) return <Hl t={t}/>; const [l, c] = b.split("</a>"); return <><Hl t={a}/><a href={PIXAR} target="_blank" rel="noopener" className="font-semibold text-terra underline underline-offset-4">{l}</a><Hl t={c}/></>; };
export default function APropos() {
  useSeo("À propos | Onur Karapinar", "Head of Content chez France IA, auteur chez Eyrolles, organisateur de dîners entre inconnus. L'histoire d'un curieux qui a eu beaucoup de deuxièmes chances.");
  return (<>
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1.2fr_.8fr] md:py-20">
      <Reveal><div className="kicker">Salut, moi c'est Onur</div><h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">J'ai eu mon brevet de justesse. <Scribble>Depuis, je rattrape.</Scribble></h1>
        <p className="mt-5 text-lg text-ink/80">Auteur d'un best-seller, Head of Content chez France IA, organisateur de dîners entre inconnus et patron d'une équipe d'employés IA. Rien de tout ça n'était prévu. Voici comment c'est arrivé.</p>
        <div className="mt-7"><SubscribeForm/></div><p className="mt-3 text-sm text-ink/60">Ma newsletter Apprendre l'IA. Gratuit, 13 000 lecteurs.</p></Reveal>
      <Reveal delay={150}><img src={`${A}/portrait-collage-720.webp`} alt="Portrait d'Onur Karapinar" width="384" height="480" className="mx-auto w-full max-w-sm"/></Reveal>
    </section>
    <section className="border-y border-sable bg-white/60"><div className="mx-auto max-w-6xl px-5 py-12"><Stats items={[["12 M", "de vues en 10 ans, toutes plateformes"], ["13 000", "lecteurs de la newsletter"], ["30 000", "abonnés LinkedIn"], ["15 000+", "livres vendus"], ["100+", "personnes coachées"], ["500+", "personnes formées"]]}/></div></section>
    <section className="mx-auto max-w-4xl px-5 py-20"><Reveal><div className="kicker">Mon histoire</div><h2 className="h2 mt-3">Une collection d'échecs, beaucoup de curiosité, quelques portes poussées.</h2></Reveal>
      <ol className="mt-10 border-l-2 border-sable">{chapters.map(([d, t, x], i) => <Reveal key={t} delay={i * 40} className="mb-10 last:mb-0"><li className="relative pl-8"><span aria-hidden="true" className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-creme bg-terra"/><div className="text-sm font-bold uppercase tracking-wider text-terra">{d}</div><h3 className="mt-1 text-xl font-extrabold">{t}</h3><p className="mt-2 leading-relaxed text-ink/85"><Tl t={x}/></p></li></Reveal>)}</ol>
      <Reveal className="mt-12 rounded-2xl bg-pale/60 p-6 text-ink/85">Et le livre ? Il parle de tout ça : des petits gestes répétés qui finissent par changer une trajectoire. <Link to="/livre" className="font-bold text-terra underline underline-offset-4">Le découvrir</Link></Reveal>
    </section>
    <section className="bg-ink text-creme"><div className="mx-auto max-w-4xl px-5 py-20"><Reveal><div className="kicker !text-terral">Ce que je crois</div>
      <p className="mt-4 text-2xl font-bold leading-snug md:text-3xl">Comme dit la formule, le futur est déjà là. Il n'est juste pas encore distribué. <span className="text-terral">Ma mission : prévenir tout le monde.</span></p>
      <div className="mt-8 grid gap-6 text-creme/85 md:grid-cols-3">
        <p>L'IA est la technologie la plus puissante jamais mise entre les mains de l'humanité. Et elle ne demande pas de savoir coder.</p>
        <p>Beaucoup ont raté le début d'Internet. Moi, j'étais trop jeune. Cette fois, on est pile à l'heure.</p>
        <p>La preuve : ce site, je l'ai codé avec l'IA, sans être développeur. Bien utilisée, c'est franchement addictif.</p></div></Reveal></div></section>
    <section className="mx-auto max-w-5xl px-5 py-20"><Reveal><div className="kicker">À côté des écrans</div><h2 className="h2 mt-3">Trois obsessions, en dehors du travail.</h2><p className="mt-3 text-ink/70">Enfin, en dehors. C'est discutable.</p></Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <Reveal><div className="card h-full p-7"><div className="text-sm font-bold uppercase tracking-wider text-terra">Depuis juin 2025</div><h3 className="mt-2 text-xl font-extrabold">Aftermind</h3><p className="mt-3 text-ink/85"><Hl t="Entreprendre seul, c'est parfois très seul. J'ai réuni dans un groupe WhatsApp **dix personnes que j'aimais bien**. Puis un dîner par mois. Puis des lives d'entraide. Puis on a ouvert, sur recommandation. Aujourd'hui, **plus de 40 entrepreneurs indépendants brillants**."/></p><p className="mt-3 text-sm text-ink/60">Comme disait Jim Rohn, on est la moyenne des cinq personnes avec qui on passe le plus de temps. J'ai choisi les miennes.</p></div></Reveal>
        <Reveal delay={80}><div className="card h-full p-7"><div className="text-sm font-bold uppercase tracking-wider text-terra">Chaque mois</div><h3 className="mt-2 text-xl font-extrabold">Les Link Dinners</h3><p className="mt-3 text-ink/85"><Hl t="Ma théorie de la chance, inspirée des recherches du psychologue Richard Wiseman sur les gens chanceux : **agrandir sa surface de chance**, montrer ce qu'on fait au plus de monde possible. Alors je dîne avec des inconnus. **Cinq personnes sélectionnées, une belle table à Paris**, et pas besoin de masque social."/></p><p className="mt-3 text-sm text-ink/60">Tout a commencé après une conférence : des gens qui devaient se rencontrer, un message LinkedIn, un déjeuner le jour même. La suite revient très bientôt.</p></div></Reveal>
        <Reveal delay={160}><div className="card h-full p-7"><div className="text-sm font-bold uppercase tracking-wider text-terra">Tous les jours</div><h3 className="mt-2 text-xl font-extrabold">Mon équipe d'employés IA</h3><p className="mt-3 text-ink/85"><Hl t="Mon usage le plus fou : **une équipe d'employés IA**. Ils construisent ce site, préparent mes contenus, et **négocient même pour moi** (bonjour le remboursement Squarespace). C'est un jeu vidéo, sauf que les victoires sont réelles."/></p><p className="mt-3 text-sm text-ink/60">Oui, je suis accro. Mais c'est la bonne addiction, cette fois.</p></div></Reveal>
      </div></section>
    <section className="bg-pale"><div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-20 md:grid-cols-[.8fr_1.2fr]">
      <Reveal><figure><img src="/img/hyrox-paris.webp" alt="Onur à l'arrivée de Hyrox Paris, devant l'écran affichant 2:00:41" width="640" height="961" loading="lazy" className="mx-auto w-full max-w-xs rounded-2xl shadow-xl"/><figcaption className="mt-3 text-center text-sm text-ink/60">Hyrox Paris, 2:00:41. Le sourire de quelqu'un qui ne sait pas encore qu'il a raté les 2 heures de 41 secondes.</figcaption></figure></Reveal>
      <Reveal delay={100}><div className="kicker">5 choses que tu ne sais pas sur moi</div>
        <ul className="mt-5 space-y-4">{facts.map((f, i) => <li key={i} className="flex gap-4"><span className="font-extrabold text-terra">{i + 1}.</span><span>{f}</span></li>)}</ul></Reveal>
    </div></section>
    <CtaBand title="Si tu as lu jusqu'ici, on va bien s'entendre." text="Apprendre l'IA : un guide de 10 minutes, une à deux fois par semaine. Gratuit, désinscription en un clic."/>
  </>);
}
