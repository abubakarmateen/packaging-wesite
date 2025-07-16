import { motion } from "framer-motion";

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
    <section className="bg-gray-50 py-20 overflow-hidden relative">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
        Explore Categories
      </h2>

      {/* Infinite Scrolling Carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex gap-8 w-max">
          {[...categories, ...categories].map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative group/item w-72 min-w-[18rem] bg-white rounded-3xl shadow-xl overflow-hidden border border-green-200 transition-all duration-300 cursor-pointer">
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 object-cover transition duration-300 group-hover/item:brightness-75"
              />

              {/* Hover Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white opacity-0 group-hover/item:opacity-100">
                <p className="text-sm">{cat.description}</p>
              </motion.div>

              {/* Title */}
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 group-hover/item:text-green-600 transition">
                  {cat.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCategories;
