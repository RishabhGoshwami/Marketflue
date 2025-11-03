import React from "react";
import { motion } from "framer-motion";
import bgHero from "../assets/modern-equipped-computer-lab.jpg"; // Replace with your actual background image

const Disclaimer = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* ===== Hero Section ===== */}
      <header className="relative w-full h-[40vh] md:h-[46vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgHero})`,
            filter: "brightness(0.55)",
          }}
        />
        <div className="absolute inset-0 bg-yellow-600/50 mix-blend-multiply" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Disclaimer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-white/90 max-w-3xl mx-auto text-lg"
          >
            Transparency and responsibility are key to our relationship with you.
          </motion.p>
        </div>
      </header>

      {/* ===== Content Section ===== */}
      <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto leading-relaxed">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">1. General Disclaimer</h2>
          <p className="text-gray-700 mb-8">
            The information provided by <strong>Marketflue</strong> on this website is for general
            informational purposes only. All content is published in good faith, but we make no
            representation or warranty of any kind, express or implied, regarding the accuracy,
            adequacy, reliability, or completeness of any information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Professional Advice</h2>
          <p className="text-gray-700 mb-8">
            All digital marketing, web development, and branding content provided on this website is
            for educational or promotional purposes only. It should not be considered professional
            business or legal advice. You should consult qualified experts before making business
            decisions based on our content.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. External Links Disclaimer</h2>
          <p className="text-gray-700 mb-8">
            Our website may contain links to third-party websites or services that are not owned or
            controlled by Marketflue. We do not endorse, guarantee, or assume responsibility for the
            accuracy, content, or practices of any external sites linked from our platform.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Testimonials</h2>
          <p className="text-gray-700 mb-8">
            Testimonials appearing on this website reflect real experiences of our clients or users.
            However, they are individual results, and results may vary depending on project scope,
            industry, and execution. Marketflue does not guarantee identical results for every
            client.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Errors and Omissions</h2>
          <p className="text-gray-700 mb-8">
            While we make every effort to keep the information up to date and accurate, Marketflue
            cannot warrant that the information provided on this site is always current or free of
            errors. Any reliance you place on such information is strictly at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-700 mb-8">
            Under no circumstance shall Marketflue or its team members be liable for any loss or
            damage of any kind incurred as a result of the use of this website or reliance on any
            information provided herein.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Consent</h2>
          <p className="text-gray-700 mb-8">
            By using our website, you hereby consent to our disclaimer and agree to its terms. If
            you disagree with any part of this disclaimer, please discontinue using our website and
            services immediately.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates</h2>
          <p className="text-gray-700 mb-8">
            We reserve the right to amend or update this Disclaimer at any time. Changes will be
            posted on this page, and the “Last Updated” date will reflect the latest version.
          </p>

          <div className="border-t border-gray-200 pt-6 mt-10">
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> October 2025
            </p>
            <p className="text-sm text-gray-600 mt-1">
              For any clarification or queries, contact us at{" "}
              <a
                href="mailto:info@marketflue.com"
                className="text-yellow-700 font-medium underline"
              >
                info@marketflue.com
              </a>.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Disclaimer;
