import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/OurServices";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Career from "./pages/Career";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import ConsultationForm from "./components/ConsultationForm";
import Footer from "./components/Footer";

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <Router>
      <Navbar openForm={openForm} />

      <Routes>
        <Route path="/" element={<Home openForm={openForm} />} />
        <Route path="/about-us" element={<Aboutus openForm={openForm} />} />
        <Route path="/services" element={<Services openForm={openForm} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>

      {/* ✅ Global Consultation Form — controlled from any page */}
    <ConsultationForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />


      <Footer />
    </Router>
  );
}
