import { useContext } from "react";
import { textContext } from "./App";


export default function child() {
  const context = useContext(textContext)

  return (
    <div>{context?.text}</div>
  )
}
