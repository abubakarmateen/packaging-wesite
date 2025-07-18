import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

// ✅ Import images from src/assets
import img1 from "/guillaume-bleyer-r5zBpV53B38-unsplash.jpg";
import img2 from "/mehdi-sepehri-xXmO94vHn9Q-unsplash.jpg";
import img3 from "/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg";

// ✅ Testimonials array with imported image references
const testimonials = [
  {
    name: "Emily R.",
    text: "Their packaging was not only beautiful but eco-friendly. Highly recommend!",
    rating: 5,
    image: img1,
  },
  {
    name: "Michael S.",
    text: "Delivered fast and the customization options are top-notch!Highly recommend!",
    rating: 4,
    image: img2,
  },
  {
    name: "Sarah T.",
    text: "We love the branding options. Our boxes came out perfectly!",
    rating: 5,
    image: img3,
  },
  {
    name: "David K.",
    text: "Exceptional quality and sustainability in one package. Highly recommend!",
    rating: 4,
    image: img1,
  },
  {
    name: "Lena M.",
    text: "Our customers noticed the packaging! Will order again. Highly recommend!",
    rating: 5,
    image: img2,
  },
];

function Testimonials() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Futuristic blurred orbs */}
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
      {/* Custom style for Swiper active dot */}
      <style>{`
        .swiper-pagination-bullet {
          background: #d1fae5;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #16a34a !important;
        }
      `}</style>
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-green-700 text-center mb-12 tracking-tight relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}>
        What Our Clients Say
      </motion.h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto px-6 !pb-12 z-10 relative">
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className="bg-white/80 border-2 border-green-100 rounded-2xl p-8 flex flex-col items-center text-center h-full group transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 0 4px #bbf7d0" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}>
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-green-200"
              />
              <p className="text-gray-700 italic text-base leading-relaxed mb-4">
                “{t.text}”
              </p>
              <motion.div
                className="flex justify-center gap-1 text-yellow-400 mt-2"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}>
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </motion.div>
              <h4 className="mt-4 font-semibold text-green-600 text-sm">
                {t.name}
              </h4>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
