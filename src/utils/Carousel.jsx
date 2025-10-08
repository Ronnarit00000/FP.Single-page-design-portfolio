import { ArrowLeft, ArrowRight } from "./Arrow"
import { useState } from "react"

export default function Carousel({soure}) {
  let [index, setIndex] = useState(2);
  let firstIndex = 0;
  let lastIndex = soure.length - 1;

  function next(){
    index >= lastIndex 
    ? setIndex(lastIndex)
    : setIndex(pre => pre + 1)
  }

  function previous(){
    index <= firstIndex 
    ? setIndex(firstIndex)
    : setIndex(pre => pre - 1)
  }

  return (
    <section className="carousel">
      <div className="handler">
        {soure[index - 1] 
          ? <img src={soure[index - 1]} alt="image-slide" /> 
          : <span></span>}

        <img src={soure[index]} alt="image-slide" />

        {soure[index + 1] 
          ? <img src={soure[index + 1]} alt="image-slide" /> 
          : <span></span>}
      </div>
      <div className="controller">
        <ArrowLeft onClick={previous}/>
        <ArrowRight onClick={next}/>
      </div>
    </section>  
  )
}
