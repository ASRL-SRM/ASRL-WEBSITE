import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Users, Wrench, Code, Rocket, Layers, FlaskConical } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import TeamMemberCard from '../components/TeamMemberCard';

const Team = () => {
  const [division, setDivision] = useState('all');
  
  const divisions = [
    { id: 'all', name: 'All Teams', icon: <Users className="h-5 w-5" /> },
    { id: 'flight', name: 'Flight Systems', icon: <Rocket className="h-5 w-5" /> },
    { id: 'propulsion', name: 'Propulsion', icon: <Wrench className="h-5 w-5" /> },
    { id: 'software', name: 'Software', icon: <Code className="h-5 w-5" /> },
    { id: 'design', name: 'Design', icon: <Layers className="h-5 w-5" /> },
    { id: 'research', name: 'Research', icon: <FlaskConical className="h-5 w-5" /> },
  ];
  
  // Sample team members data
  const teamMembers = [
    {
      name: 'Aditya Sharma',
      role: 'Team Lead',
      division: 'leadership',
      imageSrc: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedinUrl: 'https://www.linkedin.com/',
      emailAddress: 'aditya@asrl.com',
    },
    {
      name: 'Priya Patel',
      role: 'Flight Systems Lead',
      division: 'flight',
      imageSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedinUrl: 'https://www.linkedin.com/',
      emailAddress: 'priya@asrl.com',
    },
    {
      name: 'Raj Mehta',
      role: 'Propulsion Engineer',
      division: 'propulsion',
      imageSrc: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedinUrl: 'https://www.linkedin.com/',
      emailAddress: 'raj@asrl.com',
    },
    {
      name: 'Ananya Singh',
      role: 'Software Lead',
      division: 'software',
      imageSrc: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedinUrl: 'https://www.linkedin.com/',
      emailAddress: 'ananya@asrl.com',
    },
    {
      name: 'Vikram Reddy',
      role: 'Design Engineer',
      division: 'design',
      imageSrc: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedinUrl: 'https://www.linkedin.com/',
      emailAddress: 'vikram@asrl.com',
    },
    {
      name: 'Neha Gupta',
      role: 'Research Lead',
      division: 'research',
      imageSrc: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedinUrl: 'https://www.linkedin.com/',
      emailAddress: 'neha@asrl.com',
    },
    {
      name: 'Arjun Kumar',
      role: 'Flight Systems Engineer',
      division: 'flight',
      imageSrc: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedinUrl: 'https://www.linkedin.com/',
      emailAddress: 'arjun@asrl.com',
    },
    {
      name: 'Sanjay Verma',
      role: 'Software Developer',
      division: 'software',
      imageSrc: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
      linkedinUrl: 'https://www.linkedin.com/',
      emailAddress: 'sanjay@asrl.com',
    },
  ];
  
  const filteredMembers = division === 'all' 
    ? teamMembers
    : teamMembers.filter(member => member.division === division);
  
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h1>
            <p className="text-xl text-white/80">
              Meet the talented members behind ASRL's innovative aerospace projects and research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-space-950">
        <div className="container-custom">
          <SectionTitle 
            title="Meet Our Team"
            subtitle="Our multidisciplinary team brings together engineering, computer science, electronics, and design expertise."
          />
          
          {/* Division Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {divisions.map((div) => (
              <button
                key={div.id}
                onClick={() => setDivision(div.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  division === div.id 
                    ? 'bg-accent-500 text-white' 
                    : 'bg-space-800 text-white/70 hover:bg-space-700'
                }`}
              >
                <span className="mr-2">{div.icon}</span>
                {div.name}
              </button>
            ))}
          </div>
          
          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                linkedinUrl={member.linkedinUrl}
                emailAddress={member.emailAddress}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 bg-space-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-space-800/50 backdrop-blur-sm rounded-lg p-8 border border-space-700 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for passionate students to join our multidisciplinary team. Whether you're interested in aerospace engineering, computer science, electronics, or design, there's a place for you at ASRL.
            </p>
            <a href="/careers" className="btn-primary">
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;