import React, { useState } from 'react';
import { projectData } from '../data/projects';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projectData[0]);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-lg text-gray-400 mt-2">Hover over to view project details.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <ul id="project-list" className="flex flex-col space-y-2 max-h-[500px] overflow-y-auto pr-4">
            {projectData.map((project, index) => (
              <li
                key={project.id}
                className={`project-list-item text-2xl md:text-3xl font-bold p-4 border-l-4 ${activeProject.id === project.id ? 'active' : ''}`}
                style={{ borderColor: activeProject.id === project.id ? 'var(--accent)' : 'transparent' }}
                onMouseEnter={() => setActiveProject(project)}
              >
                {String(index + 1).padStart(2, '0')}. {project.shortTitle}
              </li>
            ))}
          </ul>
          
          <div id="project-preview" className="sticky top-28 h-[500px]">
            {activeProject && (
              <div id="project-preview-content" className="opacity-100">
                <img src={activeProject.image} alt={`Pratinjau ${activeProject.title}`} className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg" />
                <h3 className="text-2xl font-bold mb-2">{activeProject.title}</h3>
                <p className="text-gray-400 mb-4">{activeProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.stack.map(tech => (
                    <span key={tech} className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                    <Link to={`/project/${activeProject.slug}`} className="font-semibold text-accent hover:underline">
                      See Details &rarr;
                    </Link>           
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;