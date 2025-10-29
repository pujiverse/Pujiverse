import React from 'react';
import SectionWrapper from './SectionWrapper';
import { INSTAGRAM_LINK } from '../constants';
import { FaInstagram } from 'react-icons/fa6';

const InstagramSection: React.FC = () => {
  return (
    <SectionWrapper id="instagram" className="bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
        My Instagram 📸
      </h2>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
        Catch my latest visual stories, behind-the-scenes moments, and creative insights here.
        An embedded grid of recent Instagram posts will appear here. For now, click the button below to follow!
      </p>

      {/* Placeholder Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={`https://picsum.photos/400/400?random=${index + 2}`}
              alt={`Instagram post placeholder ${index + 1}`}
              className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4 text-sm text-gray-600">
              A glimpse into my world #{index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Follow Button */}
      <div className="text-center">
        <a
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-purple-600 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          <FaInstagram className="w-6 h-6 mr-3" />
          Follow on Instagram
        </a>
      </div>
    </SectionWrapper>
  );
};

export default InstagramSection;
