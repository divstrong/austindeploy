import React, { useState } from 'react';

function ProjectsPage() {
  const [projects] = useState([
    {
      id: 1,
      title: "EAR WORM",
      description: "Find lyrics through a web application using multiple server API's & to find the song that you can't figure out.",
      link: "https://github.com/AustinMcClarren/ear-worm-lyrics"
    },
    {
      id: 2,
      title: "FLORIDA NOMADS ",
      description: "As a traveler, i want to visit florida to experience its unique range of locations, To keep track of those attractions and experiences, so i can create unforgettable memories, I want to explore word of mouth destinations and off the beaten path adventures.",
      link: "https://github.com/AustinMcClarren/FloridaNomads"
    },
  
  ]);

  return (
    <div>
      <h1 className='title-here'>Recent Projects.</h1>
      <div className="projects-container">

        {projects.map(project => (
          
          <div key={project.id} className="project-card">

            <h2 className='headpro'>{project.title}</h2>

            <p className='despro'>{project.description}</p>

            <a className='clickmepro'  href={project.link}>THE LINK</a>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
