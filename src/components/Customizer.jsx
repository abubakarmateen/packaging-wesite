import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Import images
import boxImg from "/EcoKraft.jpg";
import bagImg from "/Custompaperbag.jpg";
import mailerImg from "/Biodegradavle.jpg";

function Customizer() {
  const [selectedType, setSelectedType] = useState("box");

  const packagingOptions = useMemo(
    () => [
      {
        key: "box",
        label: "Eco Kraft Box",
        image: boxImg,
        description:
          "Sturdy recycled kraft boxes ideal for secure and sustainable packaging.",
      },
      {
        key: "bag",
        label: "Custom Paper Bag",
        image: bagImg,
        description:
          "Personalized paper bags made from eco-friendly materials.",
      },
      {
        key: "mailer",
        label: "Biodegradable Mailer",
        image: mailerImg,
        description:
          "Lightweight and compostable mailers perfect for online deliveries.",
      },
    ],
    []
  );

  const selected = useMemo(
    () => packagingOptions.find((item) => item.key === selectedType),
    [selectedType, packagingOptions]
  );

  const scrollToProducts = () => {
    const section = document.getElementById("products-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-r from-gray-100 to-green-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-700">
          Customize Your Packaging
        </h2>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center mb-16">
          {packagingOptions.map((option) => (
            <motion.div
              key={option.key}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelectedType(option.key)}
              className={`cursor-pointer rounded-2xl border-2 shadow-md will-change-transform h-[320px] p-4 flex flex-col items-center justify-between ${
                selectedType === option.key
                  ? "border-green-600 scale-[1.03] bg-white"
                  : "border-transparent bg-white/80"
              }`}>
              <img
                src={option.image}
                alt={option.label}
                loading="lazy"
                className="w-full h-44 object-cover rounded-xl mb-4"
              />
              <p className="text-center text-lg font-semibold text-green-800">
                {option.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Selected Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 will-change-transform">
            <img
              src={selected.image}
              alt={selected.label}
              loading="lazy"
              className="w-64 h-64 object-cover rounded-xl border border-green-100"
            />
            <div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                {selected.label}
              </h3>
              <p className="text-gray-600 mb-4">{selected.description}</p>
              <button
                onClick={scrollToProducts}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-all">
                Explore Products
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Customizer;
