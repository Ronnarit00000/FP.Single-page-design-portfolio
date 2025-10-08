export default function IconsPattern(){
  return(
    <div className="icon-wrapper">
      <IconGraphic />
      <IconUiUx />
      <IconApp />
      <IconIllustrations />
      <IconPhotography />
      <IconMotion />
    </div>
  )
}

function IconGraphic() {
  return (
    <figure className="icon-pattern bg-galactic-blue-500 ">
      <img className="icon" src="/assets/pattern-graphic-design.svg" alt="graphic-design" />
      <figcaption className="name text-preset-3 clr-accent-0">Graphic Design</figcaption>
    </figure>
  )
}

function IconUiUx() {
  return (
    <figure className="icon-pattern bg-summer-yellow-500">
      <img className="icon" src="/assets/pattern-ui-ux.svg" alt="ui-ux" />
      <figcaption className="name text-preset-3 clr-accent-0">UI/UX</figcaption>
    </figure>
  )
}

function IconApp() {
  return (
    <figure className="icon-pattern bg-pink-500">
      <img className="icon" src="/assets/pattern-apps.svg" alt="app" />
      <figcaption className="name text-preset-3 clr-accent-0">Apps</figcaption>
    </figure>
  )
}

function IconIllustrations() {
  return (
    <figure className="icon-pattern bg-light-red-500">
      <img className="icon" src="/assets/pattern-illustrations.svg" alt="illustrations" />
      <figcaption className="name text-preset-3 clr-accent-0">Illustrations</figcaption>
    </figure>
  )
}

function IconPhotography() {
  return (
    <figure className="icon-pattern bg-cyan-500">
      <img className="icon" src="/assets/pattern-photography.svg" alt="photography" />
      <figcaption className="name text-preset-3 clr-accent-0">Photography</figcaption>
    </figure>
  )
}

function IconMotion() {
  return (
    <figure className="icon-pattern bg-dark-purple-500">
      <img className="icon" src="/assets/pattern-motion-graphics.svg" alt="motion-graphics" />
      <figcaption className="name text-preset-3 clr-accent-0">Motion Graphics</figcaption>
    </figure>
  )
}