import React from 'react';
import { motion } from 'framer-motion';

interface SponsorCardProps {
  name: string;
  description: string;
  logoSrc: string;
  isRightAligned?: boolean;
}

const SponsorCard: React.FC<SponsorCardProps> = ({
  name,
  description,
  logoSrc,
  isRightAligned = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="sponsor-card"
    >
      <div className={`flex flex-col md:flex-row items-center ${isRightAligned ? 'md:flex-row-reverse' : ''} gap-6`}>
        <div className="w-40 h-24 bg-white rounded-lg p-2 flex items-center justify-center">
          <img 
            src={logoSrc} 
            alt={`${name} logo`} 
            className="max-w-full max-h-full object-contain"
          />
        </div>
        
        <div className={`flex-1 ${isRightAligned ? 'md:text-right' : ''}`}>
          <h3 className="font-bold text-lg mb-2">{name}</h3>
          <p className="text-white/80 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SponsorCard;