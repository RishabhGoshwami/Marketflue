import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ yeh line add karo

export default function LatestNews() {
  const news = [
    {
      title: "UI/UX Design Principles for Better User Engagement",
      description:
        "Discover the core design principles that enhance user experiences, boost engagement, and improve digital conversions.",
      image:
        "https://www.wasabi-communications.com/en/wp-content/uploads/2024/11/post-1-1024x576.jpg",
    },
    {
      title: "Why Your Business Needs a Mobile-Optimized Website",
      description:
        "Learn why mobile-first web design is no longer optional and how it helps your business reach wider audiences effectively.",
      image:
        "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Content Marketing Essentials for Growing Your Brand",
      description:
        "Explore proven strategies to create engaging content that builds brand authority and drives organic growth.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-yellow-50 via-white to-amber-50 py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* ☀️ Floating background blobs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-semibold text-yellow-600 uppercase tracking-widest"
        >
          Latest News
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
        >
          Insights on{" "}
          <span className="text-yellow-600">digital innovation</span> and growth
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
        >
          Explore the latest trends, strategies, and tools driving digital
          innovation and helping businesses thrive in a rapidly evolving
          landscape.
        </motion.p>

        {/* News Cards */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-yellow-100 group"
            >
              <div className="overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.description}
                </p>
                <button className="mt-4 text-yellow-600 font-medium hover:underline flex items-center gap-1">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <Link to="/blog">
            <button className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg transition duration-300">
              View All Articles
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
