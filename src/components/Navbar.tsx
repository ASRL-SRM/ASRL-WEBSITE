import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Careers', path: '/careers' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-space-950/90 backdrop-blur-md py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img src="/ASRL white.png" alt="ASRL Logo" className="h-8" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink 
              to="/careers" 
              className="btn-primary ml-3 text-sm py-2"
            >
              Join Us
            </NavLink>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-space-900 border-t border-space-800 mt-3"
        >
          <div className="container-custom py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  isActive ? 'nav-link nav-link-active' : 'nav-link'
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink 
              to="/careers" 
              className="btn-primary mt-2 text-center"
            >
              Join Us
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;