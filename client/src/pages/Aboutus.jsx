import React, { useState } from "react";
import bgImage from "../assets/modern-equipped-computer-lab.jpg";
import aboutImg from "../assets/modern-equipped-computer-lab.jpg";
import whatWeDoImg from "../assets/modern-equipped-computer-lab.jpg";
import OurClients from "../components/OurClients";
import { FaBullseye, FaLightbulb, FaSearch, FaCogs, FaRocket, FaHandshake } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
export default function Aboutus() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <section className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 overflow-hidden">
      {/* 🔶 Hero Section */}
      <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            filter: "brightness(0.6)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
        <h1 className="relative z-10 text-white text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg">
          About&nbsp;Us
        </h1>
      </div>

     {/* ✳️ Section 1: About Marketflue */}
<div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-12">
  {/* 🏢 Text Content */}
  <div className="md:w-1/2">
    <h2 className="text-sm font-semibold text-yellow-600 uppercase tracking-widest">
    About&nbsp;Us
  </h2>
    <h3 className="text-2xl font-semibold text-gray-800 mb-6">
      Where Digital Growth Starts 
    </h3>

    <p className="text-gray-700 leading-relaxed text-lg mb-4">
      In today’s digital era, every brand needs more than just an online presence — 
      it needs a powerful digital identity that connects, converts, and inspires. 
      At <span className="font-semibold text-yellow-700">Marketflue</span>, 
      we help businesses achieve exactly that.
    </p>

    <p className="text-gray-700 leading-relaxed text-lg mb-4">
      We’re a Delhi-based digital marketing agency driven by creativity, powered by data, 
      and committed to measurable growth. Whether you’re a startup looking to grow visibility 
      or an established brand aiming to scale globally, 
      <span className="font-semibold text-yellow-700"> Marketflue </span>
      is your trusted digital growth partner.
    </p>

    <p className="text-gray-700 leading-relaxed text-lg mb-4">
      Our approach is simple — we combine strategy, creativity, and technology 
      to build meaningful connections between brands and their audiences.
    </p>

    <p className="text-yellow-700 font-semibold text-xl mt-6">
      ✨ We don’t just market brands — we build them.
    </p>
  </div>

  {/* 🖼️ Image Side */}
 <div className="md:w-1/2 flex justify-center">
  <img
    src={aboutImg}
    alt="About Marketflue"
    className="rounded-2xl shadow-2xl w-full md:w-[95%] h-[420px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
  />
</div>

</div>


      {/* ✳️ Section 2: What We Do */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-12 bg-yellow-100/50">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={whatWeDoImg}
            alt="Our Services"
            className="rounded-2xl shadow-2xl w-full md:w-[90%] hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-yellow-600 mb-6">What We Do</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            At <span className="font-semibold text-yellow-700">Marketflue</span>,
            we combine creative excellence with data-driven precision to craft
            strategies that truly perform.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Whether it’s{" "}
            <span className="font-semibold">
              SEO, Google Ads, Social Media Marketing, Web Design, Branding,
            </span>{" "}
            or{" "}
            <span className="font-semibold">Performance Campaigns</span> — we
            deliver solutions that align with your business goals and drive real
            ROI.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our team of strategists, designers, and analysts ensure your brand
            not only stands out — but stays ahead.
          </p>
        </div>
      </div>


     
  <section className="relative w-full bg-gradient-to-b from-white via-yellow-50 to-white py-24 px-6 overflow-hidden">
  {/* ✳️ Decorative Glow */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,237,171,0.3),transparent)]"></div>

  {/* ✳️ Tabs moved INSIDE the box */}
  <div className="flex justify-center gap-6 mb-10 flex-wrap">
    {["mission", "vision"].map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`px-10 py-3.5 rounded-full font-semibold text-lg capitalize tracking-wide transition-all duration-300 ${
          activeTab === tab
            ? "bg-yellow-500 text-white shadow-lg shadow-yellow-200 scale-105"
            : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 hover:scale-105"
        }`}
      >
        {tab === "mission" ? "Our Mission" : "Our Vision"}
      </button>
    ))}
  </div>

  {/* ✳️ Animated Content */}
  <div className="max-w-7xl mx-auto"> {/* 👈 Added container for width control */}
    <AnimatePresence mode="wait">
      {activeTab === "mission" ? (
        <motion.div
          key="mission"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-5 text-gray-700 leading-relaxed text-[1.05rem]">
            <p>
              Good marketing isn’t cheap — and cheap marketing isn’t good.
              At{" "}
              <span className="font-semibold text-yellow-700">
                Marketflue
              </span>
              , we strike the perfect balance between quality and affordability,
              delivering ROI-focused solutions that truly perform.
            </p>
            <p>
              Our mission is to make digital marketing smarter, simpler, and more human.
              We merge human creativity with smart automation — combining logic and emotion
              to produce strategies that resonate and deliver measurable results.
            </p>
            <p>
              Every campaign we craft is designed to enhance visibility, foster engagement,
              and drive conversions — ensuring long-term growth and credibility.
            </p>
            <p className="text-yellow-700 font-semibold text-xl mt-6 text-center">
              ✨ Marketflue — Optimizing Performance. Maximizing Growth.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="vision"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-5 text-gray-700 leading-relaxed text-[1.05rem]">
            <p>
              We aim to empower{" "}
              <span className="font-semibold text-yellow-700">
                1,000+ global brands
              </span>{" "}
              to achieve sustainable digital success through creativity and data-driven strategies.
            </p>
            <p>
              Our vision is to redefine digital marketing — helping brands not just exist online,
              but lead, engage, and inspire through authentic, impactful experiences.
            </p>
            <p>
              At{" "}
              <span className="font-semibold text-yellow-700">
                Marketflue
              </span>
              , we believe the future belongs to brands that combine innovation with empathy —
              creating meaningful growth that lasts.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</section>


      {/* ✳️ Section 4: Why Choose Us */}
      <div className="w-full py-24 bg-gradient-to-r from-yellow-100 via-white to-yellow-50 text-center">
        <h2 className="text-4xl font-bold text-yellow-600 mb-6">Why Choose Us</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-12">
          Partnering with{" "}
          <span className="font-semibold text-yellow-700">Marketflue</span> means
          choosing a team that’s invested in your success. We’re not just an agency —
          we’re your digital growth partner.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            {
              icon: <FaBullseye className="text-yellow-600 text-4xl mb-4" />,
              title: "Results-Driven Approach",
              desc: "We focus on real growth — leads, conversions, and measurable ROI.",
            },
            {
              icon: <FaLightbulb className="text-yellow-600 text-4xl mb-4" />,
              title: "Creative + Analytical Balance",
              desc: "Every campaign blends imagination with intelligent strategy.",
            },
            {
              icon: <FaSearch className="text-yellow-600 text-4xl mb-4" />,
              title: "Transparency & Trust",
              desc: "We provide clear communication, performance tracking, and honest reporting.",
            },
            {
              icon: <FaCogs className="text-yellow-600 text-4xl mb-4" />,
              title: "Customized Strategies",
              desc: "Every business is unique, and so are our marketing plans.",
            },
            {
              icon: <FaRocket className="text-yellow-600 text-4xl mb-4" />,
              title: "Expert Team",
              desc: "A passionate team of marketers, strategists, and designers driven by your goals.",
            },
            {
              icon: <FaHandshake className="text-yellow-600 text-4xl mb-4" />,
              title: "Long-Term Partnership",
              desc: "We grow when you grow — your success defines ours.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/70 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500"
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h3 className="text-xl font-bold text-yellow-700 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-gray-700 text-lg max-w-2xl mx-auto italic">
          ✨ At Marketflue, we don’t chase trends — we <span className="font-semibold text-yellow-700">create results.</span>
        </p>
      </div>
      <OurClients/>
    </section>
  );
}
