import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Program from './Components/Programs/Program.jsx'
import Title from './Components/Title/Title.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title  subTitle='Our Program' title='What We Offer'/>
        <Program />
      </div>
      
    </>
  )
}

export default App