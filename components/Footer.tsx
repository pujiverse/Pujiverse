import React from 'react';
import { NavLink } from 'react-router-dom';
import { HEADER_NAV_LINKS, SOCIAL_LINKS, SITE_NAME } from '../constants';
import SocialLinks from './SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Copyright & Attribution */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4">{SITE_NAME}</h3>
          <p className="text-gray-400 mb-2">
            Copyright &copy; {currentYear} {SITE_NAME}
          </p>
          <p className="text-gray-400">
            Made with <span className="text-red-500">❤️</span> using Google AI Studio
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {HEADER_NAV_LINKS.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Handles */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4">Follow Me</h3>
          <SocialLinks links={SOCIAL_LINKS} className="justify-center md:justify-start" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
