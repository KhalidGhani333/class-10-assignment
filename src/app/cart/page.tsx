"use client";
import Image from "next/image";

export default function Cart() {
  const cartItems = [
    {
      id: 1,
      title: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "/tshirt.png", // Replace with your actual image path
    },
    {
      id: 2,
      title: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "/shirt.png", // Replace with your actual image path
    },
    {
      id: 3,
      title: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "/jeans.png", // Replace with your actual image path
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2; // Example: 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="flex flex-col md:flex-row justify-between  items-center w-full px-5 sm:px-10 py-10 gap-5">
      {/* Cart Items */}
      <div className="w-full md:w-[60%]">
        <h1 className="text-2xl font-bold text-slate-800 mb-5">YOUR CART</h1>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-5 p-5 border rounded-lg mb-5"
          >
            {/* Product Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              className="w-20 h-auto rounded-lg"
            />

            {/* Product Details */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-slate-800">
                {item.title}
              </h2>
              <p className="text-sm text-slate-600">Size: {item.size}</p>
              <p className="text-sm text-slate-600">Color: {item.color}</p>
              <p className="text-lg font-bold text-slate-800">${item.price}</p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 bg-gray-200 rounded-lg">-</button>
              <span className="font-semibold">{item.quantity}</span>
              <button className="px-3 py-1 bg-gray-200 rounded-lg">+</button>
            </div>

            {/* Remove Button */}
            <button className="text-red-500 text-xl">🗑️</button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="w-full md:w-[35%] border rounded-lg p-5">
        <h2 className="text-xl font-bold text-slate-800 mb-5">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <p className="text-slate-600">Subtotal</p>
          <p className="font-semibold">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-slate-600">Discount (-20%)</p>
          <p className="text-red-500 font-semibold">-${discount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-slate-600">Delivery Fee</p>
          <p className="font-semibold">${deliveryFee.toFixed(2)}</p>
        </div>
        <div className="flex justify-between font-bold text-xl mb-5">
          <p>Total</p>
          <p>${total.toFixed(2)}</p>
        </div>

        {/* Promo Code */}
        <div className="flex items-center gap-2 mb-5">
          <input
            type="text"
            placeholder="Add promo code"
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Apply
          </button>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-lg text-center font-semibold">
          Go to Checkout →
        </button>
      </div>
    </div>
  );
}
