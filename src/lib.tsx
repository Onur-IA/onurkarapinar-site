import { useEffect, useRef, useState, ReactNode } from "react";
export const A = "/img";
export const SUB = "https://onurkarapinar.substack.com/subscribe";
export const AMAZON_TAG = "medium-ok-21";
export const amz = (asin: string) => `https://www.amazon.fr/dp/${asin}` + (AMAZON_TAG ? `?tag=${AMAZON_TAG}` : "");
export const amzRel = AMAZON_TAG ? "sponsored noopener" : "noopener";
export const AMAZON = amz("2212572018");
export const KINDLE = amz("B07PFLM9HD");
// Extrait PDF : déposer le fichier dans public/ puis renseigner le chemin, ex. "/extrait-petites-habitudes.pdf"
export const PDF = "/extrait-petites-habitudes-grandes-reussites.pdf";
export function useSeo(title: string, desc: string) {
  useEffect(() => {
    document.title = title;
    const set = (sel: string, attr: string, v: string) => { let m = document.querySelector(sel) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); const [k, n] = attr.split("="); m.setAttribute(k, n); document.head.appendChild(m); } m.content = v; };
    set('meta[name="description"]', "name=description", desc);
    set('meta[property="og:title"]', "property=og:title", title);
    set('meta[property="og:description"]', "property=og:description", desc);
    const u = "https://www.onurkarapinar.com" + window.location.pathname; let c = document.querySelector('link[rel=canonical]') as HTMLLinkElement | null; if (!c) { c = document.createElement('link'); c.rel = 'canonical'; document.head.appendChild(c); } c.href = u; set('meta[property="og:url"]', 'property=og:url', u);
    window.scrollTo(0, 0);
  }, [title, desc]);
}
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const r = useRef<HTMLDivElement>(null); const [v, setV] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0, rootMargin: "0px 0px -40px 0px" }); r.current && o.observe(r.current); return () => o.disconnect(); }, []);
  return <div ref={r} style={{ transitionDelay: delay + "ms" }} className={"reveal " + (v ? "in " : "") + className}>{children}</div>;
}
export function SubscribeForm({ dark = false }: { dark?: boolean }) {
  return (
    <form action={SUB} method="get" target="_blank" onSubmit={() => setTimeout(() => { window.location.href = "/merci"; }, 400)} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
      <label className="sr-only" htmlFor="em">Ton e-mail</label>
      <input id="em" name="email" type="email" required placeholder="Ton adresse e-mail" className={"min-w-0 flex-1 rounded-full border-2 px-5 py-3.5 outline-none transition focus:border-terra focus:ring-4 focus:ring-pale/60 " + (dark ? "border-creme/30 bg-transparent text-creme placeholder:text-creme/60" : "border-sable bg-white")}/>
      <button className="btn whitespace-nowrap">Je m'abonne</button>
    </form>
  );
}
export function Copy({ text, label = "Copier le prompt" }: { text: string; label?: string }) {
  const [ok, setOk] = useState(false);
  return <button type="button" className="btn" onClick={async () => { try { await navigator.clipboard.writeText(text); } catch { const t = document.createElement("textarea"); t.value = text; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); } setOk(true); setTimeout(() => setOk(false), 2000); }}>{ok ? "Copié !" : label}</button>;
}
export const Hl = ({ t }: { t: string }) => <>{t.split(/(\*\*[^*]+\*\*)/).map((p, i) => p.startsWith("**") ? <span key={i} className="underline decoration-terral decoration-[3px] underline-offset-4 [text-decoration-skip-ink:none]">{p.slice(2, -2)}</span> : p)}</>;
export const Quote = ({ q, n, src, img }: { q: string; n: string; src: string; img?: string }) => (
  <figure className="card mb-5 break-inside-avoid p-7 hover:-rotate-[.6deg]">
    <blockquote className="text-[15px] leading-relaxed">« <Hl t={q}/> »</blockquote>
    <figcaption className="mt-4 flex items-center gap-3 text-sm">
      {img ? <img src={img} alt={`Photo de ${n}`} loading="lazy" width="40" height="40" className="h-10 w-10 rounded-full object-cover"/> : <span className="grid h-10 w-10 place-items-center rounded-full bg-pale font-bold">{n[0]}</span>}
      <span><b>{n}</b><br/><span className="text-ink/60">a commenté {src}</span></span>
    </figcaption>
  </figure>
);
export const Stats = ({ items }: { items: [string, string][] }) => (
  <div className={`grid grid-cols-2 gap-6 ${items.length === 6 ? "md:grid-cols-3" : "md:grid-cols-5"}`}>{items.map(([n, l], i) => <Reveal key={l} delay={i * 80}><div className="whitespace-nowrap font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">{n}</div><div className="mt-1 text-sm text-ink/70">{l}</div></Reveal>)}</div>
);
export function CtaBand({ title, text }: { title: string; text: string }) {
  return <section className="bg-ink text-creme"><div className="mx-auto max-w-3xl px-5 py-20 text-center"><Reveal><h2 className="h2">{title}</h2><p className="mx-auto mt-4 max-w-xl text-creme/80">{text}</p><div className="mt-8 flex justify-center"><SubscribeForm dark/></div></Reveal></div></section>;
}
export const Scribble = ({ children }: { children: ReactNode }) => <span className="scribble">{children}<svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true"><path d="M2 14 C 40 4, 80 18, 120 9 S 180 6, 198 12" fill="none" stroke="#D96A4E" strokeWidth="5" strokeLinecap="round"/></svg></span>;
export const Arrow = () => <svg width="60" height="40" viewBox="0 0 60 40" aria-hidden="true" className="hidden md:inline-block text-terral"><path d="M4 6 C 20 30, 36 34, 54 26 M44 20 L55 26 L46 34" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
