import { useState } from "react";
import { useSeo, Copy, SubscribeForm } from "../lib";
type P = { c: string; t: string; p: string };
const cats = ["E-mails", "Résumés", "Réunions", "Réflexion", "Écriture", "Apprentissage", "Organisation", "Vie perso"];
const prompts: P[] = [
  { c: "E-mails", t: "Répondre à un e-mail délicat", p: "Voici un e-mail que j'ai reçu : [colle l'e-mail]. Aide-moi à répondre de façon polie, ferme et courte. Propose-moi 2 versions : une chaleureuse, une plus directe." },
  { c: "E-mails", t: "Transformer des notes en e-mail clair", p: "Transforme ces notes en un e-mail clair et professionnel, de 120 mots maximum, avec un objet accrocheur : [colle tes notes]." },
  { c: "E-mails", t: "Relancer sans être lourd", p: "J'ai envoyé un e-mail il y a [X jours] à [personne] au sujet de [sujet], sans réponse. Écris une relance courte, sympathique, qui donne envie de répondre, sans culpabiliser." },
  { c: "E-mails", t: "Dire non avec élégance", p: "On me demande [la demande]. Je veux refuser sans fermer la porte. Écris une réponse de 5 lignes, bienveillante, avec une alternative si possible." },
  { c: "E-mails", t: "Vider la boîte de réception", p: "Voici une liste d'e-mails (expéditeur + objet + première ligne) : [colle]. Classe-les en 4 groupes : à répondre aujourd'hui, à déléguer, à lire plus tard, à archiver. Explique en une ligne pourquoi." },
  { c: "E-mails", t: "Corriger le ton avant d'envoyer", p: "Relis cet e-mail avant que je l'envoie : [colle]. Dis-moi s'il peut être mal interprété, puis propose une version plus claire et plus aimable, sans changer le fond." },
  { c: "Résumés", t: "Résumer un long texte en 5 points", p: "Résume ce texte en 5 points essentiels, puis donne-moi en une phrase ce que je dois retenir si je n'ai que 10 secondes : [colle le texte]." },
  { c: "Résumés", t: "Résumer un PDF pour décider", p: "Je t'envoie un document. Dis-moi : de quoi il parle, les 3 chiffres ou faits clés, ce qu'il me demande de faire, et s'il y a un piège ou un point à vérifier." },
  { c: "Résumés", t: "Expliquer un article comme à un ami", p: "Explique-moi cet article comme si tu en parlais à un ami autour d'un café, en 6 phrases maximum, sans jargon : [colle l'article ou le lien]." },
  { c: "Résumés", t: "Résumer une vidéo YouTube", p: "Voici la transcription d'une vidéo : [colle]. Donne-moi les idées principales, les conseils actionnables, et le moment le plus intéressant à aller regarder." },
  { c: "Résumés", t: "Extraire les actions d'un document", p: "Lis ce document et liste uniquement les actions concrètes à faire, avec qui doit les faire et pour quand si c'est indiqué : [colle]." },
  { c: "Résumés", t: "Comparer deux documents", p: "Compare ces deux versions et liste ce qui a changé, ce qui a disparu et ce qui a été ajouté, sous forme de tableau. Version A : [colle]. Version B : [colle]." },
  { c: "Réunions", t: "Préparer une réunion en 2 minutes", p: "J'ai une réunion sur [sujet] avec [participants] pendant [durée]. Propose un ordre du jour, l'objectif à atteindre et les 3 questions à poser absolument." },
  { c: "Réunions", t: "Compte rendu à partir de notes en vrac", p: "Voici mes notes de réunion en vrac : [colle]. Fais un compte rendu clair : décisions prises, actions (qui, quoi, quand), questions en suspens. Prêt à envoyer." },
  { c: "Réunions", t: "Anticiper les objections", p: "Je vais présenter [idée/projet] à [public]. Liste les 5 objections les plus probables et une réponse courte et convaincante pour chacune." },
  { c: "Réunions", t: "Préparer un entretien important", p: "J'ai un entretien pour [poste/rendez-vous]. Joue le rôle de l'interlocuteur et pose-moi une question à la fois. Après chaque réponse, donne-moi un conseil pour l'améliorer." },
  { c: "Réunions", t: "E-mail de suivi après un rendez-vous", p: "Je sors d'un rendez-vous avec [personne] sur [sujet]. Points abordés : [colle]. Écris un e-mail de suivi court qui remercie, résume et propose la prochaine étape." },
  { c: "Réunions", t: "Animer un brainstorming", p: "Je dois animer un brainstorming de 30 minutes sur [problème] avec [nombre] personnes. Propose un déroulé minute par minute et 2 exercices pour faire parler tout le monde." },
  { c: "Réflexion", t: "Prendre une décision difficile", p: "J'hésite entre [option A] et [option B]. Pose-moi d'abord 5 questions pour comprendre ma situation, puis aide-moi à décider avec les avantages, les risques et ce que je regretterais le plus." },
  { c: "Réflexion", t: "L'avocat du diable", p: "Voici mon idée : [idée]. Joue l'avocat du diable : trouve les 5 meilleures raisons pour lesquelles ça pourrait échouer. Sois honnête, pas méchant." },
  { c: "Réflexion", t: "Démêler un problème", p: "J'ai un problème : [décris-le]. Aide-moi à trouver la vraie cause en me posant la question « pourquoi » plusieurs fois, une question à la fois." },
  { c: "Réflexion", t: "Voir avec d'autres yeux", p: "Analyse cette situation [décris-la] du point de vue de 3 personnes différentes : un entrepreneur, un psychologue, et mon moi dans 10 ans." },
  { c: "Réflexion", t: "Trouver 20 idées en 1 minute", p: "Donne-moi 20 idées pour [objectif], de la plus classique à la plus folle. Ensuite, entoure les 3 que tu testerais en premier et explique pourquoi." },
  { c: "Réflexion", t: "Le plan en 3 étapes", p: "Mon objectif : [objectif], d'ici [date]. Découpe-le en 3 grandes étapes, puis donne-moi la toute première action que je peux faire aujourd'hui en 15 minutes." },
  { c: "Écriture", t: "Rendre un texte plus clair", p: "Réécris ce texte pour qu'il soit plus clair et plus agréable à lire, avec des phrases courtes. Garde mon ton et mes idées : [colle le texte]." },
  { c: "Écriture", t: "Trouver le bon titre", p: "Propose 10 titres pour ce texte : [colle ou résume]. Varie les styles : question, chiffre, promesse, curiosité. Indique ton préféré." },
  { c: "Écriture", t: "Post LinkedIn à partir d'une idée", p: "Écris un post LinkedIn à partir de cette idée : [idée]. Une première ligne qui accroche, une histoire courte, une leçon, une question à la fin. Pas d'emojis, pas de jargon." },
  { c: "Écriture", t: "Écrire avec ma voix", p: "Voici 3 textes que j'ai écrits : [colle]. Analyse mon style (ton, longueur des phrases, expressions). Puis écris [nouveau texte] comme si c'était moi." },
  { c: "Écriture", t: "Raccourcir sans perdre le sens", p: "Réduis ce texte de moitié sans perdre l'essentiel. Puis donne-moi une version en une seule phrase : [colle]." },
  { c: "Écriture", t: "Corriger les fautes", p: "Corrige l'orthographe, la grammaire et la ponctuation de ce texte. Ne change pas le style. Liste ensuite les corrections importantes : [colle]." },
  { c: "Écriture", t: "Débloquer la page blanche", p: "Je dois écrire [type de texte] sur [sujet] et je bloque. Pose-moi 5 questions simples. Avec mes réponses, propose un plan et un premier paragraphe." },
  { c: "Apprentissage", t: "Apprendre n'importe quoi en 20 minutes", p: "Je veux comprendre [sujet] en 20 minutes. Explique-moi les bases avec une analogie simple, puis les 3 notions clés, puis pose-moi 3 questions pour vérifier que j'ai compris." },
  { c: "Apprentissage", t: "Explique-moi comme si j'avais 10 ans", p: "Explique-moi [concept] comme si j'avais 10 ans. Puis comme si j'avais 18 ans. Puis comme un expert. Je choisirai le niveau qui me va." },
  { c: "Apprentissage", t: "Mon prof particulier", p: "Sois mon prof particulier de [matière]. Commence par tester mon niveau avec 3 questions, puis construis un mini-cours adapté. Une étape à la fois, attends ma réponse." },
  { c: "Apprentissage", t: "Plan d'apprentissage sur 30 jours", p: "Je veux apprendre [compétence] avec [temps] par jour pendant 30 jours. Fais-moi un plan semaine par semaine avec des exercices concrets et des ressources gratuites." },
  { c: "Apprentissage", t: "Retenir un livre", p: "J'ai lu [titre du livre]. Pose-moi 5 questions pour m'aider à retenir les idées principales, puis donne-moi 3 façons de les appliquer cette semaine." },
  { c: "Apprentissage", t: "Pratiquer une langue", p: "Parlons en [langue] de [sujet qui m'intéresse]. Corrige mes erreurs gentiment à la fin de chaque message et propose une tournure plus naturelle." },
  { c: "Organisation", t: "Organiser ma journée", p: "Voici ce que j'ai à faire aujourd'hui : [liste]. J'ai [heures] disponibles et mon énergie est meilleure [le matin/l'après-midi]. Fais-moi un planning réaliste avec des pauses." },
  { c: "Organisation", t: "Prioriser une liste trop longue", p: "Voici ma liste de tâches : [colle]. Classe-les avec la matrice urgent/important et dis-moi ce que je peux supprimer ou déléguer sans regret." },
  { c: "Organisation", t: "Planifier ma semaine", p: "Mes objectifs de la semaine : [liste]. Mes contraintes : [rendez-vous, horaires]. Répartis le travail sur 5 jours, avec un créneau de rattrapage le vendredi." },
  { c: "Organisation", t: "Créer une checklist", p: "Crée une checklist complète pour [événement ou tâche : déménagement, lancement, voyage...]. Classe-la par étapes et par ordre chronologique." },
  { c: "Organisation", t: "Transformer un tableau en clair", p: "Voici des données : [colle]. Fais-en un tableau propre, puis donne-moi les 3 enseignements principaux en une phrase chacun." },
  { c: "Organisation", t: "Automatiser une tâche répétitive", p: "Chaque semaine je fais [tâche répétitive]. Propose 3 façons de la simplifier ou de l'automatiser avec des outils simples, du plus facile au plus puissant." },
  { c: "Vie perso", t: "Menus de la semaine", p: "Propose-moi les menus du soir pour 5 jours, pour [nombre] personnes, prêts en 30 minutes maximum, avec [contraintes]. Ajoute la liste de courses classée par rayon." },
  { c: "Vie perso", t: "Organiser un voyage", p: "Je pars [durée] à [destination] en [mois], budget [montant]. Propose un itinéraire jour par jour, avec un incontournable, un lieu peu connu et un bon restaurant par jour." },
  { c: "Vie perso", t: "Trouver le cadeau parfait", p: "Je cherche un cadeau pour [personne], qui aime [centres d'intérêt], budget [montant]. Propose 10 idées originales, dont 3 expériences plutôt que des objets." },
  { c: "Vie perso", t: "Préparer une conversation difficile", p: "Je dois parler à [personne] de [sujet sensible]. Aide-moi à préparer ce que je vais dire : une phrase pour ouvrir, les points clés, et comment réagir s'il ou elle le prend mal." },
  { c: "Vie perso", t: "Comprendre un courrier administratif", p: "Voici un courrier administratif : [colle]. Explique-moi simplement ce qu'il dit, ce que je dois faire, avant quelle date, et rédige la réponse si besoin." },
  { c: "Vie perso", t: "Lancer une nouvelle habitude", p: "Je veux prendre l'habitude de [habitude]. Propose une version ridiculement facile pour commencer, un déclencheur dans ma journée, et une façon de suivre mes progrès." },
  { c: "Vie perso", t: "Gérer mon budget", p: "Voici mes revenus et dépenses du mois : [colle]. Classe-les par catégorie, montre-moi où part mon argent et propose 3 économies faciles sans me priver." },
];
export default function Prompts() {
  useSeo("50 prompts IA qui font gagner 1 h par jour | Onur Karapinar", "50 prompts IA en français, gratuits, classés par usage : e-mails, résumés, réunions, écriture, apprentissage. Copie, colle, gagne du temps.", true);
  const [cat, setCat] = useState("Tous");
  const list = cat === "Tous" ? prompts : prompts.filter(p => p.c === cat);
  return (<>
    <section className="mx-auto max-w-6xl px-5 pb-8 pt-14 md:pt-20"><div className="kicker">Gratuit, sans inscription</div>
      <h1 className="mt-3 text-[2rem] font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">Les 50 prompts IA qui font gagner 1 h par jour.</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/80">Choisis un usage, <b>copie le prompt</b>, remplace ce qui est entre crochets, colle-le dans ChatGPT ou Claude. C'est tout. <b>Pas d'e-mail demandé.</b></p>
    </section>
    <section className="mx-auto max-w-6xl px-5 pb-16">
      <div role="group" aria-label="Filtrer par usage" className="sticky top-16 z-10 -mx-5 flex gap-2 overflow-x-auto bg-creme/95 px-5 py-3 backdrop-blur">{["Tous", ...cats].map(c => <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`min-h-[44px] shrink-0 rounded-full border px-4 text-sm font-semibold transition ${cat === c ? "border-ink bg-ink text-creme" : "border-sable bg-white text-ink hover:border-ink"}`}>{c}{c !== "Tous" && <span className="ml-1 opacity-60">{prompts.filter(p => p.c === c).length}</span>}</button>)}</div>
      <p className="mt-4 text-sm text-ink/70" aria-live="polite">{list.length} prompts</p>
      <div className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{list.map(p => { const n = prompts.indexOf(p) + 1; return <article key={p.t} className="card flex flex-col p-6"><div className="text-xs font-bold uppercase tracking-wider text-terra">{p.c} · n° {n}</div><h2 className="mt-2 text-lg font-extrabold">{p.t}</h2><p className="mt-3 flex-1 rounded-xl bg-pale p-4 font-mono text-[14px] leading-relaxed text-ink/85">{p.p}</p><div className="mt-4 flex flex-wrap items-center gap-3"><Copy text={p.p} label="Copier"/><a href={"https://chatgpt.com/?q=" + encodeURIComponent(p.p)} target="_blank" rel="noopener" className="inline-flex min-h-[44px] items-center text-sm font-bold text-terra underline underline-offset-4">Essayer dans ChatGPT</a></div></article>; })}</div>
    </section>
    <section className="bg-ink text-creme"><div className="mx-auto max-w-3xl px-5 py-16 text-center"><h2 className="text-3xl font-extrabold">Tu veux aller plus loin ?</h2><p className="mt-3 text-creme/80">Chaque guide : 10 minutes, des captures à chaque étape et la méthode détaillée. Une à deux fois par semaine.</p><div className="mx-auto mt-6 max-w-md"><SubscribeForm dark/></div></div></section>
  </>);
}
