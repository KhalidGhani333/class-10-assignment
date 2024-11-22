
import React from 'react'
import Image from 'next/image'
import versace from '../assets/versace.png'
import zara from '../assets/zara.png'
import gucci from '../assets/gucci.png'
import parada from '../assets/prada.png'
import calvanklein from '../assets/calvinclin.png'

const Brands = () => {
  return (
    <>
    <div className='grid md:grid-cols-5 grid-cols-3 gap-10 md:gap-0 px-5 py-5 justify-between items-center w-screen h-[122px] bg-black'>
    <Image src={versace} alt='versace'/>
    <Image src={zara} alt='zara'/>
    <Image src={gucci} alt='gucci'/>
    <Image src={parada} alt='parada'/>
    <Image src={calvanklein} alt='calvanklein'/>
    </div>
      
    </>
  )
}

export default Brands
