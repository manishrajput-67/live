import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='Projects' className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-8">Projects</h1>
      <div className="flex flex-wrap gap-5">
        <ProjectCard
          title="Portfolio Website"
          main="This is a portfolio website created using React.js."
          
        />
        <ProjectCard
          title="Background Changer Website"
          main="This is a background changer website built with React.js."
        />
           <ProjectCard
          title="Loan Amount Website"
          main="This is a Loan Amount  website built with React.js."
        />

      
      </div>
    </div>
  );
};

export default Projects;
