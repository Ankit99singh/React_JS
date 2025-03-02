import { useEffect } from "react"
import { useRef } from "react"
import { useCallback } from "react"
import { useState } from "react"



function App() {

  const [length, setLength]=useState(8)
  const [isNum, setIsNum]=useState(false)
  const [isSpecialChar, SetIsSpecialChar]=useState(false)

  const [password,setPassword]=useState("")

  const passwordRef=useRef(null)

  const passWordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(isNum){
      str+="0123456789"
    }
    if(isSpecialChar){
      str+="&!@#$%^"
    }

    for(let i=0; i<length; i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }

    setPassword(pass)

  },[length, isSpecialChar, isNum, setPassword])


  const copyPassWordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,101)
    window.navigator.clipboard.writeText(password)
  },[password])

  
 useEffect(()=>{
  passWordGenerator()
 },[length,isNum,isSpecialChar])

  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPassWordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
         defaultChecked={isNum}
          id="numberInput"
          onChange={() => {
            setIsNum((prev)=>!prev)
            console.log(isNum, isSpecialChar)
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
             defaultChecked={isSpecialChar}
              id="characterInput"
              onChange={() => {
                SetIsSpecialChar((prev)=>!prev)
                console.log(isNum, isSpecialChar)
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App