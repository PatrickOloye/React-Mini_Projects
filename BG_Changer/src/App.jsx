import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  // const changeColor = (color) =>{
  //   setColor(color)
  // }
  // This should be put in the button if the above is used. onClick={()=> changeColor("green")

  return (
    <div className="w-full h-screen duration-100" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2">
        <div className="flex flex-warp justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-200' onClick={()=> setColor("green")}>green</button> {" "}
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-blue-200' onClick={()=> setColor("blue")}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-200' onClick={()=> setColor("red")}>red</button>
        </div>
      </div>
    </div>
  )
}
 
export default App
