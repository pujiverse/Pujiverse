import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SOCIAL_CATEGORIES } from '../constants';

const SocialHubSection: React.FC = () => {
  return (
    <SectionWrapper id="socials">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          The Pujiverse Hub 🌐
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Connect with me across the digital universe. From tech channels and creative vlogs to professional networks and social feeds.
        </p>
      </div>

      <div className="space-y-16">
        {SOCIAL_CATEGORIES.map((category, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-cyan-100 mb-8 border-b border-white/20 pb-4 inline-block">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {category.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] border border-transparent hover:border-cyan-500/30 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="mb-3 p-3 bg-white/10 rounded-full shadow-inner text-gray-300 group-hover:text-cyan-400 transition-colors">
                    <link.icon className="h-8 w-8" />
                  </div>
                  <span className="text-sm font-semibold text-gray-300 text-center group-hover:text-white">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SocialHubSection;