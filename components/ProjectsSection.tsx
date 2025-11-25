import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection: React.FC = () => {
  return (
    <SectionWrapper id="projects" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          My Projects 🚀
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore a collection of my latest web applications, AI tools, and creative generators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
            </div>
            
            <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-black font-medium transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub className="mr-2" /> Code
              </a>
              
              {project.liveUrl ? (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  aria-label={`View live demo of ${project.title}`}
                >
                  Live Demo <FaExternalLinkAlt className="ml-2 text-xs" />
                </a>
              ) : (
                <span className="text-gray-400 text-sm cursor-not-allowed flex items-center">
                  Live Demo N/A
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;