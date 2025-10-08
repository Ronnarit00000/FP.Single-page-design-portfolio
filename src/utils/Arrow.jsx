import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

function ArrowLeft({onClick}) {
  return (
    <button className="arrow-left" onClick={onClick}>
      <MdArrowBack />
    </button>
  )
}

function ArrowRight({onClick}) {
  return (
    <button className="arrow-right" onClick={onClick}>
      <MdArrowForward />
    </button>
  )
}

export {ArrowLeft, ArrowRight}