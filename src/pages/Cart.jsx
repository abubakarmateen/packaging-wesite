import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaTrashAlt, FaHeart, FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState } from "react";

const initialCartItems = [
  {
    id: 1,
    name: "Custom Box",
    price: 12.99,
    quantity: 2,
    image: "/daily-nouri-E5Oo4nENq2M-unsplash.jpg",
  },
  {
    id: 2,
    name: "Eco Bag",
    price: 7.5,
    quantity: 1,
    image: "/sticker-mule-pg6MTKrHheA-unsplash.jpg",
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [wishlist, setWishlist] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const handleQuantity = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (coupon.trim().toLowerCase() === "save10") {
      setAppliedCoupon(0.1); // 10% off
    } else {
      setAppliedCoupon(null);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 5.0 : 0;
  const tax = cartItems.length > 0 ? subtotal * 0.07 : 0;
  const discount = appliedCoupon ? subtotal * appliedCoupon : 0;
  const total = subtotal + shipping + tax - discount;

  return (
    <>
      <Header />
      {/* Hero/Intro Section */}
      <section className="relative bg-gradient-to-r from-green-100 to-green-300 py-28 text-center overflow-hidden">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-green-900 mb-2 tracking-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}>
            Your Cart
          </motion.h1>
          <motion.p
            className="text-lg max-w-xl mx-auto text-green-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}>
            Review your packaging order, update quantities, and proceed to
            checkout.
          </motion.p>
        </motion.div>
        {/* Animated blurred orbs */}
        <motion.div
          className="absolute -top-24 -left-32 w-96 h-96 bg-green-400 opacity-20 rounded-full blur-3xl z-0"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-[-100px] w-96 h-96 bg-green-700 opacity-10 rounded-full blur-3xl z-0"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </section>
      <div className="min-h-[60vh] bg-gradient-to-tr from-green-50 to-white py-16 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold mt-10 mb-8 text-green-700 text-center tracking-tight">
            {cartItems.length === 0 ? "Your Cart is Empty" : "Cart Summary"}
          </h2>
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <FaRegHeart className="text-5xl text-green-400" />
              </motion.div>
              <p className="text-lg text-gray-500 mb-6">Your cart is empty.</p>
              <a
                href="/products"
                className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition">
                Browse Products
              </a>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="md:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center justify-between bg-white/80 border-2 border-green-100 hover:bg-green-50 transition rounded-2xl p-4 shadow-none">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-xl shadow-md"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-green-800">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            className="w-7 h-7 rounded-full bg-green-100 text-green-700 font-bold text-lg flex items-center justify-center hover:bg-green-200 transition"
                            onClick={() => handleQuantity(item.id, -1)}
                            aria-label="Decrease quantity">
                            -
                          </button>
                          <span className="font-semibold text-green-900">
                            {item.quantity}
                          </span>
                          <button
                            className="w-7 h-7 rounded-full bg-green-100 text-green-700 font-bold text-lg flex items-center justify-center hover:bg-green-200 transition"
                            onClick={() => handleQuantity(item.id, 1)}
                            aria-label="Increase quantity">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <p className="text-xl font-semibold text-green-700">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex gap-2">
                        <button
                          className={`text-green-600 hover:text-green-800 transition text-xl`}
                          onClick={() => handleWishlist(item.id)}
                          aria-label="Move to wishlist">
                          {wishlist.includes(item.id) ? (
                            <FaHeart />
                          ) : (
                            <FaRegHeart />
                          )}
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700 transition text-xl"
                          onClick={() => handleRemove(item.id)}
                          aria-label="Remove from cart">
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Cart Summary */}
              <div className="bg-white/80 border-2 border-green-100 rounded-2xl p-8 flex flex-col gap-6 shadow-none h-fit">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Order Summary
                </h3>
                <form className="flex gap-2 mb-4" onSubmit={handleApplyCoupon}>
                  <input
                    type="text"
                    placeholder="Coupon code"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="flex-1 border border-green-200 rounded px-3 py-2 focus:outline-green-500 bg-white"
                  />
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-700 transition">
                    Apply
                  </button>
                </form>
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-green-700 font-semibold">
                    <span>Discount</span>
                    <span>- ${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-bold text-green-700 border-t border-green-100 pt-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white text-lg font-semibold py-3 rounded-full hover:scale-105 hover:shadow-lg transition">
                  Proceed to Checkout
                </button>
                <a
                  href="/products"
                  className="w-full text-center text-green-700 font-semibold mt-2 hover:underline">
                  Continue Shopping
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
