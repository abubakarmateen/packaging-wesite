import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SignIn() {
  return (
    <>
      <Header />

      <section className="min-h-screen flex items-center justify-center px-6 py-16 bg-gray-50">
        <motion.div
          className="w-full max-w-md bg-white rounded-xl shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
            Sign In
          </h2>

          <form className="space-y-6">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-green-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-green-500"
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Sign In
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-green-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

export default SignIn;
