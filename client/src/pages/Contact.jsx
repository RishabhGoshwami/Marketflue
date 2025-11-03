import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/modern-equipped-computer-lab.jpg"; // 🔹 apni background image path lagao

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-[#fffaf0] via-[#fff4d6] to-[#ffeb99] text-gray-900">
      {/* 🔶 Hero Section */}
      <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            filter: "brightness(0.6)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <h1 className="relative z-10 text-white text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg">
          Contact&nbsp;Us
        </h1>
      </div>

      {/* ✳️ Contact Section */}
      <section className="relative py-20 px-6 md:px-16 lg:px-24">
        {/* Glow Blobs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#fde047] rounded-full blur-[120px] opacity-40"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#facc15] rounded-full blur-[140px] opacity-30"
        ></motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 relative z-10">
            <p className="text-sm font-semibold text-yellow-600 uppercase tracking-widest">
              Contact Us
            </p>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Get in <span className="text-yellow-500">Touch</span> With Us
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg">
              We’d love to hear from you. Whether you have a question about our
              services, pricing, or anything else — our team is ready to help
              you grow.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid gap-12 lg:grid-cols-2 relative z-10">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg p-8 lg:p-10 border border-yellow-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <form className="space-y-5">
                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-2 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 text-white font-semibold rounded-xl hover:shadow-yellow-400/50 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-700 mb-6">
                  Let’s talk! Book a free strategy call and get a custom digital
                  marketing plan tailored to your goals.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">
                      📞
                    </span>
                    <span className="text-gray-800 text-base">
                      +91-8287492808
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">
                      ✉️
                    </span>
                    <span className="text-gray-800 text-base">
                      info@marketflue.com
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold">
                      📍
                    </span>
                    <span className="text-gray-800 text-base">
                      123 Creative Avenue, Noida, India
                    </span>
                  </li>
                </ul>
              </div>

              {/* Map / Placeholder */}
              <div className="mt-10">
                <div className="w-full h-64 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-3xl flex items-center justify-center text-yellow-600 font-medium shadow-inner">
                  🗺️ Google Map Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
