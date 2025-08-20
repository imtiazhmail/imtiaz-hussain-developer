import { FaReact, FaWordpress, FaShopify, FaVideo } from "react-icons/fa";
import { SiTradingview } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500 text-5xl" /> },
    { name: "Shopify", icon: <FaShopify className="text-green-600 text-5xl" /> },
    { name: "WordPress", icon: <FaWordpress className="text-blue-700 text-5xl" /> },
    { name: "Video Editing", icon: <FaVideo className="text-red-500 text-5xl" /> },
    { name: "Trading", icon: <SiTradingview className="text-indigo-500 text-5xl" /> },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-200">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
