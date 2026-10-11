import { A, AMAZON, PDF, useSeo, Reveal, CtaBand } from "../lib";
const recos = [
  { n: "Matthieu Dardaillon", r: "entrepreneur, cofondateur de Ticket for Change", f: "matthieu-dardaillon", q: "Onur Karapinar nous offre un livre indispensable - complet, clair, prêt à l'emploi - pour prendre ou reprendre le pouvoir sur nos vies." },
  { n: "Olivier Roland", r: "entrepreneur et auteur", f: "olivier-roland", q: "Remplacer les mauvaises habitudes par les bonnes est essentiel pour réussir dans la vie, personnellement et professionnellement. Ce livre est parfait pour cela." },
  { n: "Benoît Wojtenka", r: "cofondateur de BonneGueule, préfacier", f: "benoit-wojtenka", q: "Changer ses habitudes, c'est changer sa vie. Et c'est ce qu'Onur va vous apprendre dans ce livre, un indispensable pour tous ceux qui veulent atteindre intelligemment leurs objectifs." },
];
export default function Livre() {
  useSeo("Petites Habitudes, Grandes Réussites | Le livre d'Onur Karapinar", "51 pratiques concrètes pour installer des habitudes qui tiennent. 15 000+ exemplaires, 4,5/5 sur 364 notes Amazon. Lis les 27 premières pages gratuitement.");
  return (<>
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[.7fr_1.3fr] md:py-20">
      <Reveal><img src={`${A}/livre-couverture.jpg`} alt="Couverture de Petites Habitudes, Grandes Réussites" className="mx-auto w-56 -rotate-2 rounded shadow-2xl md:w-72"/></Reveal>
      <Reveal delay={100}><div className="text-terra">★★★★★ <span className="text-sm text-ink/70">4,5 sur 5, 364 notes Amazon</span></div>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">Tu sais ce qu'il faudrait changer. Ce livre t'aide à le faire, enfin.</h1>
        <p className="mt-4 text-lg text-ink/80">51 pratiques concrètes, chacune découpée en gestes <b>assez petits pour commencer ce soir</b>. Une méthode testée sur moi pendant trois ans, et aucun bain glacé obligatoire.</p>
        <div className="mt-7 flex flex-wrap gap-3"><a href={AMAZON} className="btn">Commander sur Amazon</a><a href={PDF} className="btn-ghost">Lire les 27 premières pages</a></div>
        <p className="mt-3 text-sm text-ink/60">Eyrolles, 2019. 310 pages. Préface de Benoît Wojtenka.</p></Reveal>
    </section>
    <section className="border-y border-sable bg-white/60"><div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-5 py-10 text-center md:grid-cols-4">
      {[["15 000+", "exemplaires vendus"], ["4,5 / 5", "sur 364 notes Amazon"], ["51", "pratiques prêtes à l'emploi"], ["27 pages", "d'extrait gratuit"]].map(([a, b], i) => <Reveal key={b} delay={i * 80}><div className="text-3xl font-extrabold text-terra">{a}</div><div className="text-sm text-ink/70">{b}</div></Reveal>)}
    </div></section>
    <section className="mx-auto max-w-6xl px-5 py-20"><Reveal><div className="kicker">Ils l'ont lu avant toi</div><h2 className="h2 mt-3">Mot pour mot, en quatrième de couverture.</h2></Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">{recos.map((r, i) => <Reveal key={r.n} delay={i * 100}><figure className="card h-full p-6"><blockquote>« {r.q} »</blockquote><figcaption className="mt-5 flex items-center gap-3"><img src={`${A}/reco-${r.f}.jpg`} alt={r.n} loading="lazy" className="h-12 w-12 rounded-full object-cover"/><span className="text-sm"><b>{r.n}</b><br/><span className="text-ink/60">{r.r}</span></span></figcaption></figure></Reveal>)}</div>
    </section>
    <section className="bg-white/60"><div className="mx-auto grid max-w-5xl gap-10 px-5 py-20 md:grid-cols-2">
      <Reveal><h2 className="h2">Pour toi si...</h2><ul className="mt-5 space-y-3">{["tu commences des routines qui tiennent trois jours ;", "tu as lu des livres de développement perso sans rien changer ;", "tu veux des actions précises, pas de la motivation."].map(x => <li key={x} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terra"/>{x}</li>)}</ul></Reveal>
      <Reveal delay={100}><h2 className="h2">Ce que tu y trouves</h2><ul className="mt-5 space-y-3">{[["7 étapes", "pour installer une habitude qui tient."], ["6 étapes", "pour te défaire d'une routine qui te coûte."], ["51 pratiques", "organisation, temps, objectifs, santé."], ["Des fiches", "pour suivre où tu en es."]].map(([a, b]) => <li key={a}><b className="text-terra">{a}</b> {b}</li>)}</ul></Reveal>
    </div></section>
    <section className="mx-auto max-w-3xl px-5 py-20 text-center"><Reveal><div className="kicker">Gratuit, sans e-mail</div><h2 className="h2 mt-3">Lis les 27 premières pages.</h2>
      <p className="mt-4 text-ink/80">Pas envie d'acheter un livre sur la foi d'une page web ? Je comprends, moi non plus. Feuillette le début, et si tu te surprends à souligner une phrase, tu sais ce qu'il te reste à faire.</p>
      <a href={PDF} className="btn mt-7">Télécharger l'extrait (PDF)</a></Reveal></section>
    <section className="bg-sable/50"><div className="mx-auto max-w-5xl px-5 py-20"><Reveal><div className="kicker">Avis Amazon.fr</div><h2 className="h2 mt-3">Ce qu'en disent les lecteurs.</h2></Reveal>
      <div className="mt-8 grid gap-6 md:grid-cols-3">{["J'ai souligné énormément de passages dans le livre et je les relis très souvent.", "Ce livre n'est ni une histoire passionnante, ni une innovation extraordinaire. En revanche, je pense que c'est une mine d'or pour toute personne voulant améliorer sa vie.", "Il a pris le temps d'expliquer et vulgariser la formation des habitudes. Ça m'a beaucoup aidé !"].map((q, i) => <Reveal key={i} delay={i * 100}><figure className="card h-full p-6"><blockquote>« {q} »</blockquote><figcaption className="mt-4 text-sm text-ink/60">Lecteur Amazon</figcaption></figure></Reveal>)}</div>
      <Reveal className="mx-auto mt-14 max-w-2xl"><h3 className="text-xl font-bold">Pourquoi je l'ai écrit</h3><p className="mt-3 text-ink/80">J'ai passé trois ans à lire la recherche sur les habitudes et à tout tester sur moi. J'ai surtout beaucoup raté, et c'est ce qui m'a le plus appris. Ce qui a marché tenait toujours en un geste minuscule, répété. C'est aussi comme ça que j'enseigne l'IA aujourd'hui : un petit pas, tout de suite.</p><a href={AMAZON} className="btn mt-6">Commander le livre</a></Reveal>
    </div></section>
    <CtaBand title="Tu as aimé le livre ? La suite est dans la newsletter." text="Le livre parlait de petits gestes répétés. L'IA, c'est pareil : un guide de 10 minutes, une à deux fois par semaine. Gratuit."/>
  </>);
}
