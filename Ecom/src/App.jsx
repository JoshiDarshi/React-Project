import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Navbar from './Components/Navbar'
import Kart from './Components/Kart'
import Product from './Components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Kart/>
     
       </>
  )
}

export default App
