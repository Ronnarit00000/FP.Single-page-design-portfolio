import IconsPattern from "./IconPattern"

export default function Hero() {
  return (
    <section className="hero">
      <div className="container wraps">
        <div className="wrap-intro flow">
          <h1 className="text-preset-1 clr-accent-900">Design solutions made easy</h1>
          <p className="text-preset-5 clr-accent-400">With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
        </div>
        <IconsPattern />
      </div>
    </section>
  )
};