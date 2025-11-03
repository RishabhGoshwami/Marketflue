import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  ShieldCheck,
  DollarSign,
  Headphones,
  Unlock,
  Quote, // Lucide icon for quote marks
} from "lucide-react";

// Animation settings
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 }, // Ensure animation runs only once when visible
};

const Testimonials = () => {
  const features = [

  ];

  const testimonials = [
    {
      text: "Marketflue transformed our online presence with creativity and measurable results. The team’s digital strategies helped us reach new audiences and grow exponentially!",
      name: "Sarah Mitchell",
      role: "Marketing Director, TechInnovate",
    },
    {
      text: "Their SEO audit and campaign optimization doubled our inbound leads within two months. Highly professional and data-driven approach!",
      name: "Rahul Sharma",
      role: "Founder, BuildPro Realty",
    },
    {
      text: "A creative powerhouse! The Marketflue team perfectly understood our brand voice and delivered beyond expectations.",
      name: "Aisha Khan",
      role: "CMO, EduVerse",
    },
    {
      text: "Exceptional communication, top-tier design sense, and tangible growth results. We couldn’t have asked for more.",
      name: "Michael Chen",
      role: "CEO, GreenWave Technologies",
    },
  ];

  return (
    <section className="relative bg-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Background Yellow Blob for Premium feel */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 opacity-20 rounded-full filter blur-3xl z-0 animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* === Header Section === */}
        <div className="text-center mb-16">
          <motion.h2
            {...fadeInUp}
            className="text-amber-600 font-bold tracking-[0.3em] uppercase text-sm"
          >
            TRUSTED BY LEADERS
          </motion.h2>
          <motion.h3
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mt-3 max-w-4xl mx-auto leading-snug"
          >
            What Our Clients Are Raving About
          </motion.h3>
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-600 mt-5 max-w-3xl mx-auto text-lg"
          >
            We don’t just deliver results — we build partnerships that empower your brand’s lasting success.
          </motion.p>
        </div>

        {/* === Star Rating & Stat === */}
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mt-8 mb-16 p-4 rounded-xl bg-yellow-50/50 backdrop-blur-sm"
        >
          <div className="flex items-center gap-1 text-yellow-500 text-3xl">
            {Array(5)
              .fill()
              .map((_, i) => (
                <Star key={i} fill="currentColor" strokeWidth={0} className="w-6 h-6" />
              ))}
          </div>
          <span className="text-gray-800 font-extrabold text-2xl">
             4.9 / 5.0 
          </span>
          <span className="text-gray-500 text-lg">
             from 50+ Verified Clients
          </span>
        </motion.div>


        {/* === Testimonials Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5, 
                boxShadow: "0 15px 30px rgba(245, 158, 11, 0.15)", // Subtle gold shadow
                borderColor: "rgb(251 191 36)", // Tailwind yellow-400
              }}
              className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border-2 border-transparent p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              {/* Quote Icon Background */}
              <Quote className="w-12 h-12 text-yellow-500/10 absolute top-5 right-5 rotate-12" />

              <p className="text-gray-700 italic leading-relaxed text-lg mb-6 z-10">
                “{t.text}”
              </p>
              <div>
                <h4 className="font-extrabold text-xl text-gray-900">{t.name}</h4>
                <p className="text-yellow-600 font-medium text-sm mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- */}

        {/* === Key Features Section (Elevated) === */}
      

      </div>
    </section>
  );
};

export default Testimonials;