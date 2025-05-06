import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';

import SectionTitle from '../components/SectionTitle';
import TimelineEvent from '../components/TimelineEvent';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const timelineData = [
    {
      year: '2024',
      projects: [
        {
          name: 'Arrow',
          description: 'Fixed-wing UAV designed for NITTE UAV competition with enhanced stability and range.'
        },
        {
          name: 'Zeus',
          description: 'High-performance multirotor developed for precise aerial operations and payload delivery.'
        },
        {
          name: 'Phoenix',
          description: 'Scientific multirotor for NARL with 5km range telemetry and advanced data collection capabilities.'
        },
        {
          name: 'Cabby',
          description: 'Innovative hybrid VTOL craft capable of both vertical takeoff and efficient horizontal flight.'
        }
      ]
    },
    {
      year: '2023',
      projects: [
        {
          name: 'Bumblebee',
          description: 'Compact and fast fixed-wing drone optimized for speed and maneuverability.'
        },
        {
          name: 'Spreading Wings S900',
          description: 'Demonstration multirotor platform for testing advanced control systems.'
        },
        {
          name: 'Terra',
          description: 'UGV (Unmanned Ground Vehicle) with 3D LiDAR & ultrasonic smart sensing technology.'
        },
        {
          name: 'Ceres',
          description: 'Specialized UAV designed for 2 kg emergency payload delivery with extended range.'
        }
      ]
    },
    {
      year: '2022',
      projects: [
        {
          name: 'Osprey',
          description: 'Multirotor drone equipped with robotic arm for precision operations and object manipulation.',
          achievement: 'World Robotics Championship (Tech 2022)'
        },
        {
          name: 'Marlin',
          description: '3D aerobatics-capable stunt fixed-wing aircraft with advanced flight control systems.',
          achievement: 'Featured at WRC 2022'
        }
      ]
    },
    {
      year: '2021',
      projects: [
        {
          name: 'Light Fury 1.95',
          description: 'Lightweight, performance-tuned fixed-wing UAV optimized for extended flight duration.'
        }
      ]
    },
    {
      year: '2020',
      projects: [
        {
          name: 'AlphaX',
          description: 'Autonomous UAV specially designed for the Essay Autonomous Design Challenge.',
          achievement: '1st Place'
        }
      ]
    },
    {
      year: '2019',
      projects: [
        {
          name: 'Orca',
          description: 'Fixed-wing aircraft developed for SUAS competition with advanced autonomous capabilities.',
          achievement: '1st in Design Category'
        }
      ]
    }
  ];
  
  const ongoingProjects = [
    {
      name: 'Cargo Max',
      description: 'Terrain-monitoring multirotor with 1kg payload capacity for extended surveillance operations.',
      year: '2024',
      isLatest: true,
    },
    {
      name: 'Nether',
      description: 'High-speed fixed-wing UAV capable of 80 km/h cruise velocity for rapid deployment scenarios.',
      year: '2024',
      isLatest: true,
    },
    {
      name: 'Horizon',
      description: 'Long-range fixed-wing designed for endurance and stability research with advanced power management.',
      year: '2024',
      isLatest: true,
    },
    {
      name: 'Tri-Copter Drone',
      description: 'Experimental three-rotor aerial system exploring novel flight dynamics and control mechanisms.',
      year: '2024 (Under Development)',
      isLatest: true,
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-project-pattern bg-cover bg-fixed pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-white/80">
              Explore our innovative UAVs, aerospace systems, and groundbreaking research from 2019 to present.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-20 bg-space-950">
        <div className="container-custom">
          <SectionTitle 
            title="Ongoing Projects"
            subtitle="Our latest research and development efforts pushing the boundaries of aerospace technology."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ongoingProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                name={project.name}
                year={project.year}
                description={project.description}
                isLatest={project.isLatest}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-20 bg-space-900">
        <div className="container-custom">
          <div className="flex flex-wrap justify-between items-center mb-12">
            <SectionTitle 
              title="Project Timeline"
              subtitle="Our journey of innovation and achievement from 2019 to the present day."
            />
            
            <div className="flex items-center mt-6 lg:mt-0 bg-space-800/60 rounded-lg p-2">
              <Filter className="h-5 w-5 text-accent-400 mr-2" />
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-transparent text-white border-none focus:outline-none text-sm"
              >
                <option value="all" className="bg-space-900">All Years</option>
                <option value="2024" className="bg-space-900">2024</option>
                <option value="2023" className="bg-space-900">2023</option>
                <option value="2022" className="bg-space-900">2022</option>
                <option value="2021" className="bg-space-900">2021</option>
                <option value="2020" className="bg-space-900">2020</option>
                <option value="2019" className="bg-space-900">2019</option>
              </select>
            </div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-space-800 hidden md:block"></div>
            
            {/* Timeline Events */}
            <div className="space-y-10 md:ml-6">
              {timelineData
                .filter(data => filter === 'all' || data.year === filter)
                .map((yearData, index) => (
                  <TimelineEvent 
                    key={index}
                    year={yearData.year}
                    projects={yearData.projects}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;