import { useState } from "react";
import { Link } from "react-router-dom";
import { A, useSeo, Reveal, SubscribeForm, Stats, CtaBand, Scribble, Hl } from "../lib";
const LION1 = "https://medium.com/essentiels/ce-que-jai-appris-en-participant-%C3%A0-lion-la-formation-de-thefamily-pour-rejoindre-des-start-ups-b26ac45c6e7e", LION2 = "https://medium.com/join-lion/lion-saison-3-jour-1-bienvenue-dans-la-jungle-des-startups-3eeebb378e77";
const PIXAR = "https://medium.com/essentiels/10-astuces-qu-une-ex-employ%C3%A9e-de-pixar-m-a-appris-sur-l-%C3%A9criture-cr%C3%A9ative-3d52c4a63afe";
const chapters: [string, string, string][] = [
  ["Les années radio", "Le micro, puis toutes les portes", "Vers 18 ans, je participe au concours **Oui Love Deezer**, imaginé par OUI FM et Deezer : chaque semaine, cinq candidats sont choisis pour diffuser leur playlist d'une heure, en direct, et la présenter à l'antenne avec l'animateur. Puis les auditeurs votent sur Deezer. **J'en sors lauréat.** C'est ce concours qui me fait entrer dans la radio. Sur **Radio Campus Paris**, je crée et j'anime ma propre émission, **TPDV, Tout près de vous**. Suivent un stage à **France Culture** et des **sketchs pour un humoriste**. Étudiant à la Sorbonne Nouvelle, je deviens aussi la mascotte des Départementales 2014, où mon équipe monte sur le podium."],
  ["2015", "Ticket for Change", "Ce tour a **changé la trajectoire de ma vie**. J'y découvre un monde que j'ignorais : des entrepreneurs, des humains bienveillants qui veulent vraiment changer les choses. Moi qui ai toujours voulu entreprendre, j'en ressors avec une certitude : je le ferai, mais autrement."],
  ["2016", "The Family, programme Lion, deux fois", "Fin 2016, je suis élève de Lion, saison 2. Une émulation folle, l'excitation des débuts de startup. Certains de ma promo sont devenus **millionnaires grâce à leurs parts**. Moi, j'en ressors avec quelque chose de moins liquide mais très rentable : l'envie de construire. La saison suivante, je reviens en ancien et je propose d'**écrire le récit de chaque journée sur Medium**, comme je l'avais fait pour les ateliers We Are Project. <a1>Ce que j'en ai appris</a1>, <a2>le récit du premier jour</a2>."],
  ["Mars 2016", "Écrire pour comprendre", "Une question m'obsède : **quels sont les ingrédients d'une vie réussie ?** Pour trouver, je lis les best-sellers de ceux qui sont tout en haut, j'apprends l'anglais au passage, je résume et je partage. Premier article sur Medium : <a>la créativité chez Pixar</a>. Suivront plus de 120 articles, sur la productivité, les habitudes, l'écriture. Medium me nomme **Top Writer en Éducation**, et dans d'autres catégories : à l'époque, très peu d'auteurs français avaient cette distinction."],
  ["2017 à 2019", "Le livre", "Je lance Essentiel sur Medium et ma newsletter La Minute Essentielle. Début 2018, j'annonce en public que je vais écrire un livre. **Eyrolles m'appelle deux semaines plus tard.** En 2019 sort « Petites habitudes, grandes réussites », vendu à **plus de 15 000 exemplaires**."],
  ["2020 à 2026", "Transmettre", "Je crée le Cercle Essentiel, puis j'accompagne des entrepreneurs et des dirigeants pendant six ans. **Plus de 100 personnes coachées, plus de 500 formées.**"],
  ["30 novembre 2022", "ChatGPT arrive", "J'écris sur Internet depuis 2016, alors je teste, je bidouille, je recommence. Un mentor me glisse : « **Onur, ne traîne pas, c'est le futur.** » Je n'ai pas traîné : je suis parmi **les premiers à parler d'IA sur LinkedIn**, et je lance la newsletter Apprendre l'IA."],
  ["Aujourd'hui", "Deux casquettes, et des tables pleines", "**Head of Content chez France IA**, solopreneur avec Apprendre l'IA, et bâtisseur de communautés : Aftermind et les Link Dinners. Toujours ce besoin de comprendre, puis de transmettre."],
];
const facts = [
  "J'ai parcouru plus de 500 livres et j'en ai résumé plus de 120 sur Medium.",
  "J'ai écrit des sketchs pour un humoriste. Les prompts, c'est venu après.",
  "J'adore les parfums. Une belle fragrance, c'est une signature qu'on ne voit pas.",
  "J'ai appris à nager à 34 ans, en quelques heures, en battant une peur d'enfance : on m'avait poussé dans un grand bassin à 5 ans. Aujourd'hui, l'eau et moi, on s'entend très bien.",
  "Ni café, ni alcool, ni soda. Mon carburant, ce sont les gens.",
  "J'ai bouclé Hyrox Paris en solo, pour ma toute première, ce qu'on déconseille en général. 2 h 00 min 41 s. Les 41 secondes, c'était pour le suspense.",
];
const manies = [
  "Je porte chance. Je suis très chanceux, alors autant en faire profiter les autres.",
  "Je parle beaucoup à mon ordinateur. Il répond, maintenant.",
    "Je mets mes proches en relation sans prévenir. Ça marche presque toujours.",
  "J'achète plus de livres que je n'en lis. J'appelle ça une bibliothèque d'avance.",
  "J'offre mon livre aux gens que je rencontre.",
  "J'ai toujours trop d'onglets ouverts.",
  "La musique, toujours. C'est elle qui m'aide à me concentrer.",
];
const LINKS: Record<string, string> = { a: PIXAR, a1: LION1, a2: LION2 };
const Tl = ({ t }: { t: string }) => <>{t.split(/(<a\d?>.*?<\/a\d?>)/).map((p, i) => { const m = p.match(/^<(a\d?)>(.*?)<\/a\d?>$/); return m ? <a key={i} href={LINKS[m[1]]} target="_blank" rel="noopener" className="font-semibold text-terra underline underline-offset-4">{m[2]}</a> : <Hl key={i} t={p}/>; })}</>;
const album: [string, string, string][] = [
  ["album-radio-tpdv", "L'équipe de l'émission TPDV sur Radio Campus Paris, Onur au milieu", "Radio Campus Paris : mon équipe de TPDV, Tout près de vous, l'émission que j'ai créée. On pointait la caméra. On pointait surtout nos rêves."],
  ["album-departementales-2014", "Affiche des Départementales 2014 de la Sorbonne Nouvelle avec Onur en mascotte", "La mascotte des Départementales 2014. Mon équipe est montée sur le podium."],
  ["album-lion-portrait", "Portrait d'Onur pendant le programme Lion de The Family en 2016", "Lion by The Family, 2016. Le portrait officiel. Il y a des plantes, donc c'est sérieux."],
  ["album-lion-promo", "Photo de groupe de la promotion Lion by The Family", "La promo Lion. Quelque part là-dedans, de futurs millionnaires. Et moi."],
  ["album-medium-top-writer", "E-mail de Medium annonçant à Onur qu'il est Top Writer en Éducation", "Le jour où Medium m'a dit « Top Writer in Education ». Je l'ai relu plusieurs fois."],
  ["album-aftermind-guiren", "Dîner Aftermind au restaurant Guiren, autour d'une grande table", "Dîner Aftermind au Guiren, janvier 2026. Une table, dix conversations, zéro pitch."],
  ["album-diner-2", "Convives souriants à la fin d'un Link Dinner organisé par Onur", "Fin de Link Dinner. Personne ne voulait partir. Comme d'habitude."],
  ["album-medium-profil", "Profil Medium d'Onur affichant Writer chez Join Lion by The Family", "Mon profil Medium de l'époque : Writer @_JoinLion by @_TheFamily."],
];
export default function APropos() {
  const [more, setMore] = useState(false);
  useSeo("À propos | Onur Karapinar", "Head of Content chez France IA, auteur chez Eyrolles, fondateur d'Aftermind et des Link Dinners. Curieux de tout, surtout des gens et de l'IA.");
  return (<>
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1.2fr_.8fr] md:py-20 [&>*]:min-w-0">
      <Reveal><div className="kicker">Salut, moi c'est Onur</div><h1 className="mt-4 break-words text-[2rem] font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">Curieux de tout. Surtout des gens. <Scribble>Et de l'IA.</Scribble></h1>
        <p className="mt-5 text-lg text-ink/80">Head of Content chez France IA, auteur d'un best-seller, fondateur d'Aftermind et des Link Dinners. Ce que j'aime le plus : provoquer de l'<b>inattendu positif</b> autour de moi.</p>
        <p className="mt-2 text-sm text-ink/60">Une expression empruntée à une conférence de Philippe Gabilliet sur la chance.</p>
        <div className="mt-7"><SubscribeForm/></div><p className="mt-3 text-sm text-ink/60">Ma newsletter Apprendre l'IA. Gratuit, 13 000 lecteurs.</p></Reveal>
      <Reveal delay={150}><img src={`${A}/portrait-collage-720.webp`} alt="Portrait d'Onur Karapinar" width="384" height="480" className="mx-auto w-full max-w-sm"/></Reveal>
    </section>
    <section className="border-y border-sable bg-white/60"><div className="mx-auto max-w-6xl px-5 py-12"><Stats items={[["12 M", "de vues en 10 ans, toutes plateformes"], ["13 000", "lecteurs de la newsletter"], ["30 000", "abonnés LinkedIn"], ["15 000+", "livres vendus"], ["100+", "personnes coachées"], ["500+", "personnes formées"]]}/></div></section>
    <section className="mx-auto max-w-4xl px-5 py-20"><Reveal><div className="kicker">Mon histoire</div><h2 className="h2 mt-3">De la radio à l'IA : une curiosité qui pousse toutes les portes.</h2></Reveal>
      <ol className="mt-10 border-l-2 border-sable">{chapters.map(([d, t, x], i) => <Reveal key={t} delay={i * 40} className="mb-10 last:mb-0"><li className="relative pl-8"><span aria-hidden="true" className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-creme bg-terra"/><div className="text-sm font-bold uppercase tracking-wider text-terra">{d}</div><h3 className="mt-1 text-xl font-extrabold">{t}</h3><p className="mt-2 leading-relaxed text-ink/85"><Tl t={x}/></p></li></Reveal>)}</ol>
      <Reveal className="mt-12 rounded-2xl bg-pale/60 p-6 text-ink/85">Et le livre ? Il parle de tout ça : des petits gestes répétés qui finissent par changer une trajectoire. <Link to="/livre" className="font-bold text-terra underline underline-offset-4">Le découvrir</Link></Reveal>
    </section>
    <section className="bg-ink text-creme"><div className="mx-auto max-w-4xl px-5 py-20"><Reveal><div className="kicker !text-terral">Ce que je crois</div>
      <p className="mt-4 text-2xl font-bold leading-snug md:text-3xl">Comme dit la formule, le futur est déjà là. Il n'est juste pas encore distribué. <span className="text-terral">Ma mission : prévenir tout le monde.</span></p>
      <div className="mt-8 grid gap-6 text-creme/85 md:grid-cols-3">
        <p>L'IA est la technologie la plus puissante jamais mise entre les mains de l'humanité. Et elle ne demande pas de savoir coder.</p>
        <p>Beaucoup ont raté le début d'Internet. Moi, j'étais trop jeune. Cette fois, on est pile à l'heure.</p>
        <p>La preuve : ce site, je l'ai codé avec l'IA, sans être développeur. Bien utilisée, c'est franchement addictif.</p></div></Reveal></div></section>
    <section className="mx-auto max-w-6xl px-5 py-20"><Reveal><div className="kicker">Ce que je construis</div><h2 className="h2 mt-3">Je collectionne les gens brillants. Et je les mets à la même table.</h2><p className="mt-3 text-ink/70">Fondateur d'Aftermind et des Link Dinners : deux communautés, pas des business. Juste des gens bien, réunis.</p></Reveal>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <Reveal><div className="card flex h-full flex-col overflow-hidden"><img src="/img/aftermind-shinko.webp" alt="Les membres d'Aftermind réunis pour le dîner d'anniversaire d'Onur au restaurant Shinko à Paris" loading="lazy" className="aspect-[4/3] w-full object-cover"/><div className="flex-1 p-7"><div className="text-sm font-bold uppercase tracking-wider text-terra">Depuis juin 2025</div><h3 className="mt-2 text-2xl font-extrabold">Aftermind</h3><p className="mt-3 text-ink/85"><Hl t="Entreprendre seul, c'est parfois très seul. Alors j'ai réuni **dix personnes que j'aimais bien**. Un dîner par mois, des lives d'entraide, puis l'ouverture sur recommandation. Aujourd'hui, **plus de 40 entrepreneurs indépendants brillants**."/></p><p className="mt-4 text-sm text-ink/60">Mon anniversaire avec Aftermind au Shinko. 18 à table.</p></div></div></Reveal>
        <Reveal delay={100}><div className="card flex h-full flex-col overflow-hidden"><img src="/img/album-diner-1.webp" alt="Les convives d'un Link Dinner réunis dans un restaurant à Paris" loading="lazy" className="aspect-[4/3] w-full object-cover"/><div className="flex-1 p-7"><div className="text-sm font-bold uppercase tracking-wider text-terra">Chaque mois</div><h3 className="mt-2 text-2xl font-extrabold">Les Link Dinners</h3><p className="mt-3 text-ink/85"><Hl t="Tout part d'un défi inspiré des recherches de Richard Wiseman sur la chance : dîner avec une centaine d'inconnus en trois mois grâce à Timeleft. Résultat : **120**. Depuis, chaque mois, **cinq à sept personnes sélectionnées** se retrouvent à une belle table à Paris."/></p><p className="mt-4 text-sm text-ink/60">19 h 30 : des inconnus se serrent la main. 23 h 30 : personne ne veut partir.</p></div></div></Reveal>
      </div></section>
    <section className="mx-auto max-w-6xl px-5 py-20"><Reveal><div className="kicker">L'album</div><h2 className="h2 mt-3">Quelques preuves que je n'invente rien.</h2></Reveal>
      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4">{album.slice(0, more ? album.length : 4).map(([src, alt, cap], i) => <figure key={src} className={`polaroid !p-2 !pb-3 ${["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "-rotate-[1.5deg]", "rotate-[1.5deg]", "-rotate-1", "rotate-1"][i % 8]}`}><span aria-hidden="true" className="tape"/><img src={`/img/${src}.webp`} alt={alt} loading="lazy" className={`aspect-[4/3] w-full ${src.startsWith("album-medium") ? "object-contain bg-creme" : "object-cover"}`}/><figcaption className="mt-2 text-center text-xs leading-snug text-ink/75 sm:text-sm">{cap}</figcaption></figure>)}</div>
      {album.length > 4 && <div className="mt-10 text-center"><button onClick={() => setMore(!more)} aria-expanded={more} className="btn-ghost">{more ? "Voir moins" : `Voir plus de photos (${album.length - 4})`}</button></div>}
    </section>
    <section className="bg-pale"><div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-20 md:grid-cols-[.8fr_1.2fr]">
      <Reveal><figure><img src="/img/hyrox-paris.webp" alt="Onur à l'arrivée de Hyrox Paris, devant l'écran affichant 2:00:41" width="640" height="961" loading="lazy" className="mx-auto w-full max-w-xs rounded-2xl shadow-xl"/><figcaption className="mt-3 text-center text-sm text-ink/60">Hyrox Paris, en solo, pour une première. 2:00:41. Le sourire dit tout.</figcaption></figure></Reveal>
      <Reveal delay={100}><div className="kicker">6 choses que tu ne sais pas sur moi</div>
        <ul className="mt-5 space-y-4">{facts.map((f, i) => <li key={i} className="flex gap-4"><span className="font-extrabold text-terra">{i + 1}.</span><span>{f}</span></li>)}</ul></Reveal>
    </div></section>
    <section className="mx-auto max-w-4xl px-5 py-20"><Reveal><div className="kicker">Mes manies</div><h2 className="h2 mt-3">Ce que mes proches pourraient te raconter.</h2></Reveal>
      <div className="mt-8 flex flex-wrap gap-3">{manies.map((m, i) => <Reveal key={i} delay={i * 50}><span className="inline-block rounded-full border border-sable bg-white px-5 py-3 text-[15px] shadow-sm">{m}</span></Reveal>)}</div></section>
    <CtaBand title="Si tu as lu jusqu'ici, on va bien s'entendre." text="Apprendre l'IA : un guide de 10 minutes, une à deux fois par semaine. Gratuit, désinscription en un clic."/>
  </>);
}
