import React from 'react';
import SectionWrapper from './SectionWrapper';
import { YOUTUBE_FEATURED_VIDEOS, YOUTUBE_CHANNEL_LINK } from '../constants';

const YouTubeSection: React.FC = () => {
  return (
    <SectionWrapper id="youtube" className="bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
        My YouTube Channel 🎥
      </h2>

      {/* Featured Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {YOUTUBE_FEATURED_VIDEOS.map((video) => (
          <div key={video.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Subscribe Button */}
      <div className="text-center">
        <a
          href={`${YOUTUBE_CHANNEL_LINK}?sub_confirmation=1`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-red-600 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
        >
          <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.33 13.92c-.14.28-.42.48-.75.48h-7.16c-.33 0-.61-.2-.75-.48-.14-.28-.14-.62 0-.9L11.5 8.91c.14-.28.42-.48.75-.48s.61.2.75.48l3.16 6.01c.14.28.14.62 0 .9zM12 9.77L9.82 14.1H14.1L12 9.77z"/>
          </svg>
          Subscribe to My Channel
        </a>
      </div>
    </SectionWrapper>
  );
};

export default YouTubeSection;
