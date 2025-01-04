import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import Image from 'next/image';
import visa from '../../../public/visa.png';
import moneygram from '../../../public/moneygram.png';
import paypal from '../../../public/paypal.png';
import ipay from '../../../public/ipay.png';
import gpay from '../../../public/gpay.png';

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-10">
      {/* Subscription Section */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 lg:px-20">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight text-center md:text-left">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="flex flex-col md:w-[400px] mt-4 md:mt-0">
          <div className="relative">
            <TfiEmail className="absolute left-3 top-3 text-[#818181]" />
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full h-12 pl-10 pr-4 rounded-full bg-white text-black" 
            />
          </div>
          <button className="mt-3 py-3 px-6 rounded-full bg-white text-black font-medium text-sm">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-6 sm:px-12 lg:px-20">
        {/* Shop.co Section */}
        <div>
          <h1 className="text-2xl font-bold">SHOP.CO</h1>
          <p className="mt-2 text-sm text-[#818181]">
            We have clothes that suit your style and which you&apos;re proud to wear. From women to men.
          </p>
          <div className="mt-4 flex gap-4">
            <FaTwitter className="w-8 h-8 rounded-full border border-gray-400 p-2" />
            <FaFacebook className="w-8 h-8 rounded-full border border-gray-400 p-2" />
            <FaInstagram className="w-8 h-8 rounded-full border border-gray-400 p-2" />
            <FaGithub className="w-8 h-8 rounded-full border border-gray-400 p-2" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-base font-medium uppercase">Company</h2>
          <ul className="mt-4 text-sm text-[#818181] space-y-3">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h2 className="text-base font-medium uppercase">Help</h2>
          <ul className="mt-4 text-sm text-[#818181] space-y-3">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* FAQ Links */}
        <div>
          <h2 className="text-base font-medium uppercase">FAQ</h2>
          <ul className="mt-4 text-sm text-[#818181] space-y-3">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
      </div>

      {/* Resources Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 px-6 sm:px-12 lg:px-20">
        <div>
          <h2 className="text-base font-medium uppercase">Resources</h2>
          <ul className="mt-4 text-sm text-[#818181] space-y-3">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to -Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>

      {/* Payment Methods and Footer Text */}
      <div className="mt-10 px-6 sm:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-[#818181] text-center md:text-left">
          Shop.co ©2024, All Rights Reserved
        </p>
        <div className="mt-4 md:mt-0 flex gap-4 justify-center">
          <Image src={visa} alt="Visa" width={48} height={28} />
          <Image src={moneygram} alt="Moneygram" width={48} height={28} />
          <Image src={paypal} alt="Paypal" width={48} height={28} />
          <Image src={ipay} alt="iPay" width={48} height={28} />
          <Image src={gpay} alt="GPay" width={48} height={28} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

