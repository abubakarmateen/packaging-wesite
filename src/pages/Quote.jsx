import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Quote() {
  return (
    <>
      <Header />

      <div className="min-h-screen mt-9 bg-gradient-to-tr from-green-50 to-white py-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          {/* Contact Info */}
          <div className="bg-green-700 text-white p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">
              Let’s Discuss Your Project
            </h2>
            <p className="text-white/80 mb-6">
              Get in touch with us for custom packaging solutions tailored to
              your needs.
            </p>
            <ul className="space-y-3 text-white/90">
              <li>📧 Email: support@paxica.com</li>
              <li>📞 Phone: +1 (111) 123-4567</li>
              <li>📍 Location: New York, USA</li>
            </ul>
          </div>

          {/* Quote Form */}
          <div className="p-10">
            <h3 className="text-2xl font-bold text-green-700 mb-6">
              Get a Quote
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* Dropdown for Packaging Type */}
              <select
                className="w-full border border-gray-300 px-4 py-2 rounded text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
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

              <textarea
                rows="4"
                placeholder="Project Description / Requirements"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition">
                Request Quote
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}

export default Quote;
