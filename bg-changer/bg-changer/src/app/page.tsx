"use client"
import { useState } from "react"

export default function Home() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="outer-div h-screen duration-700 align-middle" style={{ backgroundColor: color }}>
        <div className="inner-div">
          <div className="bar-div bg-opacity-40 w-24 px-4 bg-white py-1 rounded-3xl shadow-xl float-right">
            
            <button 
            onClick={()=>{
              setColor("red")
            }}
            className="px-6 py-2 mt-3 mb-3 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
            
            <button 
            onClick={()=>{
              setColor("purple")
            }}
            className="px-4 py-2  mb-3 rounded-full text-white shadow-lg" style={{ backgroundColor: "purple" }}>Purple</button>
            
            <button 
            onClick={()=>{
              setColor("blue")
            }}
            className="px-6 py-2 mb-3 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}>Blue</button>
            
            <button 
            onClick={()=>{
              setColor("cyan")
            }}
            className="px-5 py-2 mb-3 rounded-full text-black shadow-lg" style={{ backgroundColor: "cyan" }}>Cyan</button>
            
            <button 
            onClick={()=>{
              setColor("green")
            }}
            className="px-4 py-2 mb-3 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>Green</button>
            
            <button 
            onClick={()=>{
              setColor("yellow")
            }}
            className="px-4 py-2 mb-3 rounded-full text-black shadow-lg" style={{ backgroundColor: "yellow" }}>Yellow</button>
          </div>

        </div>

      </div>
    </>
  )
}
