import { Link } from "react-router-dom"; import { useSeo, Copy, SubscribeForm } from "../lib";
const P = "Une page web a disparu. Écris-lui un avis de recherche émouvant en 4 lignes, façon affiche de chat perdu.";
export default function NotFound() {
  useSeo("Page introuvable | Onur Karapinar", "Cette page n'existe pas. Même l'IA ne l'a pas trouvée.", true);
  return <section className="mx-auto max-w-2xl px-5 py-16 text-center md:py-20">
    <svg viewBox="0 0 120 120" className="mx-auto h-24 w-24 text-terra" aria-hidden="true"><circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="4"/><g className="origin-center animate-[spin_8s_ease-in-out_infinite] motion-reduce:animate-none" style={{ transformOrigin: "60px 60px" }}><path d="M60 18 L70 60 L60 102 L50 60 Z" fill="currentColor" opacity=".9"/><path d="M60 60 L70 60 L60 102 L50 60 Z" fill="#2B2B2B" opacity=".85"/></g><circle cx="60" cy="60" r="5" fill="#FDFBF7" stroke="currentColor" strokeWidth="3"/></svg>
    <div className="kicker mt-6">Erreur 404</div>
    <h1 className="mt-3 text-3xl font-extrabold md:text-4xl">Cette page s'est perdue en chemin.</h1>
    <blockquote className="mt-5 text-lg italic text-ink/80">« Tous ceux qui errent ne sont pas perdus. »<span className="mt-1 block text-sm not-italic text-ink/70">J.R.R. Tolkien</span></blockquote>
    <p className="mt-5 text-lg text-ink/80">Toi, tu n'es pas perdu. Cette page, si. J'ai demandé à l'IA où elle était : elle m'a donné une adresse, très sûre d'elle. L'adresse était fausse. <b>Leçon gratuite : on vérifie toujours ce que dit une IA.</b></p>
    <nav aria-label="Pistes pour repartir" className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/" className="btn">Retour à l'accueil</Link><Link to="/commencer-ici" className="btn-ghost">Commencer ici</Link><Link to="/guides" className="btn-ghost">Voir les guides</Link></nav>
    <div className="mt-10 rounded-2xl bg-ink p-6 text-left text-creme"><div className="kicker !text-pale">Lot de consolation</div><pre className="mt-3 whitespace-pre-wrap font-mono text-[15px]">{P}</pre><div className="mt-4"><Copy text={P}/></div></div>
    <div className="card mt-8 p-6 text-left"><p className="font-display text-lg font-extrabold">Tant qu'on y est : reçois le prochain guide</p><p className="mt-1 text-sm text-ink/70">Gratuit, une à deux fois par semaine. Lui, il arrive toujours à destination.</p><div className="mt-4"><SubscribeForm/></div></div>
  </section>;
}
