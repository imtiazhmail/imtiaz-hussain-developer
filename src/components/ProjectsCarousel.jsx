import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React, Tailwind, and Vite.",
    img: "https://via.placeholder.com/600x350.png?text=Portfolio+Website",
    link: "https://imtiazhmail.github.io/imtiaz-hussain-developer/"
  },
  {
    title: "Shopify Store",
    description: "Custom Shopify theme with Tailwind and Liquid templates.",
    img: "https://via.placeholder.com/600x350.png?text=Shopify+Store",
    link: "https://example.com"
  },
  {
    title: "WordPress Theme",
    description: "A WordPress theme built with custom PHP & ACF.",
    img: "https://via.placeholder.com/600x350.png?text=WordPress+Theme",
    link: "https://example.com"
  },
  {
    title: "Trading Dashboard",
    description: "Crypto trading dashboard with live charts and APIs.",
    img: "https://via.placeholder.com/600x350.png?text=Trading+Dashboard",
    link: "https://example.com"
  }
];

const ProjectsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1, // default (desktop)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // small mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="py-6 md:py-12 bg-gray-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold mb-6 text-gray-800"
        >
          Projects
        </motion.h2>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="px-3"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition text-sm sm:text-base"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
