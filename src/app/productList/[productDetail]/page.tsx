"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

interface Tproduct {
  id: number;
  name: string;
  price: number;
  originalPrice: string;
  discount: string;
  rating: number;
  ratingCount: number;
  ratingImage: string;
  imageUrl: string;
}

const moreData = {
  colors: ["#5A5A47", "#29383C", "#2C2B2A"],
  sizes: ["Small", "Medium", "Large", "X-Large"],

};


const List = ({ params }: { params: { productDetail: string } }) => {

  const [product, setProduct] = useState<Tproduct[]>([]);
  const Details = product.filter((items) => items.id.toString() == params.productDetail)

  // Fetch product data
  async function FetchData() {
    const req = await fetch("https://class-10-assignment-kappa.vercel.app/api/productData", {
      cache: "no-store",});
      
      const res = await req.json();
      setProduct(res);
  }
  useEffect(() => {
    FetchData();
  }, []);

  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  return (

    <div className="flex flex-col-reverse lg:flex-row items-start w-full min-h-screen px-10 sm:px-10 py-10 gap-5">
      <div className="w-full lg:w-1/2">
        <Image
          src={Details[0]?.imageUrl}
          alt={Details[0]?.name}
          width={500}
          height={500}
          className="w-[70%] h-auto rounded-lg" />
        <div className="flex mt-3 gap-2">
          {/* Thumbnail images */}
          <Image
            src={Details[0]?.imageUrl}
            alt="Thumbnail 1"
            width={80}
            height={80}
            className="w-20 h-20 rounded-md cursor-pointer border border-gray-300" />
          <Image
            src={Details[0]?.imageUrl}
            alt="Thumbnail 2"
            width={80}
            height={80}
            className="w-20 h-20 rounded-md cursor-pointer border border-gray-300" />
          <Image
            src={Details[0]?.imageUrl}
            alt="Thumbnail 3"
            width={80}
            height={80}
            className="w-20 h-20 rounded-md cursor-pointer border border-gray-300" />
        </div>
      </div>


      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800">
          {Details[0]?.name}
        </h1>
        <div className="flex items-center gap-2">
          <Image
            src={Details[0]?.ratingImage}
            alt="Rating Star"
            width={80}
            height={80}
            className="w-20 h-6 rounded-md cursor-pointer " />

          <span className="text-gray-500 text-sm">{Details[0]?.ratingCount}/5</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-slate-800">${Details[0]?.price * count}</span>
          <span className="text-gray-500 line-through">{Details[0]?.originalPrice}</span>
          {Details[0]?.discount && (<span className="text-green-600">-{Details[0]?.discount}</span>)}
        </div>
        <p className="text-gray-700">This is a perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>

        {/* Colors */}
        <div className="flex items-center gap-3">
          <span className="font-semibold">Select Colors:</span>
          {moreData.colors.map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Sizes */}
        <div className="flex items-center gap-3">
          <span className="font-semibold">Choose Size:</span>
          {moreData.sizes.map((size, index) => (
            <button
              key={index}
              className="px-3 py-1 rounded-lg border border-gray-300 hover:bg-black hover:text-white transition">
              {size}
            </button>
          ))}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3">
          <button
            onClick={decrement}
            className="px-2 py-1 border border-gray-300 rounded-lg">
            -
          </button>
          <span>{count}</span>
          <button
            onClick={increment}
            className="px-2 py-1 border border-gray-300 rounded-lg">
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button className="w-[60%] py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border-2 border-black transition">
          Add to Cart
        </button>
      </div>


    </div>

  )
}

export default List