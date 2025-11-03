import React from "react";
import HeroBanner from "../components/HeroBanner";
import OurClients from "../components/OurClients";
import About from "./About";
import Services from "./Services";
import WorkProcess from "../components/WorkProcess";
import DigiContact from "../components/DigiContact";
import JoinAgency from "../components/JoinAgency";

import Testimonials from "../components/Testimonials";

import LatestNews from "../components/LatestNews";

// ✅ 1. 'openForm' prop को receive (प्राप्त) करें
export default function Home({ openForm }) {
  return (
    <div>
      {/* ✅ 2. 'openForm' prop को HeroBanner में पास करें */}
      <HeroBanner openForm={openForm} />

      <About />
      <Services openForm={openForm} />
      <WorkProcess />
      <OurClients />
      <JoinAgency />

      <Testimonials />

      <LatestNews />
      <DigiContact />
    </div>
  );
}