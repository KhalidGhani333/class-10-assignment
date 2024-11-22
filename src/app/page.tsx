
import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Brands from './components/brands'
import NewArrival from './components/newArrival'
import Topselling from './components/topselling'
import DressStyle from './components/dressStyle'
import Happyrate from './components/happyrate'
import Footer from './components/footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Brands/>
      <NewArrival/>
      <Topselling/>
      <DressStyle/>
      <Happyrate/>
      <Footer/>
    </div>
  )
}

export default Home
