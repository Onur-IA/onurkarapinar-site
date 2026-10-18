export type Tool = { n: string; d: string; u: string; c: string; guide?: string; aff?: boolean };
const S = "https://onurkarapinar.substack.com/p/";
export const CATS = ["IA", "Écrire et dicter", "Créer", "Organiser", "Publier et construire"];
export const all: Tool[] = [
  { n: "Wispr Flow", c: "Écrire et dicter", d: "Mon outil principal. Je parle au lieu de taper, partout sur mon ordinateur.", u: "https://ref.wisprflow.ai/onur-karapinar-qzbo", aff: true },
  { n: "Claude", c: "IA", d: "L'assistant IA au cœur de la plupart de mes guides : contexte, Projects, Skills, Cowork.", u: "https://claude.ai/", guide: S + "claude-guide-debutant" },
  { n: "Grok", c: "IA", d: "L'assistant IA de xAI, pour chercher et créer au quotidien.", u: "https://grok.com/" },
  { n: "ChatGPT", c: "IA", d: "L'assistant le plus connu, pour tester les prompts du site en un clic.", u: "https://chatgpt.com/" },
  { n: "Gemini", c: "IA", d: "L'assistant IA de Google, utile aussi pour générer des images.", u: "https://gemini.google.com/", guide: S + "nano-banana-2-le-guide-pour-bien" },
  { n: "Granola", c: "Écrire et dicter", d: "Il prend les notes de mes réunions pour que je reste dans la conversation.", u: "https://go.granola.ai/onur-karapinar", aff: true },
  { n: "Superwhisper", c: "Écrire et dicter", d: "Une autre app de dictée vocale, pour transformer ma voix en texte propre.", u: "https://superwhisper.link/onur-karapinar", aff: true },
  { n: "Canva", c: "Créer", d: "Mes couvertures de newsletter et mes visuels, avec son générateur d'images.", u: "https://www.canva.com/" },
  { n: "CleanShot X", c: "Créer", d: "Les captures d'écran de mes guides, annotées en quelques secondes. Je l'utilise via Setapp, il existe aussi seul.", u: "https://go.cleanshot.com/onur-karapinar", aff: true },
  { n: "ElevenLabs", c: "Créer", d: "Des voix IA ultra réalistes pour transformer un texte en voix off ou en podcast, en quelques clics.", u: "https://try.elevenlabs.io/y64lsjs1ku8g", aff: true },
  { n: "Setapp", c: "Organiser", d: "Un abonnement pour des dizaines d'apps Mac, dont CleanShot X et CleanMyMac.", u: "https://setapp.com/" },
  { n: "CleanMyMac", c: "Organiser", d: "Pour garder mon Mac propre et rapide.", u: "https://macpaw.com/cleanmymac" },
  { n: "Notion", c: "Organiser", d: "Mon espace pour organiser mes projets et mon contenu.", u: "https://www.notion.com/" },
  { n: "Obsidian", c: "Organiser", d: "Mon second cerveau : toutes mes notes, en fichiers simples.", u: "https://obsidian.md/" },
  { n: "Todoist", c: "Organiser", d: "Ma liste de tâches, du quotidien aux projets.", u: "https://www.todoist.com/" },
  { n: "Alfred", c: "Organiser", d: "Des raccourcis et des snippets sur Mac pour aller plus vite.", u: "https://www.alfredapp.com/" },
  { n: "Substack", c: "Publier et construire", d: "La plateforme qui envoie ma newsletter Apprendre l'IA.", u: "https://substack.com/" },
  { n: "Claude Code", c: "Publier et construire", d: "Pour construire des outils et des sites en décrivant ce que je veux.", u: "https://www.claude.com/product/claude-code" },
  { n: "Cursor", c: "Publier et construire", d: "L'éditeur de code avec l'IA intégrée.", u: "https://cursor.com/" },
  { n: "GitHub", c: "Publier et construire", d: "Là où vivent le code de ce site et mes notes versionnées.", u: "https://github.com/" },
  { n: "Cloudflare", c: "Publier et construire", d: "L'hébergement de ce site, rapide et gratuit.", u: "https://www.cloudflare.com/" },
  { n: "Stripe", c: "Publier et construire", d: "Pour encaisser les paiements en ligne.", u: "https://stripe.com/" },
];
const home = ["Wispr Flow", "Claude", "Grok", "ChatGPT", "Granola", "Canva"];
export const tools = home.map(n => all.find(t => t.n === n)!);
export const DISCLOSURE = "Certains liens sont affiliés. Je ne recommande que des outils que j'utilise.";
