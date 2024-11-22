"use client"
import React from 'react';
import Image from 'next/image';
import heroImage from '../assets/heroImage.jpg';
import vector from '../assets/Vector.png'
import '../css/satoshi.css'
import '../css/font.css'
import { useEffect } from 'react';
import gsap from 'gsap';



const Hero = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row w-screen justify-evenly h-[100%] mt-[25px] bg-[#F2F0F1]'>
     
    <div className='w-[350px] md:w-[577px] h-[550px] flex flex-col ml-[5px] md:ml-[70px] gap-[10px] md:gap-[40px] '>
        <div className=' mt-24 '><h1 className='text-[36px] md:text-[64px] font-bold leading-[34px] md:leading-[64px] style={{fontFamily:"font-Bold"}}' >FIND CLOTHES THAT MATCHES YOUR STYLE</h1></div>
        <p className=' text-sm md:text-base font-normal leading-[22px] text-[#818181] style={{fontFamily:"Satoshi-Light"}}'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button className='w-full justify-center sm:w-[210px] h-[52px] py-[16px] px-[54px] gap-[12px] rounded-[62px] bg-black text-base font-medium leading-[21.6px] text-white hover:bg-[#818181] style={{fontFamily:"Satoshi-Light"}}'>Shop Now</button>
            
        <div className='grid grid-cols-2 md:grid-flow-col mx-auto md:justify-evenly w-[270px] md:w-full h-[74px]  gap-[32px]'>
        <div className="">
            <h1 className=' text-[24px] md:text-[40px] font-bold leading-[54px] text-left'>200+</h1>
            <p className='text-[12px] md:text-base font-normal leading-[22px] text-left text-[#818181] style={{fontFamily:"Satoshi-Light"}}'>International Brands</p>
            </div> 
        <div className="">
            <h1 className=' text-[24px] md:text-[40px] font-bold leading-[54px] text-left'>2000+</h1>
            <p className='text-[12px] md:text-base font-normal leading-[22px] text-left text-[#818181] style={{fontFamily:"Satoshi-Light"}}'>High-Quality Products</p>
            </div>
        <div className="">
            <h1 className=' text-[24px] md:text-[40px] font-bold leading-[54px] text-left'>30,000+</h1>
            <p className='text-[12px] md:text-base font-normal leading-[22px] text-left text-[#818181] style={{fontFamily:"Satoshi-Light"}}'>Happy Customers</p>
            </div>
    </div>
    </div>
    <div className=' w-[390x] md:w-[500px] h-[663px]'>
    <div className="relative    ">
  <Image 
    src={heroImage}
    alt="heroImage"
    className=" w-full md:h-[663px]" 
  />

  <div className="vector absolute top-60 left-5">
    <Image 
      src={vector} 
      alt="vector"
      className="w-[44px] h-[44px] md:w-[56px] md:h-[56px]" 
    />
  </div>

  <div className="vector absolute top-[70px] right-4">
    <Image 
      src={vector} 
      alt="vector"
      className="w-[74px] h-[74px] md:w-[104px] md:h-[104px]  " 
    />
  </div>
</div>
</div>
    </div>

    </>
)}

export default Hero
