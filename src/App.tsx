import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react"

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Sponsors from './pages/Sponsors';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Faq from './pages/Faq';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="bg-space-900 text-white min-h-screen overflow-x-hidden font-roboto">
        <Navbar />
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
      <Analytics />
    </Router>
  );
}

export default App;