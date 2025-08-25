import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-10 md:py-12 grid gap-10 md:grid-cols-3 z-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">Imtiaz Hussain</h2>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Crafting modern web solutions with clean code and design.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-yellow-400 transition">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-yellow-400 transition">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter + Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          
          {/* Newsletter input */}
          <form className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-4 py-2 bg-transparent text-sm text-gray-300 focus:outline-none flex-1"
            />
            <button 
              type="submit"
              className="bg-yellow-500 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-yellow-400 transition"
            >
              Subscribe
            </button>
          </form>

          {/* Social icons */}
          <div className="flex space-x-6 mt-6">
            <a href="https://github.com/imtiazhmail" target="_blank" rel="noreferrer" className="hover:scale-110 hover:text-yellow-400 transition transform">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:scale-110 hover:text-yellow-400 transition transform">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:scale-110 hover:text-yellow-400 transition transform">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-700 text-center py-6 text-gray-400 text-sm z-10">
        © {new Date().getFullYear()} Imtiaz Hussain. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
