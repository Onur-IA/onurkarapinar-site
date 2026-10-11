import { Link } from "react-router-dom"; import { useSeo, Copy } from "../lib";
const P = "Une page web a disparu. Écris-lui un avis de recherche émouvant en 4 lignes, façon affiche de chat perdu.";
export default function NotFound() {
  useSeo("Page introuvable | Onur Karapinar", "Cette page n'existe pas. Même l'IA ne l'a pas trouvée.");
  return <section className="mx-auto max-w-2xl px-5 py-20 text-center">
    <div className="text-[7rem] font-extrabold leading-none text-terra md:text-[10rem]">4<span className="inline-block animate-spin [animation-duration:6s]">0</span>4</div>
    <h1 className="mt-4 text-3xl font-extrabold">J'ai demandé à l'IA où était cette page.</h1>
    <p className="mt-3 text-lg text-ink/75">Elle m'a donné une adresse, très sûre d'elle. L'adresse était fausse. Petite leçon gratuite au passage : on vérifie toujours ce que dit une IA.</p>
    <div className="mt-8 rounded-2xl bg-ink p-6 text-left text-creme"><div className="kicker !text-pale">Lot de consolation</div><pre className="mt-3 whitespace-pre-wrap font-mono text-[15px]">{P}</pre><div className="mt-4"><Copy text={P}/></div></div>
    <div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/" className="btn">Retour à l'accueil</Link><Link to="/guides" className="btn-ghost">Voir les guides</Link></div>
  </section>;
}
