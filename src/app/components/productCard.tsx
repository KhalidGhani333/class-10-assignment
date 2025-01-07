
import Image from "next/image";


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

export default function ProductCard(product: Tproduct) {
  return (
    <>
      <div className="h-auto w-[90%] max-w-[300px] mx-auto">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={200}
          height={200}
          priority
          className="w-full max-w-[295px] h-auto rounded-[20px] hover:scale-95 duration-300" />
        <span className="text-sm md:text-xl font-bold leading-[27px] block">
          <h1>{product.name}</h1>
        </span>

        <div className="flex gap-2 items-center">
          <Image
            src={product.ratingImage}
            alt="rating"
            width={100}
            height={50}
            priority
            className="w-[104px] h-auto" />
          <span className="text-sm font-normal">
            {product.rating}/<span className="text-[#818181]">5</span>
          </span>
        </div>

        <div className="flex items-center justify-between" >
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold leading-[32.4px]">${product.price}</h1>
            {product.originalPrice && (
              <span className="line-through text-[#818181]">${product.originalPrice}</span>)}

            {product.discount && (
              <span className="py-1 px-3 rounded-[62px] bg-[#fcb8b8] text-xs font-medium text-[#FF3333]">
                {product.discount} </span>)}
          </div>
          <button className=" px-1 border border-black font-semibold hover:bg-black hover:text-white rounded-md">Add to Cart</button>
        </div>
      </div>
    </>
  );
}
