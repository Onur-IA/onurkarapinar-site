import { useSeo } from "../lib";
import { HeroSection } from "./Home";
const T = "Tu es mon assistant. Résume cet e-mail en 3 points et propose une réponse polie.";
const v: [string, string][] = [["A", "Utilise l'IA si bien que tes collègues te demanderont comment tu fais."], ["B", "Gagne une heure par jour avec l'IA. Tes collègues vont te demander comment."], ["C", "Tes collègues vont te demander comment tu fais. La réponse : l'IA, bien utilisée."]];
export default function HeroTest() {
  useSeo("Test hero | Onur Karapinar", "Page de test interne.", true);
  return <>{v.map(([k, t]) => <div key={k} className="border-b-4 border-dashed border-terra/40"><div className="mx-auto max-w-6xl px-5 pt-8"><span className="rounded-full bg-ink px-4 py-1.5 text-sm font-bold text-creme">Variante {k}</span></div><HeroSection typed={T} title={t} h1="mt-6 text-[2.2rem] leading-[1.08] md:text-[3.4rem]"/></div>)}</>;
}
