import React from "react";
import { motion } from "framer-motion";
import bgHero from "../assets/people-developing-knowledge-job-workplace_386185-3684.jpg"; // Replace with your actual background image

const Terms = () => {
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
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-white/90 max-w-3xl mx-auto text-lg"
          >
            Please read these terms carefully before using our website or services.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
          <p className="text-gray-700 mb-8">
            Welcome to <strong>Marketflue</strong>. By accessing or using our website, services, or
            digital solutions, you agree to be bound by the following Terms and Conditions. If you
            do not agree, please do not continue using our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of Website</h2>
          <p className="text-gray-700 mb-8">
            You agree to use our website for lawful purposes only. Any unauthorized use, including
            attempts to breach security, misuse our data, or distribute malicious software, is
            strictly prohibited and may result in legal action.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Intellectual Property</h2>
          <p className="text-gray-700 mb-8">
            All content on this website, including text, graphics, logos, images, and software, is
            the property of <strong>Marketflue</strong> or its licensors and is protected under
            copyright and intellectual property laws. You may not copy, modify, or distribute
            materials without written consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitation of Liability</h2>
          <p className="text-gray-700 mb-8">
            Marketflue shall not be held liable for any direct, indirect, or incidental damages
            arising out of your use of our website or services. We strive to maintain accuracy and
            security but do not guarantee error-free or uninterrupted service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. External Links</h2>
          <p className="text-gray-700 mb-8">
            Our website may contain links to third-party sites. Marketflue is not responsible for
            the content, accuracy, or privacy practices of these external websites. Visiting such
            links is at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Terms</h2>
          <p className="text-gray-700 mb-8">
            When you engage with Marketflue for digital marketing, branding, or web development
            services, all project terms (including payment, timeline, and deliverables) will be
            clearly mentioned in a written agreement before the start of any project.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
          <p className="text-gray-700 mb-8">
            Marketflue reserves the right to suspend or terminate your access to our website or
            services at any time, without notice, for any conduct deemed inappropriate or harmful to
            our business interests.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
          <p className="text-gray-700 mb-8">
            We may revise these Terms & Conditions at any time. The latest version will always be
            available on this page, and by continuing to use our services, you agree to be bound by
            the updated terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
          <p className="text-gray-700 mb-8">
            These Terms shall be governed by and construed in accordance with the laws of India.
            Any disputes shall be subject to the exclusive jurisdiction of the courts located in
            Noida, Uttar Pradesh.
          </p>

          <div className="border-t border-gray-200 pt-6 mt-10">
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> October 2025
            </p>
            <p className="text-sm text-gray-600 mt-1">
              For legal inquiries, contact us at{" "}
              <a href="mailto:info@marketflue.com" className="text-yellow-700 font-medium underline">
                info@marketflue.com
              </a>.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Terms;
