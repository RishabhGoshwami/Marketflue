import React from "react";
import { motion } from "framer-motion";
import bgHero from "../assets/modern-equipped-computer-lab.jpg"; // Optional: Add background image (replace path if needed)

export default function FAQ() {
  return (
    <div className="bg-[#fffdf6] min-h-screen text-gray-800">
      {/* 🔶 Hero Section */}
      <header className="relative w-full h-[45vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgHero})`,
            filter: "brightness(0.6)",
          }}
        ></div>
        <div className="absolute inset-0 bg-yellow-600/50 mix-blend-multiply" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-white/90 max-w-3xl mx-auto text-lg"
          >
            Quick answers to common questions about Marketflue’s services and process.
          </motion.p>
        </div>
      </header>

      {/* 💬 FAQ Section */}
      <section className="max-w-4xl mx-auto py-20 px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
          Got Questions? We’ve Got Answers.
        </h2>

        <div className="space-y-6">
          {[
            {
              q: "What services does Marketflue offer?",
              a: "We specialize in digital marketing, website development, SEO, branding, and social media growth strategies.",
            },
            {
              q: "Do you offer free consultations?",
              a: "Yes! You can book a free strategy call where we discuss your business goals and create a tailored plan.",
            },
            {
              q: "How long does a website project take?",
              a: "Typically, a full website project takes around 3–6 weeks depending on complexity and features.",
            },
            {
              q: "Can I get a custom marketing plan?",
              a: "Absolutely! Every plan we create is customized according to your target audience and business objectives.",
            },
            {
              q: "How do I get started?",
              a: "Simply reach out via our contact page or call us directly. Our team will connect and guide you through the next steps.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-yellow-100 shadow-md p-6 rounded-2xl hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-yellow-700 mb-2">
                {item.q}
              </h3>
              <p className="text-gray-700">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
