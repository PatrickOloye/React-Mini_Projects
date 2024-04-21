import { useState } from 'react'
import Cards from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cards name="Elvida Shawn" address="Ajah" school='The firts'/>{""}
      <Cards/>{""}
      <Cards name="" address="" school=""/>
    </>
  )
}

export default App
