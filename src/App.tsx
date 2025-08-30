import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Header/Header'
import { HomeGrid } from './Card/HomeGrid'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='h-dvh w-dvw flex flex-col'>
    <header className='w-full'>
        <Header/>
    </header>

    <div>
      <HomeGrid/>
    </div>

    </div>
  )
}

export default App
