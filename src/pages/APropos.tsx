import { Link } from "react-router-dom";
import { A, useSeo, Reveal, SubscribeForm, Stats, CtaBand, Scribble, Hl } from "../lib";
const LION1 = "https://medium.com/essentiels/ce-que-jai-appris-en-participant-%C3%A0-lion-la-formation-de-thefamily-pour-rejoindre-des-start-ups-b26ac45c6e7e", LION2 = "https://medium.com/join-lion/lion-saison-3-jour-1-bienvenue-dans-la-jungle-des-startups-3eeebb378e77";
const PIXAR = "https://medium.com/essentiels/10-astuces-qu-une-ex-employ%C3%A9e-de-pixar-m-a-appris-sur-l-%C3%A9criture-cr%C3%A9ative-3d52c4a63afe";
const chapters: [string, string, string][] = [
  ["Les années radio", "Un concours qui ouvre toutes les portes", "Étudiant à la Sorbonne Nouvelle, je deviens **lauréat d'un concours radio avec WeFM**, « We Love Radio ». Ce prix a changé ma vie : il m'emmène sur **Radio Campus Paris**, où je fais de la radio avec l'équipe de TPDV, puis à un stage à **France Culture**. J'écris aussi **des sketchs pour un humoriste**, et je deviens la mascotte des Départementales 2014, le concours de culture générale de la fac, où mon équipe monte sur le podium."],
  ["2015", "Ticket for Change", "Ce tour a **changé la trajectoire de ma vie**. J'y découvre un monde que j'ignorais : des entrepreneurs, des humains bienveillants qui veulent vraiment changer les choses. J'en ressors avec une idée fixe : entreprendre, mais autrement."],
  ["2016", "The Family, programme Lion, deux fois", "Fin 2016, je suis élève de Lion, saison 2. Une émulation folle, l'excitation des débuts de startup. Certains de ma promo sont devenus **millionnaires grâce à leurs parts**. Moi, j'en ressors avec quelque chose de moins liquide mais très rentable : l'envie de construire. La saison suivante, je reviens en ancien et je propose d'**écrire le récit de chaque journée sur Medium**, comme je l'avais fait pour les ateliers We Are Project. <a1>Ce que j'en ai appris</a1>, <a2>le récit du premier jour</a2>."],
  ["Mars 2016", "Écrire pour comprendre", "Une question m'obsède : **quels sont les ingrédients d'une vie réussie ?** Pour trouver, je lis les best-sellers de ceux qui sont tout en haut, j'apprends l'anglais au passage, je résume et je partage. Premier article sur Medium : <a>la créativité chez Pixar</a>. Suivront plus de 120 articles, sur la productivité, les habitudes, l'écriture. Medium me nomme **Top Writer en Éducation**, et dans d'autres catégories : à l'époque, très peu d'auteurs français avaient cette distinction."],
  ["2017 à 2019", "Le livre", "Je lance Essentiel sur Medium et ma newsletter La Minute Essentielle. Début 2018, j'annonce en public que je vais écrire un livre. **Eyrolles m'appelle deux semaines plus tard.** En 2019 sort « Petites habitudes, grandes réussites », vendu à **plus de 15 000 exemplaires**."],
  ["2020 à 2026", "Transmettre", "Je crée le Cercle Essentiel, puis j'accompagne des entrepreneurs et des dirigeants pendant six ans. **Plus de 100 personnes coachées, plus de 500 formées.**"],
  ["30 novembre 2022", "Le jour où tout bascule", "ChatGPT sort. Je teste, je bidouille, je recommence. Un mentor me glisse : « **Onur, ne traîne pas, c'est le futur.** » Je n'ai pas traîné : je suis parmi **les premiers à parler d'IA sur LinkedIn**, puis je lance la newsletter Apprendre l'IA."],
  ["Aujourd'hui", "Deux casquettes, et des tables pleines", "**Head of Content chez France IA**, solopreneur avec Apprendre l'IA, et bâtisseur de communautés : Aftermind et les Link Dinners. Toujours ce besoin de comprendre, puis de transmettre."],
];
const facts = [
  "J'ai écrit des sketchs pour un humoriste. Les prompts, c'est venu après.",
  "J'ai fait un stage à France Culture. J'ai gardé la voix, pas l'horaire.",
  "J'ai annoncé en public que j'écrirais un livre. Eyrolles m'a appelé deux semaines après. Depuis, je fais attention à ce que j'annonce.",
  "J'ai bouclé Hyrox Paris en solo, pour ma toute première, ce qu'on déconseille en général. 2 h 00 min 41 s. Les 41 secondes, c'était pour le suspense.",
  "Mon équipe d'employés IA négocie pour moi. Elle a obtenu un remboursement de Squarespace.",
];
const manies = [
  "Je parle beaucoup à mon ordinateur. Il répond, maintenant.",
  "Ni café, ni alcool, ni soda. Et pourtant, je suis toujours le dernier à partir des dîners.",
  "Je mets mes proches en relation sans prévenir. Ça marche presque toujours.",
  "J'achète plus de livres que je n'en lis. J'appelle ça une bibliothèque d'avance.",
  "J'offre mon livre aux gens que je rencontre.",
  "J'ai toujours trop d'onglets ouverts.",
  "La musique, toujours. C'est elle qui m'aide à me concentrer.",
];
const LINKS: Record<string, string> = { a: PIXAR, a1: LION1, a2: LION2 };
const Tl = ({ t }: { t: string }) => <>{t.split(/(<a\d?>.*?<\/a\d?>)/).map((p, i) => { const m = p.match(/^<(a\d?)>(.*?)<\/a\d?>$/); return m ? <a key={i} href={LINKS[m[1]]} target="_blank" rel="noopener" className="font-semibold text-terra underline underline-offset-4">{m[2]}</a> : <Hl key={i} t={p}/>; })}</>;
const album: [string, string, string][] = [
  ["album-radio-tpdv", "L'équipe de l'émission TPDV sur Radio Campus Paris, Onur au milieu", "Radio Campus Paris, l'équipe de TPDV. On pointait la caméra. On pointait surtout nos rêves."],
  ["album-departementales-2014", "Affiche des Départementales 2014 de la Sorbonne Nouvelle avec Onur en mascotte", "La mascotte des Départementales 2014. Mon équipe est montée sur le podium."],
  ["album-lion-portrait", "Portrait d'Onur pendant le programme Lion de The Family en 2016", "Lion by The Family, 2016. Le portrait officiel. Il y a des plantes, donc c'est sérieux."],
  ["album-lion-promo", "Photo de groupe de la promotion Lion by The Family", "La promo Lion. Quelque part là-dedans, de futurs millionnaires. Et moi."],
  ["album-medium-top-writer", "E-mail de Medium annonçant à Onur qu'il est Top Writer en Éducation", "Le jour où Medium m'a dit « Top Writer in Education ». Je l'ai relu plusieurs fois."],
  ["album-diner-2", "Groupe de convives souriants à la fin d'un dîner organisé par Onur", "Fin de dîner. Personne ne voulait partir. Comme d'habitude."],
  ["album-medium-profil", "Profil Medium d'Onur affichant Writer chez Join Lion by The Family", "Mon profil Medium de l'époque : Writer @_JoinLion by @_TheFamily."],
];
export default function APropos() {
  useSeo("À propos | Onur Karapinar", "Head of Content chez France IA, auteur chez Eyrolles, fondateur d'Aftermind et des Link Dinners. Âme d'artiste, corps d'athlète, esprit d'entrepreneur : créateur d'inattendu positif.");
  return (<>
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1.2fr_.8fr] md:py-20">
      <Reveal><div className="kicker">Salut, moi c'est Onur</div><h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Âme d'artiste. Corps d'athlète. <Scribble>J'agis comme un entrepreneur.</Scribble></h1>
        <p className="mt-5 text-lg text-ink/80">Head of Content chez France IA, auteur d'un best-seller, fondateur d'Aftermind et des Link Dinners, patron d'une équipe d'employés IA. Mon métier, au fond : <b>créateur d'inattendu positif</b>.</p>
        <p className="mt-2 text-sm text-ink/60">L'expression vient d'une conférence de Philippe Gabilliet sur la chance. Je l'ai adoptée.</p>
        <div className="mt-7"><SubscribeForm/></div><p className="mt-3 text-sm text-ink/60">Ma newsletter Apprendre l'IA. Gratuit, 13 000 lecteurs.</p></Reveal>
      <Reveal delay={150}><img src={`${A}/portrait-collage-720.webp`} alt="Portrait d'Onur Karapinar" width="384" height="480" className="mx-auto w-full max-w-sm"/></Reveal>
    </section>
    <section className="border-y border-sable bg-white/60"><div className="mx-auto max-w-6xl px-5 py-12"><Stats items={[["12 M", "de vues en 10 ans, toutes plateformes"], ["13 000", "lecteurs de la newsletter"], ["30 000", "abonnés LinkedIn"], ["15 000+", "livres vendus"], ["100+", "personnes coachées"], ["500+", "personnes formées"]]}/></div></section>
    <section className="mx-auto max-w-4xl px-5 py-20"><Reveal><div className="kicker">Mon histoire</div><h2 className="h2 mt-3">De la radio à l'IA : une curiosité qui pousse toutes les portes.</h2></Reveal>
      <ol className="mt-10 border-l-2 border-sable">{chapters.map(([d, t, x], i) => <Reveal key={t} delay={i * 40} className="mb-10 last:mb-0"><li className="relative pl-8"><span aria-hidden="true" className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-creme bg-terra"/><div className="text-sm font-bold uppercase tracking-wider text-terra">{d}</div><h3 className="mt-1 text-xl font-extrabold">{t}</h3><p className="mt-2 leading-relaxed text-ink/85"><Tl t={x}/></p></li></Reveal>)}</ol>
      <Reveal className="mt-12 rounded-2xl bg-pale/60 p-6 text-ink/85">Et le livre ? Il parle de tout ça : des petits gestes répétés qui finissent par changer une trajectoire. <Link to="/livre" className="font-bold text-terra underline underline-offset-4">Le découvrir</Link></Reveal>
    </section>
    <section className="bg-ink text-creme"><div className="mx-auto max-w-4xl px-5 py-20"><Reveal><div className="kicker !text-terral">Ce que je crois</div>
      <p className="mt-4 text-2xl font-bold leading-snug md:text-3xl">Comme dit la formule, le futur est déjà là. Il n'est juste pas encore distribué. <span className="text-terral">Ma mission : prévenir tout le monde.</span></p>
      <div className="mt-8 grid gap-6 text-creme/85 md:grid-cols-3">
        <p>L'IA est la technologie la plus puissante jamais mise entre les mains de l'humanité. Et elle ne demande pas de savoir coder.</p>
        <p>Beaucoup ont raté le début d'Internet. Moi, j'étais trop jeune. Cette fois, on est pile à l'heure.</p>
        <p>La preuve : ce site, je l'ai codé avec l'IA, sans être développeur. Bien utilisée, c'est franchement addictif.</p></div></Reveal></div></section>
    <section className="mx-auto max-w-6xl px-5 py-20"><Reveal><div className="kicker">Ce que je construis</div><h2 className="h2 mt-3">Je collectionne les gens brillants. Et je les mets à la même table.</h2></Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <Reveal><div className="card h-full overflow-hidden"><img src="/img/album-aftermind-guiren.webp" alt="Dîner Aftermind autour d'une grande table dans un restaurant parisien" loading="lazy" className="aspect-[4/3] w-full object-cover"/><div className="p-7"><div className="text-sm font-bold uppercase tracking-wider text-terra">Depuis juin 2025</div><h3 className="mt-2 text-xl font-extrabold">Aftermind</h3><p className="mt-3 text-ink/85"><Hl t="Né d'un constat : entreprendre seul, c'est parfois très seul. J'ai réuni **dix personnes que j'aimais bien** dans un groupe WhatsApp. Puis un dîner par mois. Puis des lives d'entraide. Puis on a ouvert, sur recommandation. Aujourd'hui, **plus de 40 entrepreneurs indépendants brillants**."/></p><p className="mt-3 text-sm text-ink/60">Jim Rohn disait qu'on est la moyenne des cinq personnes avec qui on passe le plus de temps. J'ai choisi les miennes avec soin.</p></div></div></Reveal>
        <Reveal delay={80}><div className="card h-full overflow-hidden"><img src="/img/album-diner-1.webp" alt="Les convives d'un Link Dinner réunis dans un restaurant à Paris" loading="lazy" className="aspect-[4/3] w-full object-cover"/><div className="p-7"><div className="text-sm font-bold uppercase tracking-wider text-terra">Chaque mois</div><h3 className="mt-2 text-xl font-extrabold">Les Link Dinners</h3><p className="mt-3 text-ink/85"><Hl t="On me dit souvent : « Onur, t'as de la chance. » Mon secret ? **Je dîne avec des inconnus.** Ma théorie de la chance s'inspire des recherches du psychologue Richard Wiseman : **agrandir sa surface de chance**, montrer ce qu'on fait au plus de monde possible. Alors chaque mois, cinq à sept personnes sélectionnées, une belle table à Paris, et pas besoin de masque social."/></p><p className="mt-3 text-sm text-ink/60">19 h 30 : sept inconnus se serrent la main. 23 h 30 : personne ne veut partir. Plus de 200 personnes en liste d'attente.</p></div></div></Reveal>
        <Reveal delay={160}><div className="card h-full p-7"><div className="text-sm font-bold uppercase tracking-wider text-terra">Tous les jours</div><h3 className="mt-2 text-xl font-extrabold">Mon équipe d'employés IA</h3><p className="mt-3 text-ink/85"><Hl t="Mon usage le plus fou : **une équipe d'employés IA**. Ils construisent ce site, préparent mes contenus, et **négocient même pour moi** (bonjour le remboursement Squarespace). C'est un jeu vidéo, sauf que les victoires sont réelles."/></p><p className="mt-3 text-sm text-ink/60">Oui, je suis accro. Mais c'est la bonne addiction, cette fois.</p>
          <p className="mt-6 text-sm font-bold uppercase tracking-wider text-terra">Et le corps ?</p><p className="mt-2 text-ink/85">Sportif dans l'âme. Hyrox Paris bouclé en solo, pour une première, en 2 h 00 min 41 s.</p></div></Reveal>
      </div></section>
    <section className="mx-auto max-w-6xl px-5 py-20"><Reveal><div className="kicker">L'album</div><h2 className="h2 mt-3">Quelques preuves que je n'invente rien.</h2></Reveal>
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{album.map(([src, alt, cap], i) => <Reveal key={src} delay={(i % 3) * 80}><figure className={`polaroid ${["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-[1.5deg]", "rotate-[1.5deg]", "-rotate-1"][i % 7]}`}><span aria-hidden="true" className="tape"/><img src={`/img/${src}.webp`} alt={alt} loading="lazy" className={`aspect-[4/3] w-full ${src.startsWith("album-medium") ? "object-contain bg-creme" : "object-cover"}`}/><figcaption className="mt-3 text-center text-sm leading-snug text-ink/75">{cap}</figcaption></figure></Reveal>)}</div>
    </section>
    <section className="bg-pale"><div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-20 md:grid-cols-[.8fr_1.2fr]">
      <Reveal><figure><img src="/img/hyrox-paris.webp" alt="Onur à l'arrivée de Hyrox Paris, devant l'écran affichant 2:00:41" width="640" height="961" loading="lazy" className="mx-auto w-full max-w-xs rounded-2xl shadow-xl"/><figcaption className="mt-3 text-center text-sm text-ink/60">Hyrox Paris, en solo, pour une première. 2:00:41. Le sourire dit tout.</figcaption></figure></Reveal>
      <Reveal delay={100}><div className="kicker">5 choses que tu ne sais pas sur moi</div>
        <ul className="mt-5 space-y-4">{facts.map((f, i) => <li key={i} className="flex gap-4"><span className="font-extrabold text-terra">{i + 1}.</span><span>{f}</span></li>)}</ul></Reveal>
    </div></section>
    <section className="mx-auto max-w-4xl px-5 py-20"><Reveal><div className="kicker">Mes manies</div><h2 className="h2 mt-3">Ce que mes proches pourraient te raconter.</h2></Reveal>
      <div className="mt-8 flex flex-wrap gap-3">{manies.map((m, i) => <Reveal key={i} delay={i * 50}><span className="inline-block rounded-full border border-sable bg-white px-5 py-3 text-[15px] shadow-sm">{m}</span></Reveal>)}</div></section>
    <CtaBand title="Si tu as lu jusqu'ici, on va bien s'entendre." text="Apprendre l'IA : un guide de 10 minutes, une à deux fois par semaine. Gratuit, désinscription en un clic."/>
  </>);
}
