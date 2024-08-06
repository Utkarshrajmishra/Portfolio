import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="flex flex-col md:flex-row md:px-24 px-4 py-16 items-center md:items-start justify-between">
      {/* Name Section */}
      <div className="flex items-center justify-center mb-8 md:mb-0 w-full md:w-auto">
        <NavLink
          to="/"
          className="font-grotesk font-black text-3xl text-accent-400"
        >
          utkarsh
        </NavLink>
      </div>

      {/* Contact and Navigation Sections */}
      <div className="flex flex-col md:flex-row w-full md:w-auto gap-14 items-center md:items-start">
        {/* Contact Details */}
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          <p className="text-lg font-bold mb-2">Contact Detail</p>
          <a
            href="mailto:utkarshrajmishra811545@gmail.com"
            className="text-sm hover:underline"
          >
            utkarshrajmishra811545@gmail.com
          </a>
          <a href="tel:+917521859385" className="text-sm hover:underline">
            7521859385
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          <p className="text-lg font-bold mb-2">Navigation</p>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className="text-sm hover:underline"
                activeClassName="text-accent-400"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-sm hover:underline"
                activeClassName="text-accent-400"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className="text-sm hover:underline"
                activeClassName="text-accent-400"
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-lg font-bold mb-2">My Digital Space</p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/Utkarshrajmishra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/utkarsh-raj-mishra-3b7018283/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline flex items-center"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/utk_075/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline flex items-center"
              >
                <FaInstagram className="mr-2" /> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
