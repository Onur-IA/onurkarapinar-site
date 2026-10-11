import { useState } from "react"; import { Link } from "react-router-dom";
import { Scribble, Arrow, A, SUB, AMAZON, PDF, useSeo, Reveal, SubscribeForm, Copy, Quote, Stats, CtaBand } from "../lib";
import { guides, GuideCard } from "../guides";
const prompts = [
  { t: "Ce que l'IA peut faire à ma place", s: "Trois tâches de ta semaine, déléguées.", p: "Pose-moi 5 questions sur mon travail, une par une. Ensuite, liste les 3 tâches de ma semaine que tu pourrais faire à ma place, avec le prompt exact pour chacune." },
  { t: "Mon mail le plus pénible", s: "Celui que tu repousses depuis trois jours.", p: "Je dois écrire un mail que je repousse depuis des jours. Pose-moi d'abord 3 questions : à qui, pourquoi, et ce que je crains. Puis rédige 2 versions courtes, une directe et une plus diplomate, et dis-moi laquelle tu enverrais à ma place." },
  { t: "Mon prof particulier", s: "Comprendre n'importe quoi en 5 minutes.", p: "Explique-moi [un sujet qui me bloque] comme si j'avais 12 ans, avec un exemple de la vie quotidienne. Ensuite, pose-moi 3 questions pour vérifier que j'ai compris, une par une, et corrige-moi gentiment." },
];
const logos = ["Challenge", "FrenchWeb", "Hubspot", "WTTJ", "Livementor", "Eyrolles"];
const H = "https://cdn.jsdelivr.net/gh/Onur-IA/ak-site-assets@81f2440/home";
export default function Home() {
  useSeo("Onur Karapinar | L'IA, vraiment simple", "Un guide IA de 10 minutes, une à deux fois par semaine. Pas à pas, avec captures et prompts à copier. Gratuit, déjà 13 000 lecteurs.");
  const [tab, setTab] = useState(0);
  return (<>
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-[1.15fr_.85fr] md:pt-20">
      <Reveal><div className="kicker">Salut, moi c'est Onur</div>
        <h1 className="mt-4 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight md:text-6xl">L'IA, <Scribble>vraiment simple.</Scribble></h1>
        <p className="mt-5 max-w-xl text-lg text-ink/80">Un guide de 10 minutes que tu vas adorer tester. Une à deux fois par semaine, pas à pas, avec captures et prompts à copier. Sans rien y connaître.</p>
        <div className="mt-7"><SubscribeForm/></div>
        <p className="mt-3 text-sm text-ink/60">Gratuit. Déjà <b>13 000 lecteurs</b>. Tu pars quand tu veux, en un clic.</p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold"><Link to="/guides" className="underline decoration-terra decoration-2 underline-offset-4">Parcourir les guides gratuits</Link><a href="#essaie" className="underline decoration-terra decoration-2 underline-offset-4">Tester un prompt</a></div>
      </Reveal>
      <Reveal delay={150}><img src={`${A}/portrait-collage.png`} alt="Onur Karapinar" className="mx-auto w-full max-w-sm"/></Reveal>
    </section>
    <section className="border-y border-sable bg-white/60"><div className="mx-auto max-w-6xl px-5 py-10">
      <Stats items={[["13 000", "lecteurs de la newsletter"], ["30 000", "abonnés LinkedIn"], ["15 000+", "livres vendus"], ["100+", "clients coachés"], ["500+", "entrepreneurs formés"]]}/>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6"><span className="kicker !text-ink/50">Vu dans</span>{logos.map(l => <img key={l} src={`${H}/logos-${l}.png`} alt={l} loading="lazy" className="h-6 opacity-60 grayscale md:h-7"/>)}</div>
    </div></section>
    <section id="essaie" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
      <Reveal><div className="kicker">Essaie, là, tout de suite</div><h2 className="h2 mt-3">Choisis un prompt. <Scribble>Regarde</Scribble> ce qui se passe. <Arrow/></h2>
        <p className="mt-3 max-w-2xl text-ink/70">Copie-le, colle-le dans ChatGPT ou Claude. Si ça te fait sourire, imagine un guide entier.</p></Reveal>
      <Reveal className="mt-8 grid gap-5 md:grid-cols-[.8fr_1.2fr]">
        <div role="tablist" className="flex gap-3 overflow-x-auto pb-2 md:flex-col md:overflow-visible">
          {prompts.map((p, i) => <button key={i} role="tab" aria-selected={tab === i} onClick={() => setTab(i)} className={"min-w-[220px] rounded-2xl border-2 p-4 text-left transition md:min-w-0 " + (tab === i ? "border-terra bg-white shadow-md" : "border-sable hover:border-ink/40")}><div className="font-bold">{p.t}</div><div className="text-sm text-ink/60">{p.s}</div></button>)}
        </div>
        <div className="rounded-2xl bg-ink p-6 text-creme md:p-8">
          <div className="kicker !text-pale">{prompts[tab].t}</div>
          <pre className="mt-4 whitespace-pre-wrap font-mono text-[15px] leading-relaxed">{prompts[tab].p}</pre>
          <div className="mt-6 flex flex-wrap items-center gap-3"><Copy text={prompts[tab].p}/><a className="btn-ghost !border-creme/40 !text-creme hover:!bg-creme hover:!text-ink" href="https://chatgpt.com/" target="_blank" rel="noopener">Ouvrir ChatGPT</a><a className="btn-ghost !border-creme/40 !text-creme hover:!bg-creme hover:!text-ink" href="https://claude.ai/new" target="_blank" rel="noopener">Ouvrir Claude</a></div>
          <p className="mt-3 text-xs text-creme/60">Copie d'abord, puis colle dans ta conversation.</p>
        </div>
      </Reveal>
    </section>
    <section className="bg-white/60"><div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
      <Reveal><img src={`${H}/velo-debutant.jpg`} alt="Un vélo avec une petite roue stabilisatrice terracotta" loading="lazy" className="w-full rounded-2xl"/></Reveal>
      <Reveal delay={100}><h2 className="h2">Tu n'as pas besoin d'être technique.</h2>
        <p className="mt-4 text-ink/80">Tu as déjà ouvert ChatGPT, tapé une question, eu une réponse moyenne, et refermé l'onglet. Normal : personne ne t'a montré les réglages. Ici, on part de ton quotidien et on le règle ensemble, clic par clic.</p>
        <ul className="mt-5 space-y-2">{["Pas à pas, avec une capture à chaque étape.", "Des prompts à copier-coller, testés avant publication.", "Un résultat concret à la fin de chaque guide."].map(x => <li key={x} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terra"/>{x}</li>)}</ul>
        <p className="mt-6 border-l-4 border-terra pl-4 font-bold">Ma règle : si ta mère ne peut pas s'en servir, j'ai raté mon édition.</p></Reveal>
    </div></section>
    <section className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="flex flex-wrap items-end justify-between gap-4"><div><div className="kicker">Commence ici</div><h2 className="h2 mt-3">Les derniers guides.</h2></div><Link to="/guides" className="btn-ghost">Tous les guides</Link></Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{guides.slice(0, 3).map((g, i) => <Reveal key={g.slug} delay={i * 100}><GuideCard g={g}/></Reveal>)}</div>
    </section>
    <section className="bg-sable/50"><div className="mx-auto max-w-6xl px-5 py-20">
      <Reveal><div className="kicker">Ce qu'en disent les lecteurs</div><h2 className="h2 mt-3">Recopié tel quel, fautes comprises.</h2></Reveal>
      <div className="mt-10 columns-1 gap-5 md:columns-2 lg:columns-3">
        <Quote q="Depuis que je t'ai découvert (hier), j'ai créé 6 projets ! […] C'est un peu enivrant ! Mais passionnant quand on commence à piger." n="Le Hamac" src="Le fichier contexte Claude" img={`${H}/t-hamac.jpg`}/>
        <Quote q="Je viens d'actualiser mon profil Linkedin avec Claude et tes prompts. Cela m'a demandé 1h30, mais cela vaut la peine." n="Marc Poskin" src="Le profil LinkedIn refait avec l'IA" img={`${H}/t-poskin.jpg`}/>
        <Quote q="Je suis choqué par la quantité de valeur que tu viens de délivrer. Merci. Je m'abonne." n="Nirmoo" src="Claude Cowork, le guide complet"/>
        <Quote q="Banger, très pédagogique & divertissant. J'enregistre précieusement ce guide ! Merci Onur :)" n="Pierre Cartier" src="Nano Banana 2" img={`${H}/t-pierre.jpg`}/>
        <Quote q="Excellentissime, merci beaucoup à toi ! Tes partages sont inégalables et toujours généreux !" n="Laurent Berthelier" src="Le fichier contexte Claude" img={`${H}/t-laurent.jpg`}/>
        <Quote q="Même si je n'utilise pas LinkedIn comme toi. Je prends ! Tu as gagné un abonné ! Un super article !" n="Yoann" src="Le profil LinkedIn refait avec l'IA" img={`${H}/t-yoann.jpg`}/>
      </div>
      <div className="mt-6 text-center"><a href={SUB} className="font-bold text-terra underline underline-offset-4">Moi aussi, je veux le prochain guide →</a></div>
    </div></section>
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[.8fr_1.2fr]">
      <Reveal><img src={`${A}/portrait-collage.png`} alt="" loading="lazy" className="mx-auto w-full max-w-xs"/></Reveal>
      <Reveal delay={100}><div className="kicker">Qui est derrière tout ça ?</div>
        <blockquote className="mt-4 text-2xl font-bold leading-snug">« Mon seul critère : quand tu refermes un guide, tu te sens plus intelligent qu'en l'ouvrant. »</blockquote>
        <p className="mt-4 text-ink/80">Je m'appelle Onur. J'écris sur Internet depuis 2016 et je teste l'IA tous les jours depuis fin 2022. Je suis Head of Content chez France IA : je construis des workflows IA le matin et je te les explique le soir, sans jargon. Je fais les erreurs avant toi, c'est un peu mon métier.</p>
        <Link to="/a-propos" className="mt-6 inline-block font-bold text-terra">Lire mon histoire →</Link></Reveal>
    </section>
    <section className="bg-white/60"><div className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-20 md:grid-cols-[.6fr_1.4fr]">
      <Reveal><Link to="/livre"><img src={`${A}/livre-couverture.jpg`} alt="Couverture du livre Petites Habitudes, Grandes Réussites" loading="lazy" className="mx-auto w-48 -rotate-3 rounded shadow-2xl transition hover:rotate-0 md:w-60"/></Link></Reveal>
      <Reveal delay={100}><div className="kicker">Le livre</div><h2 className="h2 mt-3">Avant l'IA, j'ai écrit un livre sur les habitudes.</h2>
        <p className="mt-4 text-ink/80">51 pratiques, chacune découpée en petits gestes. Plus de 15 000 exemplaires vendus, 4,5 sur 5 sur Amazon (364 notes).</p>
        <div className="mt-6 flex flex-wrap gap-3"><Link to="/livre" className="btn">Découvrir le livre</Link><a href={PDF} className="btn-ghost">Lire les 27 premières pages</a></div>
        <a href={AMAZON} className="mt-3 inline-block text-sm text-ink/60 underline">Voir sur Amazon</a></Reveal>
    </div></section>
    <CtaBand title="Le prochain guide part bientôt. Il t'attend ?" text="Gratuit, une à deux fois par semaine. Promis, pas de spam, je n'ai pas le temps non plus."/>
  </>);
}
