"use client"

import { useState, useEffect } from "react"
import ProductCard from "../components/productCard"
import Link from "next/link";


interface Tproduct {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  rating: number;
  ratingCount: number;
  ratingImage: string;
  imageUrl: string;
}

const NewArrival = () => {
  const [product, setProduct] = useState([])

  async function FetchData() {
    const req = await fetch("https://class-10-assignment-kappa.vercel.app/api/productData", {
      cache: "no-store",});
      
      const res = await req.json();
      setProduct(res);
  }
  useEffect(() => {
    FetchData()
  }, [])
  return (
    <>
      <h1 className="text-4xl md:text-5xl text-center m-[50px] font-bold leading-[57.6px] ">NEW ARRIVALS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3 sm:px-5">
        {product.slice(2, 6).map((product: Tproduct) => (
          <div key={product.id}>
            <Link href={`/productList/${product.id}`}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                discount={product.discount}
                rating={product.rating}
                ratingCount={product.ratingCount}
                ratingImage={product.ratingImage}
                imageUrl={product.imageUrl} />
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="w-full max-w-[350px] md:max-w-[218px] h-[52px] py-[16px] m-[30px] px-[54px] hover:bg-black hover:text-white rounded-[62px] border border-[#818181] text-center text-base font-medium">View All</button>
      </div>
      <span className="mt-[50px] w-full block border"></span>
    </>
  )
}

export default NewArrival
