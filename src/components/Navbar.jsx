import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-cyan-400 font-bold text-xl">
            MyPortfolio
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

          {/* Hamburger mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <span className="text-2xl">✖</span>
              ) : (
                <span className="text-2xl">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-3 space-y-3">
          <a href="#home" className="block hover:text-cyan-400">Home</a>
          <a href="#about" className="block hover:text-cyan-400">About</a>
          <a href="#projects" className="block hover:text-cyan-400">Projects</a>
          <a href="#contact" className="block hover:text-cyan-400">Contact</a>
        </div>
      )}
    </nav>
  );
}
