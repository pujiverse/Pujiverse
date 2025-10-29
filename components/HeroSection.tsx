import React from 'react';
import SectionWrapper from './SectionWrapper';
import SocialLinks from './SocialLinks';
import { SITE_NAME, TAGLINE, SHORT_BIO, PROFILE_IMAGE_URL, SOCIAL_LINKS } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <SectionWrapper id="home" className="text-center bg-gray-50 pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <img
          src={PROFILE_IMAGE_URL}
          alt={SITE_NAME}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white mb-6 transform transition-transform duration-500 hover:scale-110"
        />

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-3">
          {SITE_NAME}
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl font-medium">
          {TAGLINE}
        </p>

        {/* Short Bio */}
        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-3xl leading-relaxed">
          {SHORT_BIO}
        </p>

        {/* Social Media Buttons */}
        <SocialLinks links={SOCIAL_LINKS} className="mb-12" />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
