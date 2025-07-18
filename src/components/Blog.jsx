import { motion } from "framer-motion";

// ✅ Import
import brandingImg from "/agenlaku-indonesia-SRFOOdORhKw-unsplash.jpg";
import sustainabilityImg from "/devin-avery-46n1T0BMKUM-unsplash.jpg";
import designImg from "/nathan-dumlao-LpBGwF3f9fg-unsplash.jpg";

// ✅ Define blog posts
const blogPosts = [
  {
    id: 1,
    title: "How Custom Packaging Boosts Your Brand",
    desc: "Learn how personalized packaging creates brand recognition and customer loyalty.",
    image: brandingImg,
    tag: "Branding",
  },
  {
    id: 2,
    title: "Top 5 Eco-Friendly Packaging Trends in 2025",
    desc: "Discover the future of sustainable packaging and how to stay ahead of the curve.",
    image: sustainabilityImg,
    tag: "Sustainability",
  },
  {
    id: 3,
    title: "Packaging Design Tips That Sell",
    desc: "Explore the psychology of packaging and how great design increases conversions.",
    image: designImg,
    tag: "Design",
  },
];

function BlogSection() {
  return (
    <section className="relative px-6 py-24 bg-white overflow-hidden" id="blog">
      {/* Futuristic animated green gradient bar */}
      <motion.div
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-green-600 to-green-700 opacity-90"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
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
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-green-700 mb-8 tracking-tight text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}>
        From Our Blog
      </motion.h2>
      <p className="text-gray-600 mb-12 max-w-xl mx-auto text-center relative z-10">
        Stay updated with tips, trends, and insights to elevate your packaging
        game.
      </p>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={post.id}
            className="bg-white/60 border-2 border-green-200/60 rounded-3xl p-0 flex flex-col overflow-hidden group transition-all duration-300 cursor-pointer backdrop-blur-xl"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
              y: -12,
              scale: 1.06,
              boxShadow: "0 8px 32px 0 rgba(34,197,94,0.10)",
            }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}>
            <img
              src={post.image}
              alt={post.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-left flex-1 flex flex-col">
              <motion.span
                className="inline-block mb-2 px-3 py-1 bg-green-100 text-green-700 font-semibold rounded-full text-xs uppercase tracking-wide"
                animate={{
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    "0 0 0 0 #bbf7d0",
                    "0 0 0 8px #bbf7d033",
                    "0 0 0 0 #bbf7d0",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}>
                #{post.tag}
              </motion.span>
              <h3 className="text-xl font-bold mt-1 mb-2 text-green-800 group-hover:text-green-600 transition">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm flex-1">{post.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
