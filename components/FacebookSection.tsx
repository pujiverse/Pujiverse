import React from 'react';
import SectionWrapper from './SectionWrapper';
import { FACEBOOK_PAGE_LINK } from '../constants';
import { FaFacebookF } from 'react-icons/fa6';

const FacebookSection: React.FC = () => {
  return (
    <SectionWrapper id="facebook" className="bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
        My Facebook Page 💬
      </h2>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
        Connect with me on Facebook for community updates, discussions, and event announcements.
        An embedded Facebook Page plugin or post feed will appear here. In the meantime,
        engage with my page directly!
      </p>

      {/* Placeholder for Facebook Page Plugin */}
      <div className="bg-gray-100 rounded-lg shadow-md p-8 flex items-center justify-center h-64 md:h-80 mb-10 border border-dashed border-gray-300">
        <p className="text-gray-500 text-center text-lg italic">
          Facebook Page content will be embedded here.
        </p>
      </div>

      {/* Like and Follow Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href={FACEBOOK_PAGE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-blue-700 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
        >
          <FaFacebookF className="w-6 h-6 mr-3" />
          Like Page
        </a>
        <a
          href={FACEBOOK_PAGE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          <FaFacebookF className="w-6 h-6 mr-3" />
          Follow Page
        </a>
      </div>
    </SectionWrapper>
  );
};

export default FacebookSection;
