import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaAward, FaLeaf, FaGlobe, FaCheckCircle } from "react-icons/fa";

const certifications = [
  {
    icon: <FaLeaf className="text-green-500 text-4xl" />,
    title: "FSC® Certified",
    desc: "Responsible forestry and sustainable sourcing.",
  },
  {
    icon: <FaCheckCircle className="text-green-600 text-4xl" />,
    title: "Compostable Materials",
    desc: "Certified compostable packaging solutions.",
  },
  {
    icon: <FaAward className="text-green-400 text-4xl" />,
    title: "ISO 14001",
    desc: "Environmental management excellence.",
  },
  {
    icon: <FaGlobe className="text-green-700 text-4xl" />,
    title: "Global Recycle Standard",
    desc: "Verified recycled content and responsible production.",
  },
];

const partners = [
  { name: "EcoPack Alliance", logo: "/luma-candles-K1Xi_R_mfpk-unsplash.jpg" },
  { name: "Green Earth Org", logo: "/EcoKraft.jpg" },
  { name: "Sustainability Council", logo: "/Biodegradavle.jpg" },
  { name: "Planet Positive", logo: "/Shipping.jpg" },
];

function Certifications() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-100 to-green-300 py-28 text-center overflow-hidden">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-green-900 mb-4 tracking-tight drop-shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}>
            Certifications & Partnerships
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto text-green-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}>
            We are proud to be recognized for our commitment to sustainability
            and to partner with leading organizations making a difference for
            our planet.
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

      {/* Certifications Section - Glassmorphism Card Grid */}
      <section className="py-20 bg-green-50 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              className={`backdrop-blur-lg bg-white/60 border border-green-200 rounded-3xl p-8 shadow-2xl flex flex-col items-center hover:shadow-green-200 transition-all duration-300 group ${
                cert.title === "Global Recycle Standard"
                  ? "justify-center h-full"
                  : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.07 }}>
              <span className="mb-4 animate-bounce-slow">{cert.icon}</span>
              <h3 className="text-xl font-bold text-green-800 mb-2 group-hover:text-green-600 transition uppercase tracking-wide text-center">
                {cert.title}
              </h3>
              <p className="text-gray-700 text-center text-base font-medium">
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Section - Horizontal Row */}
      <section className="py-20 bg-gradient-to-b from-green-100 to-green-200 border-t border-green-100">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-10 tracking-tight text-green-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
            Our Partners
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-10 items-stretch">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                className="relative bg-white/30 backdrop-blur-lg border border-green-200 rounded-2xl p-6 shadow-xl flex flex-col items-center w-44 h-72 transition-all duration-300 group overflow-hidden"
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                  type: "spring",
                  stiffness: 60,
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0 0 32px 0 #22c55e55",
                  borderColor: "#22c55e",
                }}>
                {/* Futuristic gradient dot accent */}
                <span className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 blur-sm opacity-80 group-hover:opacity-100 transition-all"></span>
                {/* Floating animation */}
                <motion.div
                  className="flex items-center justify-center w-28 h-36 mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-green-100/60 to-green-200/40 shadow-inner"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    delay: idx * 0.2,
                  }}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain w-full h-full drop-shadow-lg"
                  />
                </motion.div>
                <span className="font-semibold text-green-800 text-lg text-center mt-auto tracking-wide group-hover:text-green-600 transition-all">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section - Icon Row */}
      <section className="py-16 bg-white border-t border-green-100 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center gap-8 mb-6">
            <FaLeaf className="text-green-500 text-3xl" />
            <FaAward className="text-green-400 text-3xl" />
            <FaGlobe className="text-green-700 text-3xl" />
            <FaCheckCircle className="text-green-600 text-3xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4 tracking-tight">
            Our Commitment to Excellence
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We go beyond certifications and partnerships—our team is dedicated
            to delivering the highest quality, eco-friendly packaging solutions
            for every client. Your trust drives us to innovate and improve every
            day.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Certifications;
