import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './components/Profile'
import Login  from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
    <h1>React Context API</h1>
    <Login/>
    <Profile/>
   </UserContextProvider>
  )
}

export default App
