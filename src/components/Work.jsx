import Carousel from "../utils/Carousel"

export default function Work() {
  const soure = [
    "/assets/image-slide-1.jpg",
    "/assets/image-slide-2.jpg",
    "/assets/image-slide-3.jpg",
    "/assets/image-slide-4.jpg",
    "/assets/image-slide-5.jpg",
  ]

  return (
    <section className="work">
      <h2 className="text-preset-2">My Work</h2>
      <Carousel soure={soure}/>
    </section>
  )
}
