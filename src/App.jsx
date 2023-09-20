import { useState } from 'react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import './App.css'
import Qualification from './components/Qualification/Qualification'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Qualification />
      <Contact />
    </>
  )
}

export default App
