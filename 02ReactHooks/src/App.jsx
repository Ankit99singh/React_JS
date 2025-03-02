import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterJs from './counterJs'
import CounterReact from './CounterReact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CounterJs/>
    <br/>
    <CounterReact/>
    </>
  )
}

export default App
