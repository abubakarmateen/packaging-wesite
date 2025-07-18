import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaLeaf,
  FaShippingFast,
  FaPalette,
  FaClock,
} from "react-icons/fa";
import React, { useState } from "react";

function Quote() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Header />
      {/* Hero/Intro Section */}
      <section className="relative bg-gradient-to-r from-green-100 to-green-300 py-28 text-center overflow-hidden">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 tracking-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}>
            Get a Custom Packaging Quote
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto text-green-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}>
            Tell us about your packaging needs and our team will send you a
            tailored quote within 1 business day.
          </motion.p>
        </motion.div>
        {/* Animated blurred orbs */}
        <motion.div
          className="absolute -top-24 -left-32 w-96 h-96 bg-green-400 opacity-20 rounded-full blur-3xl z-0"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-[-100px] w-96 h-96 bg-green-700 opacity-10 rounded-full blur-3xl z-0"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
      </section>
      {/* Quote Form & Info */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Quote Form */}
          <motion.div
            className="bg-white/80 border-2 border-green-100 rounded-2xl p-8 shadow-lg backdrop-blur-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold text-green-700 mb-4 text-center tracking-tight">
              Request a Quote
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form and our team will respond within 1 business day.
            </p>
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-green-200 rounded px-4 py-2 w-full focus:outline-green-500 bg-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-green-200 rounded px-4 py-2 w-full focus:outline-green-500 bg-white"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Company Name (optional)"
                className="w-full border border-green-200 rounded px-4 py-2 focus:outline-green-500 bg-white"
              />
              <input
                type="tel"
                placeholder="Phone (optional)"
                className="w-full border border-green-200 rounded px-4 py-2 focus:outline-green-500 bg-white"
              />
              <select
                className="w-full border border-green-200 rounded px-4 py-2 text-gray-700 focus:outline-green-500 bg-white"
                required
                defaultValue="">
                <option value="" disabled>
                  Select Packaging Type
                </option>
                <option value="boxes">Boxes</option>
                <option value="bags">Bags</option>
                <option value="mailers">Mailers</option>
                <option value="tapes">Tapes</option>
                <option value="wrapping">Wrapping</option>
                <option value="labels">Labels</option>
                <option value="pouches">Pouches</option>
              </select>
              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="number"
                  min={1}
                  placeholder="Quantity"
                  className="border border-green-200 rounded px-4 py-2 w-full focus:outline-green-500 bg-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Dimensions (LxWxH)"
                  className="border border-green-200 rounded px-4 py-2 w-full focus:outline-green-500 bg-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Material (e.g. Kraft, Recycled)"
                  className="border border-green-200 rounded px-4 py-2 w-full focus:outline-green-500 bg-white"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Print/Design (optional)"
                className="w-full border border-green-200 rounded px-4 py-2 focus:outline-green-500 bg-white"
              />
              <textarea
                rows="4"
                placeholder="Project Description / Requirements"
                className="w-full border border-green-200 rounded px-4 py-2 focus:outline-green-500 bg-white"
                required></textarea>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <input
                  type="file"
                  className="w-full border border-green-200 rounded px-4 py-2 bg-white"
                  accept="image/*,.pdf,.ai,.psd,.eps"
                />
                <label className="flex items-center gap-2 cursor-pointer text-green-700 font-medium">
                  <input type="checkbox" className="accent-green-600" />
                  Eco-Friendly Preference
                </label>
              </div>
              <motion.button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 font-bold text-lg shadow-md"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.04 }}>
                Request Quote
              </motion.button>
              {submitted && (
                <motion.div
                  className="text-green-700 text-center font-semibold mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}>
                  Thank you! Your quote request has been sent.
                </motion.div>
              )}
            </form>
          </motion.div>
          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-8 justify-center items-center md:items-start"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center gap-3 text-green-700">
                <FaEnvelope className="text-xl" />
                <span>hello@paxica.com</span>
              </div>
              <div className="flex items-center gap-3 text-green-700">
                <FaPhone className="text-xl" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-green-700">
                <FaMapMarkerAlt className="text-xl" />
                <span>123 Green Ave, Eco City, USA</span>
              </div>
              <div className="flex items-center gap-3 text-green-700">
                <span className="font-semibold">Business Hours:</span>
                <span>Mon-Fri 9am-6pm</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-green-700 hover:text-green-900 text-2xl transition">
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-green-700 hover:text-green-900 text-2xl transition">
                <FaTwitter />
              </a>
            </div>
            {/* Embedded Google Map */}
            <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mt-8 border-2 border-green-100">
              <iframe
                title="Paxica Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.816279779751554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f8e7b1%3A0x5045675218ce6e0!2sEco%20City!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Why Choose Us/Benefits */}
      <section className="py-16 bg-green-50 border-t border-green-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-green-700 mb-10 tracking-tight text-center">
            Why Choose Paxica?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center bg-white/80 border-2 border-green-100 rounded-2xl p-8">
              <FaLeaf className="text-3xl text-green-600 mb-2" />
              <span className="font-bold text-green-800 mb-1">
                Eco Materials
              </span>
              <span className="text-gray-600 text-sm">
                Sustainable, recyclable, and compostable options.
              </span>
            </div>
            <div className="flex flex-col items-center text-center bg-white/80 border-2 border-green-100 rounded-2xl p-8">
              <FaShippingFast className="text-3xl text-green-600 mb-2" />
              <span className="font-bold text-green-800 mb-1">
                Global Shipping
              </span>
              <span className="text-gray-600 text-sm">
                Fast, reliable delivery worldwide.
              </span>
            </div>
            <div className="flex flex-col items-center text-center bg-white/80 border-2 border-green-100 rounded-2xl p-8">
              <FaPalette className="text-3xl text-green-600 mb-2" />
              <span className="font-bold text-green-800 mb-1">
                Free Design Support
              </span>
              <span className="text-gray-600 text-sm">
                Expert help with your packaging design.
              </span>
            </div>
            <div className="flex flex-col items-center text-center bg-white/80 border-2 border-green-100 rounded-2xl p-8">
              <FaClock className="text-3xl text-green-600 mb-2" />
              <span className="font-bold text-green-800 mb-1">
                Fast Turnaround
              </span>
              <span className="text-gray-600 text-sm">
                Quick quotes and production times.
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Quote;
