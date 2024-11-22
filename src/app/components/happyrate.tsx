
import React from 'react'
import Image from 'next/image'
import stars from '../assets/stars.png'
import tick from '../assets/tick.png'

const Happyrate = () => {
  return (
    <>
    <h1 className='text-5xl m-[70px] font-bold leading-[57.6px] text-left'>OUR HAPPY CUSTOMERS</h1>
    <div className='flex flex-cols-1 md:flex-row justify-evenly mb-28'>
        <div className='w--[358px] lg:w-[400px] h-[240px] py-[28px] px-[32px] rounded-[20px] border-2'>
          <div className='w-[336px] h-[161.58px] flex flex-col gap-4'>
            <Image src={stars} alt='stars' className='w-[138.84px] h-[22.58px] gap-[6.49px]'/>
            <div className='flex gap-2 items-center'><p className='text-xl font-bold leading-[22px]'>Sarah M.</p>
            <Image src={tick} alt='tick' className='w-[19.5px] h-[19.5px]'/>
            </div>
            <p className='w-[336px] h-[88px] text-base font-normal leading-[22px] text-[#818181]'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
          </div>
          </div>

          <div className='hidden md:flex w-[400px] h-[240px] py-[28px] px-[32px] rounded-[20px] border-2'>
          <div className='w-[336px] h-[161.58px] flex flex-col gap-4'>
            <Image src={stars} alt='stars' className='w-[138.84px] h-[22.58px] gap-[6.49px]'/>
            <div className='flex gap-2 items-center'><p className='text-xl font-bold leading-[22px]'>Alex K.</p>
            <Image src={tick} alt='tick' className='w-[19.5px] h-[19.5px]'/>
            </div>
            <p className='w-[336px] h-[88px] text-base font-normal leading-[22px] text-[#818181]'>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
          </div>
          </div>

          <div className='hidden md:flex w-[400px] h-[240px] py-[28px] px-[32px] rounded-[20px] border-2'>
          <div className='w-[336px] h-[161.58px] flex flex-col gap-4'>
            <Image src={stars} alt='stars' className='w-[138.84px] h-[22.58px] gap-[6.49px]'/>
            <div className='flex gap-2 items-center'><p className='text-xl font-bold leading-[22px]'>James L.</p>
            <Image src={tick} alt='tick' className='w-[19.5px] h-[19.5px]'/>
            </div>
            <p className='w-[336px] h-[88px] text-base font-normal leading-[22px] text-[#818181]'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
          </div>
          </div>

    </div>
      
    </>
  )
}

export default Happyrate
