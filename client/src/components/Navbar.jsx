import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebookF, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog"},
    { name: "Career", path: "/career"},
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/marketflue/", label: "LinkedIn" },
    { icon: <FaFacebookF />, href: "https://www.facebook.com/MarketFlue", label: "Facebook" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/marketflue", label: "Instagram" },
  ];

  const hoverPrimary = "hover:text-[#43B6A1]";
  const underlineAccent = "bg-[#F8B825]";

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md fixed w-full z-50 border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 flex items-center justify-between">
        {/* ✅ Logo Section */}
        <Link to="/" className="flex items-center space-x-2 group">
          <img
            src="/2.png"
            alt="Market Flue Logo"
            className="h-16 w-auto object-contain drop-shadow-md transform transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-semibold text-base">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`relative group transition-all duration-300 ${hoverPrimary}`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-[-6px] h-[3px] w-0 ${underlineAccent} transition-all duration-300 group-hover:w-full rounded-full`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Social Icons */}
        <div className="hidden md:flex space-x-5 text-xl">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 ${hoverPrimary} transition-transform duration-200 hover:scale-110`}
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* ✅ Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className={`text-gray-800 ${hoverPrimary} focus:outline-none focus:ring-2 focus:ring-[#43B6A1] p-2 rounded-lg transition-all duration-200`}
          >
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-gray-200 shadow-inner`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-5">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`block text-gray-800 font-semibold text-lg border-b border-gray-200 pb-2 ${hoverPrimary} transition-colors duration-200`}
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* ✅ Mobile Social Icons */}
          <li className="flex space-x-6 pt-4 justify-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-gray-600 ${hoverPrimary} transition-transform duration-200 hover:scale-110`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
