import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState } from "react";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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
            className="text-4xl md:text-5xl font-extrabold text-green-900 mb-2 tracking-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}>
            Create Your Paxica Account
          </motion.h1>
          <motion.p
            className="text-lg max-w-xl mx-auto text-green-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}>
            Sign up to manage your packaging orders, track projects, and access
            exclusive features.
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
      {/* Sign Up Form */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 py-16 bg-white">
        <motion.div
          className="w-full max-w-md bg-white/80 border-2 border-green-100 rounded-2xl shadow-lg p-8 backdrop-blur-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-extrabold text-center text-green-700 mb-8 tracking-tight">
            Sign Up
          </h2>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-green-200 rounded px-4 py-2 focus:outline-green-500 bg-white"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-green-200 rounded px-4 py-2 focus:outline-green-500 bg-white"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border border-green-200 rounded px-4 py-2 focus:outline-green-500 bg-white"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-xs font-semibold focus:outline-none"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full border border-green-200 rounded px-4 py-2 focus:outline-green-500 bg-white"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-xs font-semibold focus:outline-none"
                onClick={() => setShowConfirm((v) => !v)}
                tabIndex={-1}>
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition font-bold text-lg shadow-md"
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.04 }}>
              Create Account
            </motion.button>
          </form>
          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-green-600 hover:underline font-semibold">
              Sign In
            </Link>
          </p>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}

export default SignUp;
