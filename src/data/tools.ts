export type Tool = { n: string; d: string; u: string; guide?: string };
const S = "https://onurkarapinar.substack.com/p/";
export const tools: Tool[] = [
  { n: "Wispr Flow", d: "Je parle au lieu de taper, partout sur mon ordinateur. Mon outil principal.", u: "https://wisprflow.ai/" },
  { n: "Claude", d: "L'assistant IA au cœur de la plupart de mes guides : contexte, Projects, Skills, Cowork.", u: "https://claude.ai/", guide: S + "claude-guide-debutant" },
  { n: "Grok", d: "L'assistant IA de xAI, pour chercher et créer au quotidien.", u: "https://grok.com/" },
  { n: "ChatGPT", d: "L'assistant le plus connu, pour tester les prompts du site en un clic.", u: "https://chatgpt.com/" },
  { n: "Granola", d: "Il prend les notes de mes réunions pour que je reste dans la conversation.", u: "https://www.granola.ai/" },
  { n: "Canva", d: "Mes couvertures de newsletter et mes visuels, avec son générateur d'images.", u: "https://www.canva.com/" },
];
export const moreTools: Tool[] = [
  { n: "Claude Code", d: "Pour construire des outils et des sites, comme celui-ci, en décrivant ce que je veux.", u: "https://www.claude.com/product/claude-code" },
  { n: "Cursor", d: "L'éditeur de code avec l'IA intégrée.", u: "https://cursor.com/" },
  { n: "Gemini", d: "L'assistant IA de Google, utile aussi pour générer des images.", u: "https://gemini.google.com/", guide: S + "nano-banana-2-le-guide-pour-bien" },
  { n: "Obsidian", d: "Mon second cerveau : toutes mes notes, en fichiers simples.", u: "https://obsidian.md/" },
  { n: "Notion", d: "Mon espace pour organiser mes projets et mon contenu.", u: "https://www.notion.com/" },
  { n: "Todoist", d: "Ma liste de tâches, du quotidien aux projets.", u: "https://www.todoist.com/" },
  { n: "Alfred", d: "Des raccourcis et des snippets sur Mac pour aller plus vite.", u: "https://www.alfredapp.com/" },
  { n: "Substack", d: "La plateforme qui envoie ma newsletter Apprendre l'IA.", u: "https://substack.com/" },
];
export const DISCLOSURE = ""; // À activer plus tard : "Certains liens sont affiliés. Je ne recommande que des outils que j'utilise."
