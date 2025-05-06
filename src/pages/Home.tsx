import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users, Zap, Target } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const stats = [
    { icon: <Clock className="h-6 w-6 text-accent-400" />, value: '5+', label: 'Years of Innovation' },
    { icon: <Target className="h-6 w-6 text-accent-400" />, value: '20+', label: 'Successful Projects' },
    { icon: <Users className="h-6 w-6 text-accent-400" />, value: '50+', label: 'Team Members' },
    { icon: <Target className="h-6 w-6 text-accent-400" />, value: '3+', label: 'Competition Wins' },
  ];

  const featuredProjects = [
    {
      name: 'Phoenix',
      year: '2024',
      description: 'Scientific multirotor for NARL with 5km range telemetry and advanced sensing capabilities.',
      isLatest: true,
    },
    {
      name: 'Osprey',
      year: '2022',
      description: 'Multirotor drone with robotic arm capabilities for precision operations.',
      achievement: '1st at World Robotics Championship',
    },
    {
      name: 'AlphaX',
      year: '2020',
      description: 'Autonomous UAV designed for the Essay Autonomous Design Challenge.',
      achievement: '1st Place',
    },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://raw.githubusercontent.com/ASRL-SRM/ASRL.in/main/src/images/background/AHFH_main%20_high_res.jpg')",
            height: '100vh'
          }}
        />
        <div className="absolute inset-0 bg-black/35 backdrop-blur"></div>

        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Aim High.<br />Fly Higher
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                Student-led aerospace innovation at the frontier of UAV technology, autonomous systems, and aerospace research.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary">
                  Explore Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/about" className="btn-outline">
                  Learn About Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block h-[600px] w-full"
            >
           <iframe src='https://my.spline.design/flyingquadcopter-1WV7LqyfkbayY2ncsmWhKA9P/' frameborder='0' width='150%' height='100%'></iframe> 
 


            </motion.div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white/70"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </motion.div>
          <span className="text-white/60 text-xs mt-2">Scroll Down</span>
        </button>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-20 bg-space-950">
        <div className="container-custom">
          <SectionTitle 
            title="About ASRL"
            subtitle="The Aerospace Systems Research Laboratory (ASRL) is a student-led team specializing in autonomous and manual unmanned aerial vehicles (UAVs), aerospace research, and aerospace systems."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/80 mb-4">
                ASRL is the result of the merger between two technical student teams: SRMUAV and SRMSCRO.
                Our mission is to tackle modern-day problems through cutting-edge aerospace innovation.
              </p>
              <p className="text-white/80 mb-6">
                From advanced UAV systems to high-altitude atmospheric studies, our interdisciplinary team works at the frontier of aerospace technology, contributing to both academic research and real-world solutions.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link to="/about" className="btn-outline">
                  More About Us
                </Link>
                <Link to="/team" className="text-accent-400 hover:text-accent-300 font-medium flex items-center">
                  Meet Our Team <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-space-900/60 backdrop-blur-sm p-6 rounded-lg border border-space-800">
                  <div className="mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-project-pattern bg-fixed bg-cover">
        <div className="container-custom">
          <SectionTitle 
            title="Featured Projects"
            subtitle="Explore our innovative UAV and aerospace systems designed and built by our student teams."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                name={project.name}
                year={project.year}
                description={project.description}
                achievement={project.achievement}
                isLatest={project.isLatest}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-primary">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-space-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-space-800/20 backdrop-blur-sm"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container-custom relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Reach New Heights?</h2>
            <p className="text-white/80 text-lg mb-10">
              Join our team of innovators, engineers, and aerospace enthusiasts as we push the boundaries of what's possible.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/careers" className="btn-primary">
                Join Our Team
                <Zap className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
