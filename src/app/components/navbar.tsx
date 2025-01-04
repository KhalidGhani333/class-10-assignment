"use client";
import React from 'react';
import Link from 'next/link';
import '../css/satoshi.css';
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full">
        {/* Top Line */}
        <div className="flex justify-center w-full h-[38px] bg-black">
          <p
            className="pt-[9px] text-center font-normal text-[10px] sm:text-sm leading-[18.9px] text-white"
            style={{ fontFamily: "Satoshi-Light" }}
          >
            Sign up and get 20% off to your first order.
            <span className="font-medium text-[10px] sm:text-sm leading-[18.9px] hover:text-[#818181] underline">
              Sign Up Now
            </span>
          </p>
        </div>

        {/* Main Navbar */}
        <div className="flex px-5 md:px-12 items-center justify-between h-[48px] mt-[25px] gap-5 sm:gap-[30px] lg:gap-[40px]">
          <div className="flex items-center gap-5 md:gap-10">
            <button onClick={toggleMenu} className="text-2xl md:hidden">
              {isOpen ? <IoClose /> : <IoMenu />}
            </button>
            {isOpen && (
              <div className="border-2 flex justify-center items-center">
                <div className="absolute w-44 h-52 top-32 left-0 mx-1/2 flex flex-col space-y-5 p-10 bg-white">
                  <Link href="/">Home</Link>
                  <Link href="/productList">Shop</Link>
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
            )}

            <Link
              href="/"
              className="text-[20px] sm:text-[32px] font-bold leading-[24px] sm:leading-[38.4px]"
            >
              SHOP.CO
            </Link>
            {/* Menu links hidden on smaller screens */}
            <div
              className="hidden md:flex w-auto gap-4 text-sm lg:text-base font-semibold cursor-pointer"
              style={{ fontFamily: "Satoshi-Light" }}
            >
              <Link href="/">Home </Link>
              <Link href="/productList">Shop</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center w-full max-w-[577px] h-12 py-3 px-4 gap-3 rounded-[62px] bg-[#F0F0F0]">
            <IoSearch className="text-gray-500 text-2xl" />
            <input
              type="text"
              name="searchbar"
              placeholder="Search for products..."
              className="w-full bg-[#F0F0F0] focus:outline-none"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center w-auto gap-3 sm:gap-[14px] cursor-pointer">
            {/* Search icon visible on smaller screens */}
            <IoSearch className="text-black text-2xl flex sm:hidden" />
            <Link href="/cart"><IoCartOutline className="h-6 w-6" /></Link>
            <MdOutlineAccountCircle className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
