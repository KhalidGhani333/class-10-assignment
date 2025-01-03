"use client";
import { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
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

export default function Products() {
  const [product, setProduct] = useState<Tproduct[]>([]);

  // Fetch product data
  async function FetchData() {
    const req = await fetch("http://localhost:3000/api/productData");
    const res = await req.json();
    setProduct(res);
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="py-20 px-10">
      <h1 className="text-2xl font-bold mb-4">
        Casual <span className="text-gray-400">&gt;</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-10">
        {product.map((product: Tproduct) => (
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
                imageUrl={product.imageUrl}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
