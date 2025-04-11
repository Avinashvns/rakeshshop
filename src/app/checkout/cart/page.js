'use client';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, deleteFromCart } from '@/features/cart/cartSlice';
import Link from "next/link";


export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalMRP = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.oldPrice?.replace(/[₹,]/g, '') || item.price.replace(/[₹,]/g, '')),
    0
  );
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price.replace(/[₹,]/g, '')) * item.quantity,
    0
  );
  const totalDiscount = totalMRP - totalPrice;

  return (
    <div className="w-6xl mx-auto min-h-screen py-8 px-4 md:px-10">
      <h1 className="text-2xl font-bold mb-6">My Cart</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500">
              <h1 className="text-2xl font-bold">Your cart is empty</h1>
              <p>It is a nice day to buy the items you saved for later!</p>
              <div className="flex justify-center mt-4">
                <h1 className="text-xl font-bold text-black">or</h1>
                <Link
                  href="/"
                  className="inline-block px-4 py-2 ms-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow border">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <span className="font-bold text-lg">₹{item.price}</span>
                </div>

                <div className="flex gap-4 border-t pt-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain"
                  />
                  <div className="flex-1">
                    <div className="flex gap-2 items-center mt-1">
                      <span className="text-lg font-bold text-gray-900">
                        ₹{item.price}
                      </span>
                      {item.oldPrice && (
                        <span className="line-through text-gray-400 text-sm">
                          ₹{item.oldPrice}
                        </span>
                      )}
                    </div>
                    {item.oldPrice && (
                      <div className="text-green-600 text-sm font-medium mt-1">
                        You Save ₹{(parseInt(item.oldPrice.replace(/[₹,]/g, '')) - parseInt(item.price.replace(/[₹,]/g, ''))).toLocaleString()}
                      </div>
                    )}
                    <div className="text-xs mt-2">
                      Sold by: <span className="font-semibold">Default Seller</span>
                    </div>
                    <div className="text-green-700 text-sm mt-1">Delivery by tomorrow</div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="px-2 py-1 bg-gray-200 rounded text-black"
                    >
                      −
                    </button>
                    <span className="w-6 text-center">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="px-2 py-1 bg-gray-200 rounded text-black"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(deleteFromCart(item.id))}
                      className="px-2 py-1 bg-red-600 text-white rounded"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Section */}
        {cartItems.length > 0 && (
          <div className="space-y-4">
            {/* Steps */}
            <div className="bg-green-50 p-4 rounded-xl">
              <div className="flex items-center justify-between">
                <Step number={1} label="Your Cart" active />
                <Step number={2} label="Order Review" />
                <Step number={3} label="Payment" />
              </div>
            </div>

            {/* Apply Coupon */}
            <div className="bg-white p-4 rounded-xl shadow border space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Apply Coupon</span>
                <span className="text-sm text-blue-500">→</span>
              </div>
              <button className="w-full border rounded-full py-2 font-semibold text-blue-600">
                Login
              </button>
            </div>

            {/* Payment Summary */}
            <div className="bg-white p-4 rounded-xl shadow border space-y-2 text-sm">
              <h3 className="font-bold text-base">Payment Details</h3>
              <div className="flex justify-between">
                <span>MRP Total</span>
                <span>₹{totalMRP.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-600 font-medium">
                <span>Product Discount</span>
                <span>- ₹{totalDiscount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee (Scheduled)</span>
                <span className="text-green-600 font-medium">FREE</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
              <div className="text-green-600 font-medium">
                You Saved ₹{totalDiscount.toLocaleString()}
              </div>
            </div>

            {/* Place Order Button */}
            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-full font-semibold text-lg">
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Step({ number, label, active }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${active ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-600'
          }`}
      >
        {number}
      </div>
      <span className={`text-sm ${active ? 'font-bold' : 'text-gray-500'}`}>{label}</span>
    </div>
  );
}
