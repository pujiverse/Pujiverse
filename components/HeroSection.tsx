import React from 'react';
import { NavLink } from 'react-router-dom';
import SectionWrapper from './SectionWrapper';
import SocialLinks from './SocialLinks';
import { SITE_NAME, TAGLINE, SHORT_BIO, PROFILE_IMAGE_URL, SOCIAL_LINKS } from '../constants';
import { FaEnvelope } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <SectionWrapper id="home" className="text-center pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={PROFILE_IMAGE_URL}
            alt={SITE_NAME}
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl border-4 border-gray-900 transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-gray-200 leading-tight mb-3 drop-shadow-md">
          {SITE_NAME}
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-2xl font-medium tracking-wide">
          {TAGLINE}
        </p>

        {/* Short Bio */}
        <p className="text-base md:text-lg text-gray-300 mb-10 max-w-3xl leading-relaxed">
          {SHORT_BIO}
        </p>

        {/* Social Media Buttons */}
        <SocialLinks links={SOCIAL_LINKS} className="mb-10" />

        {/* Contact Me CTA */}
        <div className="animate-fade-in-up">
          <NavLink
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-lg font-semibold rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] hover:scale-105 transition-all duration-300 border border-cyan-400/30"
          >
            <FaEnvelope className="mr-2" />
            Contact Me
          </NavLink>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;