import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HEADER_NAV_LINKS, SITE_NAME, CONTACT_EMAIL } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for mobile menu

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Site Name / Logo */}
        <NavLink to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
          {SITE_NAME}
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {HEADER_NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-600 hover:text-blue-600 font-medium transition-colors ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6 animate-fade-in">
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2"
            aria-label="Close navigation menu"
          >
            <FaTimes className="h-8 w-8" />
          </button>
          {HEADER_NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `text-3xl font-semibold text-gray-800 hover:text-blue-600 transition-colors ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}

      {/* Floating "Contact Me" Button */}
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 z-50 text-lg font-semibold"
        aria-label="Contact me via email"
      >
        Contact Me
      </a>
    </header>
  );
};

export default Header;
