import { useState } from "react";
export function LiteYT({ id, title }: { id: string; title: string }) {
  const [on, setOn] = useState(false);
  return <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-ink shadow-[0_10px_30px_-12px_rgba(43,43,43,.35)]">
    {on ? <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
    : <button type="button" onClick={() => setOn(true)} aria-label={`Lire la vidéo : ${title}`} className="group absolute inset-0 h-full w-full">
        <img src={`/img/yt-${id}.webp`} alt="" width="800" height="450" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"/>
        <span aria-hidden="true" className="absolute inset-0 bg-ink/15 transition group-hover:bg-ink/5"/>
        <span aria-hidden="true" className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-terra shadow-[0_6px_0_#8f3c28] transition group-hover:scale-110"><svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-white"><path d="M8 5v14l11-7z"/></svg></span>
      </button>}
  </div>;
}
