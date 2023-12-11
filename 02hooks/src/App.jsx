import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(5)
  
  var addValue=()=>{
   
   setCount(counter+1)
   console.log("counter value  -->", counter)
  }


  return (
    <>
     <h1>Counter Project TO understand hooks</h1>
     <h2>Value = {counter}</h2>
     <button onClick={addValue}>Add one</button>
     {/* <br />
     <button onClick={subValue}>Subtract one</button> */}
    </>
  )
}

export default App
