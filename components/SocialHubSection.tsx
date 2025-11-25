import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SOCIAL_CATEGORIES } from '../constants';

const SocialHubSection: React.FC = () => {
  return (
    <SectionWrapper id="socials" className="bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          The Pujiverse Hub 🌐
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect with me across the digital universe. From tech channels and creative vlogs to professional networks and social feeds.
        </p>
      </div>

      <div className="space-y-16">
        {SOCIAL_CATEGORIES.map((category, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 border-b pb-4 inline-block">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {category.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 rounded-xl bg-gray-50 hover:bg-blue-50 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="mb-3 p-3 bg-white rounded-full shadow-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                    <link.icon className="h-8 w-8" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 text-center group-hover:text-blue-800">
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