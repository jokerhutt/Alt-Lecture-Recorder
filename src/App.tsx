import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Header/Header'
import { HomeGrid } from './Card/HomeGrid'
import { MainNavigation } from './Nav/MainNavigation'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className='h-dvh w-dvw flex flex-col'>
    <header className='w-full'>
        <Header/>
    </header>

    <div className='w-full h-full'>
      <div className='h-full w-1/4'>
        <MainNavigation/>
      </div>
      <div>

      </div>
    </div>

    </div>
  )
}

export default App
