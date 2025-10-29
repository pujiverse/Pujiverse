import React from 'react';
import SectionWrapper from './SectionWrapper';
import { LINKEDIN_PROFILE_LINK, LINKEDIN_SUMMARY } from '../constants';
import { FaLinkedinIn } from 'react-icons/fa6';

const LinkedInSection: React.FC = () => {
  return (
    <SectionWrapper id="linkedin" className="bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
        My LinkedIn Profile 💼
      </h2>
      <div className="bg-white rounded-lg shadow-md p-8 mb-10 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Professional Summary</h3>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {LINKEDIN_SUMMARY}
        </p>
        <p className="text-gray-600 mt-6 italic">
          Optional embedded posts will appear here if API integration is available.
        </p>
      </div>

      {/* Link to LinkedIn Profile */}
      <div className="text-center">
        <a
          href={LINKEDIN_PROFILE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-blue-700 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
        >
          <FaLinkedinIn className="w-6 h-6 mr-3" />
          Connect on LinkedIn
        </a>
      </div>
    </SectionWrapper>
  );
};

export default LinkedInSection;
