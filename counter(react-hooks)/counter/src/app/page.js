"use client"
import { useState } from "react"

export default function Home() {
  let [counter, setCounter] = useState(0)

  let addValue = () => {
    if(!Number.isInteger(counter)){
      setCounter(0)
    }else{

      setCounter(counter + 1)
    }
  }
  let removeValue = () => {
    console.log(counter)
    if (counter > 0) {
      setCounter(counter-1)
      //setTimeout(counter=0,2000)
    }
    else{

      setCounter("No negative vibes!")
    }
  }
  return (
    <>
      <div className="text-center items-center h-48">
        <div className="border-slate-400 m-auto w-1/2 border-2 h-48"><h1>Our value is: {counter}</h1></div>
        <br />
        <button
          className="border-purple-400 border-2 px-3 py-1 rounded-md mb-2 bg-purple-500 hover:border-purple-800"
          onClick={addValue}
        >Add Value
        </button>
        <br />
        <button
          className="border-purple-400 border-2 px-3 py-1 rounded-md bg-purple-500 hover:border-purple-800"
          onClick={removeValue}
        >Remove Value
        </button>
      </div>

    </>
  )
}
