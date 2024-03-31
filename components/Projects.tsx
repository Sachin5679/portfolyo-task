"use client"
import React, { useState } from 'react';

interface Project {
  id: number;
  name: string;
  description: string;
}

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const toggleModal = (project: Project) => {
    setCurrentProject(project);
    setShowModal(!showModal);
  };

  const projects: Project[] = [
    { id: 1, name: 'Project 1', description: 'Description of Project 1' },
    { id: 2, name: 'Project 2', description: 'Description of Project 2' },
    { id: 3, name: 'Project 3', description: 'Description of Project 3' },
  ];

  return (
    <section className="text-center mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
      {/* Render each project with its own button */}
      {projects.map((project) => (
        <div key={project.id} className="mb-4">
          <p>{project.name}</p>
          <button
            onClick={() => toggleModal(project)}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-2 hover:bg-blue-600"
          >
            View Project
          </button>
        </div>
      ))}
      {/* Modal for each project */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-75" onClick={() => setShowModal(false)}></div>
          <div className="bg-white p-8 rounded-lg z-50">
            {/* Detailed overview of current project */}
            {currentProject && (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{currentProject.name}</h3>
                <p className="text-gray-700">{currentProject.description}</p>
              </>
            )}
            <button onClick={() => setShowModal(false)} className="absolute top-0 right-0 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
