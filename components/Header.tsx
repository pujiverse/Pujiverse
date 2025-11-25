import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HEADER_NAV_LINKS, SITE_NAME } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Site Name / Logo */}
        <NavLink to="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors drop-shadow-lg">
          {SITE_NAME}
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {HEADER_NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-300 hover:text-cyan-400 font-medium transition-colors ${
                  isActive ? 'text-cyan-400' : ''
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
            className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md p-2"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-6 animate-fade-in">
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 text-gray-400 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md p-2"
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
                `text-3xl font-semibold text-gray-200 hover:text-cyan-400 transition-colors ${
                  isActive ? 'text-cyan-400' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;