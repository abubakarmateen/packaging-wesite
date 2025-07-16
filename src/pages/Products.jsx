import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

// ✅ Import images
import img1 from "/agenlaku-indonesia-SRFOOdORhKw-unsplash.jpg";
import img2 from "/Biodegradavle.jpg";
import img3 from "/charlesdeluvio-3IMl0kCxpHQ-unsplash.jpg";
import img4 from "/curology-E_dRKdBhxk4-unsplash.jpg";
import img5 from "/curology-wK0h-mlvfuc-unsplash.jpg";
import img6 from "/Custompaperbag.jpg";

// ✅ Product List
const products = [
  {
    id: 1,
    name: "Eco Kraft Box",
    image: img1,
    description:
      "Sturdy recycled kraft boxes ideal for secure and sustainable packaging.",
    price: 12.99,
  },
  {
    id: 2,
    name: "Custom Paper Bag",
    image: img2,
    description: "Personalized paper bags made from eco-friendly materials.",
    price: 9.49,
  },
  {
    id: 3,
    name: "Biodegradable Mailer",
    image: img3,
    description:
      "Lightweight and compostable mailers perfect for online deliveries.",
    price: 7.99,
  },
  {
    id: 4,
    name: "Fabric Pouch",
    image: img4,
    description:
      "Reusable fabric pouches designed for elegance and reusability.",
    price: 11.29,
  },
  {
    id: 5,
    name: "Recycled Wrap",
    image: img5,
    description:
      "Bubble wraps made from post-consumer waste. Durable and safe.",
    price: 6.99,
  },
  // Repeating item example (you can add more with unique IDs)
  {
    id: 6,
    name: "Eco Tape",
    image: img6,
    description: "Strong, biodegradable tape made from plant-based adhesive.",
    price: 4.59,
  },
];

const ProductCard = ({ product }) => {
  const [qty, setQty] = useState(1);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-xl p-4 hover:shadow-2xl transition-transform transform hover:scale-[1.02] hover:-translate-y-1">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-bold text-green-800 mb-1">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-3 h-16 overflow-hidden">
        {product.description}
      </p>
      <p className="text-green-700 font-bold text-lg mb-4">
        ${product.price.toFixed(2)}
      </p>
      <div className="flex items-center gap-3 mb-4">
        <button
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
          onClick={() => setQty(Math.max(1, qty - 1))}>
          -
        </button>
        <span className="text-lg font-semibold">{qty}</span>
        <button
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded"
          onClick={() => setQty(qty + 1)}>
          +
        </button>
      </div>
      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition">
        Add {qty} to Cart
      </button>
    </motion.div>
  );
};

export default function ProductsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="w-full py-24 text-center bg-gradient-to-r from-green-100 to-green-300 animate-fade-in">
        <div className="px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-green-900 animate-bounce">
            Our Sustainable Products
          </h1>
          <p className="text-xl text-green-800 animate-fade-in delay-300">
            Eco-conscious choices for a greener tomorrow.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-12">
          Choose What Suits Your Brand
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
