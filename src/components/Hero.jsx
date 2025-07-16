import React, { useEffect, useRef, useState } from "react";

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
              className="loader-bar h-full bg-green-500 w-0 transition-all duration-[2000ms] ease-in-out"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-screen flex justify-center items-center text-center text-white bg-cover bg-center bg-fixed overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Hero Content */}
        <div
          className={`relative z-20 max-w-4xl px-6 flex flex-col items-center transition-all duration-1000 ease-out transform ${
            showHero
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-90"
          }`}>
          <h1
            className="text-5xl md:text-7xl font-bold font-montserrat mb-6 leading-tight tracking-tight"
            style={{ textShadow: "0 2px 20px rgba(0, 0, 0, 0.5)" }}>
            Eco-Friendly Packaging
          </h1>
          <p className="text-xl md:text-3xl font-light mb-10 text-white opacity-90">
            Better for your brand. Better for the planet.
          </p>
          <a
            href="#"
            className="relative group border border-green-400 text-white py-3 px-8 rounded-full text-sm font-medium transition-all duration-500 overflow-hidden hover:shadow-xl hover:-translate-y-1">
            <span className="relative z-10">VIEW OUR PRODUCTS</span>
            <span className="">VIEW OUR PRODUCTS</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hero;
