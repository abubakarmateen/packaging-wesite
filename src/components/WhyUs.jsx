import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ target, label, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 40);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <motion.div
      className="relative bg-white/20 backdrop-blur-lg rounded-2xl border-2 border-green-200/40 flex flex-col items-center justify-center py-10 px-4 md:px-8 group transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}>
      {/* Glowing border accent removed */}
      {/* Animated number with pulse, no shadow */}
      <motion.p
        className="text-5xl md:text-6xl font-extrabold text-green-700 mb-2 z-10"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
        {count}+
      </motion.p>
      <p className="text-lg md:text-xl text-gray-800 font-medium z-10">
        {label}
      </p>
    </motion.div>
  );
}

function WhyUs() {
  return (
    <section className="relative py-24 px-4 md:px-10 bg-white overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-600 to-green-800 mb-16 text-center tracking-tight relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}>
        Why Choose Us?
      </motion.h2>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <Counter target={5000} label="Boxes Shipped" delay={0.1} />
        <Counter target={3000} label="Happy Clients" delay={0.2} />
        <Counter target={100} label="Customization Options" delay={0.3} />
        <Counter target={7} label="Days Avg Delivery" delay={0.4} />
      </div>
    </section>
  );
}

export default WhyUs;
