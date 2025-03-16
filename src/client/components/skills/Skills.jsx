import React from 'react';
import TechStack from './TechStack.jsx';
import { languages, frontend, backend } from './techstack.js';

const Skills = () => {
  return (
    <section className="overflow-y-auto min-h-96 ml-4">
      <h1 className="text-4xl font-bold">Languages</h1>
      <div className="max-w-screen flex flex-wrap h-40 overflow-y-auto mt-10">
        {languages.map((techstack, index) => <TechStack key={index} techstack={techstack} />)}
      </div>
      <div className="divider"/>
      <h1 className="text-4xl font-bold">Frontend Tech Stack</h1>
      <div className="max-w-screen flex flex-wrap h-80 overflow-y-auto mt-10">
        {frontend.map((techstack, index) => <TechStack key={index} techstack={techstack} />)}
      </div>
      <div className="divider"/>
      <h1 className="text-4xl font-bold">Backend Tech Stack</h1>
      <div className="max-w-screen flex flex-wrap h-80 overflow-y-auto mt-10">
        {backend.map((techstack, index) => <TechStack key={index} techstack={techstack} />)}
      </div>
    </section>
  )
}

export default Skills
