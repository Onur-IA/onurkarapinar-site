import { A, useSeo, Reveal, SubscribeForm, Quote, Stats, CtaBand } from "../lib";
import { guides, GuideCard } from "../guides";
const H = "https://cdn.jsdelivr.net/gh/Onur-IA/ak-site-assets@81f2440/home";
const start = ["claude-guide-debutant", "fichier-voix-claude", "claude-skills"];
export default function APropos() {
  useSeo("À propos | Onur Karapinar", "Je teste l'IA tous les jours et je te l'explique comme à un ami qui n'a jamais ouvert ChatGPT. Head of Content chez France IA, 13 000 lecteurs.");
  return (<>
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1.2fr_.8fr] md:py-20">
      <Reveal><div className="kicker">Salut, moi c'est Onur</div><h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Deviens bon en IA en 10 minutes par semaine.</h1>
        <p className="mt-5 text-lg text-ink/80">Une à deux fois par semaine, je t'envoie une chose à faire avec l'IA le jour même. Un réglage, un prompt, un workflow. Expliqué comme à un ami qui n'a jamais ouvert ChatGPT.</p>
        <div className="mt-7"><SubscribeForm/></div><p className="mt-3 text-sm text-ink/60">Gratuit. Rejoins 13 000 lecteurs. Désinscription en un clic.</p></Reveal>
      <Reveal delay={150}><img src={`${A}/portrait-collage.png`} alt="Onur Karapinar" className="mx-auto w-full max-w-sm"/></Reveal>
    </section>
    <section className="bg-ink text-creme"><Reveal className="mx-auto max-w-4xl px-5 py-14 text-center text-2xl font-bold leading-snug md:text-3xl">Ma règle : si ta mère ne peut pas s'en servir, <span className="text-terral">j'ai raté mon édition.</span></Reveal></section>
    <section className="mx-auto max-w-5xl px-5 py-20"><Reveal><div className="kicker">Ce que tu reçois</div><h2 className="h2 mt-3">Une édition, une action.</h2><p className="mt-3 text-ink/70">Tu lis, tu ouvres l'outil, tu refais.</p></Reveal>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">{["Le problème de départ, tiré de ta vraie journée (un mail en retard, un dossier qui traîne).", "Les étapes numérotées, avec le chemin exact des menus et des captures d'écran.", "Le prompt complet, à copier-coller.", "Ce qui a marché chez moi. Et ce qui a raté, parce que ça arrive.", "Ce qui est disponible en France, et ce qui ne l'est pas encore."].map((x, i) => <Reveal key={i} delay={i * 60}><div className="card flex h-full gap-4 p-5"><span className="text-2xl font-extrabold text-terra">{i + 1}</span><p>{x}</p></div></Reveal>)}</div>
      <p className="mt-6 text-ink/70">Mon test avant d'envoyer : peux-tu appliquer quelque chose dans les 10 minutes ? Sinon, l'édition reste dans mes brouillons. Ils sont bien remplis.</p>
    </section>
    <section className="bg-white/60"><div className="mx-auto max-w-6xl px-5 py-20"><Reveal><h2 className="h2">Commence par ces trois éditions.</h2></Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{start.map(s => guides.find(g => g.slug === s)).filter(Boolean).map((g, i) => <Reveal key={i} delay={i * 100}><GuideCard g={g!}/></Reveal>)}</div></div></section>
    <section className="mx-auto max-w-3xl px-5 py-20"><Reveal><div className="kicker">Pourquoi moi</div><h2 className="h2 mt-3">Personne n'expliquait l'IA simplement en français. Alors je m'y suis collé.</h2>
      <div className="mt-6 space-y-4 text-ink/85"><p>Février 2023. Je publie mes premiers posts sur ChatGPT en français. Mon infographie pour débutants fait 600 000 impressions. Et ma messagerie explose : « C'est quoi un bon prompt ? », « Par où je commence ? ».</p>
        <p>Je ne suis pas ingénieur. Je suis le gars qui teste tout, à voix haute, au point de s'isoler dans l'open space pour ne pas déranger l'étage. Le jour, je suis Head of Content chez France IA : je vois passer les nouveautés, et celles qui ne tiennent pas au premier vrai test.</p>
        <p>Ma méthode est simple. Je regarde ce qui marche déjà, je le teste sur mon écran, et je te le rends en français, avec des exemples d'ici.</p>
        <p>Je suis aussi l'auteur de « Petites Habitudes, Grandes Réussites » (Eyrolles, 2019). Le livre parlait déjà de ça : changer un petit geste, le refaire, et voir la différence au bout de quelques semaines. Avec l'IA, c'est pareil.</p></div></Reveal></section>
    <section className="border-y border-sable bg-white/60"><div className="mx-auto max-w-6xl px-5 py-12"><Stats items={[["13 000", "lecteurs de la newsletter"], ["30 000", "abonnés LinkedIn"], ["15 000+", "livres vendus"], ["100+", "personnes coachées"], ["500+", "personnes formées"]]}/></div></section>
    <section className="mx-auto max-w-6xl px-5 py-20"><Reveal><h2 className="h2">Ce que les lecteurs m'ont répondu.</h2></Reveal>
      <div className="mt-8 columns-1 gap-5 md:columns-3">
        <Quote q="Depuis que je t'ai découvert (hier), j'ai créé 6 projets ! […] C'est un peu enivrant ! Mais passionnant quand on commence à piger." n="Le Hamac" src="Le fichier contexte Claude" img={`${H}/t-hamac.jpg`}/>
        <Quote q="Je suis choqué par la quantité de valeur que tu viens de délivrer. Merci. Je m'abonne." n="Nirmoo" src="Claude Cowork, le guide complet"/>
        <Quote q="Banger, très pédagogique & divertissant. J'enregistre précieusement ce guide ! Merci Onur :)" n="Pierre Cartier" src="Nano Banana 2" img={`${H}/t-pierre.jpg`}/>
      </div>
      <Reveal className="mt-10 rounded-2xl bg-pale/50 p-8"><h3 className="text-xl font-bold">Une dernière chose</h3><p className="mt-2">Pose-moi ta question bête. Réponds à n'importe quelle édition, je lis tout. Les meilleures questions deviennent des éditions.</p></Reveal>
    </section>
    <CtaBand title="La prochaine édition arrive bientôt." text="Tu pourras la tester avant la fin de ton café. Gratuit, une à deux fois par semaine, désinscription en un clic."/>
  </>);
}
