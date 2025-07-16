import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-green-700 text-white pt-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/20">
          {/* Company Info */}
          <div>
            <img src="logo.svg" className="h-10 w-auto p-0.5" alt="logo" />
            <p className="text-white/80 mt-2">
              Delivering eco-friendly, custom packaging with style, speed, and
              sustainability.
            </p>
            <div className="flex space-x-4 mt-6 text-white">
              <a href="#" className="hover:text-green-300 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-green-300 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-green-300 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-green-300 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/90">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-white/90">
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Stay in the Loop</h4>
            <p className="text-white/80 mb-4">
              Subscribe to receive updates, discounts, and tips.
            </p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded text-black mb-3"
            />
            <button className="w-full bg-white text-green-700 font-semibold py-2 rounded hover:bg-gray-100 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center py-6 text-white/70 text-sm">
          &copy; {new Date().getFullYear()} Paxica By Abu Bakar Mateen. All
          rights reserved.
        </div>
      </footer>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition duration-300"
          aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default Footer;
