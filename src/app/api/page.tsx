"use client"
import { useState,useEffect } from "react"
import ProductCard from "../components/productCard"


interface Tproduct{
    id:number;
    name: string;
    price: string;
    originalPrice: string;
    discount: string;
    rating: number;
    ratingCount: number;
    ratingImage:string;
    imageUrl: string;
}

export default function Products (){
    const [product,setProduct] = useState([])

    async function FetchData (){
        const req = await fetch("http://localhost:3000/api/productData")
        const res = await req.json()
        console.log(res);
        setProduct(res)
    }
    useEffect(()=>{
        FetchData()
    },[])
    return (
        <div>
        <h1 className="text-2xl font-bold mb-4">Products api</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {product.map((product:Tproduct) => (
                <div key={product.id}>
              <ProductCard id={product.id} name={product.name} price={product.price} originalPrice={product.originalPrice} discount={product.discount} rating={product.rating} ratingCount={product.ratingCount} ratingImage={product.ratingImage} imageUrl={product.imageUrl}  />
              </div>
            ))}
          </div>
        </div>
      );
    
}