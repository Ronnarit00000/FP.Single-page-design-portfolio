export default function Carousel({children}) {
  // create carousel with css only
  return (
    <section className="carousel">
      <span></span>
      {children}
      <span></span>
    </section>  
  )
}