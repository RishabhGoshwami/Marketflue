import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaClipboardList,
  FaRocket,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";

// Animation variant
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const WorkProcess = () => {
  const processSteps = [
    {
      icon: FaSearch,
      title: "1. Discover & Analyze",
      description:
        "We conduct in-depth research to understand your business goals, target audience, and competitors — forming a solid data-driven foundation for your success.",
      bgColor: "bg-yellow-50",
      iconColor: "text-amber-500",
      keywords: "market research, business analysis, audience insights",
    },
    {
      icon: FaClipboardList,
      title: "2. Strategize & Plan",
      description:
        "Our experts create a clear, goal-oriented roadmap designed to elevate your online visibility and business growth effectively.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500",
      keywords: "marketing strategy, planning, digital roadmap",
    },
    {
      icon: FaRocket,
      title: "3. Execute & Optimize",
      description:
        "We execute campaigns with precision and continuously monitor, test, and optimize performance for measurable results.",
      bgColor: "bg-red-50",
      iconColor: "text-red-500",
      keywords: "campaign execution, optimization, performance tracking",
    },
    {
      icon: FaTrophy,
      title: "4. Deliver & Scale",
      description:
        "We deliver impactful results and help you scale your digital presence with consistent performance and growth insights.",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-500",
      keywords: "growth strategy, scaling, ROI improvement",
    },
  ];

  return (
    <section
      id="work-process"
      className="relative bg-white py-20 md:py-24 px-6 sm:px-10 md:px-20 overflow-hidden"
      aria-label="Our Work Process for Business Growth"
    >
      {/* SEO-Friendly Section Header */}
      <header className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
        <motion.h2
          {...fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-snug"
        >
          Our <span className="text-amber-500">4-Step Growth Process</span>
        </motion.h2>

        <motion.p
          {...fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-600 text-base sm:text-lg leading-relaxed"
        >
          We keep our process <strong>straightforward and highly effective</strong>.
          Our strategic, results-driven approach simplifies complex challenges,
          helping <strong>small businesses grow into successful brands</strong>.
        </motion.p>
      </header>

      {/* === Process Timeline Connector (Visible on Desktop) === */}
      <div className="relative max-w-7xl mx-auto">
        <div className="hidden md:block absolute inset-x-0 top-[20%] z-0">
          <div className="flex justify-between items-center h-2">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-yellow-400"></div>
            {[12.5, 37.5, 62.5, 87.5].map((pos, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full bg-yellow-400 absolute"
                style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
              ></div>
            ))}
          </div>
        </div>

        {/* === Process Cards Grid === */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 relative z-10">
          {processSteps.map((step, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow: "0 15px 30px rgba(251, 191, 36, 0.2)",
              }}
              className={`relative ${step.bgColor} shadow-lg rounded-2xl p-7 text-center border-b-4 border-amber-500 hover:border-b-amber-600 transition-all duration-300`}
              aria-label={step.title}
            >
              {/* Icon */}
              <div
                className={`mx-auto w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-5 border-2 border-yellow-300`}
              >
                <step.icon
                  className={`text-3xl ${step.iconColor}`}
                  aria-hidden="true"
                />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {step.description}
              </p>

              {/* Step Number */}
              <div className="absolute top-0 right-0 -mt-3 -mr-3 w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-semibold text-xs shadow-md">
                0{index + 1}
              </div>

              {/* Mobile Arrow */}
              {index < processSteps.length - 1 && (
                <div className="md:hidden absolute bottom-[-2.5rem] left-1/2 transform -translate-x-1/2">
                  <FaArrowRight
                    className="text-2xl sm:text-3xl text-yellow-400 rotate-90"
                    aria-hidden="true"
                  />
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
