import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Header />

      <section className="min-h-screen mt-20 bg-gray-50 py-16 px-6 md:px-20">
        <motion.div
          className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-bold text-center text-green-600 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Got a question about custom packaging? Let’s chat.
          </p>

          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-green-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-green-500"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-green-500"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-green-500"></textarea>

            <motion.button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition duration-300"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}>
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
