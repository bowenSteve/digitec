import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectTile = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(project);
    } else {
      // Default behavior: navigate to project detail page
      navigate(`/projects/${project.slug}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`project-tile bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg transition-all duration-300 ${
        isHovered ? 'transform scale-105 shadow-2xl' : ''
      }`}
      style={{
        width: '280px',
        height: '380px',
        position: 'relative'
      }}
    >
      {/* Project Image */}
      <div className="relative h-[180px] overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-3 left-3 right-3">
            <button className="w-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors">
              View Details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.services?.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.services?.length > 3 && (
            <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">
              +{project.services.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Pulse Animation on Hover */}
      {isHovered && (
        <div className="absolute inset-0 rounded-xl border-2 border-red-500 animate-pulse pointer-events-none"></div>
      )}
    </div>
  );
};

export default ProjectTile;
