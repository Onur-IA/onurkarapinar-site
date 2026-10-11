export function Book3D({ src }: { src: string }) {
  return <div className="book3d mx-auto w-56 md:w-72" style={{ aspectRatio: "150/220" }}>
    <div className="book3d-inner">
      <img src={src} alt="Couverture du livre Petites habitudes, grandes réussites" width="288" height="422" fetchPriority="high" className="book3d-front"/>
      <span aria-hidden="true" className="book3d-spine"/>
      <span aria-hidden="true" className="book3d-pages"/>
    </div>
  </div>;
}
