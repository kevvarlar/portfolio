import React from 'react';
import basketball from '../../../public/basketball_image.png';
import socialMedia from './socialMedia.jsx';
const Footer = () => {
  return (
    <footer className="footer flex flex-col sm:flex-row justify-between bg-neutral text-neutral-content items-center p-4">
      <aside className="flex items-center space-x-2 mb-4 sm:mb-0 sm:space-x-0">
        <img className="w-8 h-8" src={basketball} alt="basketball" />
        <p className="text-lg">Social Media Links</p>
      </aside>
      <nav className="flex space-x-4">
        {socialMedia.map((media, index) => {
          return (
            <a key={index} href={media.url} target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition-transform duration-500 ease-in-out">
              {media.icon}
            </a>
          )
        })}
      </nav>
    </footer>
  )
}

export default Footer;