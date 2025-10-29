import React from 'react';
import SectionWrapper from './SectionWrapper';
import { TELEGRAM_CHANNEL_LINK, TELEGRAM_CHANNEL_DESCRIPTION } from '../constants';
import { FaTelegramPlane } from 'react-icons/fa';

const TelegramSection: React.FC = () => {
  return (
    <SectionWrapper id="telegram" className="bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
        My Telegram Channel 📢
      </h2>
      <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto leading-relaxed">
        {TELEGRAM_CHANNEL_DESCRIPTION}
      </p>

      {/* Placeholder for Telegram Widget */}
      <div className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center h-64 md:h-80 mb-10 border border-dashed border-gray-300">
        <p className="text-gray-500 text-center text-lg italic">
          Telegram channel widget will be embedded here.
        </p>
      </div>

      {/* Join Telegram Button */}
      <div className="text-center">
        <a
          href={TELEGRAM_CHANNEL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105"
        >
          <FaTelegramPlane className="w-6 h-6 mr-3" />
          Join My Telegram
        </a>
      </div>
    </SectionWrapper>
  );
};

export default TelegramSection;