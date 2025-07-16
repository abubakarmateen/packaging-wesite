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
    <section className="px-6 py-16 bg-gray-50" id="blog">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6 text-green-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          From Our Blog
        </motion.h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Stay updated with tips, trends, and insights to elevate your packaging
          game.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: post.id * 0.2 }}>
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-left">
                <span className="text-sm text-green-600 font-semibold uppercase">
                  #{post.tag}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm">{post.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
