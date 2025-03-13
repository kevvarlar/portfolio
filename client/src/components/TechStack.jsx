import React from 'react';

const TechStack = ({techstack}) => {
  return (
    <a className="hover:scale-105 transition-transform duration-500 ease-in-out ml-2 mr-2 w-36 h-36" href={techstack.url} target="_blank" rel="noreferrer">
      <img src={techstack.photo} alt={techstack.techstack} className="w-24 h-24" />
    </a>
  )
}

export default TechStack