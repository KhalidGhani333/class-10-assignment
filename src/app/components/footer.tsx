import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Image from 'next/image';
import visa from '../../../public/visa.png'
import moneygram from '../../../public/moneygram.png'
import paypal from '../../../public/paypal.png'
import ipay from '../../../public/ipay.png'
import gpay from '../../../public/gpay.png'


const Footer = () => {
  return (
    <>
    <div className='relative w-full h-[100%] flex justify-center'>
      <div className='absolute w-[90%] sm:w-[600px] md:w-[900px] lg:w-[1240px] mx-auto h-auto md:h-[180px] pb-10 py-[36px] px-[30px] md:px-[64px] gap-[45px] rounded-[20px] flex flex-col md:flex-row justify-between bg-black'>
        <h1 className='w-full md:w-[551px] h-auto text-[32px] md:text-[40px] text-start font-bold leading-[45px] text-white'>
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className='w-full sm:w-[600px] md:w-[349px] h-auto flex flex-col gap-[14px]'>
          <div className="flex items-center relative">
            <TfiEmail className="absolute text-[#818181] text-base ml-5"/>
            <input 
              type="text" 
              name='text' 
              placeholder='Enter your email address' 
              className='w-full md:w-[349px] h-12 py-3 px-4 gap-[12px] text-base pl-10 rounded-[62px] bg-white'/>
          </div>
          <button className="w-full md:w-[349px] h-[46px] py-3 px-4 rounded-[62px] bg-white text-black text-base font-medium leading-[21.6px]">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      <div className='w-full h-auto md:h-[499px] bg-[#F0F0F0] mt-80 md:mt-24 grid grid-cols-1 justify-center items-center'>
        <div className='w-full sm:w-[600px] md:w-[900px] lg:w-[1140px] h-auto ml-5 flex flex-col md:flex-row justify-between gap-10 md:gap-0 pt-40 md:pt-16'>
          <div className='w-full sm:w-[248px] md:w-[248px] h-auto flex flex-col gap-5 md:ml-10 md:gap-[35px]'>
            <h1 className='text-[33.45px] font-bold leading-[40.15px] text-left'>
              SHOP.CO
            </h1>
            <p className="text-sm font-normal leading-[22px] text-left text-[#818181]">
              We have clothes that suit your style and which you're proud to wear. From women to men.
            </p>
            <div className="w-[148px] h-[28px] flex justify-between">
              <FaTwitter className='w-7 h-7 rounded-full border border-gray-400' />
              <FaFacebook className='w-7 h-7 rounded-full border border-gray-400'/>
              <FaInstagram className='w-7 h-7 rounded-full border border-gray-400'/>
              <FaGithub className='w-7 h-7 rounded-full border border-gray-400'/>
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 md:gap-0'>
            <div className='w-full sm:w-[104px] md:w-[104px] h-auto flex flex-col gap-[26px]'>
              <h1 className='text-base font-medium leading-[18px] tracking-[3px]'>
                COMPANY
              </h1>
              <div className='flex flex-col gap-[26px] text-[#818181]'>
                <p className='text-base font-normal leading-[19px]'>About</p>
                <p className='text-base font-normal leading-[19px]'>Features</p>
                <p className='text-base font-normal leading-[19px]'>Works</p>
                <p className='text-base font-normal leading-[19px]'>Career</p>
              </div>
            </div>

            <div className='w-full sm:w-[146px] md:w-[146px] h-auto flex flex-col gap-[26px]'>
              <h1 className='text-base font-medium leading-[18px] tracking-[3px]'>
                HELP
              </h1>
              <div className='flex flex-col gap-[26px] text-[#818181]'>
                <p className='text-base font-normal leading-[19px]'>Customer Support</p>
                <p className='text-base font-normal leading-[19px]'>Delivery Details</p>
                <p className='text-base font-normal leading-[19px]'>Terms & Conditions</p>
                <p className='text-base font-normal leading-[19px]'>Privacy Policy</p>
              </div>
            </div>

            <div className='w-full sm:w-[130px] md:w-[149px] h-auto flex flex-col gap-[26px]'>
              <h1 className='text-base font-medium leading-[18px] tracking-[3px]'>
                FAQ
              </h1>
              <div className='flex flex-col gap-[26px] text-[#818181]'>
                <p className='text-base font-normal leading-[19px]'>Account</p>
                <p className='text-base font-normal leading-[19px]'>Manage Deliveries</p>
                <p className='text-base font-normal leading-[19px]'>Orders</p>
                <p className='text-base font-normal leading-[19px]'>Payments</p>
              </div>
            </div>

            <div className='w-full sm:w-[150px] md:w-[159px] h-auto flex flex-col gap-[26px]'>
              <h1 className='text-base font-medium leading-[18px] tracking-[3px]'>
                RESOURCES
              </h1>
              <div className='flex flex-col gap-[26px] text-[#818181]'>
                <p className='text-base font-normal leading-[19px]'>Free eBooks</p>
                <p className='text-base font-normal leading-[19px]'>Development Tutorial</p>
                <p className='text-base font-normal leading-[19px]'>How to -Blog</p>
                <p className='text-base font-normal leading-[19px]'>Youtube Playlist</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-[90%] max-w-[1240px] border-t mt-10 md:mt-2 border-gray-300"></div>

        <div className="w-screen px-10 md:px-40 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          <p className="text-sm text-gray-600 text-center md:text-left">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-4">
            <Image src={visa} alt="Visa" className="w-12" />
            <Image src={moneygram} alt="Moneygram" className="w-12" />
            <Image src={paypal} alt="Paypal" className="w-12" />
            <Image src={ipay} alt="iPay" className="w-12" />
            <Image src={gpay} alt="GPay" className="w-12" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
