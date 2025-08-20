export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        {/* Greeting */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Hi, I’m <span className="text-yellow-400">Your Name</span> 👋
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          A passionate <span className="text-yellow-400">Web Developer</span> building beautiful and functional digital experiences with 
          <span className="text-blue-400"> React</span>, 
          <span className="text-green-400"> Tailwind</span>, and modern web technologies.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300"
          >
            View My Work 🚀
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Contact Me ✉️
          </a>
        </div>
      </div>

      {/* Decorative Glow Effect */}
      <div className="absolute -z-10 w-[600px] h-[600px] bg-yellow-500/20 rounded-full blur-3xl top-10 left-1/2 -translate-x-1/2"></div>
    </section>
  );
}
