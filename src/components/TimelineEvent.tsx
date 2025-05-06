import React from 'react';
import { motion } from 'framer-motion';

interface TimelineEventProps {
  year: string;
  projects: {
    name: string;
    description: string;
    achievement?: string;
  }[];
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ year, projects }) => {
  return (
    <div className="timeline-item">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-accent-400 mb-4">{year}</h3>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border-l-2 border-space-700 pl-4 ml-2">
              <h4 className="text-lg font-semibold">{project.name}</h4>
              <p className="mt-1 text-white/70 text-sm">{project.description}</p>
              {project.achievement && (
                <div className="mt-2 inline-block bg-space-800 text-accent-300 text-xs font-medium px-2 py-1 rounded">
                  🏆 {project.achievement}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineEvent;