import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";

function About() {
  const teamMembers = [
    {
      name: "Abu Bakar",
      role: "Packaging Designer",
      image: "/guillaume-bleyer-r5zBpV53B38-unsplash.jpg",
    },
    {
      name: "Mateen",
      role: "Operations Manager",
      image: "/mehdi-sepehri-xXmO94vHn9Q-unsplash.jpg",
    },
    {
      name: "Sara",
      role: "Customer Success Lead",
      image: "/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg",
    },
  ];
  return (
    <>
      <Header />

      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-green-100 to-green-300 py-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}>
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
          About Us
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-green-800">
          We're passionate about crafting eco-friendly packaging solutions that
          tell your brand’s story.
        </p>
      </motion.section>

      {/* Story Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-green-700 mb-6">Our Story</h2>
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

      {/* Mission Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-7">
            To empower brands with environmentally conscious packaging that
            delights customers and reflects purpose. We're committed to
            innovation, sustainability, and creativity in every box we ship.
          </p>
        </motion.div>
      </section>

      <Timeline />

      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-green-700 mb-10">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="bg-green-50 rounded-xl p-6 shadow-md hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-sm"
                />
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}

export default About;
