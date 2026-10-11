import { useSeo } from "../lib";
const X = ({ c }: { c: string }) => <mark className="rounded bg-pale px-1 font-semibold">[À compléter : {c}]</mark>;
export default function Mentions() {
  useSeo("Mentions légales | Onur Karapinar", "Mentions légales et données personnelles du site onurkarapinar.com.");
  return <section className="mx-auto max-w-3xl px-5 py-14 md:py-20 [&_h2]:mt-10 [&_h2]:text-2xl [&_p]:mt-3"><h1 className="text-4xl font-extrabold">Mentions légales</h1>
    <h2>Éditeur du site</h2><p>Onur Karapinar, <X c="statut juridique (ex. entrepreneur individuel)"/>, SIRET <X c="numéro SIRET"/>, adresse <X c="adresse postale"/>. Contact : <X c="adresse e-mail de contact"/>.</p>
    <p>Directeur de la publication : Onur Karapinar.</p>
    <h2>Hébergement</h2><p>Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis (Cloudflare Pages).</p>
    <h2>Newsletter</h2><p>L'inscription passe par Substack, Inc. Ton adresse e-mail sert uniquement à t'envoyer la newsletter. Tu peux te désabonner à tout moment depuis le lien présent dans chaque e-mail.</p>
    <h2>Propriété intellectuelle</h2><p>Les textes, images et guides de ce site appartiennent à Onur Karapinar, sauf mention contraire. Les marques et logos cités appartiennent à leurs propriétaires.</p>
    <h2>Liens affiliés</h2><p>Certains liens de la page Outils sont affiliés et signalés comme tels : si tu t'abonnes via ces liens, je peux toucher une commission, sans surcoût pour toi. Je ne recommande que des outils que j'utilise.</p>
  </section>;
}
