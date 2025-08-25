// src/components/About.jsx
import { motion } from "framer-motion";
import { FaCode, FaShopify, FaUserMd, } from "react-icons/fa";

const timeline = [
  {
    year: "2022",
    title: "First Steps in Development",
    desc: "Started my coding journey by building WordPress and Shopify websites at Bizsoft Technologies.",
    icon: <FaCode className="text-blue-500 text-2xl" />,
  },
  {
    year: "2023",
    title: "Shopify Developer",
    desc: "Worked on Reana.pk, focusing on Shopify development and improving e-commerce functionality.",
    icon: <FaShopify className="text-green-500 text-2xl" />,
  },
  {
    year: "2024",
    title: "Senior Shopify Developer",
    desc: "Currently developing and maintaining Shopify stores, optimizing performance and user experience.",
    icon: <FaUserMd className="text-black text-2xl" />,
  },

];

export default function About() {
  return (
    <section id="about" className="py-6 md:py-16 bg-gray-50 scroll-mt-5 md:scroll-mt-15">
      <div className="max-w-6xl mx-auto px-5 py-3">
        <h2 className="text-4xl font-bold text-center py-4 md:py-6 pb-6 md:pb-12">My Journey </h2>

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
