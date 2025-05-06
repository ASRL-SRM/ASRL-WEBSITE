import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  return (
    <footer className="bg-space-950 border-t border-space-800 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-accent-500" />
              <span className="ml-2 text-xl font-bold tracking-tight">ASRL</span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Aerospace Systems Research Laboratory specializes in developing unmanned aerial vehicles (UAVs),
              autonomous missiles, and advanced aerospace systems.
            </p>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.instagram.com/asrl_srm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/srm-asrl/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:asrlsrm2@gmail.com" 
                className="text-white/70 hover:text-accent-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/70 hover:text-accent-400 transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-accent-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/projects" className="text-white/70 hover:text-accent-400 transition-colors text-sm">Projects</Link></li>
              <li><Link to="/team" className="text-white/70 hover:text-accent-400 transition-colors text-sm">Our Team</Link></li>
              <li><Link to="/sponsors" className="text-white/70 hover:text-accent-400 transition-colors text-sm">Sponsors</Link></li>
              <li><Link to="/careers" className="text-white/70 hover:text-accent-400 transition-colors text-sm">Join Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent-500 mr-3 mt-0.5" />
                <span className="text-white/70 text-sm">SRM Institute of Science and Technology, Kattankulathur, Chennai, Tamil Nadu 603203</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent-500 mr-3" />
                <a href="mailto:asrlsrm2@gmail.com" className="text-white/70 hover:text-accent-400 transition-colors text-sm">
                  asrlsrm2@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-white/70 mb-4">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-space-800 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Aerospace Systems Research Laboratory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;