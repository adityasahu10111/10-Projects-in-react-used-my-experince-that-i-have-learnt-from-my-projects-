import { useCallback, useEffect, useRef, useState } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowd] = useState(false)
  const [password, setPassword] = useState(" ")


  const pwref = useRef(null)


  const passwordGenerator =useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(charAllowed){str+="!@#$%^&*{}"}
    if(numberAllowed){ str+= "0123456789"}
    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copypwtoclip = useCallback(()=>{
    pwref.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,setPassword,passwordGenerator])

  return (
    <>
      <div className=' max-w-lg mx-auto rounded-lg bg-green-950 px-8 py-6 m-16 text-white '>
       <h1 className='text-white text-center'>Passwrod generator</h1>
     
      <div className="flex  overflow-hidden mb-4 rounded-lg m-3 text-green-400 w-full">
        <input 
        type="text"
        
        value = {password} 
        
        readOnly
        className = "outline-none w-full py-2 "
        placeholder = "password generator"
        ref={pwref}
        />
        <btn onClick={copypwtoclip} className="text-white bg-blue-500  px-3 py-1.5 outline-none text-center ">Copy</btn>
       </div>
       <div className='flex text-sm gap-x-4'>
        <div className='flex items-center gap-x-1'>
          <input 
        type="range" 
           min={6}
           max={100}
           value={length}
           className='cursor-pointer'
           onChange={(e)=>{setLength(e.target.value)}}
         /> <label >Length:{length}</label>
         </div>
         <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed} 
        onChange={() => setNumberAllowed(prev => !prev)}
        
         /> 
         <label htmlFor="Numbers">Numbers</label>
       </div>
         <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed} 
        onChange={() => setCharAllowd(prev => !prev)}
         /> 
         <label htmlFor="characters">Characters</label>
       </div>
       
       </div>
      </div>
    </>
  )
}

export default App
