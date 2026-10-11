export type Tool = { n: string; d: string; u: string; guide?: string };
const S = "https://onurkarapinar.substack.com/p/";
export const tools: Tool[] = [
  { n: "Claude", d: "L'assistant IA au cœur de la plupart de mes guides : contexte, Projects, Skills, Cowork.", u: "https://claude.ai/", guide: S + "claude-guide-debutant" },
  { n: "ChatGPT", d: "L'assistant le plus connu, pour tester les prompts du site en un clic.", u: "https://chatgpt.com/" },
  { n: "Nano Banana (Gemini)", d: "Le générateur d'images de Google, pour créer des visuels sans graphiste.", u: "https://gemini.google.com/", guide: S + "nano-banana-2-le-guide-pour-bien" },
  { n: "Canva", d: "Mes couvertures de newsletter et mes visuels, avec son générateur d'images.", u: "https://www.canva.com/" },
  { n: "Notion", d: "Mon espace pour organiser mes idées, mes projets et mon contenu.", u: "https://www.notion.com/" },
  { n: "Granola", d: "Il prend les notes de mes réunions pour que je reste dans la conversation.", u: "https://www.granola.ai/" },
];
export const moreTools: Tool[] = [
  { n: "Substack", d: "La plateforme qui envoie ma newsletter Apprendre l'IA.", u: "https://substack.com/" },
  { n: "Todoist", d: "Ma liste de tâches, du quotidien aux projets.", u: "https://www.todoist.com/" },
  { n: "Alfred", d: "Des raccourcis et des snippets sur Mac pour aller plus vite.", u: "https://www.alfredapp.com/" },
];
export const DISCLOSURE = ""; // À activer plus tard : "Certains liens sont affiliés. Je ne recommande que des outils que j'utilise."
