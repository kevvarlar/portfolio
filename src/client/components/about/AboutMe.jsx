import React from 'react'; // Ensure you have DaisyUI installed and imported
import graduationPhoto from '../../assets/graduation_photo.jpeg';
import mongodb from '../../assets/mongodb.png';
import js from '../../assets/js.png';
import tailwindcss from '../../assets/tailwindcss.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';

const AboutMe = () => {
  const mainTechStack = [
    {techstack: 'JS', photo: js, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
    {techStack: 'NodeJS', photo: node, url: 'https://nodejs.org/'},
    {techStack: 'MongoDB', photo: mongodb, url: 'https://www.mongodb.com/'},
    {techStack: 'React', photo: react, url: 'https://reactjs.org/'},
    {techStack: 'TailwindCSS', photo: tailwindcss, url: 'https://tailwindcss.com/'}
  ]
  return (
    <div className="overflow-y-auto min-h-96">
      <section className="card lg:card-side bg-base-200 shadow-xl">
        <figure className="card-image w-full">
          <img src={graduationPhoto} alt="About Me" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">About Me</h2>
          <p>
            My journey as a software engineer began at a very young age with robotics where I became passionate and dedicated to solving complex problems. Every day, I dive into challenging code, using my debugging skills and creative problem-solving abilities to build innovative solutions. <br />
            I quickly discovered with my experience that solving challenging problems was not only exhilarating but also deeply rewarding. As I continued to develop my technical skills, I also pursued basketball, a passion that further shaped my personal and professional growth. On the basketball court, teamwork and strategy honed my discipline and collaborative spirit, which seamlessly complemented the problem-solving mindset I cultivated through robotics.
            <br />
            I am committed to continuous growth as a software engineer. I plan to expand my skill set by exploring new technologies, innovative techniques, and languages, aiming to become an even more dependable asset for any projects or teams I am a part of.
          </p>
          <div className="max-w-screen flex flex-wrap h-36 overflow-y-auto mt-10">
            {mainTechStack.map((techstack) => (
              <a className="hover:scale-105 transition-transform duration-500 ease-in-out ml-2 mr-2 w-24 h-24 pt-5" href={techstack.url} target="_blank" rel="noreferrer">
                <img src={techstack.photo} alt={techstack.techstack} className="w-18 h-18" />
              </a>
            ))}
          </div>

        </div>
      </section>
    </div>

  );
}

export default AboutMe;
