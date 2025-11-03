import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiPhoneCall,
  FiMail,
  FiCheckCircle,
  FiStar,
  FiClock,
  FiUsers,
  FiMessageCircle,
} from "react-icons/fi";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function DigiContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  }

  return (
    <section className="relative bg-gradient-to-br from-white via-yellow-50 to-amber-100 text-gray-900 py-20 sm:py-24 px-4 sm:px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* --- Left: Form Card --- */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white shadow-2xl shadow-yellow-100/60 rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-100/70"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              <span style={{ color: "#f8b825" }}>Let’s Walk</span> the Marketflue
              Together!
            </h2>
            <p className="mt-3 text-lg sm:text-xl font-medium text-yellow-600">
              Get A Comprehensive Free SEO Audit
            </p>

            {/* --- Form --- */}
            <form
              onSubmit={handleSubmit}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              <label className="col-span-1 sm:col-span-2 block">
                <span className="text-sm font-semibold text-gray-700">
                  Your Name
                </span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border-2 border-gray-200 px-5 py-3 bg-gray-50/50 placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition duration-300"
                  placeholder="Enter your full name"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-gray-700">
                  Your Email
                </span>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border-2 border-gray-200 px-5 py-3 bg-gray-50/50 placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition duration-300"
                  placeholder="you@company.com"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-gray-700">
                  Your Phone
                </span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  required
                  className="mt-2 w-full rounded-xl border-2 border-gray-200 px-5 py-3 bg-gray-50/50 placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition duration-300"
                  placeholder="+91 98xxxxxxxx"
                />
              </label>

              <label className="col-span-1 sm:col-span-2 block">
                <span className="text-sm font-semibold text-gray-700">
                  Your Subject
                </span>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-xl border-2 border-gray-200 px-5 py-3 bg-gray-50/50 placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition duration-300"
                  placeholder="E.g. SEO Audit / Website / Lead Gen"
                />
              </label>

              <label className="col-span-1 sm:col-span-2 block">
                <span className="text-sm font-semibold text-gray-700">
                  Your Message (Optional)
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 w-full rounded-2xl border-2 border-gray-200 px-5 py-3 bg-gray-50/50 placeholder-gray-400 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/30 transition duration-300"
                  placeholder="Tell us about your project, timeline and goals"
                />
              </label>

              {/* --- Submit Button --- */}
              <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={sending || sent}
                  className={`inline-flex items-center justify-center gap-2 font-bold px-8 py-3 rounded-full shadow-lg transition duration-300 w-full sm:w-auto ${
                    sending || sent
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-[#f8b825] to-[#facc15] text-gray-900 hover:from-[#e6aa12] hover:to-[#f8b825] shadow-yellow-300/50"
                  }`}
                >
                  {sending
                    ? "Sending..."
                    : sent
                    ? "Audit Submitted!"
                    : "Get Free Audit"}
                </motion.button>

                <div className="text-sm text-gray-600">
                  {sent ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2 text-green-600 font-semibold"
                    >
                      <FiCheckCircle className="w-5 h-5" />{" "}
                      <span>Success! We'll contact you shortly.</span>
                    </motion.div>
                  ) : (
                    <span className="text-gray-500">
                      We respect your privacy. Your data is safe with us.
                    </span>
                  )}
                </div>
              </div>
            </form>

            {/* Contact Quick Links */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-x-8 gap-y-4 items-center">
              <a
                href="tel:+911234567890"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition group"
              >
                <FiPhoneCall className="w-5 h-5 text-yellow-500 group-hover:text-yellow-600" />{" "}
                <span className="font-medium">+91 8287492808</span>
              </a>
              <a
                href="mailto:hello@marketflue.example"
                className="inline-flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition group"
              >
                <FiMail className="w-5 h-5 text-yellow-500 group-hover:text-yellow-600" />{" "}
                <span className="font-medium">info@marketflue.com</span>
              </a>
            </div>
          </motion.div>

          {/* --- Right Side: Info --- */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-3xl p-6 sm:p-8 bg-white border border-yellow-100 shadow-xl shadow-yellow-50/60">
              <h3 className="text-2xl font-bold text-gray-900">
                Driven by Data, Backed by Results
              </h3>
              <p className="mt-3 text-lg font-semibold text-yellow-600">
                The Digital Marketing Agency You Deserve
              </p>
              <p className="text-sm text-gray-500 mt-1">
                5 Years of Digitizing Dreams & Driving Growth
              </p>
              <p className="mt-5 text-gray-700 leading-relaxed">
                At Marketflue, we understand user behavior and emotions that
                drive digital success. We craft seamless experiences rooted in
                creativity, powered by innovation and insights.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-3xl p-6 bg-white border border-yellow-100 shadow-lg text-center hover:scale-[1.02] transition duration-300">
                <FiUsers className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
                <div className="text-3xl sm:text-4xl font-extrabold text-yellow-600">
                  100+
                </div>
                <div className="text-sm text-gray-600 mt-1 font-medium">
                  Projects Delivered
                </div>
              </div>
              <div className="rounded-3xl p-6 bg-white border border-yellow-100 shadow-lg text-center hover:scale-[1.02] transition duration-300">
                <FiClock className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
                <div className="text-3xl sm:text-4xl font-extrabold text-yellow-600">
                  5+
                </div>
                <div className="text-sm text-gray-600 mt-1 font-medium">
                  Years Experience
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="rounded-3xl p-6 bg-white border border-yellow-100 shadow-lg">
                <h4 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                  <FiStar className="text-yellow-500" /> Recognitions & Awards
                </h4>
                <ul className="mt-3 text-sm text-gray-700 space-y-2 list-disc pl-5">
                 
                </ul>
              </div>

              <div className="rounded-3xl p-6 bg-white border border-yellow-100 shadow-lg">
                <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <FiMessageCircle className="text-yellow-500" /> Expertise &
                  Sectors
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Healthcare",
                    "Real Estate",
                    "Education",
                    "Automotive",
                    "E-Commerce",
                    "Other",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs sm:text-sm font-semibold px-3 py-1.5 bg-yellow-100 text-yellow-800 rounded-full hover:bg-yellow-200 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-8 bg-gradient-to-r from-yellow-50 to-amber-100 border-2 border-yellow-200 shadow-lg text-center">
              <h4 className="text-2xl font-extrabold text-gray-900">
                Let’s imagine. Let’s believe. Let’s create.
              </h4>
              <p className="text-gray-600 mt-2 text-lg">
                Your next success story starts here.
              </p>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.5,
                }}
                className="mt-5 flex justify-center"
              >
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f8b825] to-[#facc15] px-8 py-3 rounded-full font-bold text-gray-900 shadow-xl shadow-yellow-300/50 hover:from-[#e6aa12] hover:to-[#f8b825] transition duration-300 transform hover:scale-[1.02]"
                >
                  Start a Project Today
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
