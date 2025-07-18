import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import React, { useState } from "react";

function Contact() {
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
      <section className="relative bg-gradient-to-r from-green-100 to-green-300 py-36 text-center overflow-hidden">
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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto text-green-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}>
            Have a question about custom packaging, need a quote, or want to
            partner with us? Reach out and our team will get back to you soon.
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
      {/* Contact Form & Info */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="bg-white/80 border-2 border-green-100 rounded-2xl p-8 shadow-lg backdrop-blur-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold text-green-700 mb-4 text-center tracking-tight">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Fill out the form and our team will respond within 1 business day.
            </p>
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-green-200 rounded px-4 py-2 w-full focus:outline-green-500 bg-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-green-200 rounded px-4 py-2 w-full focus:outline-green-500 bg-white"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="border border-green-200 rounded px-4 py-2 w-full focus:outline-green-500 bg-white"
                required
              />
              <input
                type="text"
                placeholder="Company (optional)"
                className="border border-green-200 rounded px-4 py-2 w-full focus:outline-green-500 bg-white"
              />
              <input
                type="tel"
                placeholder="Phone (optional)"
                className="border border-green-200 rounded px-4 py-2 w-full focus:outline-green-500 bg-white"
              />
              <select
                className="border border-green-200 rounded px-4 py-2 w-full focus:outline-green-500 bg-white"
                required
                defaultValue="">
                <option value="" disabled>
                  Type of Inquiry
                </option>
                <option value="quote">Request a Quote</option>
                <option value="support">Support</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="border border-green-200 rounded px-4 py-2 w-full focus:outline-green-500 bg-white"
                required></textarea>
              <motion.button
                type="submit"
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 font-bold text-lg shadow-md"
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.04 }}>
                Send Message
              </motion.button>
              {submitted && (
                <motion.div
                  className="text-green-700 text-center font-semibold mt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}>
                  Thank you! Your message has been sent.
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
      <Footer />
    </>
  );
}

export default Contact;
