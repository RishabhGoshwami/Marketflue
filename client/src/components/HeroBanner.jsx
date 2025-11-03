import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaBullhorn, FaUsers } from "react-icons/fa";

const HeroBanner = ({ openForm }) => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-br from-white via-yellow-50 to-[#fff4d6] overflow-hidden px-6 sm:px-8 pt-32 pb-24"
    >
      {/* 🔵 Animated Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#f8b825] opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-pink-400 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

      {/* 💎 Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[#f8b825] font-semibold uppercase tracking-[0.3em] mb-4"
      >
        Your Growth, Our Strategy
      </motion.p>

      {/* 🏆 Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-black text-gray-900 leading-tight max-w-4xl"
      >
        Transform Your Brand with{" "}
        <span className="text-[#f8b825] inline-block">Digital Excellence</span>
      </motion.h1>

      {/* 💬 Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-600 text-lg md:text-xl max-w-2xl mt-6 leading-relaxed"
      >
        We craft data-driven marketing strategies that amplify your reach,
        boost conversions, and build lasting brand impact.
      </motion.p>

      {/* 🚀 CTA Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 mt-10"
      >
        <motion.button
          onClick={openForm}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#f8b825] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg shadow-yellow-300/40 hover:bg-yellow-600 transition-all duration-300"
        >
          Get Free Consultation
        </motion.button>

        <motion.a
          href="/services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 border-[#f8b825] text-[#f8b825] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#f8b825] hover:text-white transition-all duration-300"
        >
          Explore Services
        </motion.a>
      </motion.div>

      {/* 📈 Stats Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 max-w-7xl mx-auto">
        {[
          {
            icon: <FaRocket />,
            title: "Revenue Growth",
            stat: "2x – 4x",
            gradient: "from-yellow-400 to-[#f8b825]",
          },
          {
            icon: <FaChartLine />,
            title: "Lead Conversion",
            stat: "3x – 6x",
            gradient: "from-pink-400 to-rose-500",
          },
          {
            icon: <FaUsers />,
            title: "Engagement Rate",
            stat: "4x – 8x",
            gradient: "from-indigo-400 to-blue-500",
          },
          {
            icon: <FaBullhorn />,
            title: "Brand Visibility",
            stat: "100 – 1000%",
            gradient: "from-green-400 to-emerald-500",
          },
        ].map((card, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{
              y: -5,
              scale: 1.03,
              boxShadow: "0 10px 25px rgba(248,184,37,0.2)",
            }}
            className="relative bg-white border border-gray-100 rounded-2xl p-6 flex items-center gap-6 text-left hover:border-[#f8b825]/40 transition-all duration-300"
          >
            <div
              className={`flex-shrink-0 p-5 rounded-2xl bg-gradient-to-r ${card.gradient} text-white text-4xl shadow-lg`}
            >
              {card.icon}
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-gray-800 mb-1">
                {card.title}
              </h3>
              <p className="text-2xl font-black text-[#f8b825]">{card.stat}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
