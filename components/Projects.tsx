"use client"
import useUserData from '@/hooks/useUserData';
import React, { useState } from 'react';

interface Project {
  _id: string;
  title: string;
  description: string;
  liveurl: string;
  githuburl: string;
  image: {
    public_id: string;
    url: string;
  };
  techStack: string[];
}

const Projects = () => {
  const { userData }= useUserData();
  const projects: Project[] = userData ? userData.projects : []
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const toggleModal = (project: Project) => {
    setCurrentProject(project);
    setShowModal(!showModal);
  };

  return (
    <section className="text-center mt-12">
      <h2 className="text-7xl font-bold text-blue-700 mb-4">PROJECTS</h2>
      <div className='grid grid-cols-2 gap-4'>
  {projects.map((project: Project) => (
    <div key={project._id} className="m-4 border-gray-100 shadow-2xl relative group">
      <div className="relative">
        <img className='transition-opacity duration-300 group-hover:opacity-50' src={project.image.url} alt="" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div>
            <h1 className='font-bold text-2xl mb-2'>{project.title}</h1>
            <p className="text-sm">{project.techStack.join(', ')}</p>
          </div>
          <div className="flex justify-between z-10">
            <button
              onClick={() => toggleModal(project)}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600"
            >
              View Project
            </button>
            <div className="flex space-x-2">
              <a href={project.githuburl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">GitHub</a>
              <a href={project.liveurl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Live</a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>
    </div>
  ))}
</div>




      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-75" onClick={() => setShowModal(false)}></div>
          <div className="bg-white p-8 rounded-lg z-50">
            
            {currentProject && (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{currentProject.title}</h3>
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
