import React from 'react'; // Ensure you have DaisyUI installed and imported
import graduationPhoto from '../assets/graduation_photo.jpeg';
function AboutMe() {
  return (
    <section className="card lg:card-side bg-base-100 shadow-xl min-h-100 overflow-y-auto">
      <figure className="card-image w-full">
        <img src={graduationPhoto} alt="About Me" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">About Me</h2>
        <p>
          My journey as a software engineer began at a very young age with robotics where I became passionate and dedicated to solving complex problems. Every day, I dive into challenging code, using my debugging skills and creative problem-solving abilities to build innovative solutions.
        </p>
        <p>
          I quickly discovered with my experience that solving challenging problems was not only exhilarating but also deeply rewarding. As I continued to develop my technical skills, I also pursued basketball, a passion that further shaped my personal and professional growth. On the basketball court, teamwork and strategy honed my discipline and collaborative spirit, which seamlessly complemented the problem-solving mindset I cultivated through robotics.
        </p>
        <p>
          I am committed to continuous growth as a software engineer. I plan to expand my skill set by exploring new technologies, innovative techniques, and languages, aiming to become an even more dependable asset for any projects or teams I am a part of.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
