import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaLinkedin, FaTwitter, FaStar } from "react-icons/fa";
import React from "react";

const teamMembers = [
  {
    name: "Abu Bakar",
    role: "Packaging Designer",
    image: "/guillaume-bleyer-r5zBpV53B38-unsplash.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Mateen",
    role: "Operations Manager",
    image: "/mehdi-sepehri-xXmO94vHn9Q-unsplash.jpg",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sara",
    role: "Customer Success Lead",
    image: "/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg",
    linkedin: "#",
    twitter: "#",
  },
];

const values = [
  { icon: "🌱", title: "Sustainability", desc: "Eco-friendly at every step." },
  { icon: "💡", title: "Innovation", desc: "Always improving our solutions." },
  { icon: "🤝", title: "Customer Focus", desc: "Your brand, our priority." },
];

const stats = [
  { label: "Years in Business", value: 7 },
  { label: "Clients Served", value: 5000 },
  { label: "Boxes Shipped", value: 1000000 },
  { label: "Certifications", value: 5 },
];

const partners = [
  "/Vector (1).png",
  "/Vector-1 (1).png",
  "/Vector-1.png",
  "/Vector-2 (1).png",
  "/Vector-2.png",
  "/Vector-3 (1).png",
  "/Vector-3.png",
  "/Vector-4 (1).png",
  "/Vector-4.png",
  "/Vector-5.png",
];

const testimonials = [
  {
    name: "Emily R.",
    text: "Their packaging was not only beautiful but eco-friendly. Highly recommend!",
    rating: 5,
    image: "/guillaume-bleyer-r5zBpV53B38-unsplash.jpg",
  },
  {
    name: "Michael S.",
    text: "Delivered fast and the customization options are top-notch!",
    rating: 4,
    image: "/mehdi-sepehri-xXmO94vHn9Q-unsplash.jpg",
  },
  {
    name: "Sarah T.",
    text: "We love the branding options. Our boxes came out perfectly!",
    rating: 5,
    image: "/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg",
  },
];

function Counter({ value, label, delay = 0 }) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const end = value;
    const increment = Math.max(1, Math.floor(end / 50));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(timer);
  }, [value]);
  return (
    <motion.div
      className="flex flex-col items-center bg-white/80 border-2 border-green-100 rounded-2xl px-8 py-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}>
      <span className="text-4xl md:text-5xl font-extrabold text-green-700 mb-2">
        {count.toLocaleString()}+
      </span>
      <span className="text-lg text-green-900 font-semibold text-center">
        {label}
      </span>
    </motion.div>
  );
}

function About() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-100 to-green-300 py-32 text-center overflow-hidden">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}>
          {/* Logo removed */}
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4 tracking-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}>
            About Us
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto text-green-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}>
            We're passionate about crafting eco-friendly packaging solutions
            that tell your brand’s story.
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
      {/* Story Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl font-extrabold text-green-700 mb-6 tracking-tight">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg leading-7">
            Founded with a mission to make packaging more sustainable, we
            started with a small team of creatives and engineers who believed
            packaging should be more than just a box—it should be an experience.
            Over the years, we’ve helped thousands of businesses bring their
            brand vision to life through fully customizable, beautifully crafted
            packaging.
          </p>
        </motion.div>
      </section>
      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <motion.div
            className="bg-white/80 border-2 border-green-100 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg">
              To empower brands with environmentally conscious packaging that
              delights customers and reflects purpose.
            </p>
          </motion.div>
          <motion.div
            className="bg-white/80 border-2 border-green-100 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg">
              To lead the packaging industry toward a greener, more innovative,
              and customer-focused future.
            </p>
          </motion.div>
          <motion.div
            className="bg-white/80 border-2 border-green-100 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              Our Values
            </h3>
            <div className="flex flex-col gap-4 items-center">
              {values.map((v, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-2xl">{v.icon}</span>
                  <span className="font-semibold text-green-800">
                    {v.title}
                  </span>
                  <span className="text-gray-600 text-sm">{v.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Counter key={i} value={s.value} label={s.label} delay={i * 0.1} />
          ))}
        </div>
      </section>
      {/* Timeline Section */}
      <Timeline />
      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl font-extrabold text-green-700 mb-10 tracking-tight">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="bg-green-50 rounded-xl p-6 border-2 border-green-100 flex flex-col items-center shadow-none hover:shadow-lg transition"
                whileHover={{ scale: 1.05 }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-sm"
                />
                <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                <div className="flex gap-3 justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-900 text-xl">
                    <FaLinkedin />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-900 text-xl">
                    <FaTwitter />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* Sustainability Commitment */}
      <section className="py-16 bg-gray-50 border-t border-green-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-green-700 mb-6 tracking-tight">
            Sustainability Commitment
          </h2>
          <p className="text-gray-700 mb-6">
            We use only eco-friendly, recyclable, or biodegradable materials.
            Our operations are carbon-neutral and we hold certifications from
            leading environmental organizations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              FSC® Certified
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Compostable
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Recyclable
            </span>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Biodegradable
            </span>
          </div>
        </div>
      </section>
      {/* Partners Marquee */}
      <section className="py-10 bg-white border-t border-green-100 overflow-hidden">
        <div className="w-full overflow-hidden relative">
          <div
            className="flex gap-12 animate-marquee will-change-transform"
            style={{ animation: "marquee 30s linear infinite" }}>
            {[...partners, ...partners].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`brand-${index}`}
                loading="lazy"
                className="w-28 h-14 object-contain grayscale hover:grayscale-0 hover:scale-110 hover:shadow-[0_0_24px_0_rgba(34,197,94,0.35)] transition duration-300"
                style={{ filter: "drop-shadow(0 0 0 #16a34a00)" }}
              />
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
}

export default About;
