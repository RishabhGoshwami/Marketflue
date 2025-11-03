import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTools,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const ConsultationForm = ({ isOpen, setIsOpen }) => {
  const [status, setStatus] = useState({ loading: false, message: "" });

  // 🔹 Reusable Input Component
  const InputField = ({ icon: Icon, type, name, placeholder }) => (
    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 focus:outline-none transition-all duration-300"
      />
    </div>
  );

  // 🔹 Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "" });

    const formData = new FormData(e.target);
    formData.append("access_key", "0c1ff1e7-e1fe-4929-b1b8-c91f69e8a839");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus({ loading: false, message: "✅ Thank you! We'll contact you soon." });
        e.target.reset();
        setTimeout(() => setIsOpen(false), 2000);
      } else throw new Error();
    } catch {
      setStatus({ loading: false, message: "❌ Something went wrong. Please try again." });
    }
  };

  // 🔹 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, type: "spring", stiffness: 120 },
    },
    exit: { opacity: 0, scale: 0.9, y: 60 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="consultation-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative bg-white rounded-3xl p-6 md:p-10 max-w-lg w-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t-8 border-[#f8b825]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ❌ Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-all p-2 rounded-full hover:bg-red-50"
              aria-label="Close form"
            >
              <FaTimes size={22} />
            </button>

            {/* 🧠 Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Unlock Your <span className="text-[#f8b825]">Free Consultation</span>
              </h2>
              <p className="text-gray-600 mt-2 text-sm md:text-base">
                Tell us about your project — we’ll get back to you within 24 hours.
              </p>
            </div>

            {/* 🧾 Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <InputField icon={FaUser} type="text" name="name" placeholder="Full Name" />
              <InputField icon={FaEnvelope} type="email" name="email" placeholder="Email Address" />
              <InputField icon={FaPhone} type="tel" name="phone" placeholder="Mobile Number" />

              {/* Service Select */}
              <div className="relative">
                <FaTools className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  name="service"
                  required
                  className="w-full pl-12 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-amber-100 focus:border-amber-500 focus:outline-none transition-all duration-300 appearance-none bg-white"
                >
                  <option value="">Select Service Type</option>
                  <option>Digital Marketing</option>
                  <option>Branding & Creative Design</option>
                  <option>Performance Advertising</option>
                  <option>Web Design & Development</option>
                  <option>Social Media Management</option>
                  <option>SEO & Content Marketing</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(248,184,37,0.4)" }}
                whileTap={{ scale: 0.97 }}
                disabled={status.loading}
                className="w-full bg-[#f8b825] text-white font-bold py-4 rounded-xl text-lg shadow-md hover:bg-amber-600 transition-all duration-300 flex items-center justify-center"
              >
                {status.loading ? (
                  <>
                    <svg
                      className="animate-spin mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Get Started Now"
                )}
              </motion.button>

              {/* Status Message */}
              <AnimatePresence>
                {status.message && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`text-center text-sm mt-3 p-3 rounded-xl font-medium flex items-center justify-center space-x-2 ${
                      status.message.startsWith("✅")
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {status.message.startsWith("✅") ? <FaCheckCircle /> : <FaExclamationCircle />}
                    <span>{status.message.substring(2).trim()}</span>
                  </motion.p>
                )}
              </AnimatePresence>
            </form>

            {/* 🔒 Footer Note */}
            <p className="text-xs text-gray-400 text-center mt-6">
              Your data is secure and will only be used to discuss your project.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationForm;
