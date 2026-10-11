import { useSeo, Reveal, Copy } from "../lib";
import { guides, GuideCard } from "../guides";
const picks = ["claude-guide-debutant", "fichier-contexte-claude", "3-reglages-invisibles-qui-transforment"];
const P = "Pose-moi 5 questions sur mon travail, une par une. Ensuite, liste les 3 tâches de ma semaine que tu pourrais faire à ma place, avec le prompt exact pour chacune.";
export default function Merci() {
  useSeo("Presque fini | Onur Karapinar", "Confirme ton inscription dans l'e-mail que tu viens de recevoir.", true);
  return <section className="mx-auto max-w-5xl px-5 py-20 text-center [&>div:first-child]:mx-auto [&>div:first-child]:max-w-2xl"><Reveal><div className="kicker">Presque fini</div>
    <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Plus qu'un clic, et ta boîte mail devient un peu plus utile.</h1>
    <div className="card mt-10 p-8 text-left"><div className="kicker">Ta seule étape maintenant</div><h2 className="mt-2 text-2xl font-bold">Ouvre l'e-mail de confirmation et clique sur le lien.</h2>
      <p className="mt-3 text-ink/75">Il arrive dans la minute. Pas là ? Regarde dans « Promotions » ou les spams, puis glisse-le dans ta boîte principale. Sinon, les prochaines éditions finiront au même endroit.</p></div>
    <div className="mt-8 rounded-2xl bg-ink p-8 text-left text-creme"><div className="kicker !text-pale">En attendant, teste ce prompt</div><pre className="mt-3 whitespace-pre-wrap font-mono text-[15px]">{P}</pre><div className="mt-5"><Copy text={P}/></div><p className="mt-3 text-sm text-creme/60">Colle-le dans ChatGPT ou Claude. Tu verras, c'est un bon début.</p></div>
  </Reveal>
    <div className="mt-14 text-left"><div className="kicker">Pour bien démarrer</div><h2 className="mt-2 text-2xl font-bold">Les 3 guides à lire en premier.</h2><div className="mt-6 grid gap-5 sm:grid-cols-3">{picks.map(s => guides.find(g => g.slug === s)!).map(g => <GuideCard key={g.slug} g={g}/>)}</div></div>
  </section>;
}
