
import React from 'react'

import Hero from './components/hero'
import Brands from './components/brands'
import NewArrival from './components/newArrival'
import TopSelling from './components/topselling'
import DressStyle from './components/dressStyle'
import Happyrate from './components/happyrate'


const Home = () => {
  return (
    <div >
      
      <Hero/>
      <Brands/>
      <NewArrival/>
      <TopSelling/>
      <DressStyle/>
      <Happyrate/>
      
    </div>
  )
}

export default Home
