import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail,Instagram } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageSrc: string;
  linkedinUrl?: string;
  emailAddress?: string;
  instagramUrl?: string
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  imageSrc,
  linkedinUrl,
  emailAddress,
  instagramUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="team-card"
    >
      <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-accent-500">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="text-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-accent-400 text-sm">{role}</p>
        
        <div className="mt-4 flex justify-center space-x-3">
          {linkedinUrl && (
            <a 
              href={linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-accent-400 transition-colors"
              aria-label={`${name}'s LinkedIn`}
            >
              <Linkedin size={18} />
            </a>
          )}
          
          {emailAddress && (
            <a 
              href={`mailto:${emailAddress}`} 
              className="text-white/70 hover:text-accent-400 transition-colors"
              aria-label={`Email ${name}`}
            >
              <Mail size={18} />
            </a>
          )}
          {instagramUrl && (
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-accent-400 transition-colors"
              aria-label={`Email ${name}`}
            >
              <Instagram size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;