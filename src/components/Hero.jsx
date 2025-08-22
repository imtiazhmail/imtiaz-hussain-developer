export default function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen flex items-center px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug sm:leading-tight mb-6">
          Hi 👋 I’m <span className="text-brand">Imtiaz Hussain </span> 
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 px-2 sm:px-0">
          A passionate <span className="text-brand">Web Developer</span>{" "}
          building beautiful and functional digital experiences with React.js, Shopify WordPress, and modern web technologies.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 bg-brand-dark-hover text-white font-semibold rounded-lg shadow-lg hover:bg-brand-dark transition-all duration-300 text-center"
          >
            View My Work 🚀
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center"
          >
            Contact Me ✉️
          </a>
        </div>
      </div>

      {/* Decorative Glow Effect */}
      <div className="absolute -z-10 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] bg-yellow-500/20 rounded-full blur-3xl top-10 left-1/2 -translate-x-1/2"></div>
    </section>
  );
}
