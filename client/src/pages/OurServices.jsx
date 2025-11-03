import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaPaintBrush,
  FaRocket,
  FaGlobe,
  FaUsers,
  FaSearchDollar,
} from "react-icons/fa";
import bgImage from "../assets/modern-equipped-computer-lab.jpg";

export default function OurServices() {
  const [activeTab, setActiveTab] = useState("mission");

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

  const clients = new Array(10).fill(null);

  return (
    <section className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">
      {/* 🔶 Hero Section */}
      <div className="relative w-full h-[65vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${bgImage})`,
            filter: "brightness(0.55)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-2xl">
            Our <span className="text-yellow-400">Services</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            At{" "}
            <span className="text-yellow-400 font-semibold">Marketflue</span>,
            we merge creativity, strategy, and technology to deliver{" "}
            <span className="text-white font-semibold">
              impactful digital experiences
            </span>{" "}
            that fuel your business growth.
          </p>
        </div>
      </div>

      {/* ✳️ Top Agency Section */}
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-yellow-50 via-white to-[#fff8e5] text-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* LEFT SIDE - Heading + Button */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Top Digital Marketing Agency in India
            </motion.h2>

            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(248, 184, 37, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-block px-10 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-[#ffd56b] to-[#f8b825] shadow-lg transition-all"
            >
              Enquire Now
            </motion.a>
          </div>

          {/* RIGHT SIDE - Paragraph Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4"
            >
              <span className="font-semibold text-[#f8b825]">
                Digital Marketing Services
              </span>{" "}
              with <strong>5+ Years of Proven Expertise</strong>
              <br />
              Transform your business into a powerful brand with{" "}
              <span className="font-semibold text-gray-900">Marketflue</span> – a
              leading digital marketing agency based in Delhi/NCR. With over a
              decade of experience, we specialize in crafting impactful and
              data-driven digital marketing strategies.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 leading-relaxed"
            >
              Our approach combines the latest tools, techniques, and trends to
              deliver{" "}
              <span className="text-[#f8b825] font-semibold">
                100% result-oriented solutions
              </span>{" "}
              – all at affordable pricing.
            </motion.p>
          </div>
        </div>
      </section>
      {/* ✳️ Our Clients Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.25 }}
          transition={{ duration: 1 }}
          className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-yellow-300/50 rounded-full blur-3xl"
        ></motion.div>

        <div className="relative z-10 text-center px-6">
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

        {/* ✳️ Infinite Logo Slider */}
        <div className="relative mt-16 overflow-hidden">
          <motion.div
            className="flex gap-10 whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((_, index) => (
              <div
                key={index}
                className="inline-flex items-center justify-center bg-white shadow-md rounded-2xl p-8 md:p-10 w-40 h-24 border border-yellow-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-full h-full flex items-center justify-center bg-yellow-50 rounded-xl border border-yellow-200">
                  <span className="text-yellow-500 font-semibold opacity-70">
                    LOGO
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-yellow-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-yellow-50 to-transparent pointer-events-none"></div>
        </div>

        {/* ✳️ CTA */}
        <div className="relative z-10 text-center mt-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg text-gray-700 mb-6"
          >
            Want to see your brand featured here?
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-gradient-to-r from-[#ffd56b] to-[#f8b825] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Let’s Collaborate
          </motion.a>
        </div>
      </section>
      {/* ✳️ Services Section */}
<section className="relative bg-gradient-to-br from-yellow-50 via-white to-[#fff8e5] text-gray-900 overflow-hidden py-24 px-6 md:px-20">
  {/* 🌀 Background Blobs */}
  <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#f8b825] opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
  <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-pink-300 opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

  {/* ✨ Section Heading */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-center mb-16"
  >
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
      Services <span className="text-[#f8b825]">Offered</span>
    </h2>
    <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-3xl mx-auto">
      Discover the full spectrum of digital solutions crafted to elevate your
      brand’s online presence and fuel measurable growth.
    </p>
  </motion.div>

  {/* 💼 Services Grid */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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

  {/* CTA Section */}
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
    <motion.a
      href="/contact"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 15px 30px rgba(248, 184, 37, 0.4)",
      }}
      whileTap={{ scale: 0.97 }}
      className="inline-block px-12 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-[#ffd56b] to-[#f8b825] shadow-lg transition-all"
    >
      Get Free Quote
    </motion.a>
  </div>
</section>


      {/* ✳️ Reasons to Work With Us Section */}
      <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-yellow-50 via-white to-[#fff8e5] text-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* LEFT SIDE - TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Reasons to <span className="text-[#f8b825]">Work With Us</span>
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Marketflue is the Right Choice for Your Brand
            </h3>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At <span className="font-semibold text-[#f8b825]">Marketflue</span>,
              we bring the right blend of expertise, experience, and hands-on
              training to help you succeed in the digital marketing space.
              Whether you’re a student, a working professional, or a homemaker
              looking to upskill, our training programs are designed to suit
              every background and learning pace.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our comprehensive course modules, guided by experienced mentors,
              focus on practical knowledge and real-time projects to ensure
              you’re ready for the industry from day one. From clearing doubts
              to building a strong foundation in digital marketing, we offer
              personalized attention and dedicated support every step of the way.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              What sets us apart is our commitment to delivering real value—both
              in knowledge and ROI. We don’t just teach; we help you build a
              career. With a focus on transparency, flexibility, and tailored
              learning paths, we ensure every student receives a unique,
              career-ready experience that leads to long-term success.
            </p>
          </motion.div>

          {/* RIGHT SIDE - IMAGE */}
         <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="md:w-1/2 flex justify-center"
>
  <img
    src={bgImage}
    alt="Reasons to Work With Us"
    className="rounded-3xl shadow-2xl w-full max-w-xl md:max-w-2xl object-cover md:h-[480px] h-[350px]"
  />
</motion.div>

        </div>
      </section>

      
    {/* ✳️ Final CTA Section - Warm Premium Version (Compact & Wider) */}
<section className="relative py-16 px-6 md:px-20 bg-gradient-to-br from-[#fffaf0] via-[#fff4d6] to-[#ffeb99] text-gray-900 overflow-hidden">
  {/* 🌞 Soft Glow Blobs */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.4 }}
    transition={{ duration: 1 }}
    className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#fde047] rounded-full blur-[120px] opacity-40"
  ></motion.div>
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 0.4 }}
    transition={{ duration: 1 }}
    className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#facc15] rounded-full blur-[140px] opacity-30"
  ></motion.div>

  {/* 🟨 Glassmorphic Card */}
  <div className="relative max-w-6xl mx-auto rounded-3xl bg-white/70 backdrop-blur-xl border border-yellow-200 p-10 shadow-[0_0_50px_rgba(250,204,21,0.2)] text-center overflow-hidden">
    {/* ✨ Light Overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-yellow-50 opacity-70 rounded-3xl pointer-events-none"></div>

    {/* 🌟 Heading & Text */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight text-gray-900">
        Let’s Make Something{" "}
        <span className="bg-gradient-to-r from-yellow-500 via-amber-400 to-orange-400 bg-clip-text text-transparent">
          Great Together
        </span>
      </h2>

      <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Walk the digital talk with{" "}
        <span className="font-semibold text-yellow-600">Marketflue</span> — where ideas turn into growth.
      </p>

      {/* 🚀 CTA Button */}
      <motion.a
        href="/contact"
        whileHover={{
          scale: 1.07,
          boxShadow: "0 20px 40px rgba(250, 204, 21, 0.4)",
        }}
        whileTap={{ scale: 0.96 }}
        className="inline-block px-12 py-4 text-lg font-semibold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-white rounded-full shadow-lg hover:shadow-yellow-400/50 transition-all duration-300"
      >
        Start a Project
      </motion.a>
    </motion.div>
  </div>
</section>




      
          <section className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* ✅ LEFT SIDE - CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-700 font-medium">
            We’d Love to Hear From You
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Let’s talk! Book a free strategy call and get a custom digital
            marketing plan tailored to your goals. No fluff, no jargon—just
            clear steps to grow your business online.
          </p>

          <div className="pt-4 space-y-2">
            <p className="text-lg font-semibold text-gray-900">
              📞 +91-8287492808
            </p>
            <p className="text-lg font-semibold text-gray-900">
              📧 info@marketflue.com
            </p>
          </div>
        </motion.div>

        {/* ✅ RIGHT SIDE - FORM SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-10 border border-yellow-100"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Let’s walk the{" "}
            <span className="text-[#f5b800]">Marketflue</span> together!
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Get My FREE Our Services Proposal
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#f5b800] focus:ring focus:ring-yellow-100 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#f5b800] focus:ring focus:ring-yellow-100 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                placeholder="Tell us a bit about your project..."
                rows="4"
                className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#f5b800] focus:ring focus:ring-yellow-100 outline-none transition-all"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(245,184,0,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-[#ffd56b] to-[#f8b825] text-white font-semibold text-lg py-3 rounded-full transition-all"
            >
              Submit Now
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
      
    </section>
  );
}
