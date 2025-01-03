"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Tproduct {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  description: string;
  colors: string[];
  sizes: string[];
  image: string;
}

export default function ProductDetail({ params }: { params: Promise<{ productDetail: string }> }) {
  const [product, setProduct] = useState<Tproduct | null>(null);
  const [productId, setProductId] = useState<string | null>(null);

  // Unwrap `params` and extract `productDetail`
  useEffect(() => {
    async function getParams() {
      const resolvedParams = await params;
      setProductId(resolvedParams.productDetail);
    }
    getParams();
  }, [params]);

  // Fetch product data when `productId` is available
  useEffect(() => {
    if (productId) {
      async function fetchData() {
        const res = await fetch(`http://localhost:3000/api/productData`);
        const data = await res.json();
        const selectedProduct = data.find((item: Tproduct) => item.id.toString() === productId);
        setProduct(selectedProduct);
      }
      fetchData();
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start w-full min-h-screen px-5 sm:px-10 py-5 gap-5">
      {/* Left Section */}
      <div className="w-full lg:w-1/2">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="w-[70%] h-auto rounded-lg"
        />
        {/* Thumbnail Section */}
        <div className="flex mt-3 gap-2">
          <Image
            src={product.image}
            alt="Thumbnail 1"
            width={80}
            height={80}
            className="w-20 h-20 rounded-md cursor-pointer border border-gray-300"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-5">
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800">
          {product.title}
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-lg font-semibold">
            {"★".repeat(Math.floor(product.rating))}
          </span>
          <span className="text-gray-500 text-sm">{product.rating}/5</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-slate-800">${product.price}</span>
          <span className="text-gray-500 line-through">${product.originalPrice}</span>
          <span className="text-green-600">-{product.discount}%</span>
        </div>
        <p className="text-gray-700">{product.description}</p>

        {/* Colors */}
        {/* <div className="flex items-center gap-3">
          <span className="font-semibold">Select Colors:</span>
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Sizes */}
        {/* <div className="flex items-center gap-3">
          <span className="font-semibold">Choose Size:</span>
          {product.sizes.map((size, index) => (
            <button
              key={index}
              className="px-3 py-1 rounded-lg border border-gray-300 hover:bg-black hover:text-white transition"
            >
              {size}
            </button>
          ))}
        </div> */} 
      </div>
    </div>
  );
}
