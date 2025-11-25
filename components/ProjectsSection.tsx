import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          My Projects 🚀
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore a collection of my latest web applications, AI tools, and creative generators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col bg-white/5 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 overflow-hidden border border-white/10"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
            </div>
            
            <div className="px-6 py-4 bg-black/20 border-t border-white/10 flex justify-between items-center">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white font-medium transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <FaGithub className="mr-2" /> Code
              </a>
              
              {project.liveUrl ? (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  aria-label={`View live demo of ${project.title}`}
                >
                  Live Demo <FaExternalLinkAlt className="ml-2 text-xs" />
                </a>
              ) : (
                <span className="text-gray-500 text-sm cursor-not-allowed flex items-center">
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