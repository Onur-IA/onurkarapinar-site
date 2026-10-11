import { useSeo, Reveal, Copy } from "../lib";
const P = "Pose-moi 5 questions sur mon travail, une par une. Ensuite, liste les 3 tâches de ma semaine que tu pourrais faire à ma place, avec le prompt exact pour chacune.";
export default function Merci() {
  useSeo("Merci ! | Onur Karapinar", "Inscription confirmée. Ouvre l'e-mail de bienvenue.");
  return <section className="mx-auto max-w-2xl px-5 py-20 text-center"><Reveal><div className="kicker">Inscription confirmée</div>
    <h1 className="mt-3 text-4xl font-extrabold tracking-tight">Bienvenue. Ta boîte mail vient de devenir un peu plus utile.</h1>
    <div className="card mt-10 p-8 text-left"><div className="kicker">Ta seule étape maintenant</div><h2 className="mt-2 text-2xl font-bold">Ouvre l'e-mail de bienvenue et clique sur le lien.</h2>
      <p className="mt-3 text-ink/75">Il arrive dans la minute. Pas là ? Regarde dans « Promotions » ou les spams, puis glisse-le dans ta boîte principale. Sinon, les prochaines éditions finiront au même endroit.</p></div>
    <div className="mt-8 rounded-2xl bg-ink p-8 text-left text-creme"><div className="kicker !text-pale">En attendant, teste ce prompt</div><pre className="mt-3 whitespace-pre-wrap font-mono text-[15px]">{P}</pre><div className="mt-5"><Copy text={P}/></div><p className="mt-3 text-sm text-creme/60">Colle-le dans ChatGPT ou Claude. Tu verras, c'est un bon début.</p></div>
  </Reveal></section>;
}
