import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// ✅ Import images
import boxesImg from "/Boxes.jpg";
import bagsImg from "/Bags.jpg";
import ribbonsImg from "/Ribbons.jpg";
import giftWrapImg from "/Giftwrap.jpg";
import tissueImg from "/Tissue.jpg";
import shippingImg from "/Shipping.jpg";

// Categories Array
const categories = [
  {
    name: "Boxes",
    image: boxesImg,
    description: "Durable, customizable boxes perfect for retail and shipping.",
  },
  {
    name: "Bags",
    image: bagsImg,
    description: "Eco-friendly bags designed for style and sustainability.",
  },
  {
    name: "Ribbons",
    image: ribbonsImg,
    description: "Elegant ribbons to add a special touch to your packages.",
  },
  {
    name: "Gift Wrap",
    image: giftWrapImg,
    description: "Beautiful gift wraps for memorable unboxing experiences.",
  },
  {
    name: "Tissue",
    image: tissueImg,
    description: "Soft, colorful tissue papers that protect and impress.",
  },
  {
    name: "Shipping Supplies",
    image: shippingImg,
    description: "Reliable shipping materials to ensure safe deliveries.",
  },
];

function ProductCategories() {
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Custom style for Swiper active dot */}
      <style>{`
        .swiper-pagination-bullet {
          background: #d1fae5;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #16a34a !important;
        }
      `}</style>
      {/* Animated blurred orbs */}
      <motion.div
        className="absolute -top-20 -left-32 w-96 h-96 bg-green-400 opacity-30 rounded-full blur-3xl z-0"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-[-100px] w-96 h-96 bg-green-700 opacity-20 rounded-full blur-3xl z-0"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-green-700 mb-16 text-center tracking-tight relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}>
        Explore Categories
      </motion.h2>
      {/* Swiper slider with dot pagination */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-12">
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative group/item w-72 min-w-[18rem] bg-white rounded-3xl border-2 border-green-200/40 transition-all duration-300 cursor-pointer flex flex-col items-center mx-auto"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.06, rotate: -2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}>
                {/* Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-48 object-cover rounded-t-3xl z-10 transition duration-300 group-hover/item:brightness-75"
                />
                {/* Hover Description */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover/item:opacity-100 z-20">
                  <p className="text-base font-medium">{cat.description}</p>
                </motion.div>
                {/* Title */}
                <div className="p-5 text-center z-10">
                  <h3 className="text-2xl font-bold text-green-800 group-hover/item:text-green-500 transition">
                    {cat.name}
                  </h3>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductCategories;
