import React from 'react';
import basketball from '../../../public/basketball_image.png';
import github from '../assets/github.png';
import linkedIn from '../assets/linked_in.png';
import email from '../assets/email.png';
const Footer = () => {
  return (
    <footer className="footer flex flex-col sm:flex-row justify-between bg-neutral text-neutral-content items-center p-4">
      <aside className="flex items-center space-x-2 mb-4 sm:mb-0 sm:space-x-0">
        <img className="w-8 h-8" src={basketball} alt="basketball" />
        <p className="text-lg">Contact Info</p>
      </aside>
      <nav className="flex space-x-4">
        <a className="w-8 h-8" href="https://github.com/kevvarlar" target="_blank" rel="noreferrer">
          <img src={github} alt="Github" />
        </a>
        <a className="w-8 h-8" href="https://www.linkedin.com/in/kevinvargaslaracuente" target="_blank" rel="noreferrer">
          <img src={linkedIn} alt="LinkedIn" />
        </a>
        <a className="w-8 h-8" href="mailto:kevinvar2805@gmail.com" target="_blank" rel="noreferrer">
          <img src={email} alt="Email" />
        </a>
      </nav>
    </footer>
  )
}

export default Footer;