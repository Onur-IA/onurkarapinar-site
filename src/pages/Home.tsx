import { useState, useEffect } from "react"; import { Link } from "react-router-dom";
import { Scribble, Arrow, A, SUB, PDF, useSeo, Reveal, SubscribeForm, Copy, Quote, Stats, CtaBand } from "../lib";
import { guides, GuideCard, fdate, img } from "../guides";
import { tools, DISCLOSURE } from "../data/tools";
import { ToolCard } from "./Outils";
const prompts = [
  { t: "Ce que l'IA peut faire à ma place", s: "Trois tâches de ta semaine, déléguées.", p: "Pose-moi 5 questions sur mon travail, une par une. Ensuite, liste les 3 tâches de ma semaine que tu pourrais faire à ma place, avec le prompt exact pour chacune." },
  { t: "Mon mail le plus pénible", s: "Celui que tu repousses depuis trois jours.", p: "Je dois écrire un mail que je repousse depuis des jours. Pose-moi d'abord 3 questions : à qui, pourquoi, et ce que je crains. Puis rédige 2 versions courtes, une directe et une plus diplomate, et dis-moi laquelle tu enverrais à ma place." },
  { t: "Mon prof particulier", s: "Comprendre n'importe quoi en 5 minutes.", p: "Explique-moi [un sujet qui me bloque] comme si j'avais 12 ans, avec un exemple de la vie quotidienne. Ensuite, pose-moi 3 questions pour vérifier que j'ai compris, une par une, et corrige-moi gentiment." },
];
const S = "https://onurkarapinar.substack.com/p/";
const outcomes = [
  { t: "Configurer Claude pour qu'il te connaisse", d: "Un fichier contexte, et il arrête de te répondre comme à un inconnu.", u: S + "fichier-contexte-claude" },
  { t: "Ne plus jamais retaper tes prompts", d: "Tes demandes récurrentes deviennent des commandes en un clic.", u: S + "claude-skills" },
  { t: "Créer tes visuels sans graphiste", d: "Des images propres pour tes posts et présentations, en quelques minutes.", u: S + "nano-banana-2-le-guide-pour-bien" },
  { t: "Refaire ton profil LinkedIn", d: "Titre, résumé, expériences : réécrits avec l'IA, en gardant ta voix.", u: S + "jai-refait-tout-mon-profil-linkedin" },
];
const logos = ["Challenge", "FrenchWeb", "Hubspot", "WTTJ", "Livementor", "Eyrolles"];
const H = "/img";
const LOGO_H: Record<string, number> = {"Challenge": 30.4, "Eyrolles": 30.1, "FrenchWeb": 26.8, "Hubspot": 32.1, "Livementor": 20.5, "WTTJ": 34.0};
export default function Home() {
  useSeo("Onur Karapinar | L'IA, vraiment simple", "Un guide IA de 10 minutes, une à deux fois par semaine. Pas à pas, avec captures et méthode détaillée. Gratuit, déjà 13 000 lecteurs.");
  const [tab, setTab] = useState(0);
  const full = prompts[0].p; const [n, setN] = useState(0);
  useEffect(() => { if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setN(full.length); return; } const t = setInterval(() => setN(x => x >= full.length + 40 ? 0 : x + 1), 38); return () => clearInterval(t); }, []);
  const typed = full.slice(0, Math.min(n, full.length));
  return (<>
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-pale/60 blur-3xl"/>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 md:grid-cols-[1.05fr_.95fr] md:pt-20">
        <Reveal><div className="inline-flex items-center gap-2 rounded-full border border-sable bg-white px-4 py-1.5 text-sm font-semibold"><span className="h-2 w-2 animate-pulse rounded-full bg-terral"/>Salut, moi c'est Onur</div>
          <h1 className="mt-6 text-[2.9rem] leading-[1.02] md:text-[4.6rem]">L'IA, <Scribble>vraiment simple.</Scribble></h1>
          <p className="mt-6 max-w-[34ch] text-xl leading-relaxed text-ink/80">Une à deux fois par semaine, je t'envoie un guide qui règle un vrai problème de ton quotidien avec l'IA.</p>
          <p className="mt-6 text-base text-ink/80">Chaque guide : 10 minutes, des captures à chaque étape et la méthode détaillée.</p>
          <div className="mt-6"><SubscribeForm/></div>
          <div className="mt-4 flex items-center gap-3 text-sm text-ink/70"><div className="flex shrink-0 -space-x-2">{["t-hamac","t-pierre","t-laurent","t-yoann"].map(t => <img key={t} src={`${H}/${t}.jpg`} alt="Photo d'un lecteur" width="32" height="32" className="h-8 w-8 rounded-full border-2 border-creme object-cover"/>)}</div><span>Gratuit. <b className="text-ink">13 000 lecteurs</b>, 30 000 sur LinkedIn, auteur chez Eyrolles.</span></div>
          <p className="mt-2 text-sm text-ink/70">Déjà abonné ? <Link to="/commencer-ici" className="inline-block py-3 font-bold text-terra underline underline-offset-4">Commence ici</Link></p>
        </Reveal>
        <Reveal delay={150} className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-x-6 bottom-0 top-10 -rotate-3 rounded-[2.5rem] bg-terral"/>
          <img src={`${A}/portrait-collage-720.webp`} srcSet={`${A}/portrait-collage-440.webp 440w, ${A}/portrait-collage-720.webp 720w`} sizes="(min-width:768px) 420px, 88vw" width="720" height="697" fetchPriority="high" alt="Portrait d'Onur Karapinar" className="relative mx-auto w-[88%] drop-shadow-xl"/>
          <div className="floaty relative z-10 mx-auto -mt-6 w-[92%] rounded-2xl md:-mt-10 border border-sable bg-white p-4 shadow-2xl md:-left-12" style={{ ["--r" as any]: "-2deg" }}>
            <div className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-terral"/><span className="h-2.5 w-2.5 rounded-full bg-sable"/><span className="h-2.5 w-2.5 rounded-full bg-sable"/><span className="ml-2 text-xs font-semibold text-ink/50">Ton prompt du jour</span></div>
            <p className="caret mt-3 min-h-[3em] font-mono text-[13px] leading-snug">{typed}</p>
          </div>
          <div className="floaty absolute -right-2 top-6 rounded-2xl bg-ink px-4 py-3 text-creme shadow-xl md:-right-6" style={{ ["--r" as any]: "4deg", animationDelay: "1.5s" }}><div className="font-display text-2xl font-extrabold">10 min</div><div className="text-xs text-creme/70">par guide, montre en main</div></div>
        </Reveal>
      </div>
    </section>
    <section className="border-y border-sable bg-white"><div className="mx-auto max-w-6xl px-5 py-12">
      <Stats items={[["13 000", "lecteurs de la newsletter"], ["30 000", "abonnés LinkedIn"], ["15 000+", "livres vendus"], ["100+", "clients coachés"], ["500+", "entrepreneurs formés"]]}/>
      <div className="mt-12 text-center text-sm font-semibold uppercase tracking-[.18em] text-ink/50">On a parlé de moi dans</div>
      <div className="mt-4 grid grid-cols-3 items-center gap-x-6 gap-y-4 md:grid-cols-6">{logos.map(l => <div key={l} className="flex h-16 items-center justify-center"><img src={`${H}/logos-${l}.webp`} alt={`Logo ${l}`} loading="lazy" style={{ height: `${LOGO_H[l] ?? 28}px` }} className="w-auto max-w-[110px] object-contain transition hover:scale-105 md:max-w-[140px]"/></div>)}</div>
    </div></section>
    <section id="essaie" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <Reveal><div className="kicker">Essaie, là, tout de suite</div><h2 className="h2 mt-3">Choisis un prompt. <Scribble>Regarde</Scribble> ce qui se passe. <Arrow/></h2>
        <p className="mt-3 max-w-4xl text-ink/70">Copie-le, colle-le dans ChatGPT ou Claude. Si ça te fait sourire, <span className="whitespace-nowrap">imagine un guide entier.</span></p></Reveal>
      <Reveal className="mt-8 grid gap-5 md:grid-cols-[.8fr_1.2fr]">
        <div role="tablist" className="flex gap-3 overflow-x-auto pb-2 md:flex-col md:overflow-visible">
          {prompts.map((p, i) => <button key={i} role="tab" aria-selected={tab === i} onClick={() => setTab(i)} className={"min-w-[220px] rounded-2xl border-2 p-4 text-left transition md:min-w-0 " + (tab === i ? "border-terra bg-white shadow-md" : "border-sable hover:border-ink/40")}><div className="font-bold">{p.t}</div><div className="text-sm text-ink/60">{p.s}</div></button>)}
        </div>
        <div className="rounded-2xl bg-ink p-6 text-creme md:p-8">
          <div className="kicker !text-pale">{prompts[tab].t}</div>
          <pre className="mt-4 whitespace-pre-wrap font-mono text-[15px] leading-relaxed">{prompts[tab].p}</pre>
          <div className="mt-6 flex flex-wrap items-center gap-3"><Copy text={prompts[tab].p}/><a className="btn-ghost !border-creme/40 !text-creme hover:!bg-creme hover:!text-ink" href={"https://chatgpt.com/?q=" + encodeURIComponent(prompts[tab].p)} target="_blank" rel="noopener">Essayer dans ChatGPT</a><a className="btn-ghost !border-creme/40 !text-creme hover:!bg-creme hover:!text-ink" href={"https://claude.ai/new?q=" + encodeURIComponent(prompts[tab].p)} target="_blank" rel="noopener">Essayer dans Claude</a></div>
          <p className="mt-3 text-xs text-creme/60">Le prompt s'ouvre déjà rempli. Sinon, copie-le et colle-le.</p>
        </div>
      </Reveal>
    </section>
    <section className="bg-pale"><div className="mx-auto max-w-6xl px-5 py-24">
      <Reveal><div className="kicker">Apprendre l'IA, concrètement</div><h2 className="h2 mt-3">Ce que tu sauras faire.</h2>
        <p className="mt-3 max-w-2xl text-ink/70">Chaque compétence tient dans un guide. Tu le suis une fois, tu la gardes.</p></Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{outcomes.map((o, i) => <Reveal key={o.u} delay={i * 80}><a href={o.u} className="card flex h-full flex-col p-6"><span className="font-display text-3xl font-extrabold text-terra">0{i + 1}</span><h3 className="mt-3 text-lg leading-snug">{o.t}</h3><p className="mt-2 text-[15px] text-ink/70">{o.d}</p><span className="mt-auto pt-4 text-sm font-bold text-terra">Le guide →</span></a></Reveal>)}</div>
    </div></section>
    <section className="bg-pale"><div className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="flex flex-wrap items-end justify-between gap-4"><div><div className="kicker">Dans ta boîte mail</div><h2 className="h2 mt-3">Les dernières éditions.</h2><p className="mt-3 max-w-2xl text-ink/70">Voilà exactement ce que tu reçois, une à deux fois par semaine.</p></div><Link to="/guides" className="btn-ghost">Toutes les éditions</Link></Reveal>
      <div className="mt-8 grid gap-5">{guides.slice(0, 3).map((g, i) => <Reveal key={g.slug} delay={i * 80}><a href={g.url} className="card grid items-center gap-5 p-5 sm:grid-cols-[200px_1fr]"><img src={img(g.cover, 400)} alt={`Couverture de l'édition ${g.title}`} loading="lazy" width="200" height="105" className="aspect-[1200/630] w-full rounded-2xl object-cover"/><div><div className="text-sm text-ink/60">{fdate(g.date)}</div><h3 className="mt-1 text-xl leading-snug">{g.title}</h3><p className="mt-2 text-[15px] text-ink/75">{g.desc || g.subtitle}</p><span className="mt-3 inline-block font-bold text-terra">Lire l'édition →</span></div></a></Reveal>)}</div>
    </div></section>
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="flex flex-wrap items-end justify-between gap-4"><div><div className="kicker">Mes outils</div><h2 className="h2 mt-3">Ce que j'utilise vraiment.</h2></div><Link to="/outils" className="btn-ghost">Tous mes outils</Link></Reveal>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{tools.map(t => <ToolCard key={t.n} t={t}/>)}</div>
      <p className="mt-4 text-sm text-ink/60">{DISCLOSURE}</p>
    </section>
    <section className="bg-pale"><div className="mx-auto max-w-6xl px-5 py-24">
      <Reveal><div className="kicker">Ce qu'en disent les lecteurs</div><h2 className="h2 mt-3">Recopié tel quel, fautes comprises.</h2></Reveal>
      <div className="mt-10 columns-1 gap-5 md:columns-2 lg:columns-3">
        <Quote q="Depuis que je t'ai découvert (hier), **j'ai créé 6 projets !** […] C'est un peu enivrant ! Mais passionnant quand on commence à piger." n="Le Hamac" src="Le fichier contexte Claude" img={`${H}/t-hamac.jpg`}/>
        <Quote q="Je viens d'actualiser mon profil Linkedin avec Claude et tes prompts. Cela m'a demandé 1h30, mais **cela vaut la peine**." n="Marc Poskin" src="Le profil LinkedIn refait avec l'IA" img={`${H}/t-poskin.jpg`}/>
        <Quote q="Je suis choqué par la **quantité de valeur** que tu viens de délivrer. Merci. Je m'abonne." n="Nirmoo" src="Claude Cowork, le guide complet"/>
        <Quote q="Banger, **très pédagogique & divertissant**. J'enregistre précieusement ce guide ! Merci Onur :)" n="Pierre Cartier" src="Nano Banana 2" img={`${H}/t-pierre.jpg`}/>
        <Quote q="Excellentissime, merci beaucoup à toi ! **Tes partages sont inégalables** et toujours généreux !" n="Laurent Berthelier" src="Le fichier contexte Claude" img={`${H}/t-laurent.jpg`}/>
        <Quote q="Même si je n'utilise pas LinkedIn comme toi. Je prends ! **Tu as gagné un abonné !** Un super article !" n="Yoann" src="Le profil LinkedIn refait avec l'IA" img={`${H}/t-yoann.jpg`}/>
      </div>
      <div className="mt-6 text-center"><a href={SUB} className="inline-flex min-h-[44px] items-center font-bold text-terra underline underline-offset-4">Moi aussi, je veux le prochain guide →</a></div>
    </div></section>
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-24 md:grid-cols-[.8fr_1.2fr]">
      <Reveal><img src={`${A}/portrait-studio.webp`} alt="Onur Karapinar, sourire, sur fond bleu" width="640" height="640" loading="lazy" className="mx-auto w-full max-w-xs rotate-2 rounded-3xl object-cover shadow-xl"/></Reveal>
      <Reveal delay={100}><div className="kicker">Qui est derrière tout ça ?</div>
        <blockquote className="mt-4 text-2xl font-bold leading-snug">« Mon seul critère : quand tu refermes un guide, tu te sens plus intelligent qu'en l'ouvrant. »</blockquote>
        <p className="mt-4 text-ink/80">Je m'appelle Onur. J'écris sur Internet depuis 2016 et je teste l'IA tous les jours depuis fin 2022. Je suis Head of Content chez France IA : je construis des workflows IA le matin et je te les explique le soir, sans jargon. Je fais les erreurs avant toi, c'est un peu mon métier.</p>
        <p className="mt-6 border-l-4 border-terral pl-5 text-lg font-bold leading-snug">Ma règle : si ta mère ne peut pas s'en servir, j'ai raté mon édition.</p>
        <Link to="/a-propos" className="mt-6 inline-flex min-h-[44px] items-center font-bold text-terra">Lire mon histoire →</Link></Reveal>
    </section>
    <section className="bg-pale"><div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-24 md:grid-cols-[.6fr_1.4fr]">
      <Reveal><Link to="/livre"><img src={`${A}/livre-couverture.jpg`} alt="Couverture du livre Petites Habitudes, Grandes Réussites" loading="lazy" className="mx-auto w-48 -rotate-3 rounded shadow-2xl transition hover:rotate-0 md:w-60"/></Link></Reveal>
      <Reveal delay={100}><div className="kicker">Le livre</div><h2 className="h2 mt-3">Avant l'IA, j'ai écrit un livre sur les habitudes.</h2>
        <p className="mt-4 text-ink/80">51 pratiques, chacune découpée en petits gestes. Plus de 15 000 exemplaires vendus, 4,5 sur 5 sur Amazon (364 notes).</p>
        <div className="mt-6 flex flex-wrap gap-3"><Link to="/livre" className="btn">Découvrir le livre</Link>{PDF && <a href={PDF} className="btn-ghost">Lire les 27 premières pages</a>}</div></Reveal>
    </div></section>
    <CtaBand title="Le prochain guide IA arrive bientôt. Il t'attend." text="Apprendre l'IA simplement, 10 minutes par guide. Gratuit, une à deux fois par semaine, et pas de spam, je n'ai pas le temps non plus."/>
  </>);
}
