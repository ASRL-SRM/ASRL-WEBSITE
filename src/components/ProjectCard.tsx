import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  year: string;
  description: string;
  achievement?: string;
  imageSrc?: string;
  isLatest?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  year,
  description,
  achievement,
  imageSrc,
  isLatest = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mission-patch p-6"
    >
      {isLatest && (
        <div className="absolute top-3 right-3 bg-success-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          Latest
        </div>
      )}
      
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-accent-400 text-sm font-medium">{year}</p>
        </div>
        
        {imageSrc && (
          <div className="h-16 w-16 bg-space-700/50 rounded-full overflow-hidden flex items-center justify-center">
            <img src={imageSrc} alt={name} className="h-full w-full object-cover" />
          </div>
        )}
      </div>
      
      <p className="mt-4 text-white/80 text-sm">{description}</p>
      
      {achievement && (
        <div className="mt-4 inline-block bg-space-800 text-accent-300 text-xs font-medium px-2.5 py-1 rounded">
          🏆 {achievement}
        </div>
      )}
      
      <div className="mt-5 flex justify-between items-center">
        <button className="text-accent-400 hover:text-accent-300 text-sm font-medium flex items-center transition-colors">
          Learn more <ArrowUpRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;