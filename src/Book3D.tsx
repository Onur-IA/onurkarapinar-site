export function Book3D({ src }: { src: string }) {
  return <div className="book3d mx-auto w-56 md:w-72">
    <div className="book3d-inner">
      <span aria-hidden="true" className="book3d-back"/>
      <span aria-hidden="true" className="book3d-pages"/>
      <span aria-hidden="true" className="book3d-spine"/>
      <img src={src} alt="Couverture du livre Petites habitudes, grandes réussites" width="288" height="422" fetchPriority="high" className="book3d-front"/>
    </div>
    <span aria-hidden="true" className="book3d-shadow"/>
  </div>;
}
