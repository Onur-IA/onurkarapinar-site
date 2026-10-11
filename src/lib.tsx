import { useEffect, useRef, useState, ReactNode } from "react";
export const A = "https://cdn.jsdelivr.net/gh/Onur-IA/ak-site-assets@283b470/home";
export const SUB = "https://onurkarapinar.substack.com/subscribe";
export const AMAZON = "https://www.amazon.fr/dp/2212572018";
export const PDF = "https://www.onurkarapinar.com/s/Petites_Habitudes_Grandes_Reussites___Extrait.pdf";
export function useSeo(title: string, desc: string) {
  useEffect(() => {
    document.title = title;
    const set = (sel: string, attr: string, v: string) => { let m = document.querySelector(sel) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); const [k, n] = attr.split("="); m.setAttribute(k, n); document.head.appendChild(m); } m.content = v; };
    set('meta[name="description"]', "name=description", desc);
    set('meta[property="og:title"]', "property=og:title", title);
    set('meta[property="og:description"]', "property=og:description", desc);
    window.scrollTo(0, 0);
  }, [title, desc]);
}
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const r = useRef<HTMLDivElement>(null); const [v, setV] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: 0.12 }); r.current && o.observe(r.current); return () => o.disconnect(); }, []);
  return <div ref={r} style={{ transitionDelay: delay + "ms" }} className={"reveal " + (v ? "in " : "") + className}>{children}</div>;
}
export function SubscribeForm({ dark = false }: { dark?: boolean }) {
  return (
    <form action={SUB} method="get" target="_blank" className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
      <label className="sr-only" htmlFor="em">Ton e-mail</label>
      <input id="em" name="email" type="email" required placeholder="Ton adresse e-mail" className={"min-w-0 flex-1 rounded-full border-2 px-5 py-3 outline-none focus:border-terra " + (dark ? "border-creme/30 bg-transparent text-creme placeholder:text-creme/60" : "border-sable bg-white")}/>
      <button className="btn whitespace-nowrap">Je m'abonne</button>
    </form>
  );
}
export function Copy({ text, label = "Copier le prompt" }: { text: string; label?: string }) {
  const [ok, setOk] = useState(false);
  return <button type="button" className="btn" onClick={async () => { try { await navigator.clipboard.writeText(text); } catch { const t = document.createElement("textarea"); t.value = text; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); } setOk(true); setTimeout(() => setOk(false), 2000); }}>{ok ? "Copié !" : label}</button>;
}
export const Quote = ({ q, n, src, img }: { q: string; n: string; src: string; img?: string }) => (
  <figure className="card mb-5 break-inside-avoid p-6">
    <blockquote className="text-[15px] leading-relaxed">« {q} »</blockquote>
    <figcaption className="mt-4 flex items-center gap-3 text-sm">
      {img ? <img src={img} alt={n} loading="lazy" className="h-10 w-10 rounded-full object-cover grayscale"/> : <span className="grid h-10 w-10 place-items-center rounded-full bg-pale font-bold">{n[0]}</span>}
      <span><b>{n}</b><br/><span className="text-ink/60">a commenté {src}</span></span>
    </figcaption>
  </figure>
);
export const Stats = ({ items }: { items: [string, string][] }) => (
  <div className="grid grid-cols-2 gap-6 md:grid-cols-5">{items.map(([n, l], i) => <Reveal key={l} delay={i * 80}><div className="text-3xl font-extrabold text-terra md:text-4xl">{n}</div><div className="text-sm text-ink/70">{l}</div></Reveal>)}</div>
);
export function CtaBand({ title, text }: { title: string; text: string }) {
  return <section className="bg-ink text-creme"><div className="mx-auto max-w-3xl px-5 py-20 text-center"><Reveal><h2 className="h2">{title}</h2><p className="mx-auto mt-4 max-w-xl text-creme/80">{text}</p><div className="mt-8 flex justify-center"><SubscribeForm dark/></div></Reveal></div></section>;
}
