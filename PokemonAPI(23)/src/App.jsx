import { useState } from 'react'
import Pokemon from './components/Pokemon';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Pokemon List</h1>
        <Pokemon/>
      </div>

    </>
  )
}

export default App
