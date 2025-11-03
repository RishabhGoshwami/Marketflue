import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// ✳️ Reusable Social Icon Component
const SocialIcon = ({ children, href, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.15, rotate: 3 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="text-gray-400 hover:text-[#f5b800] transition-colors duration-300"
  >
    {children}
  </motion.a>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] text-gray-300 pt-20 pb-10 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* ✨ Subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-800/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 🟡 Brand Section */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/1.png"
              alt="Marketflue Logo"
              className="h-35 w-auto object-contain"
            />
          </div>

          <p className="text-gray-400 leading-relaxed max-w-sm text-sm md:text-base">
            Empowering brands with digital excellence. We create marketing
            strategies that attract, engage, and convert your audience into
            loyal customers.
          </p>

          {/* 🌐 Social Links */}
          <div className="flex space-x-5 mt-6">
            <SocialIcon href="https://x.com/MarketFlue" label="Twitter/X">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 4.01c-.77.35-1.6.58-2.47.69A4.2 4.2 0 0021.4 2a8.3 8.3 0 01-2.68 1.03A4.15 4.15 0 0015.5 2c-2.32 0-4.2 1.87-4.2 4.17 0 .33.04.66.1.97-3.5-.18-6.6-1.85-8.68-4.4a4.18 4.18 0 00-.57 2.1c0 1.45.75 2.73 1.88 3.47a4.16 4.16 0 01-1.9-.52v.05c0 2.03 1.46 3.73 3.4 4.12a4.27 4.27 0 01-1.88.07 4.19 4.19 0 003.9 2.9A8.37 8.37 0 012 18.58a11.7 11.7 0 006.29 1.85c7.55 0 11.7-6.19 11.7-11.55 0-.18 0-.36-.01-.53A8.1 8.1 0 0022 4.01z"
                />
              </svg>
            </SocialIcon>

            <SocialIcon
              href="https://www.linkedin.com/company/marketflue/"
              label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4V8h4v2a4 4 0 014-2zM2 9h4v12H2z"
                />
              </svg>
            </SocialIcon>

            <SocialIcon
              href="https://www.instagram.com/marketflue/"
              label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"
                />
                <circle cx="12" cy="12" r="3.5" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </SocialIcon>

            {/* Optional: Keep Facebook or remove */}
            <SocialIcon href="https://www.facebook.com/MarketFlue" label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* ⚡ Company Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5 border-b border-yellow-700/30 pb-2">
            Company
          </h3>
          <ul className="space-y-3 text-base">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about-us" },
              { name: "Services", path: "/services" },
              { name: "Career", path: "/career" },
              { name: "Blog", path: "/blog" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-[#f5b800] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🧭 Support Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5 border-b border-yellow-700/30 pb-2">
            Support
          </h3>
          <ul className="space-y-3 text-base">
            {[
              { name: "Contact Us", path: "/contact" },
              { name: "Disclaimer", path: "/disclaimer" },
              { name: "FAQ", path: "/faq" },
              { name: "Privacy Policy", path: "/privacy" },
              { name: "Terms & Conditions", path: "/terms" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-[#f5b800] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 📨 Newsletter Section */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5 border-b border-yellow-700/30 pb-2">
            Stay Updated
          </h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            Subscribe to our newsletter for the latest updates, marketing tips,
            and project insights.
          </p>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f5b800] border border-gray-700"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full px-6 py-3 bg-[#f5b800] text-black font-semibold rounded-lg shadow-md shadow-yellow-500/30 transition-all hover:bg-yellow-400"
            >
              Subscribe Now
            </motion.button>
          </form>

          {/* 📞 Contact Info */}
          <div className="mt-8 pt-4 border-t border-gray-800">
            <p className="text-lg font-semibold text-white">+91 8287492808</p>
            <p className="text-gray-400 text-sm mt-1">info@marketflue.com</p>
          </div>
        </div>
      </div>

      {/* ⚙️ Footer Bottom Section */}
      <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500 text-sm">
        © {currentYear}{" "}
        <span className="text-white font-medium">Marketflue</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
}
