import { motion } from "framer-motion";

const milestones = [
  {
    year: "2018",
    text: "Founded with a vision to redefine packaging.",
    detail:
      "A team of passionate designers and engineers came together to disrupt the traditional packaging industry with sustainable solutions.",
  },
  {
    year: "2019",
    text: "Launched first eco-friendly box series.",
    detail:
      "Our biodegradable box line was introduced and quickly gained traction among local startups and e-commerce brands.",
  },
  {
    year: "2021",
    text: "Expanded to Europe and Asia.",
    detail:
      "International partnerships enabled us to serve clients across borders with custom packaging at scale.",
  },
  {
    year: "2023",
    text: "Surpassed 5,000 happy clients.",
    detail:
      "Our dedication to quality and sustainability has earned us the trust of thousands of global brands.",
  },
];

function Timeline() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-4xl font-bold text-green-700 mb-16 text-center">
          Our Journey
        </h2>

        <div className="relative border-l-4 border-green-400 pl-8">
          {milestones.map((item, i) => (
            <motion.div
              key={i}
              className="mb-12 flex flex-col md:flex-row md:items-start md:gap-10 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}>
              {/* Dot */}
              <div className="absolute -left-4 top-1.5 w-4 h-4 bg-green-600 rounded-full"></div>

              {/* Left side: Year + Summary */}
              <div className="md:w-1/3">
                <h4 className="text-green-700 text-xl font-bold mb-1">
                  {item.year}
                </h4>
                <p className="text-gray-700">{item.text}</p>
              </div>

              {/* Right side: Description */}
              <div className="md:w-2/3 mt-4 md:mt-0 bg-white border border-green-100 p-5 rounded-xl shadow-sm">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Timeline;
