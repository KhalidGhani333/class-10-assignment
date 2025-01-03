
import React from 'react';
import Image from 'next/image';
import casual from '../../../public/casual.png';
import formal from '../../../public/formal.png';
import party from '../../../public/party.png';
import gym from '../../../public/gym.png';

const DressStyle = () => {
  return (
    <>
      <div>
        <div className='bg-[#F0F0F0] h-auto w-[80%] sm:w-full grid grid-cols-1 my-[50px] mx-auto rounded-[20px] md:w-auto md:rounded-[40px]'>
          <h1
            className='font-bold text-[24px] sm:text-[32px] leading-[28px] sm:leading-[36px] mx-[16px] sm:mx-[56px] mt-[20px] sm:mt-[40px] mb-[28px] text-center md:text-5xl md:leading-[57.6px] md:mt-[70px]'
            style={{ fontFamily: 'integral' }}
          >
            BROWSE BY DRESS STYLE
          </h1>
          <div
            className='relative flex flex-wrap gap-4 mx-[16px] sm:mx-[24px] md:mx-[64px] justify-center items-center'
          >
            <Image
              src={casual}
              alt='Casual'
              className='w-[280px] h-[180px] rounded-[20px] sm:w-[310px] sm:h-[190px] md:w-[307px] md:h-[289px]'
            />
            <Image
              src={formal}
              alt='Formal'
              className='w-[280px] h-[180px] rounded-[20px] sm:w-[310px] sm:h-[190px] md:w-[584px] md:h-[289px]'
            />
            <Image
              src={party}
              alt='Party'
              className='w-[280px] h-[180px] rounded-[20px] sm:w-[310px] sm:h-[190px] md:w-[584px] md:h-[289px]'
            />
            <Image
              src={gym}
              alt='Gym'
              className='w-[280px] h-[180px] rounded-[20px] sm:w-[310px] sm:h-[190px] md:w-[307px] md:h-[289px]'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DressStyle;
