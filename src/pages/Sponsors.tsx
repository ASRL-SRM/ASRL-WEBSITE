import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import SponsorCard from '../components/SponsorCard';
import SponsorshipForm from '../components/SponsorshipForm';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'Dassault Systemes',
      description: 'Pioneers in defense and embedded systems, Dassault Systemes provides cutting-edge technology solutions for mission-critical aerospace and military applications.',
      logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Dassault_Syst%C3%A8mes_logo.svg',
    },
    {
      name: 'Altium',
      description: 'Industry-leading PCB design software empowering engineers with intuitive tools for schematic capture, layout, and real-time collaboration.',
      logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Altium_Logo.png',
    },
    {
      name: 'ANSYS',
      description: 'A global leader in engineering simulation, ANSYS enables high-fidelity modeling of real-world performance for structures, fluids, and electronics.',
      logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Ansys_logo.png',
    },
    {
      name: 'MathWorks',
      description: 'Creators of MATLAB and Simulink, MathWorks supports advanced modeling, simulation, and algorithm development for research and engineering.',
      logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png',
    },
    {
      name: 'SRM Institute of Science and Technology',
      description: 'Our academic partner, SRMIST fosters innovation, interdisciplinary research, and world-class engineering education.',
      logoSrc: 'https://upload.wikimedia.org/wikipedia/en/0/03/SRMIST_Logo.png',
    },
    {
      name: 'TP-Link',
      description: 'TP-Link offers reliable network solutions powering our ground control and telemetry systems with high-speed, stable data links.',
      logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/83/TP-Link_logo.svg',
    },
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Sponsors</h1>
            <p className="text-xl text-white/80">
              The industry and academic partners who support our aerospace research and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 bg-space-950">
        <div className="container-custom">
          <SectionTitle 
            title="Collaborators & Supporters"
            subtitle="Our work and research is made possible through the generous support and collaboration of these organizations."
          />
          
          <div className="space-y-8">
            {sponsors.map((sponsor, index) => (
              <SponsorCard 
                key={index}
                name={sponsor.name}
                description={sponsor.description}
                logoSrc={sponsor.logoSrc}
                isRightAligned={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Form */}
      <section className="py-20 bg-space-900">
        <div className="container-custom">
          <SectionTitle 
            title="Become a Sponsor"
            subtitle="Partner with ASRL to support the next generation of aerospace engineers and researchers."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Sponsorship Benefits:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">✓</span>
                  <span className="text-white/80">Brand visibility on our projects, website, and at competitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">✓</span>
                  <span className="text-white/80">Early access to research findings and technological innovations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">✓</span>
                  <span className="text-white/80">Recruitment opportunities and connection to talented students</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-3">✓</span>
                  <span className="text-white/80">Collaborative research and development possibilities</span>
                </li>
              </ul>
            </div>
            
            <SponsorshipForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;