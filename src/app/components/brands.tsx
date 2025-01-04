import React from 'react'
import Image from 'next/image'
import versace from '../../../public/versace.png'
import zara from '../../../public/zara.png'
import gucci from '../../../public/gucci.png'
import parada from '../../../public/prada.png'
import calvanklein from '../../../public/calvinclin.png'

const Brands = () => {
  return (
    <>
      
      <div className='grid sm:grid-cols-2 md:grid-cols-5 grid-cols-3 gap-5 md:gap-0 px-5 py-5 justify-items-center items-center w-full h-auto bg-black'>
        <Image src={versace} alt='versace' />
        <Image src={zara} alt='zara' />
        <Image src={gucci} alt='gucci' />
        <Image src={parada} alt='prada' />
        <Image src={calvanklein} alt='calvanklein' />
      </div>
    </>
  )
}

export default Brands;

