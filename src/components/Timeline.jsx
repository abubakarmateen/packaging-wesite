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
    <section className="relative bg-white py-24 px-4 md:px-16 overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-20 text-center tracking-tight">
          Our Futuristic Journey
        </h2>
        <div className="relative flex flex-col md:flex-row md:justify-center">
          {/* Timeline line */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-green-400 via-green-200 to-green-700"
            style={{ filter: "blur(0.5px)" }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <div
            className="md:hidden absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-green-400 via-green-200 to-green-700"
            style={{ filter: "blur(0.5px)" }}
          />
          <div className="relative z-10">
            {milestones.map((item, i) => {
              // Zig-zag: left for even, right for odd (desktop)
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  className={`mb-16 flex flex-col md:flex-row md:items-center md:gap-10 relative ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  viewport={{ once: true }}>
                  {/* Dot with pulse */}
                  <motion.div
                    className={`absolute md:static left-4 md:left-auto md:top-auto md:translate-x-0 top-1.5 w-7 h-7 md:w-8 md:h-8 ${
                      isLeft ? "md:order-1" : "md:order-3"
                    }`}
                    style={{ zIndex: 20 }}
                    animate={{
                      scale: [1, 1.2, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(34,197,94,0.7)",
                        "0 0 0 12px rgba(34,197,94,0.15)",
                        "0 0 0 0 rgba(34,197,94,0.7)",
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}>
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-green-400 via-green-200 to-green-700 border-4 border-white" />
                  </motion.div>
                  {/* Card */}
                  <div
                    className={`md:w-1/2 ${
                      isLeft
                        ? "md:pr-16 md:text-right"
                        : "md:pl-16 md:text-left"
                    } flex flex-col items-start md:items-${
                      isLeft ? "end" : "start"
                    }`}>
                    <motion.div
                      className="bg-white border border-green-200/40 rounded-2xl px-7 py-6 md:px-10 md:py-8 mb-2 relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
                      viewport={{ once: true }}>
                      <h4 className="text-green-700 text-2xl font-bold mb-1">
                        {item.year}
                      </h4>
                      <p className="text-green-900 text-lg font-semibold mb-2">
                        {item.text}
                      </p>
                      <p className="text-green-600 text-base leading-relaxed">
                        {item.detail}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Timeline;
