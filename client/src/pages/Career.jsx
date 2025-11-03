import React from "react";
import { motion } from "framer-motion";
import bgHero from "../assets/modern-equipped-computer-lab.jpg"; // 🖼️ Replace with your own image

const Career = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* 🌟 Hero Section */}
      <header className="relative w-full h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgHero})`,
            filter: "brightness(0.55)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-700/60 via-yellow-600/50 to-yellow-500/40 mix-blend-multiply" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg"
          >
            Join the <span className="text-yellow-300">Marketflue</span> Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed drop-shadow-md"
          >
            Be part of a digital revolution — where creativity meets performance,
            and every idea fuels growth.
          </motion.p>
        </div>
      </header>

      {/* 💼 About Careers Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#fffaf0] via-[#fff4d6] to-[#ffeb99] text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Why Work With Us?
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            At <span className="font-semibold text-yellow-600">Marketflue</span>,
            we believe in creativity, collaboration, and continuous learning.
            We offer an open culture, growth opportunities, and a space to
            innovate freely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {[
              {
                title: "Growth-Oriented",
                desc: "We help you expand your skills through training, mentorship, and hands-on projects.",
              },
              {
                title: "Creative Freedom",
                desc: "Your ideas matter. We encourage bold thinking and fresh perspectives.",
              },
              {
                title: "Inclusive Culture",
                desc: "We celebrate diversity and value every team member as part of our growth journey.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white shadow-md border border-yellow-200 hover:shadow-lg hover:border-yellow-400 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-3 text-yellow-700">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧭 Job Openings Section */}
      <section className="relative py-24 px-6 md:px-20 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-10"
          >
            Current Openings
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                role: "Digital Marketing Executive",
                type: "Full Time",
                location: "Noida, India",
              },
              {
                role: "React Frontend Developer",
                type: "Full Time",
                location: "Remote / Noida",
              },
              {
                role: "SEO Specialist",
                type: "Full Time",
                location: "Noida, India",
              },
              {
                role: "Graphic Designer",
                type: "Internship / Full Time",
                location: "Hybrid",
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-yellow-50 to-white rounded-2xl border border-yellow-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300 text-left"
              >
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  {job.role}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {job.type} · {job.location}
                </p>
                <a
                  href="/contact"
                  className="inline-block px-6 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
