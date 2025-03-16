import React from 'react';
import fec from '../../assets/fec.png';
import sdc from '../../assets/sdc.png';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce site',
      description: 'Full-Stack application using Next.js with its server-side rendering capabilities. It was built on top of a React application and utilizes lazy loading to improve performance.',
      photo: fec,
      link: 'https://github.com/eastbluelegends/fec2025',
    },
    {
      title: 'Board Together',
      description: 'An app that digitizes scoresheets for classic games like Clue, Yahtzee, and Scrabble, promoting social interaction by uniting people through universally enjoyed games.',
      link: 'https://github.com/Blue-Ocean-25/BoardTogether',
      video: 'https://www.youtube.com/embed/sFzUoviG58c',
    },
    {
      title: 'Questions and Answers API',
      description: 'A RESTful API that allows users to see and post questions and answers on an ecommerce application, using Express.js and MySQL along with Sequelize ORM. Uses caching with Node-cache and clustering to improve performance.',
      photo: sdc,
      link: 'https://github.com/Node-It-Alls-SDC/Questions_Answers_API',
    },
  ];

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              {project.video && (
                <div className="mt-4">
                  <iframe
                    width="100%"
                    height="200"
                    src={project.video}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {project.photo && (
                <div className="mt-4">
                  <img src={project.photo} alt={project.title} />
                </div>
              )}
              <div className="card-actions justify-end">
                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
