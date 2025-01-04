
import { TfiEmail } from "react-icons/tfi";
import React from 'react'

const Contact = () => {
  return (
    <>
      <div className=' w-[360px] sm:[700px] md:[1000px] lg::w-[1240px] h-[180px] mx-auto py-[36px] px-[64px] rounded-[20px] flex flex-col md:flex-row justify-between bg-black'>
      <h1 className='w-[551px] h-[94px] text-[40px] font-bold leading-[45px] text-white'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
      <div className='w-[349px] h-[108px] flex flex-col gap-[14px]'>
        <div className="flex items-center">
        <TfiEmail className="absolute text-[#818181] text-base ml-5"/>
        <input type="text" name='text' placeholder='Enter your email address' className='w-[349px] h-12 py-3 px-4 gap-[12px] text-base pl-10 rounded-[62px] bg-white'/>
         </div>
         <button className="w-[349px] h-[46px] py-3 px-4 rounded-[62px] bg-white text-black text-base
        font-medium leading-[21.6px]">Subscribe to Newsletter</button>
      </div>
      
      </div>
    </>
  )
}

export default Contact
