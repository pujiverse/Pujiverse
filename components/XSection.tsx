import React from 'react';
import SectionWrapper from './SectionWrapper';
import { X_PROFILE_LINK } from '../constants';
import { FaXTwitter } from 'react-icons/fa6';

const XSection: React.FC = () => {
  return (
    <SectionWrapper id="x" className="bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
        My X (Twitter) Feed 🐦
      </h2>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
        Stay updated with my thoughts, quick insights, and real-time discussions on X.
        An embedded feed of my latest tweets will appear here. Follow me to join the conversation!
      </p>

      {/* Placeholder for X (Twitter) Feed */}
      <div className="bg-gray-100 rounded-lg shadow-md p-8 flex items-center justify-center h-96 mb-10 border border-dashed border-gray-300">
        <p className="text-gray-500 text-center text-lg italic">
          X (Twitter) feed content will be embedded here.
        </p>
      </div>

      {/* Follow on X Button */}
      <div className="text-center">
        <a
          href={X_PROFILE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gray-800 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
        >
          <FaXTwitter className="w-6 h-6 mr-3" />
          Follow on X
        </a>
      </div>
    </SectionWrapper>
  );
};

export default XSection;
