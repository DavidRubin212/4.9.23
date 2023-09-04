import Father from "./Father"
import { textContext } from "./App"
import { useContext, useRef } from "react"

export default function Grandpa() {
  const context = useContext(textContext)
  let temp = useRef('')
   return (
    <div>
        <input onChange={(event) =>temp.current =  event.target.value} type="text" />
        <button onClick={(_event)=> context?.setText(temp.current) }>add</button> 
         <Father/>
        {context?.text}
    </div>
  )
}
