import { useState } from "react";
import { A, PDF, useSeo, Reveal, CtaBand, Scribble, Hl, AMAZON as AMZ, KINDLE, amzRel } from "../lib";
import { Book3D } from "../Book3D";
const buy = [
  { n: "Amazon", f: "Broché", u: AMZ, a: true }, { n: "Amazon", f: "Kindle", u: KINDLE, a: true },
  { n: "Fnac", f: "Broché", u: "https://www.fnac.com/a13185949/Onur-Karapinar-Petites-habitudes-grandes-reussites" },
  { n: "Decitre", f: "Broché", u: "https://www.decitre.fr/livres/petites-habitudes-grandes-reussites-9782212572018.html" },
  { n: "Éditions Eyrolles", f: "Broché", u: "https://www.editions-eyrolles.com/livre/petites-habitudes-grandes-reussites" },
  { n: "Audible", f: "Livre audio, 8 h 32", u: "https://www.audible.fr/pd/B08F5JK48R" },
];
const recos = [
  { n: "Matthieu Dardaillon", r: "entrepreneur, cofondateur de Ticket for Change", f: "matthieu-dardaillon", q: "Onur Karapinar nous offre **un livre indispensable** - complet, clair, prêt à l'emploi - pour prendre ou reprendre le pouvoir sur nos vies." },
  { n: "Olivier Roland", r: "entrepreneur et auteur", f: "olivier-roland", q: "Remplacer les mauvaises habitudes par les bonnes est essentiel pour réussir dans la vie, personnellement et professionnellement. **Ce livre est parfait pour cela.**" },
  { n: "Benoît Wojtenka", r: "cofondateur de BonneGueule, préfacier", f: "benoit-wojtenka", q: "**Changer ses habitudes, c'est changer sa vie.** Et c'est ce qu'Onur va vous apprendre dans ce livre, un indispensable pour tous ceux qui veulent atteindre intelligemment leurs objectifs." },
];
const learn = [
  ["Comprendre ton cerveau", "Pourquoi il crée des habitudes, la boucle des habitudes, et pourquoi compter sur la motivation ne marche pas."],
  ["Créer une habitude en 7 étapes", "De l'inventaire de tes habitudes au choix d'une habitude clé, en commençant petit avec un déclencheur évident."],
  ["Te défaire d'une mauvaise habitude en 6 étapes", "Repérer les déclencheurs, la rendre invisible et difficile, et même planifier ton échec."],
  ["51 habitudes prêtes à l'emploi", "Productivité, santé, développement personnel, relations : pour chacune, le pourquoi et le comment."],
];
const keys = [
  ["#5", "Définis tes priorités avec la méthode ABCDE", "Classer tes tâches pour savoir quoi faire en premier."],
  ["#6", "Fixe-toi trois objectifs quotidiens", "Trois choses à accomplir dans la journée, pas trente."],
  ["#8", "Plonge dans le Deep Work", "Des plages de concentration sans interruption pour le travail qui compte."],
  ["#12", "Vise l'Inbox Zéro", "Reprendre la main sur ta boîte mail."],
  ["#15", "Dors au moins 7 heures par jour", "Le sommeil comme base de tout le reste."],
  ["#22", "Fais la séance d'exercice de 7 minutes", "Bouger un peu chaque jour, même sans salle de sport."],
  ["#28", "Lis au moins deux pages par jour", "Un objectif si petit qu'il devient impossible à rater."],
  ["#36", "Jette au moins un article par jour", "Désencombrer ton intérieur, un objet à la fois."],
];
const parts = [
  ["Introduction", "Tout commence par nos habitudes", ["Mon histoire", "Ce que j'ai appris sur les habitudes", "Comment ce livre te sera utile"]],
  ["Partie I", "Les principes fondamentaux : la psychologie des habitudes", ["Comment entraîner un cerveau", "La boucle des habitudes", "Combien de temps faut-il pour prendre une nouvelle habitude ?", "La fatigue décisionnelle"]],
  ["Partie II", "Comment créer de bonnes habitudes", ["Dresse l'inventaire de tes habitudes", "Choisis une habitude clé", "Commence petit", "Associe-la à un déclencheur évident", "Récompense-toi tout de suite", "Sois ton propre architecte du choix", "Trouve ta tribu"]],
  ["Partie III", "Comment te débarrasser de tes mauvaises habitudes", ["Identifie la mauvaise habitude", "Identifie les déclencheurs", "Rends-la invisible et difficile", "Trouve un partenaire de responsabilité", "Crée un contrat d'engagement", "Planifie ton échec"]],
  ["Partie IV", "51 habitudes pour devenir la meilleure version de toi-même", ["14 habitudes productives", "11 habitudes santé", "18 habitudes de développement personnel", "8 habitudes sociales"]],
];
const reviews = [
  { a: "Agnès L.", d: "14 avril 2020", s: 5, q: "J'ai dévoré de A à Z le livre \"Petites habitudes, grandes réussites\" car il est **très facile à lire, à comprendre et à mettre en pratique**." },
  { a: "Arnaud M", d: "4 août 2019", s: 5, q: "Ce livre n'est ni une histoire passionnante, ni une innovation extraordinaire. En revanche, je pense que c'est **une mine d'or** pour toute personne voulant améliorer sa vie." },
  { a: "Veyrat Marine", d: "23 août 2019", s: 5, q: "Chaque habitude est présentée de manière très pédagogique, en exposant ses bienfaits et des **conseils de mise en application immédiate**." },
];
const FNAC = "https://www.fnac.com/a13185949/Onur-Karapinar-Petites-habitudes-grandes-reussites";
const fnac = [
  { a: "Yamina F.", d: "15 mars 2019", v: true, q: "Ce livre est simplement génial. [...] Ce n'est pas du bla-bla en long, en large et en travers comme beaucoup de livres de développement personnel célèbres. **On va à l'essentiel avec des conseils très pertinents.**" },
  { a: "Vanessa G.", d: "7 juillet 2019", v: false, q: "Ici, Onur Karapinar donne **toutes les étapes à franchir par petits paliers** (comme ça, cela paraît moins insurmontable)." },
  { a: "Régine B.", d: "11 mars 2019", v: false, q: "Un livre très documenté, instructif, concret, **avec un brin d’humour** qui en fait une lecture passionnante et nécessaire pour tous ceux et celles qui souhaitent évoluer et changer leur vie personnelle ou professionnelle !" },
];
const faq = [
  ["C'est pour qui ?", "Pour toi si tu veux prendre de bonnes habitudes, te défaire de celles qui te coûtent, ou si tu veux changer sans savoir par où commencer."],
  ["Faut-il le lire dans l'ordre ?", "Les trois premières parties posent la méthode, mieux vaut les lire d'abord. Les 51 habitudes de la partie IV se piochent ensuite selon tes envies."],
  ["Il y a de la théorie ?", "Un peu, juste ce qu'il faut. La première partie explique la science du comportement. Le reste est un manuel pratique."],
  ["Il existe en numérique et en audio ?", "Oui : broché, Kindle et livre audio (8 h 32, lu par Nicolas Djermag)."],
  ["Je peux le feuilleter avant ?", PDF ? "Oui, les 27 premières pages sont en accès libre, sans e-mail." : "Oui, avec la fonction « Feuilleter » de la page Amazon."],
];
const Stars = ({ n = 4.5 }) => <span aria-hidden="true" className="text-terral">{"★★★★★".slice(0, Math.floor(n))}{n % 1 ? <span style={{ background: "linear-gradient(90deg,#D96A4E 50%,#E8E2D6 50%)", WebkitBackgroundClip: "text", color: "transparent" }}>★</span> : null}</span>;
export default function Livre() {
  useSeo("Petites habitudes, grandes réussites | Le livre d'Onur Karapinar", "51 habitudes concrètes et une méthode en 7 étapes pour les installer. Plus de 15 000 exemplaires, 4,5/5 sur 364 avis Amazon. Lis les 27 premières pages gratuitement.");
  const [open, setOpen] = useState<number | null>(null);
  const toBuy = () => document.getElementById("acheter")?.scrollIntoView({ behavior: "smooth" });
  return (<div className="pb-20 md:pb-0">
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[.7fr_1.3fr] md:py-20">
      <Reveal><Book3D src={`${A}/livre-couverture.jpg`}/></Reveal>
      <Reveal delay={100}><div className="flex items-center gap-2"><Stars/><span className="text-sm text-ink/70">4,5 sur 5, 364 évaluations Amazon</span></div>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Tu sais ce qu'il faudrait changer. Ce livre t'aide à le faire, <Scribble>enfin</Scribble>.</h1>
        <p className="mt-4 text-lg text-ink/80">51 habitudes concrètes et une méthode pour les installer, une petite étape à la fois. Pas de bain glacé, pas de réveil à 5 h obligatoire.</p>
        <div className="mt-7 flex flex-wrap gap-3"><button onClick={toBuy} className="btn">Commander le livre</button><a href={PDF || AMZ} rel={PDF ? undefined : amzRel} className="btn-ghost">{PDF ? "Lire les 27 premières pages" : "Feuilleter le début"}</a></div>
        <p className="mt-3 text-sm text-ink/60">Eyrolles, 2019 · 310 pages · broché, Kindle et audio · préface de Benoît Wojtenka</p></Reveal>
    </section>
    <section className="border-y border-sable bg-white"><div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-5 py-10 text-center md:grid-cols-4">
      {[["15 000+", "exemplaires vendus"], ["4,5 / 5", "sur 364 avis Amazon"], ["66 %", "d'avis 5 étoiles"], ["3 ans", "de recherche et d'écriture"]].map(([a, b], i) => <Reveal key={b} delay={i * 80}><div className="font-display text-3xl font-extrabold text-ink">{a}</div><div className="text-sm text-ink/70">{b}</div></Reveal>)}
    </div></section>
    <section className="mx-auto max-w-6xl px-5 py-20"><Reveal><div className="kicker">Ils l'ont lu avant toi</div><h2 className="h2 mt-3">Mot pour mot, en quatrième de couverture.</h2></Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">{recos.map((r, i) => <Reveal key={r.n} delay={i * 100}><figure className="card h-full p-6"><blockquote>« <Hl t={r.q}/> »</blockquote><figcaption className="mt-5 flex items-center gap-3"><img src={`${A}/reco-${r.f}.jpg`} alt={`Photo de ${r.n}`} width="48" height="48" loading="lazy" className="h-12 w-12 rounded-full object-cover"/><span className="text-sm"><b>{r.n}</b><br/><span className="text-ink/60">{r.r}</span></span></figcaption></figure></Reveal>)}</div>
    </section>
    <section className="bg-pale"><div className="mx-auto max-w-3xl px-5 py-20"><Reveal><div className="kicker">Le vrai problème</div><h2 className="h2 mt-3">Le problème n'est pas ta motivation.</h2>
      <p className="mt-5 text-lg text-ink/85">Tu as déjà commencé une routine un lundi. Mercredi, elle avait disparu. Ce n'est pas un manque de volonté : ce sont tes stratégies qui ne marchent pas. Ce livre te donne celles qui marchent, et découpe chaque bonne habitude en un geste assez petit pour tenir dans une vraie journée.</p></Reveal></div></section>
    <section className="mx-auto max-w-6xl px-5 py-20"><Reveal><div className="kicker">Ce que tu vas apprendre</div><h2 className="h2 mt-3">Une méthode, puis 51 habitudes.</h2></Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{learn.map(([t, d], i) => <Reveal key={t} delay={i * 80}><div className="card h-full p-6"><span className="font-display text-3xl font-extrabold text-terra">0{i + 1}</span><h3 className="mt-3 text-lg leading-snug">{t}</h3><p className="mt-2 text-[15px] text-ink/75">{d}</p></div></Reveal>)}</div>
      <Reveal className="mt-16"><h3 className="text-2xl">Huit habitudes parmi les 51</h3></Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">{keys.map(([n, t, d]) => <div key={n} className="flex gap-4 rounded-2xl border border-sable bg-white p-5"><span className="font-display text-lg font-extrabold text-terra">{n}</span><div><div className="font-bold">{t}</div><div className="text-[15px] text-ink/70">{d}</div></div></div>)}</div>
    </section>
    <section className="bg-pale"><div className="mx-auto max-w-3xl px-5 py-20"><Reveal><div className="kicker">Sommaire</div><h2 className="h2 mt-3">Un œil dans le sommaire.</h2></Reveal>
      <div className="mt-8 space-y-3">{parts.map(([k, t, items], i) => <div key={k as string} className="rounded-2xl border border-sable bg-white"><button aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)} className="flex min-h-[56px] w-full items-center justify-between gap-4 p-5 text-left"><span><span className="text-sm font-bold text-terra">{k}</span><br/><span className="font-bold">{t}</span></span><span aria-hidden="true" className="text-2xl text-terra">{open === i ? "−" : "+"}</span></button>
        {open === i && <ul className="space-y-2 px-5 pb-5 text-[15px] text-ink/80">{(items as string[]).map(x => <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terral"/>{x}</li>)}</ul>}</div>)}</div>
    </div></section>
    <section className="mx-auto max-w-3xl px-5 py-20 text-center"><Reveal><div className="kicker">Gratuit, sans e-mail</div><h2 className="h2 mt-3">{PDF ? "Lis les 27 premières pages." : "Feuillette le début."}</h2>
      <p className="mt-4 text-ink/80">Pas envie d'acheter un livre sur la foi d'une page web ? Moi non plus. Feuillette le début. Si tu te surprends à souligner une phrase, tu sais ce qu'il te reste à faire.</p>
      <a href={PDF || AMZ} rel={PDF ? undefined : amzRel} className="btn mt-7">{PDF ? "Lire l'extrait (PDF)" : "Feuilleter sur Amazon"}</a></Reveal>
      {PDF && <Reveal className="mt-12"><a href={PDF} aria-label="Ouvrir l'extrait PDF"><img src="/img/extrait-double-page.webp" alt="Double page d'ouverture de l'introduction du livre : Tout commence par nos habitudes" width="1100" height="778" loading="lazy" className="mx-auto w-full rounded-lg border border-sable shadow-2xl transition hover:-translate-y-1"/></a></Reveal>}</section>
    <section className="bg-pale"><div className="mx-auto max-w-5xl px-5 py-20"><Reveal><div className="kicker">Avis Amazon.fr, achats vérifiés</div><h2 className="h2 mt-3">Ce qu'en disent les lecteurs.</h2></Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-3">{reviews.map((r, i) => <Reveal key={r.a} delay={i * 100}><figure className="card h-full p-6"><Stars n={r.s}/><blockquote className="mt-3">« <Hl t={r.q}/> »</blockquote><figcaption className="mt-4 text-sm text-ink/60"><b className="text-ink">{r.a}</b>, Amazon.fr, {r.d}</figcaption></figure></Reveal>)}</div>
      <h3 className="mt-14 text-2xl">Avis Fnac <span className="text-base font-semibold text-ink/60">· 14 avis, 4,9 / 5</span></h3>
      <div className="mt-6 grid gap-6 md:grid-cols-3">{fnac.map(r => <figure key={r.a} className="card h-full p-6"><Stars n={5}/><blockquote className="mt-3">« <Hl t={r.q}/> »</blockquote><figcaption className="mt-4 text-sm text-ink/60"><b className="text-ink">{r.a}</b>, Avis Fnac, {r.d}{r.v ? ", achat vérifié" : ""}</figcaption></figure>)}</div>
      <div className="mt-6 flex flex-wrap gap-x-6"><a href={FNAC} target="_blank" rel="noopener" className="inline-flex min-h-[44px] items-center font-bold text-terra underline underline-offset-4">Lire les avis sur la Fnac</a>
      <a href={AMZ + "#customerReviews"} rel={amzRel} className="mt-6 inline-flex min-h-[44px] items-center font-bold text-terra underline underline-offset-4">Lire les 364 avis sur Amazon</a></div>
    </div></section>
    <section className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-20 md:grid-cols-[.6fr_1.4fr]"><Reveal><img src={`${A}/portrait-studio.webp`} alt="Portrait d'Onur Karapinar" width="640" height="640" loading="lazy" className="mx-auto w-full max-w-[260px] rotate-2 rounded-3xl shadow-xl"/></Reveal>
      <Reveal delay={100}><div className="kicker">L'auteur</div><h2 className="h2 mt-3">Qui l'a écrit.</h2>
        <p className="mt-4 text-ink/85">Je m'appelle Onur. Avant d'écrire sur l'IA, j'ai écrit sur les habitudes. Ce livre est le fruit de trois ans de recherche et d'écriture, et de beaucoup de tests sur moi, ratés compris. Ce qui marchait tenait toujours en un geste minuscule, répété. Aujourd'hui, j'applique la même idée à l'IA dans ma newsletter.</p></Reveal></section>
    <section id="acheter" className="scroll-mt-20 bg-ink text-creme"><div className="mx-auto max-w-5xl px-5 py-20"><Reveal><div className="kicker !text-pale">Où l'acheter</div><h2 className="h2 mt-3">Choisis ton format.</h2></Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{buy.map((b: any) => <a key={b.n + b.f} href={b.u} target="_blank" rel={b.a ? amzRel : "noopener"} className="flex min-h-[72px] items-center justify-between rounded-2xl border border-creme/20 p-5 transition hover:border-terral hover:bg-creme/5"><span><b>{b.n}</b><br/><span className="text-sm text-creme/70">{b.f}</span></span><span className="text-terral">→</span></a>)}</div>
      <p className="mt-6 text-sm text-creme/60">Ou chez ton libraire : ISBN 978-2-212-57201-8. Les liens Amazon sont affiliés : si tu achètes via ces liens, je touche une petite commission, sans surcoût pour toi.</p></div></section>
    <section className="mx-auto max-w-3xl px-5 py-20"><Reveal><div className="kicker">Questions fréquentes</div><h2 className="h2 mt-3">Avant de te lancer.</h2></Reveal>
      <div className="mt-8 divide-y divide-sable">{faq.map(([q, a]) => <details key={q} className="group py-4"><summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between font-bold">{q}<span aria-hidden="true" className="text-terra group-open:rotate-45 transition">+</span></summary><p className="mt-2 text-ink/80">{a}</p></details>)}</div></section>
    <section className="bg-pale"><div className="mx-auto max-w-3xl px-5 py-20 text-center"><Reveal><h2 className="h2">Un petit geste ce soir. Un grand changement dans six mois.</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-3"><button onClick={toBuy} className="btn">Commander le livre</button><a href={PDF || AMZ} rel={PDF ? undefined : amzRel} className="btn-ghost">{PDF ? "Lire l'extrait" : "Feuilleter le début"}</a></div></Reveal></div></section>
    <CtaBand title="Le livre parlait de petits gestes. L'IA, c'est pareil." text="Un guide de 10 minutes, une à deux fois par semaine. Gratuit."/>
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-sable bg-creme/95 px-4 py-3 backdrop-blur md:hidden"><span className="text-sm"><b>Le livre</b> · 4,5/5</span><button onClick={toBuy} className="btn !min-h-[44px] !px-5 !py-2 text-sm">Commander</button></div>
  </div>);
}
