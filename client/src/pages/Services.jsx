import React from "react";
import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaRocket,
  FaPaintBrush,
  FaSearchDollar,
  FaGlobe,
  FaUsers,
} from "react-icons/fa";

const Services = ({ openForm }) => {
  const services = [
    {
      icon: <FaBullhorn className="text-4xl text-white" />,
      title: "Digital Marketing",
      description:
        "From SEO to Google Ads and Social Media, we create performance campaigns that convert audiences into loyal customers through measurable, ROI-driven strategies.",
    },
    {
      icon: <FaPaintBrush className="text-4xl text-white" />,
      title: "Branding & Creative Design",
      description:
        "Crafting timeless brand identities through strategic design, storytelling, and visual consistency that ensures your brand stands apart in the digital era.",
    },
    {
      icon: <FaRocket className="text-4xl text-white" />,
      title: "Performance Advertising",
      description:
        "Maximizing your marketing impact with targeted paid campaigns, optimized ad spend, and data-backed insights for maximum ROI and lead growth.",
    },
    {
      icon: <FaGlobe className="text-4xl text-white" />,
      title: "Web Design & Development",
      description:
        "We design responsive, high-performing websites that are not only visually stunning but optimized for conversions and brand storytelling.",
    },
    {
      icon: <FaUsers className="text-4xl text-white" />,
      title: "Social Media Management",
      description:
        "Transform your social presence into a powerful engagement channel. We strategize, create, and manage impactful content that drives community growth.",
    },
    {
      icon: <FaSearchDollar className="text-4xl text-white" />,
      title: "SEO & Content Marketing",
      description:
        "Enhancing organic visibility through advanced SEO strategies and rich content marketing that boosts ranking, credibility, and organic reach.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-white to-[#fff8e5] text-gray-900 overflow-hidden py-24 px-6 md:px-20">
      {/* 🌈 Animated Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#f8b825] opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-pink-300 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

      {/* 🏆 Header Section */}
      <div className="relative z-10 text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          <span className="text-gray-900">Our </span>
          <span className="text-[#f8b825]">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          At <strong className="text-[#f8b825]">Marketflue</strong>, we merge
          creativity, strategy, and technology to deliver{" "}
          <span className="font-semibold text-gray-900">
            impactful digital experiences
          </span>{" "}
          that fuel your business growth.
        </motion.p>
      </div>

      {/* 💼 Services Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px rgba(248, 184, 37, 0.25)",
            }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffcc66] to-[#f8b825] shadow-lg">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* 🚀 CTA Section */}
      <div className="relative z-10 text-center mt-24">
        <motion.h4
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
        >
          Let’s Build Something{" "}
          <span className="text-[#f8b825]">Extraordinary</span> Together
        </motion.h4>

        <motion.button
          onClick={openForm} // ✅ Global form trigger
          whileHover={{
            scale: 1.05,
            boxShadow: "0 15px 30px rgba(248, 184, 37, 0.4)",
          }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-12 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-[#ffd56b] to-[#f8b825] shadow-lg transition-all"
        >
          Get Free Quote
        </motion.button>
      </div>
    </section>
  );
};

export default Services;
