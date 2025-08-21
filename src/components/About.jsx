// src/components/About.jsx
import { motion } from "framer-motion";
import { FaCode, FaShopify, FaWordpress, FaVideo, FaChartLine } from "react-icons/fa";

const timeline = [
  {
    year: "2019",
    title: "Started Coding",
    desc: "Began my journey in web development with React and modern frameworks.",
    icon: <FaCode className="text-blue-500 text-2xl" />,
  },
  {
    year: "2020",
    title: "Freelancing",
    desc: "Built websites on Shopify & WordPress for clients worldwide.",
    icon: <FaShopify className="text-green-500 text-2xl" />,
  },
  {
    year: "2021",
    title: "Video Editing",
    desc: "Worked with businesses to create engaging video content.",
    icon: <FaVideo className="text-pink-500 text-2xl" />,
  },
  {
    year: "2022",
    title: "Trading & Growth",
    desc: "Explored financial trading while improving full-stack development skills.",
    icon: <FaChartLine className="text-yellow-500 text-2xl" />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 scroll-mt-15">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Journey 🚀</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-400 h-full hidden md:block"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-12 flex w-full ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Card container */}
              <div className="w-full md:w-1/2 px-4">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full border-4 border-yellow-400 bg-white shadow">
                      {item.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold">
                      {item.year} – {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
