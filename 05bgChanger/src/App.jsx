import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className=' fixed flex flex-wrap justify-center bottom-2 inset-x-0'>
       <div className='flex flex-wrap justify-center bg-white text-black px-3 py-2 rounded-full gap-3'> 
       <button className='rounded-full px-2 py-1 bg-red-500' onClick={()=>{setColor("red")}}>Red</button>
       <button className='rounded-full px-2 py-1 bg-blue-500' onClick={()=>{setColor("blue")}}>Blue</button>
       <button className='rounded-full px-2 py-1 bg-yellow-500' onClick={()=>{setColor("yellow")}}>Yellow</button>
       <button className='rounded-full px-2 py-1 bg-pink-500' onClick={()=>{setColor("Pink")}}>Pink</button>
       </div>
      </div>
        
     </div>
    </>
  )
}

export default App
