import React, { useEffect, useRef, useState } from 'react';
import { NavLinks } from '../constants/NavLinks'; // Ensure you have a link for the resume in NavLinks
import { Transition } from '@headlessui/react';
import { gsap } from 'gsap';
import { NavLink } from 'react-router-dom';

const NavBar = React.forwardRef((props, ref) => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const navElement = navRef.current;

    if (navElement) {
      gsap.fromTo(
        navElement,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: 'power3.in' }
      );
    }
  }, []); // Empty dependency array ensures this runs once

  return (
    <section
      ref={(el) => {
        navRef.current = el;
        if (ref) ref(el); // Forward ref to parent if provided
      }}
      className="flex flex-col md:flex-row md:px-24 px-4 items-center py-8 justify-between"
    >
      {/* Logo and Hamburger Button Container */}
      <div className="flex items-center w-full md:w-auto justify-between">
        <NavLink
          to="/"
          className="font-grotesk font-black text-3xl text-accent-400"
        >
          utkarsh
        </NavLink>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-accent-400 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="font-grotesk hidden md:flex flex-row gap-7 items-center">
        {NavLinks?.map((items) => (
          <li
            key={items.id}
            className={`relative text-lg ${
              items.type === 'button'
                ? 'py-2 px-4 bg-accent-400 text-secondary-100 rounded-full'
                : 'text-accent-400'
            }`}
          >
            <NavLink
              to={items.link}
              className={({ isActive }) =>
                `relative z-10 ${isActive ? 'text-accent-400' : ''}`
              }
            >
              {items.title}
            </NavLink>
          </li>
        ))}
        {/* Add Resume Download Button */}
        
      </ul>

      {/* Mobile Navigation Menu */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed top-0 right-0 mt-16 w-full bg-white shadow-lg rounded-lg md:hidden">
          <ul className="flex flex-col gap-4 p-4">
            {NavLinks?.map((items) => (
              <li
                key={items.id}
                className={`relative text-lg ${
                  items.type === 'button'
                    ? 'py-2 px-4 text-center bg-accent-400 text-secondary-100 rounded-full'
                    : 'text-accent-400 text-center'
                }`}
              >
                <NavLink
                  to={items.link}
                  className={({ isActive }) =>
                    `relative z-10 ${isActive ? 'text-accent-400' : ''}`
                  }
                >
                  {items.title}
                </NavLink>
              </li>
            ))}
            
          
          </ul>
        </div>
      </Transition>
    </section>
  );
});

export default NavBar;
