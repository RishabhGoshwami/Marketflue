import React from "react";

export default function JoinAgency() {
  const TwitterXIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 19c11 0 13-9 13-13v-.6A9.3 9.3 0 0023 3a9.1 9.1 0 01-2.6.7A4.5 4.5 0 0022 1a9 9 0 01-2.9 1.1A4.5 4.5 0 0016 0c-2.5 0-4.5 2-4.5 4.5 0 .4.1.8.2 1.2C8 5.5 5 4 3.2 1.6a4.6 4.6 0 00-.6 2.3c0 1.6.8 3 2 3.9A4.4 4.4 0 012 7.8v.1c0 2.3 1.6 4.2 3.8 4.6-.3.1-.7.1-1 .1-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4A9 9 0 010 18.6 12.8 12.8 0 008 20"
      />
    </svg>
  );

  const LinkedInIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2a4 4 0 014-2zM2 9h4v12H2z" />
    </svg>
  );

  const InstagramIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8a4 4 0 100 8 4 4 0 000-8zM17 7h.01" />
    </svg>
  );

  const socialLinks = [
    {
      name: "Follow Us On X (Twitter)",
      handle: "@MarketFlue",
      url: "https://x.com/MarketFlue",
      icon: TwitterXIcon,
      color: "text-yellow-500",
    },
    {
      name: "Join Us On LinkedIn",
      handle: "MarketFlue",
      url: "https://www.linkedin.com/company/marketflue/",
      icon: LinkedInIcon,
      color: "text-yellow-600",
    },
    {
      name: "Follow On Instagram",
      handle: "@MarketFlue",
      url: "https://www.instagram.com/marketflue/",
      icon: InstagramIcon,
      color: "text-yellow-500",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50/50 p-4 sm:p-8 lg:p-12">
      <div className="max-w-6xl w-full bg-white shadow-2xl shadow-yellow-100 rounded-3xl p-8 md:p-14 border border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* Left Column */}
          <div className="flex-1 lg:pr-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
              Join <span style={{ color: "#f8b825" }}>MarketFlue</span>
            </h1>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700">
              Become a creative <span style={{ color: "#f8b825" }}>innovator</span> and leader.
            </h2>

            <p className="mt-8 text-gray-600 text-lg md:text-xl leading-relaxed">
              Unlock your potential by joining our vibrant community. We are looking for passionate individuals eager to collaborate, innovate, and make a significant impact.
              Grow your career and redefine creativity with us on global projects.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <a
                href="career"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 
               bg-gradient-to-r from-[#f8b825] to-[#facc15] 
               text-gray-900 font-semibold 
               shadow-lg shadow-yellow-300/40 
               hover:from-[#e6aa12] hover:to-[#f8b825] 
               transition transform hover:scale-[1.05] duration-300"
              >
                Apply Now
              </a>

              <a
                href="services"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 border-2 border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition"
              >
                Explore Opportunities
              </a>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-gray-200 h-auto self-stretch"></div>

          {/* Right Column */}
          <aside className="mt-12 lg:mt-0 w-full lg:w-96 flex-shrink-0">
            <div className="rounded-2xl border border-yellow-200 p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-lg shadow-yellow-200/60">
              <h3 className="text-xl font-bold text-gray-800 border-b pb-3 border-yellow-300">
                Connect & Collaborate
              </h3>
              <p className="mt-4 text-sm text-gray-600">
                Follow us on our social channels for updates, collaborations, and opportunities.
              </p>

              <ul className="mt-6 space-y-4">
                {socialLinks.map((link) => (
                  <li
                    key={link.name}
                    className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-white hover:border-yellow-300"
                  >
                    <div className="flex items-center gap-4">
                      <link.icon className={`h-7 w-7 ${link.color}`} strokeWidth="2.5" />
                      <div>
                        <p className="text-base font-semibold text-gray-800">{link.name}</p>
                        <p className="text-xs text-gray-500 break-words mt-0.5">{link.handle}</p>
                      </div>
                    </div>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-yellow-600 text-sm font-bold hover:text-yellow-700 transition flex-shrink-0"
                    >
                      Visit
                    </a>
                  </li>
                ))}
              </ul>

              <div id="contact" className="mt-8 pt-5 border-t border-yellow-300">
                <p className="text-sm text-gray-600 font-medium">
                  For direct queries or partnership proposals, email us at:
                </p>
                <a
                  href="mailto:info@marketflue.com"
                  className="block text-base font-bold text-yellow-700 hover:text-yellow-800 transition mt-1"
                >
                  info@marketflue.com
                </a>
              </div>
            </div>

            <p className="mt-6 text-xs text-gray-400 text-center lg:text-left">
              © {new Date().getFullYear()} MarketFlue — All rights reserved
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
