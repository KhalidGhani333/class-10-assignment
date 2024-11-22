
import '../css/satoshi.css'
import Image from "next/image"
import rating from "../assets/rating.png"
import tshirt from '../assets/tshirt.png'
import jeans from '../assets/jeans.png'
import shirt from '../assets/shirt.png'
import tshirt2 from '../assets/tshirt2.png'


const NewArrival = () => {
    return (
      <>
        <h1 className="text-5xl m-[50px] font-bold leading-[57.6px] text-center text-black">NEW ARRIVALS</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-0 md:gap-3 px-1 md:px-5">
            <div className="h-[350px] w-[200px] md:w-[300px]">
                <Image src={tshirt} alt="tshirt" width={200} height={200} className="w-[295px] h-[298px] rounded-[20px]"/>
                <span className='text-sm md:text-xl font-bold leading-[27px] text-left'>T-SHIRT WITH TAPE DETAILS</span>
                <div className="flex gap-[5.31px] items-center">
                <Image src={rating} alt="rating" width={100} height={50} className="w-[104px] h-[18.49px]"/><span className="text-sm font-normal">4.5/<span className="text-[#818181] ">5</span></span></div>
                <h1 className="text-2xl font-bold leading-[32.4px] text-left">$120</h1>
            </div>
            <div className="h-[400px] w-[200px] md:w-[300px]">
                <Image src={jeans} alt="jeans" width={200} height={200} className="w-[295px] h-[298px] rounded-[20px]"/>
                <span className='text-sm md:text-xl font-bold leading-[27px] text-left'>SKINNY FIT JEANS</span>
                <div className="flex gap-[5.31px] items-center">
                <Image src={rating} alt="rating" width={100} height={50} className="w-[104px] h-[18.49px]"/><span className="text-sm font-normal">3.5/<span className="text-[#818181] ">5</span></span></div>
                <div className="flex items-center w-[200px] h-[32px] gap-[10px]  ">
                  <h1 className="text-2xl font-bold leading-[32.4px] text-left">$240</h1>
                  <span className="line-through text-[#818181]">$260</span>
                  <span className="w-[58px] h-[28px] py-[6px] px-[14px] rounded-[62px] bg-[#fcb8b8] text-xs font-medium leading-[16.2px] text-[#FF3333] ">-20%</span>
                  </div>
            </div>
            <div className="h-[400px] w-[200px] md:w-[300px]">
                <Image src={shirt} alt="shirt" width={200} height={200} className="w-[295px] h-[298px] rounded-[20px]"/>
                <span className='text-sm md:text-xl font-bold leading-[27px] text-left'>CHECKERED SHIRT</span>
                <div className="flex gap-[5.31px] items-center">
                <Image src={rating} alt="rating" width={100} height={50} className="w-[104px] h-[18.49px]"/><span className="text-sm font-normal">4.5/<span className="text-[#818181] ">5</span></span></div>
                <h1 className="text-2xl font-bold leading-[32.4px] text-left">$180</h1>
            </div>
            <div className="h-[400px] w-[200px] md:w-[300px]">
                <Image src={tshirt2} alt="tshirt2" width={200} height={200} className="w-[295px] h-[298px] rounded-[20px]"/>
                <span className='text-sm md:text-xl font-bold leading-[27px] text-left'>SLEEVE STRIPED T-SHIRT</span>
                <div className="flex gap-[5.31px] items-center">
                <Image src={rating} alt="rating" width={100} height={50} className="w-[104px] h-[18.49px]"/><span className="text-sm font-normal">4.5/<span className="text-[#818181] ">5</span></span></div>
                <div className="flex items-center w-[200px] h-[32px] gap-[10px]  ">
                  <h1 className="text-2xl font-bold leading-[32.4px] text-left">$130</h1>
                  <span className="line-through text-[#818181]">$160</span>
                 <span className="w-[58px] h-[28px] py-[6px] px-[14px] rounded-[62px] bg-[#fcb8b8] text-xs font-medium leading-[16.2px] text-[#FF3333] ">-30%</span>
                  </div>
            </div>
        </div>
        <div className='flex justify-center'>
        <button className='w-[350px] md:w-[218px] h-[52px] py-[16px] m-[30px] px-[54px] rounded-[62px] border border-[#818181] text-center text-base font-medium leading-[21.6px] '>View All</button></div>
        <span className='mt-[50px] w-screen border'></span>
      </>
    )
  }
  
  export default NewArrival
  