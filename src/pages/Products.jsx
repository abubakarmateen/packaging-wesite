import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 🖼️ Add your images inside the public folder and use path as string
const products = [
  {
    id: 1,
    name: "Eco Kraft Box",
    image: "/EcoKraft.jpg",
    price: 12.99,
    color: "brown",
    size: "small",
    description: "Sustainable eco-friendly kraft box for packaging.",
    sale: true,
  },
  {
    id: 2,
    name: "Biodegradable Mailer",
    image: "/Biodegradavle.jpg",
    price: 9.5,
    color: "white",
    size: "medium",
    description: "Environmentally safe mailers for ecommerce.",
    sale: true,
  },
  {
    id: 3,
    name: "Custom Paper Bag",
    image: "/Custompaperbag.jpg",
    price: 6.75,
    color: "brown",
    size: "large",
    description: "Printed paper bags for branding.",
    sale: true,
  },
  {
    id: 4,
    name: "Fabric Pouch",
    image: "/Fabricpouch.jpg",
    price: 4.25,
    color: "green",
    size: "small",
    description: "Eco fabric pouches for products.",
    sale: true,
  },
  {
    id: 5,
    name: "Recycled Wrap",
    image: "/Recycledwrap.jpg",
    price: 7.99,
    color: "white",
    size: "medium",
    description: "Eco-friendly recycled wrapping paper.",
    sale: true,
  },
  {
    id: 6,
    name: "Eco Tape",
    image: "/Ecotape.jpg",
    price: 5.5,
    color: "brown",
    size: "small",
    description: "Biodegradable tape for sustainable shipping.",
    sale: true,
  },
  {
    id: 7,
    name: "Corrugated Box",
    image: "/luma-candles-K1Xi_R_mfpk-unsplash.jpg",
    price: 11.25,
    color: "brown",
    size: "large",
    description: "Sturdy boxes for shipping with recycled material.",
    sale: true,
  },
  {
    id: 8,
    name: "Cotton Bag",
    image: "/mildlee-fMveBTz2qWw-unsplash.jpg",
    price: 8.99,
    color: "green",
    size: "medium",
    description: "Reusable cotton bags with custom printing.",
    sale: true,
  },
  {
    id: 1,
    name: "Eco Kraft Box",
    image: "/EcoKraft.jpg",
    price: 12.99,
    color: "brown",
    size: "small",
    description: "Sustainable eco-friendly kraft box for packaging.",
    sale: true,
  },
  {
    id: 2,
    name: "Biodegradable Mailer",
    image: "/Biodegradavle.jpg",
    price: 9.5,
    color: "white",
    size: "medium",
    description: "Environmentally safe mailers for ecommerce.",
    sale: true,
  },
  {
    id: 3,
    name: "Custom Paper Bag",
    image: "/Custompaperbag.jpg",
    price: 6.75,
    color: "brown",
    size: "large",
    description: "Printed paper bags for branding.",
    sale: true,
  },
  {
    id: 4,
    name: "Fabric Pouch",
    image: "/Fabricpouch.jpg",
    price: 4.25,
    color: "green",
    size: "small",
    description: "Eco fabric pouches for products.",
    sale: true,
  },
  {
    id: 5,
    name: "Recycled Wrap",
    image: "/Recycledwrap.jpg",
    price: 7.99,
    color: "white",
    size: "medium",
    description: "Eco-friendly recycled wrapping paper.",
    sale: true,
  },
  {
    id: 6,
    name: "Eco Tape",
    image: "/Ecotape.jpg",
    price: 5.5,
    color: "brown",
    size: "small",
    description: "Biodegradable tape for sustainable shipping.",
    sale: true,
  },
  {
    id: 7,
    name: "Corrugated Box",
    image: "/luma-candles-K1Xi_R_mfpk-unsplash.jpg",
    price: 11.25,
    color: "brown",
    size: "large",
    description: "Sturdy boxes for shipping with recycled material.",
    sale: true,
  },
  {
    id: 8,
    name: "Cotton Bag",
    image: "/mildlee-fMveBTz2qWw-unsplash.jpg",
    price: 8.99,
    color: "green",
    size: "medium",
    description: "Reusable cotton bags with custom printing.",
    sale: true,
  },
  {
    id: 1,
    name: "Eco Kraft Box",
    image: "/EcoKraft.jpg",
    price: 12.99,
    color: "brown",
    size: "small",
    description: "Sustainable eco-friendly kraft box for packaging.",
    sale: true,
  },
  {
    id: 2,
    name: "Biodegradable Mailer",
    image: "/Biodegradavle.jpg",
    price: 9.5,
    color: "white",
    size: "medium",
    description: "Environmentally safe mailers for ecommerce.",
    sale: true,
  },
  {
    id: 3,
    name: "Custom Paper Bag",
    image: "/Custompaperbag.jpg",
    price: 6.75,
    color: "brown",
    size: "large",
    description: "Printed paper bags for branding.",
    sale: true,
  },
  {
    id: 4,
    name: "Fabric Pouch",
    image: "/Fabricpouch.jpg",
    price: 4.25,
    color: "green",
    size: "small",
    description: "Eco fabric pouches for products.",
    sale: true,
  },
  {
    id: 5,
    name: "Recycled Wrap",
    image: "/Recycledwrap.jpg",
    price: 7.99,
    color: "white",
    size: "medium",
    description: "Eco-friendly recycled wrapping paper.",
    sale: true,
  },
  {
    id: 6,
    name: "Eco Tape",
    image: "/Ecotape.jpg",
    price: 5.5,
    color: "brown",
    size: "small",
    description: "Biodegradable tape for sustainable shipping.",
    sale: true,
  },
  {
    id: 7,
    name: "Corrugated Box",
    image: "/luma-candles-K1Xi_R_mfpk-unsplash.jpg",
    price: 11.25,
    color: "brown",
    size: "large",
    description: "Sturdy boxes for shipping with recycled material.",
    sale: true,
  },
  {
    id: 8,
    name: "Cotton Bag",
    image: "/mildlee-fMveBTz2qWw-unsplash.jpg",
    price: 8.99,
    color: "green",
    size: "medium",
    description: "Reusable cotton bags with custom printing.",
    sale: true,
  },
  {
    id: 1,
    name: "Eco Kraft Box",
    image: "/EcoKraft.jpg",
    price: 12.99,
    color: "brown",
    size: "small",
    description: "Sustainable eco-friendly kraft box for packaging.",
    sale: true,
  },
  {
    id: 2,
    name: "Biodegradable Mailer",
    image: "/Biodegradavle.jpg",
    price: 9.5,
    color: "white",
    size: "medium",
    description: "Environmentally safe mailers for ecommerce.",
    sale: true,
  },
  {
    id: 3,
    name: "Custom Paper Bag",
    image: "/Custompaperbag.jpg",
    price: 6.75,
    color: "brown",
    size: "large",
    description: "Printed paper bags for branding.",
    sale: true,
  },
  {
    id: 4,
    name: "Fabric Pouch",
    image: "/Fabricpouch.jpg",
    price: 4.25,
    color: "green",
    size: "small",
    description: "Eco fabric pouches for products.",
    sale: true,
  },
  {
    id: 5,
    name: "Recycled Wrap",
    image: "/Recycledwrap.jpg",
    price: 7.99,
    color: "white",
    size: "medium",
    description: "Eco-friendly recycled wrapping paper.",
    sale: true,
  },
  {
    id: 6,
    name: "Eco Tape",
    image: "/Ecotape.jpg",
    price: 5.5,
    color: "brown",
    size: "small",
    description: "Biodegradable tape for sustainable shipping.",
    sale: true,
  },
  {
    id: 7,
    name: "Corrugated Box",
    image: "/luma-candles-K1Xi_R_mfpk-unsplash.jpg",
    price: 11.25,
    color: "brown",
    size: "large",
    description: "Sturdy boxes for shipping with recycled material.",
    sale: true,
  },
  {
    id: 8,
    name: "Cotton Bag",
    image: "/mildlee-fMveBTz2qWw-unsplash.jpg",
    price: 8.99,
    color: "green",
    size: "medium",
    description: "Reusable cotton bags with custom printing.",
    sale: true,
  },
  {
    id: 1,
    name: "Eco Kraft Box",
    image: "/EcoKraft.jpg",
    price: 12.99,
    color: "brown",
    size: "small",
    description: "Sustainable eco-friendly kraft box for packaging.",
    sale: true,
  },
  {
    id: 2,
    name: "Biodegradable Mailer",
    image: "/Biodegradavle.jpg",
    price: 9.5,
    color: "white",
    size: "medium",
    description: "Environmentally safe mailers for ecommerce.",
    sale: true,
  },
  {
    id: 3,
    name: "Custom Paper Bag",
    image: "/Custompaperbag.jpg",
    price: 6.75,
    color: "brown",
    size: "large",
    description: "Printed paper bags for branding.",
    sale: true,
  },
  {
    id: 4,
    name: "Fabric Pouch",
    image: "/Fabricpouch.jpg",
    price: 4.25,
    color: "green",
    size: "small",
    description: "Eco fabric pouches for products.",
    sale: true,
  },
  {
    id: 5,
    name: "Recycled Wrap",
    image: "/Recycledwrap.jpg",
    price: 7.99,
    color: "white",
    size: "medium",
    description: "Eco-friendly recycled wrapping paper.",
    sale: true,
  },
  {
    id: 6,
    name: "Eco Tape",
    image: "/Ecotape.jpg",
    price: 5.5,
    color: "brown",
    size: "small",
    description: "Biodegradable tape for sustainable shipping.",
    sale: true,
  },
  {
    id: 7,
    name: "Corrugated Box",
    image: "/luma-candles-K1Xi_R_mfpk-unsplash.jpg",
    price: 11.25,
    color: "brown",
    size: "large",
    description: "Sturdy boxes for shipping with recycled material.",
    sale: true,
  },
  {
    id: 8,
    name: "Cotton Bag",
    image: "/mildlee-fMveBTz2qWw-unsplash.jpg",
    price: 8.99,
    color: "green",
    size: "medium",
    description: "Reusable cotton bags with custom printing.",
    sale: true,
  },
];

function Products() {
  const [filters, setFilters] = useState({ color: "", size: "", price: "" });
  const [sortBy, setSortBy] = useState("name");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredProducts = products
    .filter((product) => {
      return (
        (!filters.color || product.color === filters.color) &&
        (!filters.size || product.size === filters.size) &&
        (!filters.price ||
          (filters.price === "low" ? product.price < 10 : product.price >= 10))
      );
    })
    .sort((a, b) =>
      sortBy === "price" ? a.price - b.price : a.name.localeCompare(b.name)
    );

  return (
    <>
      <Header />

      {/* 🟢 Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-green-300 py-36 text-center">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            Discover Eco-Friendly Packaging
          </h1>
          <motion.button
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 text-sm uppercase font-semibold tracking-wider shadow-lg rounded"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}>
            Shop Now
          </motion.button>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row px-6 py-10 gap-6">
        {/* 🔍 Filters Sidebar */}
        <aside className="lg:w-1/4 bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Filters</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium">Color</label>
            <select
              name="color"
              value={filters.color}
              onChange={handleFilterChange}
              className="w-full border px-2 py-1 rounded">
              <option value="">All</option>
              <option value="brown">Brown</option>
              <option value="white">White</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Size</label>
            <select
              name="size"
              value={filters.size}
              onChange={handleFilterChange}
              className="w-full border px-2 py-1 rounded">
              <option value="">All</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Price</label>
            <select
              name="price"
              value={filters.price}
              onChange={handleFilterChange}
              className="w-full border px-2 py-1 rounded">
              <option value="">All</option>
              <option value="low">Under $10</option>
              <option value="high">$10 & above</option>
            </select>
          </div>
        </aside>

        {/* 🛍️ Products Grid */}
        <main className="lg:w-3/4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Products</h2>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border px-2 py-1 rounded">
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-lg shadow hover:shadow-xl overflow-hidden relative group transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}>
                <div className="relative">
                  {product.sale && (
                    <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded z-10">
                      Sale
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                  />
                  <motion.button
                    className="absolute bottom-[-100%] left-0 right-0 bg-black bg-opacity-70 text-white py-2 text-sm font-medium group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={() => setSelectedProduct(product)}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}>
                    View Details
                  </motion.button>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-base text-gray-800">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>

      {/* 🔎 Modal Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl">
              &times;
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full md:w-1/2 h-60 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-green-800">
                  {selectedProduct.name}
                </h2>
                <p className="text-sm text-gray-700 mt-2">
                  {selectedProduct.description}
                </p>
                <p className="text-lg font-semibold text-green-700 mt-4">
                  ${selectedProduct.price.toFixed(2)}
                </p>
                <button className="mt-4 px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Products;
