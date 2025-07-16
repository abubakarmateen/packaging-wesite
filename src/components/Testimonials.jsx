import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";

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
    <section className="py-20 bg-green-50">
      <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
        What Our Clients Say
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto px-6">
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center h-full flex flex-col items-center">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover shadow"
              />
              <p className="text-gray-700 italic text-sm leading-relaxed">
                “{t.text}”
              </p>
              <div className="flex justify-center gap-1 text-yellow-400 mt-4">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h4 className="mt-4 font-semibold text-green-600 text-sm">
                {t.name}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
