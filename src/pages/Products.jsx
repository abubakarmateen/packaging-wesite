import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaHeart, FaRegHeart, FaStar, FaSearch } from "react-icons/fa";

// Example categories
const categories = [
  { key: "all", label: "All", icon: "📦" },
  { key: "boxes", label: "Boxes", icon: "📦" },
  { key: "bags", label: "Bags", icon: "🛍️" },
  { key: "tape", label: "Tape", icon: "🧵" },
  { key: "wrap", label: "Wrap", icon: "🎁" },
  { key: "mailers", label: "Mailers", icon: "✉️" },
];

// Example products (add more fields for demo)
const products = [
  {
    id: 1,
    name: "Eco Kraft Box",
    image: "/EcoKraft.jpg",
    price: 12.99,
    color: "brown",
    size: "small",
    material: "kraft",
    type: "box",
    eco: true,
    badge: "Best Seller",
    description: "Sustainable eco-friendly kraft box for packaging.",
    sale: true,
    rating: 5,
  },
  {
    id: 2,
    name: "Biodegradable Mailer",
    image: "/Biodegradavle.jpg",
    price: 9.5,
    color: "white",
    size: "medium",
    material: "bioplastic",
    type: "mailers",
    eco: true,
    badge: "Eco",
    description: "Environmentally safe mailers for ecommerce.",
    sale: true,
    rating: 4,
  },
  {
    id: 3,
    name: "Custom Paper Bag",
    image: "/Custompaperbag.jpg",
    price: 6.75,
    color: "brown",
    size: "large",
    material: "paper",
    type: "bags",
    eco: true,
    badge: "New",
    description: "Printed paper bags for branding.",
    sale: false,
    rating: 5,
  },
  {
    id: 4,
    name: "Fabric Pouch",
    image: "/Fabricpouch.jpg",
    price: 4.25,
    color: "green",
    size: "small",
    material: "fabric",
    type: "bags",
    eco: true,
    badge: "Eco",
    description: "Eco fabric pouches for products.",
    sale: false,
    rating: 4,
  },
  {
    id: 5,
    name: "Recycled Wrap",
    image: "/Recycledwrap.jpg",
    price: 7.99,
    color: "white",
    size: "medium",
    material: "recycled",
    type: "wrap",
    eco: true,
    badge: "Eco",
    description: "Eco-friendly recycled wrapping paper.",
    sale: false,
    rating: 5,
  },
  {
    id: 6,
    name: "Eco Tape",
    image: "/Ecotape.jpg",
    price: 5.5,
    color: "brown",
    size: "small",
    material: "kraft",
    type: "tape",
    eco: true,
    badge: "Eco",
    description: "Biodegradable tape for sustainable shipping.",
    sale: false,
    rating: 4,
  },
  {
    id: 7,
    name: "Corrugated Box",
    image: "/luma-candles-K1Xi_R_mfpk-unsplash.jpg",
    price: 11.25,
    color: "brown",
    size: "large",
    material: "corrugated",
    type: "boxes",
    eco: true,
    badge: "Best Seller",
    description: "Sturdy boxes for shipping with recycled material.",
    sale: false,
    rating: 5,
  },
  {
    id: 8,
    name: "Cotton Bag",
    image: "/mildlee-fMveBTz2qWw-unsplash.jpg",
    price: 8.99,
    color: "green",
    size: "medium",
    material: "cotton",
    type: "bags",
    eco: true,
    badge: "Eco",
    description: "Reusable cotton bags with custom printing.",
    sale: false,
    rating: 4,
  },
];

const materials = [
  "kraft",
  "bioplastic",
  "paper",
  "fabric",
  "recycled",
  "corrugated",
  "cotton",
];
const sizes = ["small", "medium", "large"];
const colors = ["brown", "white", "green"];
const types = ["box", "mailers", "bags", "wrap", "tape"];
const ecoCerts = ["eco", "best seller", "new"];

function Products() {
  const [filters, setFilters] = useState({
    color: "",
    size: "",
    price: "",
    material: "",
    type: "",
    eco: "",
  });
  const [sortBy, setSortBy] = useState("name");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [wishlist, setWishlist] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 8;

  // Featured products for slider (first 4 for demo)
  const featuredProducts = products.slice(0, 4);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setFilters((prev) => ({ ...prev, type: cat === "all" ? "" : cat }));
    setPage(1);
  };

  const handleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  const filteredProducts = products
    .filter((product) => {
      return (
        (!filters.color || product.color === filters.color) &&
        (!filters.size || product.size === filters.size) &&
        (!filters.price ||
          (filters.price === "low"
            ? product.price < 10
            : product.price >= 10)) &&
        (!filters.material || product.material === filters.material) &&
        (!filters.type || product.type === filters.type) &&
        (!filters.eco ||
          (filters.eco === "eco" && product.eco) ||
          (filters.eco === "best seller" && product.badge === "Best Seller") ||
          (filters.eco === "new" && product.badge === "New")) &&
        (!search ||
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase()))
      );
    })
    .sort((a, b) =>
      sortBy === "price"
        ? a.price - b.price
        : sortBy === "popularity"
        ? b.rating - a.rating
        : a.name.localeCompare(b.name)
    );

  // Pagination
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * perPage,
    page * perPage
  );
  const totalPages = Math.ceil(filteredProducts.length / perPage);

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-100 to-green-300 py-36 text-center overflow-hidden">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 tracking-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}>
            Discover Eco-Friendly Packaging
          </motion.h1>
          <motion.button
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 text-sm uppercase font-semibold tracking-wider shadow-lg rounded"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.5 }}>
            Shop Now
          </motion.button>
        </motion.div>
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-0 left-0 w-40 h-40 bg-green-200 rounded-full opacity-40"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-52 h-52 bg-green-300 rounded-full opacity-30"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        />
      </section>
      {/* Category Navigation */}
      <nav className="flex gap-4 justify-center items-center py-6 bg-white/80 sticky top-0 z-30 border-b border-green-100 backdrop-blur">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => handleCategory(cat.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-200 text-green-700 hover:bg-green-100/60 hover:text-green-900 ${
              activeCategory === cat.key ? "bg-green-200 text-green-900" : ""
            }`}>
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </nav>
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-6 px-6 py-8 max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="flex-1 flex items-center gap-2 mb-4 md:mb-0">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full border border-green-200 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400" />
          </div>
        </div>
        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center">
          <select
            name="color"
            value={filters.color}
            onChange={handleFilterChange}
            className="border px-2 py-1 rounded text-sm">
            <option value="">Color</option>
            {colors.map((c) => (
              <option key={c} value={c}>
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </option>
            ))}
          </select>
          <select
            name="size"
            value={filters.size}
            onChange={handleFilterChange}
            className="border px-2 py-1 rounded text-sm">
            <option value="">Size</option>
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
          <select
            name="material"
            value={filters.material}
            onChange={handleFilterChange}
            className="border px-2 py-1 rounded text-sm">
            <option value="">Material</option>
            {materials.map((m) => (
              <option key={m} value={m}>
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </option>
            ))}
          </select>
          <select
            name="eco"
            value={filters.eco}
            onChange={handleFilterChange}
            className="border px-2 py-1 rounded text-sm">
            <option value="">Eco/Badge</option>
            {ecoCerts.map((e) => (
              <option key={e} value={e}>
                {e.charAt(0).toUpperCase() + e.slice(1)}
              </option>
            ))}
          </select>
          <select
            name="price"
            value={filters.price}
            onChange={handleFilterChange}
            className="border px-2 py-1 rounded text-sm">
            <option value="">Price</option>
            <option value="low">Under $10</option>
            <option value="high">$10 & above</option>
          </select>
          <button
            className="text-xs px-3 py-1 rounded bg-green-100 text-green-700 border border-green-200 hover:bg-green-200 transition"
            onClick={() =>
              setFilters({
                color: "",
                size: "",
                price: "",
                material: "",
                type: "",
                eco: "",
              })
            }>
            Reset Filters
          </button>
        </div>
        {/* Sorting */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border px-2 py-1 rounded text-sm">
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </div>
      {/* Featured Products Slider */}
      <section className="py-8 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          Featured Products
        </h2>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="max-w-5xl mx-auto !pb-10">
          {featuredProducts.map((product, idx) => (
            <SwiperSlide key={product.id}>
              <motion.div
                className="bg-green-50 rounded-lg border-2 border-green-100 p-4 flex flex-col items-center hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover mb-4 rounded"
                />
                <h4 className="font-semibold text-lg text-green-900 mb-2">
                  {product.name}
                </h4>
                <p className="text-green-700 font-bold mb-2">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800 transition text-sm"
                  onClick={() => setSelectedProduct(product)}>
                  View Details
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {paginatedProducts.map((product, index) => (
            <motion.div
              key={product.id + "-" + index}
              className="bg-white/80 border-2 border-green-100 rounded-2xl overflow-hidden relative group transition-all duration-300 cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px rgba(34,197,94,0.10)",
              }}
              transition={{ delay: index * 0.07 }}>
              {/* Badges */}
              {product.badge && (
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full z-10 font-semibold">
                  {product.badge}
                </span>
              )}
              {product.sale && (
                <span className="absolute top-3 right-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full z-10 font-semibold">
                  Sale
                </span>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-lg text-green-900 mb-1">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                  <p className="text-green-700 font-bold mb-2">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    className="flex-1 bg-green-700 text-white px-3 py-1 rounded hover:bg-green-800 transition text-xs"
                    onClick={() => setSelectedProduct(product)}>
                    Quick View
                  </button>
                  <button
                    className={`flex items-center justify-center px-3 py-1 rounded border text-xs transition ${
                      wishlist.includes(product.id)
                        ? "bg-green-100 border-green-400 text-green-700"
                        : "bg-white border-green-200 text-green-400 hover:bg-green-50"
                    }`}
                    onClick={() => handleWishlist(product.id)}>
                    {wishlist.includes(product.id) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition border ${
                  page === i + 1
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-green-700 border-green-200 hover:bg-green-100"
                }`}
                onClick={() => setPage(i + 1)}>
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <motion.div
              className="bg-white rounded-2xl border-2 border-green-100 w-full max-w-2xl p-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl">
                &times;
              </button>
              <div className="flex flex-col md:flex-row gap-8">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full md:w-1/2 h-60 object-cover rounded-xl border border-green-100"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-green-800 mb-2">
                    {selectedProduct.name}
                  </h2>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(selectedProduct.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <p className="text-lg font-semibold text-green-700 mb-2">
                    ${selectedProduct.price.toFixed(2)}
                  </p>
                  <p className="text-gray-700 mb-4">
                    {selectedProduct.description}
                  </p>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {selectedProduct.material}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {selectedProduct.size}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {selectedProduct.color}
                    </span>
                    {selectedProduct.badge && (
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {selectedProduct.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <label htmlFor="qty" className="text-sm font-medium">
                      Qty:
                    </label>
                    <input
                      id="qty"
                      type="number"
                      min={1}
                      defaultValue={1}
                      className="w-16 border border-green-200 rounded px-2 py-1 text-sm"
                    />
                  </div>
                  <button className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition w-full mb-2">
                    Add to Cart
                  </button>
                  <button className="px-6 py-2 border border-green-700 text-green-700 rounded hover:bg-green-700 hover:text-white transition w-full">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Testimonials Section */}
      <section className="py-16 bg-green-50">
        <h2 className="text-2xl font-extrabold text-green-700 text-center mb-10 tracking-tight">
          What Our Clients Say
        </h2>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-6xl mx-auto !pb-10">
          {[1, 2, 3].map((i) => (
            <SwiperSlide key={i}>
              <div className="bg-white/80 border-2 border-green-100 rounded-2xl p-8 flex flex-col items-center text-center h-full group transition-all duration-300 cursor-pointer">
                <img
                  src={`/guillaume-bleyer-r5zBpV53B38-unsplash.jpg`}
                  alt="testimonial"
                  className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-green-200"
                />
                <p className="text-gray-700 italic text-base leading-relaxed mb-4">
                  “Amazing quality and eco-friendly! Highly recommend.”
                </p>
                <div className="flex justify-center gap-1 text-yellow-400 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <h4 className="mt-4 font-semibold text-green-600 text-sm">
                  Emily R.
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Sustainability Info */}
      <section className="py-16 bg-white border-t border-green-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-green-700 mb-6 tracking-tight">
            Sustainability & Certifications
          </h2>
          <p className="text-gray-700 mb-6">
            All our products are made from eco-friendly, recyclable, or
            biodegradable materials. We are committed to sustainable practices
            and hold certifications from leading environmental organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              FSC® Certified
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Compostable
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Recyclable
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Biodegradable
            </span>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-400 via-green-600 to-green-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
          Ready to Elevate Your Packaging?
        </h2>
        <p className="mb-8 text-lg">
          Contact us for a custom quote or to discuss your unique packaging
          needs.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-green-700 font-bold px-8 py-3 rounded-full shadow-lg hover:bg-green-100 transition-all text-lg">
          Request a Custom Quote
        </a>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-green-50 border-t border-green-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-green-700 mb-8 tracking-tight text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg border border-green-100 p-4">
              <summary className="font-semibold text-green-700 cursor-pointer">
                Can I customize the size and print of my packaging?
              </summary>
              <p className="text-gray-700 mt-2">
                Yes! We offer full customization for size, print, and material.
                Contact us for a custom quote.
              </p>
            </details>
            <details className="bg-white rounded-lg border border-green-100 p-4">
              <summary className="font-semibold text-green-700 cursor-pointer">
                What is your minimum order quantity?
              </summary>
              <p className="text-gray-700 mt-2">
                Our minimum order quantity varies by product, but is typically
                100 units.
              </p>
            </details>
            <details className="bg-white rounded-lg border border-green-100 p-4">
              <summary className="font-semibold text-green-700 cursor-pointer">
                How fast is delivery?
              </summary>
              <p className="text-gray-700 mt-2">
                Most orders are delivered within 7-10 business days.
              </p>
            </details>
            <details className="bg-white rounded-lg border border-green-100 p-4">
              <summary className="font-semibold text-green-700 cursor-pointer">
                Are your products certified eco-friendly?
              </summary>
              <p className="text-gray-700 mt-2">
                Yes, our products are certified by leading environmental
                organizations.
              </p>
            </details>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Products;
