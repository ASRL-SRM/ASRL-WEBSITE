import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Instagram, Linkedin } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-about-pattern bg-cover bg-center pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-white/80">
              Get in touch with our team for inquiries, collaborations, or sponsorship opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-space-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle title="Reach Us" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="flex items-start">
                  <div className="bg-space-800 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                    <p className="text-white/70">
                      ASRL LAB, BEL - 601,5th Floor
                      Basic Engineering Lab
                      SRM Institute of Science and Technology<br />
                      Kattankulathur, Chennai<br />
                      Tamil Nadu 603203, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-space-800 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                    <p className="text-white/70">
                      <a href="mailto:contact@asrl.com" className="hover:text-accent-400 transition-colors">
                       teamsrmasrl@gmail.com
                                OR
                        asrlsrm2@gmail.com
                      </a>
                    </p>
                    <p className="text-white/70">
                      <a href="mailto:sponsorship@asrl.com" className="hover:text-accent-400 transition-colors">
                        sponsorship@asrl.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-space-800 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                    <p className="text-white/70">
                      <a href="tel:+911234567890" className="hover:text-accent-400 transition-colors">
                        Soon to be added
                      </a>
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/asrl_srm/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-space-800 p-3 rounded-lg text-white/70 hover:text-accent-400 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/srm-asrl/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-space-800 p-3 rounded-lg text-white/70 hover:text-accent-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div>
              <SectionTitle title="Send Us a Message" />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-space-900">
        <div className="container-custom">
          <div className="bg-space-800/40 backdrop-blur-sm p-4 rounded-lg border border-space-700 h-[400px] overflow-hidden">
            <iframe 
              title="ASRL Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0903252239314!2d80.04120977483294!3d12.823081787455302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944ba83a4c74e!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1694188912360!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;