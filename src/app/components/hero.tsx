"use client"

import React from 'react';
import Image from 'next/image';
import heroImage from '../../../public/heroImage.jpg';
import vector from '../../../public/Vector.png';
import '../css/satoshi.css';
import '../css/font.css';

const Hero = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row w-full justify-evenly h-auto mt-6 bg-[#F2F0F1] p-4 md:p-0'>
        {/* Left Section */}
        <div className='w-full md:w-[577px] flex flex-col gap-4 md:gap-10 ml-2 md:ml-16'>
          <div className='mt-6 md:mt-24'>
            <h1 className='text-[28px] md:text-[64px] font-bold leading-[34px] md:leading-[64px] text-center md:text-left'>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
          </div>
          <p className='text-sm md:text-base text-[#818181] text-center md:text-left'>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <div className='flex justify-center md:justify-start'>
            <button className='w-full md:w-[210px] h-[52px] py-4 px-6 rounded-full bg-black text-base font-medium text-white hover:bg-[#818181]'>
              Shop Now
            </button>
          </div>
          {/* Stats Section */}
          <div className='grid grid-cols-2 gap-4 md:grid-cols-3 mx-auto md:justify-evenly w-[270px] md:w-full'>
            <div className='text-center'>
              <h1 className='text-[24px] md:text-[40px] font-bold'>200+</h1>
              <p className='text-xs md:text-base text-[#818181]'>International Brands</p>
            </div>
            <div className='text-center'>
              <h1 className='text-[24px] md:text-[40px] font-bold'>2000+</h1>
              <p className='text-xs md:text-base text-[#818181]'>High-Quality Products</p>
            </div>
            <div className='text-center'>
              <h1 className='text-[24px] md:text-[40px] font-bold'>30,000+</h1>
              <p className='text-xs md:text-base text-[#818181]'>Happy Customers</p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className='w-full md:w-[500px] h-auto flex justify-center mt-4 md:mt-0'>
          <div className='relative'>
            <Image 
              src={heroImage}
              alt="heroImage"
              className="w-full h-auto max-w-[500px] md:h-[663px]"
            />
            {/* Vectors */}
            <div className="absolute top-32 left-2 md:top-60 md:left-5">
              <Image 
                src={vector} 
                alt="vector"
                className="w-11 h-11 md:w-14 md:h-14" 
              />
            </div>
            <div className="absolute top-14 right-2 md:top-[70px] md:right-4">
              <Image 
                src={vector} 
                alt="vector"
                className="w-18 h-18 md:w-26 md:h-26" 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
