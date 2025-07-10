import React from 'react';
import { motion } from 'framer-motion';
import { Users, Rocket, Code, Zap, Wrench, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

import SectionTitle from '../components/SectionTitle';

const Careers = () => {
  const positions = [
    {
      title: 'Flight Systems Engineer',
      division: 'Flight Systems',
      icon: <Rocket className="h-6 w-6 text-accent-500" />,
      description: 'Work on the design, development, and testing of UAV flight systems and control mechanisms.',
      responsibilities: [
        'Design and test flight control systems for various UAV platforms',
        'Develop and implement autonomous flight algorithms',
        'Conduct flight tests and analyze performance data',
        'Collaborate with mechanical and software teams'
      ],
      requirements: [
        'Knowledge of aerodynamics and flight mechanics',
        'Experience with control systems and PID tuning',
        'Familiarity with flight controllers (Pixhawk, Ardupilot, etc.)',
        'Strong problem-solving skills'
      ],
      applyLink: 'https://forms.gle/rprkJrkte37k7Lbb9'
    },
    {
      title: 'Software Developer',
      division: 'Software',
      icon: <Code className="h-6 w-6 text-accent-500" />,
      description: 'Develop software solutions for UAV control, telemetry, and autonomous operation.',
      responsibilities: [
        'Write code for onboard control systems and ground station interfaces',
        'Implement computer vision and machine learning algorithms',
        'Develop and maintain UAV simulation environments',
        'Optimize code for reliable real-time performance'
      ],
      requirements: [
        'Programming experience in Python, C++, or similar languages',
        'Knowledge of ROS, MAVLink, or similar frameworks',
        'Understanding of embedded systems programming',
        'Experience with version control systems like Git'
      ],
      applyLink: 'https://forms.gle/d83cFgtru2R3rjr86'
    },
    {
      title: 'Design And Fabrication Engineer',
      division: 'Design',
      icon: <Wrench className="h-6 w-6 text-accent-500" />,
      description: 'Design and build mechanical systems for UAVs and related aerospace equipment.',
      responsibilities: [
        'Create 3D models and technical drawings for UAV components',
        'Perform structural analysis and optimization',
        'Fabricate and assemble mechanical components',
        'Test and validate mechanical designs'
      ],
      requirements: [
        'Experience with CAD software (SolidWorks, Fusion 360, etc.)',
        'Understanding of manufacturing processes',
        'Knowledge of materials and their properties',
        'Hands-on fabrication skills'
      ],
      applyLink: 'https://forms.gle/ekyMEqoSsE6UPeu26'
    },
    {
      title: 'Corporate',
      division: 'Creatives',
      icon: <Zap className="h-6 w-6 text-accent-500" />,
      description: 'Conduct research in advanced aerospace technologies and publish findings.',
      responsibilities: [
        'Develop and manage partnerships, sponsorships, and collaborations with industry, academia, and government organizations',
        'Plan, execute, and oversee ASRL events, workshops, and recruitment drives.',
        'Coordinate logistics, budgets, procurement, and inventory for lab projects and activities.',
        'Manage ASRL’s official communications, media content, and public relations across digital and physical platforms.',
      ],
      requirements: [
        'Strong interest in operations management, project coordination, and organizational leadership.',
        'Ability to manage and coordinate multiple projects, teams, and events simultaneously.',
        'Good working knowledge of Microsoft Office/Google Workspace (Docs, Sheets, Slides).',
        'Familiarity with social media management, design tools (Canva/Photoshop), or branding strategies is a plus.',
      ],
      applyLink: 'https://forms.gle/3coxZcRoGxGanD6E8'
    }
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
            <p className="text-xl text-white/80">
              Discover opportunities to work at the forefront of aerospace innovation with ASRL.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-space-950">
        <div className="container-custom">
          <SectionTitle 
            title="Why Join ASRL?"
            subtitle="Be part of a dynamic student team pushing the boundaries of aerospace technology."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-space-900/40 backdrop-blur-sm p-6 rounded-lg border border-space-800"
            >
              <Users className="h-10 w-10 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Collaborative Environment</h3>
              <p className="text-white/70">
                Work alongside talented peers from diverse engineering disciplines, fostering a culture of innovation and knowledge sharing.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-space-900/40 backdrop-blur-sm p-6 rounded-lg border border-space-800"
            >
              <Rocket className="h-10 w-10 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Hands-on Experience</h3>
              <p className="text-white/70">
                Gain practical experience designing, building, and testing real aerospace systems that compete in national and international events.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-space-900/40 backdrop-blur-sm p-6 rounded-lg border border-space-800"
            >
              <PenTool className="h-10 w-10 text-accent-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Career Development</h3>
              <p className="text-white/70">
                Build a competitive portfolio, develop industry-relevant skills, and connect with leading aerospace companies and research institutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-space-900">
        <div className="container-custom">
          <SectionTitle 
            title="Open Positions"
            subtitle="Current opportunities to join our multidisciplinary student team."
          />
          
          <div className="space-y-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-space-800/40 backdrop-blur-sm p-6 rounded-lg border border-space-700"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="flex items-center mb-4">
                      {position.icon}
                      <span className="ml-2 text-accent-400 text-sm font-medium">{position.division}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{position.title}</h3>
                    <p className="text-white/70 mb-6">{position.description}</p>
                       <Link to={position.applyLink ?? '#'}>
                       <button className="btn-primary">Apply Now</button>
                       </Link>
                       </div>
                  
                  <div className="md:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {position.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-accent-500 mr-2">•</span>
                            <span className="text-white/70 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-accent-500 mr-2">•</span>
                            <span className="text-white/70 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-space-950">
        <div className="container-custom">
          <SectionTitle 
            title="Application Process"
            subtitle="How to join our team and what to expect during the selection process."
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process Timeline */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-500 hidden md:block"></div>
              
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-6 relative"
                >
                  <div className="md:w-16 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent-600 text-white flex items-center justify-center font-bold text-xl z-10">1</div>
                  </div>
                  <div className="flex-1 bg-space-900/40 backdrop-blur-sm p-6 rounded-lg border border-space-800">
                    <h3 className="text-xl font-bold mb-3">Submit Application</h3>
                    <p className="text-white/70">
                      Fill out our online application form with your contact information, academic background, relevant experience, and area of interest. Include links to your portfolio or projects if applicable.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-6 relative"
                >
                  <div className="md:w-16 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent-600 text-white flex items-center justify-center font-bold text-xl z-10">2</div>
                  </div>
                  <div className="flex-1 bg-space-900/40 backdrop-blur-sm p-6 rounded-lg border border-space-800">
                    <h3 className="text-xl font-bold mb-3">Interview</h3>
                    <p className="text-white/70">
                      Selected candidates will be invited for an interview with team leads and current members. This is an opportunity to showcase your skills, discuss your experience, and learn more about the team.
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-6 relative"
                >
                  <div className="md:w-16 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent-600 text-white flex items-center justify-center font-bold text-xl z-10">3</div>
                  </div>
                  <div className="flex-1 bg-space-900/40 backdrop-blur-sm p-6 rounded-lg border border-space-800">
                    <h3 className="text-xl font-bold mb-3">Onboarding</h3>
                    <p className="text-white/70">
                      Successful applicants will be welcomed to the team with an orientation session, introduction to current projects, and assignment to specific teams based on your skills and interests.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
             <a href="https://forms.gle/xUAyoAp6z42qdTxAA" target="_blank" rel="noopener noreferrer">
                    <button className="btn-primary">Apply For Multiple Roles</button>
              </a>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
