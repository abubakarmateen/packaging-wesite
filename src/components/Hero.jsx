import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
// ✅ Imported from
import logo from "/logo.svg";
import bgImage from "/bg.png";

function Hero() {
  const heroRef = useRef(null);
  const splashRef = useRef(null);
  const loaderRef = useRef(null);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.classList.add("overflow-hidden");

    setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.classList.add("w-full");
      }
    }, 500);

    setTimeout(() => {
      if (splashRef.current) {
        splashRef.current.classList.add("-translate-y-full", "opacity-0");
      }

      document.body.style.overflow = "visible";
      document.body.classList.remove("overflow-hidden");

      setTimeout(() => {
        setShowHero(true);
      }, 1000);
    }, 2500);

    return () => {
      document.body.style.overflow = "visible";
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Splash Screen */}
      <div
        ref={splashRef}
        className="fixed top-0 left-0 w-full h-screen bg-white z-[9999] flex justify-center items-center transition-all duration-700 ease-in-out overflow-hidden">
        <div className="flex flex-col items-center gap-8 animate-bounce-slow">
          <img src={logo} alt="Paxica Logo" className="w-52 h-auto" />
          <div className="w-52 h-[3px] bg-green-100 rounded-full overflow-hidden">
            <div
              ref={loaderRef}
              className="loader-bar h-full bg-gradient-to-r from-green-400 via-green-600 to-green-700 w-0 transition-all duration-[2000ms] ease-in-out"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-screen flex justify-center items-center text-center text-white bg-cover bg-center bg-fixed overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}>
        {/* Animated blurred orbs */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 bg-green-400 opacity-20 rounded-full blur-3xl z-0"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-[-100px] w-96 h-96 bg-green-700 opacity-10 rounded-full blur-3xl z-0"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Hero Content */}
        <motion.div
          className={`relative z-20 max-w-4xl px-6 flex flex-col items-center`}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={showHero ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}>
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-200 to-green-600 drop-shadow-lg"
            style={{ textShadow: "0 2px 20px rgba(0, 0, 0, 0.5)" }}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={showHero ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}>
            Eco-Friendly Packaging
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl font-light mb-10 text-white opacity-90"
            initial={{ opacity: 0, y: 30 }}
            animate={showHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}>
            Better for your brand. Better for the planet.
          </motion.p>
          <motion.a
            href="#products-section"
            className="relative group border border-green-400 text-white py-3 px-8 rounded-full text-sm font-medium transition-all duration-500 overflow-hidden hover:shadow-xl hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={showHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 16px #22c55e, 0 0 32px #22c55e33",
            }}>
            <span className="relative z-10">VIEW OUR PRODUCTS</span>
            <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-600 to-green-700 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-full"></span>
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

export default Hero;
