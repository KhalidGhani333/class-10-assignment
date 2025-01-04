
import React from 'react';
import Image from 'next/image';
import stars from '../../../public/stars.png';
import tick from '../../../public/tick.png';

const Happyrate = () => {
  return (
    <>
      {/* Ensure heading scales responsively */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl text-center md:m-[70px] font-bold leading-tight sm:leading-[57.6px] md:text-left">
        OUR HAPPY CUSTOMERS
      </h1>

      {/* Responsive container styling */}
      <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center mb-10 md:mb-28 gap-6 md:gap-8">
        {/* Card 1 */}
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto py-6 px-4 sm:px-6 md:px-8 rounded-2xl border-2">
          <div className="flex flex-col gap-4">
            <Image src={stars} alt="stars" className="w-24 sm:w-28 md:w-36 h-auto" />
            <div className="flex gap-2 items-center">
              <p className="text-lg sm:text-xl font-bold">Sarah M.</p>
              <Image src={tick} alt="tick" className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <p className="text-sm sm:text-base font-normal text-gray-500">
              "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="hidden md:flex w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto py-6 px-4 sm:px-6 md:px-8 rounded-2xl border-2">
          <div className="flex flex-col gap-4">
            <Image src={stars} alt="stars" className="w-24 sm:w-28 md:w-36 h-auto" />
            <div className="flex gap-2 items-center">
              <p className="text-lg sm:text-xl font-bold">Alex K.</p>
              <Image src={tick} alt="tick" className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <p className="text-sm sm:text-base font-normal text-gray-500">
              "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="hidden md:flex w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto py-6 px-4 sm:px-6 md:px-8 rounded-2xl border-2">
          <div className="flex flex-col gap-4">
            <Image src={stars} alt="stars" className="w-24 sm:w-28 md:w-36 h-auto" />
            <div className="flex gap-2 items-center">
              <p className="text-lg sm:text-xl font-bold">James L.</p>
              <Image src={tick} alt="tick" className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <p className="text-sm sm:text-base font-normal text-gray-500">
              "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Happyrate;
