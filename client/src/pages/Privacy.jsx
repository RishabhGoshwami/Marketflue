import React from "react";
import { motion } from "framer-motion";
import bgHero from "../assets/modern-equipped-computer-lab.jpg"; // Replace with your actual background image

const Privacy = () => {
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
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-white/90 max-w-3xl mx-auto text-lg"
          >
            Your privacy is important to us. Learn how Marketflue collects, uses, and protects your data.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
          <p className="text-gray-700 mb-8">
            At <strong>Marketflue</strong>, we value your trust and are committed to protecting your
            personal information. This Privacy Policy explains how we collect, use, and safeguard
            your data when you use our website, services, or communicate with us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-6">
            We may collect information directly from you when you:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li>Fill out forms on our website</li>
            <li>Subscribe to our newsletters</li>
            <li>Contact us for inquiries or services</li>
            <li>Use our digital marketing or web solutions</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-6">
            The information we collect is used to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            <li>Provide and improve our services</li>
            <li>Personalize your website experience</li>
            <li>Send updates, offers, or relevant communication</li>
            <li>Respond to your inquiries efficiently</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Protection</h2>
          <p className="text-gray-700 mb-8">
            We follow strict data protection protocols to ensure that your personal data is
            safeguarded against unauthorized access, alteration, or disclosure. However, no online
            system is 100% secure, and we encourage users to take precautions when sharing information.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies Policy</h2>
          <p className="text-gray-700 mb-8">
            Our website may use cookies to enhance your browsing experience. You can choose to
            disable cookies in your browser settings, but this may affect certain site functionalities.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Services</h2>
          <p className="text-gray-700 mb-8">
            We may use trusted third-party tools (like Google Analytics or ad networks) that help us
            understand user behavior and improve our services. These third parties are bound by
            confidentiality and data protection agreements.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
          <p className="text-gray-700 mb-8">
            You have the right to access, update, or delete your personal data from our system. To
            request any changes or clarifications, please contact us at{" "}
            <a href="mailto:info@marketflue.com" className="text-yellow-700 font-medium underline">
              info@marketflue.com
            </a>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Updates to This Policy</h2>
          <p className="text-gray-700 mb-8">
            Marketflue reserves the right to modify or update this policy at any time. All updates
            will be reflected on this page with a revised “Last Updated” date.
          </p>

          <div className="border-t border-gray-200 pt-6 mt-10">
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> October 2025
            </p>
            <p className="text-sm text-gray-600 mt-1">
              For any questions, please reach out to{" "}
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

export default Privacy;
