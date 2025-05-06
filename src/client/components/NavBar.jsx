import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/resume.pdf';
const NavBar = () => {

  return (
    <div className="navbar bg-neutral text-neutral-content shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} aria-label="Portfolio Navigation" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>

          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">About Kevin Vargas</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>

        </ul>
      </div>
      <div className="navbar-end">
        <a href={resume} className="btn btn-base-100" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
  );
};

export default NavBar;