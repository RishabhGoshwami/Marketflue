import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; // ✅ React Icon (no CSS import needed)

// 🧩 Core Pillars Data
const coreValues = [
  {
    icon: "🎯",
    title: "Insight-Driven Strategy",
    description:
      "We dive deep into market data and competitor analysis to craft a roadmap that targets high-value opportunities, ensuring every action has a purpose.",
  },
  {
    icon: "📈",
    title: "Measurable Performance",
    description:
      "Our focus is strictly on ROI. We track, analyze, and optimize campaigns in real-time to guarantee conversions, lead generation, and scalable business growth.",
  },
  {
    icon: "🎨",
    title: "Creative Excellence",
    description:
      "Beyond algorithms, we champion bold, original content that transforms your brand narrative into campaigns that resonate and inspire loyalty.",
  },
  {
    icon: "🤝",
    title: "Total Transparency",
    description:
      "You get a seat at the table. We provide clear, honest reporting and communication to build a true growth partnership based on trust and shared goals.",
  },
];

// ✨ Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  const accent = "#f8b825";

  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-white to-[#fff7e0] text-gray-800 overflow-hidden py-24 px-6 md:px-20">
      {/* 🌀 Animated Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#f8b825] opacity-25 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-pink-300 opacity-25 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

      {/* 🌟 Heading */}
      <div className="text-center relative z-10 mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight max-w-5xl mx-auto"
        >
          We Build{" "}
          <span className="text-gray-900">Digital </span>
          <span className="text-[#f8b825]">Empires</span>, Not Just Campaigns.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Marketflue is India’s leading performance-driven digital partner —
          focused on measurable results and meaningful customer connections.
        </motion.p>
      </div>

      {/* 🌐 Mission Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 p-10 md:p-16"
      >
        <div className="absolute -top-5 -left-5 w-16 h-16 bg-[#f8b825] rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-pink-400 rounded-full opacity-20 blur-xl"></div>

        <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
          <span className="text-3xl"></span> Our Mission in a Digital World
        </h3>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          In the age of information overload, marketing isn’t about being the
          loudest — it’s about being the most{" "}
          <strong>relevant</strong>. We merge{" "}
          <strong style={{ color: accent }}>data insights</strong> with{" "}
          <strong style={{ color: accent }}>creative storytelling</strong> to
          ensure your brand stands out, connects authentically, and converts
          profitably.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          We don’t just execute{" "}
          <strong style={{ color: accent }}>SEO, Google Ads, and SMM</strong>;
          we integrate them into a cohesive{" "}
          <strong style={{ color: accent }}>Growth Framework</strong> that
          delivers tangible ROI from day one.
        </p>
      </motion.div>

      {/* 💎 Core Values Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {coreValues.map((itemData, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              y: -5,
              scale: 1.02,
              boxShadow: "0 10px 25px rgba(248,184,37,0.25)",
            }}
            className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-md p-8 transition-all duration-300"
          >
            <div
              className="text-4xl mb-4 p-4 rounded-xl inline-flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, #ffe48d, ${accent})`,
                color: "white",
              }}
            >
              {itemData.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {itemData.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base">
              {itemData.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* 🚀 Final CTA */}
      <div className="relative z-10 flex justify-center mt-24">
        <motion.a
          href="/about-us"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 bg-[#f8b825] text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-yellow-300/40 hover:bg-yellow-600 transition-all"
        >
          About Us
          <FaArrowRight className="text-white text-xl" />
        </motion.a>
      </div>
    </section>
  );
};

export default About;
