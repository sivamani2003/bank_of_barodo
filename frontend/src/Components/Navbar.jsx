import React, { useState } from "react";
import { MdLightMode, MdOutlineMenu, MdClose } from "react-icons/md";

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`navbar fixed top-0 w-full z-50 ${
        isDarkMode ? "dark bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow-md py-4`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="lg:text-2xl font-bold sm:text-xl">
          My Website
        </a>
        <ul className="hidden md:flex space-x-4 text-xl">
          <li className="nav-item">
            <a href="/" className="nav-link hover:text-[#ca970b]">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link hover:text-[#ca970b]">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link hover:text-[#ca970b]">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link hover:text-[#ca970b]">
              Blogs
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link hover:text-[#ca970b]">
              Contact
            </a>
          </li>
        </ul>
        <div className="navbar-toggle flex items-center">
          <button
            className={`mx-auto py-2 px-4 text-lg rounded ${
              isDarkMode
                ? "text-black bg-white border border-black hover:bg-gray-200"
                : "text-white bg-black border border-white hover:bg-gray-800"
            }`}
          >
            Login
          </button>
          <button
            className={`mx-auto ml-4 py-2 px-4 text-lg rounded ${
              isDarkMode
                ? "text-black bg-white border border-black hover:bg-gray-200"
                : "text-white bg-black border border-white hover:bg-gray-800"
            }`}
          >
            Signup
          </button>
          <button onClick={toggleDarkMode} className="text-2xl ml-4">
            <MdLightMode
              className={`${isDarkMode ? "text-white" : "text-black"}`}
            />
          </button>
          <button onClick={toggleMenu} className="text-2xl ml-4 md:hidden">
            {isMenuOpen ? (
              <MdClose
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              />
            ) : (
              <MdOutlineMenu
                className={`${isDarkMode ? "text-white" : "text-black"}`}
              />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } transition duration-500 ease-out transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 mt-4">
          <li className="nav-item">
            <a href="#" className="nav-link hover:text-[#ca970b]">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link hover:text-[#ca970b]">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link hover:text-[#ca970b]">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link hover:text-[#ca970b]">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
