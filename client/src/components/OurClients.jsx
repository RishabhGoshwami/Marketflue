import React from "react";
import { motion } from "framer-motion";

export default function OurClients() {
  // Placeholder array for logos (replace with actual image imports later)
  const clients = new Array(8).fill(null);

  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-20 overflow-hidden">
      {/* 🌀 Background Accent */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-300/40 rounded-full blur-3xl"
      ></motion.div>

      {/* ✳️ Title Section */}
      <div className="text-center relative z-10 px-6">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-yellow-600 mb-4"
        >
          Our Clients
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          We’ve had the privilege of collaborating with visionary brands and
          businesses that trust{" "}
          <span className="font-semibold text-yellow-700">Marketflue</span> to
          drive their digital growth. Here’s a glimpse of the partners who’ve
          grown with us.
        </motion.p>
      </div>

      {/* ✳️ Client Logo Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 px-6 md:px-20 mt-16">
        {clients.map((_, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            className="bg-white rounded-2xl shadow-md flex items-center justify-center p-8 md:p-10 hover:shadow-xl transition-all duration-300"
          >
            {/* 🖼️ Logo Placeholder */}
            <div className="w-32 h-20 md:w-40 md:h-24 bg-yellow-100 rounded-xl flex items-center justify-center border border-yellow-200">
              <span className="text-yellow-400 text-sm md:text-base font-semibold opacity-70">
                LOGO
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✳️ Call to Action */}
    
    </section>
  );
}
