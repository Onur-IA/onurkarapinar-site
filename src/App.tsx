import { Routes, Route, NavLink, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home"; import Livre from "./pages/Livre"; import APropos from "./pages/APropos";
import Guides from "./pages/Guides"; import Merci from "./pages/Merci"; import NotFound from "./pages/NotFound"; import Prompts from "./pages/Prompts"; import HeroTest from "./pages/HeroTest";
import Outils from "./pages/Outils"; import Commencer from "./pages/Commencer"; import Mentions from "./pages/Mentions";
import { SUB } from "./lib";
const nav = [["/commencer-ici", "Commence ici"], ["/guides", "Guides"], ["/outils", "Outils"], ["/livre", "Livre"], ["/a-propos", "À propos"]];
export default function App() {
  const [open, setOpen] = useState(false); const loc = useLocation(); useEffect(() => setOpen(false), [loc]);
  return (<div className="flex min-h-screen flex-col font-sans">
    <a href="#main" className="sr-only focus:not-sr-only">Aller au contenu</a>
    <header className="sticky top-0 z-40 border-b border-sable/70 bg-creme/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:grid md:grid-cols-[1fr_auto_1fr]">
        <Link to="/" className="inline-flex min-h-[44px] items-center text-lg font-extrabold tracking-tight">Onur<span className="text-terra">.</span></Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {nav.map(([to, l]) => <NavLink key={to} to={to} className={({ isActive }) => "inline-flex min-h-[44px] items-center " + (isActive ? "text-terra" : "hover:text-terra")}>{l}</NavLink>)}
        </nav>
        <div className="hidden justify-end md:flex"><a href={SUB} className="btn !min-h-[44px] !px-5 !py-2 text-sm">Newsletter gratuite</a></div>
        <button className="md:hidden grid h-11 w-11 place-items-center" aria-label="Menu" onClick={() => setOpen(!open)}><div className="space-y-1.5"><span className="block h-0.5 w-6 bg-ink"/><span className="block h-0.5 w-6 bg-ink"/><span className="block h-0.5 w-4 bg-ink"/></div></button>
      </div>
      {open && <nav className="flex flex-col gap-4 border-t border-sable px-5 py-5 text-lg font-medium md:hidden">
        {nav.map(([to, l]) => <NavLink key={to} to={to} className="py-2">{l}</NavLink>)}<a href={SUB} className="btn">Newsletter gratuite</a></nav>}
    </header>
    <main id="main" className="flex-1"><Routes>
      <Route path="/" element={<Home/>}/><Route path="/livre" element={<Livre/>}/><Route path="/a-propos" element={<APropos/>}/>
      <Route path="/guides" element={<Guides/>}/><Route path="/outils" element={<Outils/>}/><Route path="/commencer-ici" element={<Commencer/>}/><Route path="/hero-test" element={<HeroTest/>}/><Route path="/prompts" element={<Prompts/>}/><Route path="/mentions-legales" element={<Mentions/>}/><Route path="/merci" element={<Merci/>}/><Route path="*" element={<NotFound/>}/>
    </Routes></main>
    <footer className="bg-ink text-creme/80"><div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 text-sm md:grid-cols-3">
      <div><div className="text-lg font-extrabold text-creme">Onur<span className="text-terra">.</span></div><p className="mt-2">L'IA, vraiment simple. Un guide IA pas à pas de 10 minutes, une à deux fois par semaine.</p></div>
      <div className="flex flex-col [&>a]:inline-flex [&>a]:min-h-[44px] [&>a]:items-center"><Link to="/commencer-ici">Commence ici</Link><Link to="/guides">Guides</Link><Link to="/outils">Outils</Link><Link to="/livre">Le livre</Link><Link to="/a-propos">À propos</Link><a href={SUB}>Newsletter</a></div>
      <div className="flex flex-col [&>a]:inline-flex [&>a]:min-h-[44px] [&>a]:items-center"><a href="https://www.linkedin.com/in/onurkarapinar/">LinkedIn</a><a href="https://onurkarapinar.substack.com">Substack</a><Link to="/mentions-legales">Mentions légales</Link><span className="mt-2 text-creme/50">© 2026 Onur Karapinar</span></div>
    </div></footer>
  </div>);
}
