import Carousel from "../utils/Carousel"

export default function Work() {
  return (
    <section className="work">
      <h2 className="text-preset-2">My Work</h2>
      <Carousel>
        <img src="/assets/image-slide-1.jpg" alt="image -slide" />
        <img src="/assets/image-slide-2.jpg" alt="image -slide" />
        <img src="/assets/image-slide-3.jpg" alt="image -slide" />
        <img src="/assets/image-slide-4.jpg" alt="image -slide" />
        <img src="/assets/image-slide-5.jpg" alt="image -slide" />
      </Carousel >
    </section>
  )
}
