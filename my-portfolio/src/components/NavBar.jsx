import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-4 flex justify-between items-center mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">Shobithaa</div>

        {/* Hamburger Menu (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Navigation Links (desktop) */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Experience</a>
          <a href="#technology" className="hover:text-gray-400">Technology</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
        </div>

        {/* Contact Button (desktop) */}
        <a href="#footer" className="hidden md:inline">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white 
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Connect Me
          </button>
        </a>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
          <a href="#home" className="hover:text-gray-400" onClick={toggleMenu}>Home</a>
          <a href="#about" className="hover:text-gray-400" onClick={toggleMenu}>About Me</a>
          <a href="#service" className="hover:text-gray-400" onClick={toggleMenu}>Experience</a>
          <a href="#technology" className="hover:text-gray-400" onClick={toggleMenu}>Technology</a>
          <a href="#project" className="hover:text-gray-400" onClick={toggleMenu}>Projects</a>
          <a href="#footer" onClick={toggleMenu}>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white 
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
              Connect Me
            </button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
