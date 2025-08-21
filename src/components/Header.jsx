// src/components/Header.jsx
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-50 scroll-mt-20">
      <div className="container mx-auto flex items-center justify-between px-5 lg:px-20 py-4">
        
        {/* Logo / Name */}
        <a href="/" className="text-2xl font-bold text-orange-300 hover:text-white transition-all duration-900 ease-in-out hover:scale-105 hover:shadow-lg">
          Imtiaz.dev
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          <a href="#hero" className="hover:text-brand transition">Home</a>
          <a href="#skills" className="hover:text-brand transition">Skills</a>
          <a href="#projects" className="hover:text-brand transition">Projects</a>
          <a href="#about" className="hover:text-brand">About</a>
          <a href="#contact" className="hover:text-brand">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 px-2 py-8 space-y-4 text-lg text-center">
        <a href="#about" className="hover:text-brand transition">About</a>
        <a href="#projects" className="hover:text-brand transition">Skills</a>
        <a href="#skills" className="hover:text-brand transition">Projects</a>
        <a href="#about" className="hover:text-brand">About</a>
        <a href="#contact" className="hover:text-brand">Contact</a>
        </nav>
      )}
    </header>
  );
}
