import React from 'react'
import '../css/satoshi.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMenu } from "react-icons/io5";


  
const Navbar = () => {
  return (
    <>
    <div className='w-screen'>
     <div className='flex justify-center w-screen h-[38px] bg-black'>
    <p className='pt-[9px] text-center font-normal  text-[10px] sm:text-sm leading-[18.9px] text-white style={{fontFamily:"Satoshi-Light"}}'>Sign up and get 20% off to your first order. <span className='font-medium text-[10px] sm:text-sm leading-[18.9px] hover:text-[#818181] underline '>Sign Up Now</span></p>
     </div>

     <div className='flex  px-5 md:px-12 items-center justify-between h-[48px] mt-[25px] gap-5 sm:gap-[30px] lg:gap-[40px] '>
     
      <div className='flex items-center gap-5 md:gap-10'>
      <IoMenu className="w-6 h-6 md:hidden md:ml-5 " />
      <h1 className='text-[32px] font-bold leading-[38.4px]'>SHOP.CO</h1>
      <div className=' md:flex w-[321px] h-[22px] gap-6 hidden  text-base font-normal leading-[21.6px] cursor-pointer style={{fontFamily:"Satoshi-Light"}}'>
      <p className='flex items-center'>Shop <RiArrowDropDownLine className='w-4 h-4 mt-[5.25px] text-black'/></p>
      <p>On Sale</p>
      <p>New Arrivals</p>
      <p>Brands</p>
      </div>
      </div>
     
    <div className="sm:flex hidden items-center w-[577px] h-12 py-3 px-4 gap-3 rounded-[62px] bg-[#F0F0F0]">
     
     <IoSearch className="text-gray-500 text-2xl"/>
      <input type="text" name="searchbar" placeholder='Search for products...' className='bg-[#F0F0F0]' />
     </div>
     
     <div className='flex items-center w-[102px] md:w-[62px] mr-5 h-6 gap-[14px] cursor-pointer'>
     <IoSearch className="text-black text-2xl flex sm:hidden"/>
     <IoCartOutline className='h-6 w-6'/>
     <MdOutlineAccountCircle className='h-6 w-6'/>
     </div>

      </div>
      </div>
    </>
  )
}

export default Navbar
