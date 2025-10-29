import React from 'react';
import { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links, className = '' }) => {
  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 shadow-lg"
          aria-label={link.name}
        >
          <link.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
