import React, { useEffect, useState, useRef } from "react";
import {
  FaUser,
  FaShoppingCart,
  FaSignInAlt,
  FaUserPlus,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

// ✅ Import image from assets
import logo from "/logo.svg";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const headerRef = useRef(null);
  const splashRef = useRef(null);
  const profileRef = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    setTimeout(() => {
      if (splashRef.current)
        splashRef.current.classList.add("-translate-y-full");
      document.body.style.overflow = "visible";
      setTimeout(() => {
        if (headerRef.current) headerRef.current.classList.add("fade-in");
      }, 700);
    }, 2500);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ✅ Include signin and signup pages in the white header logic
  const isAlwaysWhiteHeader = [
    "/contact",
    "/quote",
    "/cart",
    "/signin",
    "/signup",
  ].includes(currentPath);

  const linkClass = (path) => {
    const isActive = currentPath === path;
    return `text-sm md:text-base uppercase tracking-wider font-light transition-colors duration-300 ${
      isActive
        ? isAlwaysWhiteHeader || isScrolled
          ? "text-green-700 font-semibold"
          : "text-green-400 font-semibold"
        : isAlwaysWhiteHeader || isScrolled
        ? "text-black hover:text-green-600"
        : "text-white hover:text-green-400"
    }`;
  };

  return (
    <>
      {/* Header */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1440px] h-[80px] px-6 md:px-10 mx-auto my-4 flex justify-between items-center z-[1001] border-b transition-all duration-300 border-b-[#78c6791a] rounded-[15px] ${
          isAlwaysWhiteHeader
            ? "bg-white shadow-md border-b-[#78c67933]"
            : isScrolled
            ? "bg-white/95 shadow-md border-b-[#78c67933]"
            : "bg-white/0"
        }`}>
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Paxica Logo"
            width={130}
            height={40}
            className={`${
              isAlwaysWhiteHeader || isScrolled
                ? "filter-none"
                : "filter brightness-0 invert"
            }`}
          />
        </Link>

        {/* Nav Links */}
        <nav className="hidden lg:flex gap-8 ml-6">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/products" className={linkClass("/products")}>
            Products
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
          <Link to="/quote" className={linkClass("/quote")}>
            Get a Quote
          </Link>
        </nav>

        {/* Search Bar */}
        <div
          className={`hidden md:flex items-center w-[200px] md:w-[250px] lg:w-[300px] h-10 px-4 rounded-full text-white border backdrop-blur-md transition-all duration-300 ${
            isAlwaysWhiteHeader || isScrolled
              ? "bg-gradient-to-r from-green-400 to-green-600 border-none"
              : "bg-white/10 border-green-200"
          }`}>
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none text-sm text-white placeholder-white"
          />
          <FaTimes className="ml-2 text-white cursor-pointer hover:text-green-300" />
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-4 ml-4">
          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-200/20 transition">
              <FaUser
                className={`${
                  isAlwaysWhiteHeader || isScrolled
                    ? "text-gray-500"
                    : "text-white"
                }`}
              />
            </button>
            <div
              className={`absolute top-[calc(100%+15px)] right-[-10px] w-[220px] bg-white/10 backdrop-blur-md rounded-lg p-2 flex flex-col gap-1 z-[1000] border border-white/10 transition-all duration-300 ${
                profileOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2"
              }`}>
              <Link
                to="/signin"
                className="flex items-center gap-3 px-4 py-2 text-sm text-black hover:text-green-500">
                <FaSignInAlt /> <span>Sign In</span>
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-3 px-4 py-2 text-sm text-black hover:text-green-500">
                <FaUserPlus /> <span>Sign Up</span>
              </Link>
            </div>
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-200/20 transition">
            <FaShoppingCart
              className={`${
                isAlwaysWhiteHeader || isScrolled
                  ? "text-gray-500"
                  : "text-white"
              }`}
            />
            <span className="absolute -top-1 -right-1 bg-green-600 text-white text-[10px] rounded-full w-[18px] h-[18px] flex items-center justify-center">
              3
            </span>
          </Link>

          {/* Certifications & Partnerships Button */}
          <Link
            to="/certifications"
            className="bg-gradient-to-r from-green-500 via-green-400 to-green-600 hover:from-green-600 hover:to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium h-[40px] flex items-center justify-center shadow-lg transition-all duration-300 animate-pulse"
            style={{ letterSpacing: 1 }}>
            <span className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-white animate-spin-slow">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636"
                />
              </svg>
              CERTIFICATIONS
            </span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
