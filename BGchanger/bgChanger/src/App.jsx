import { useState } from 'react'
import { Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
function App() {
  const [color, setColor] = useState("white"); 
  return (
    <>
        <div className="w-full h-screen duration-200"
        style = {{backgroundColor : color}}> 

        <div className= "fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2"> 
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" >
          <button className="outlin-none px-4 py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor : "red"}}
          onClick={()=> setColor("red")}>Red</button> 
          <button className="outlin-none px-4 py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor : "green"}}
          onClick={()=> setColor("green")}>Green</button> 
          <button className="outlin-none px-4 py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor : "yellow"}}
          onClick={()=> setColor("yellow")}>Yellow</button> 
          <button className="outlin-none px-4 py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor : "pink"}}
          onClick={()=> setColor("pink")}>Pink</button> 
          <button className="outlin-none px-4 py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor : "blue"}}
          onClick={()=> setColor("blue")}>Blue</button>
        </div>
        </div>
        </div>
    </>
  )
}

export default App
