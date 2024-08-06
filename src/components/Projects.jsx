import React, { useEffect, useRef } from 'react';
import headingSVG from '../assets/images/Vector.svg';
import { ProjectList } from '../constants/ProjectList';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const imagesRef = useRef([]);
  const projectRefs = useRef([]);

  useEffect(() => {
    // Initialize GSAP animations for images
    imagesRef.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { scale: 1 },
        {
          scale: 1.1,
          duration: 0.3,
          paused: true,
          ease: 'power1.inOut',
          onComplete() {
            this.reversed(true);
          },
        }
      );

      img.addEventListener('mouseenter', () =>
        gsap.to(img, { scale: 1.1, duration: 0.3 })
      );
      img.addEventListener('mouseleave', () =>
        gsap.to(img, { scale: 1, duration: 0.3 })
      );
    });

    // GSAP animations for items appearing from left and right
    projectRefs.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section className="h-fit md:px-24 px-4 py-20 bg-accent-400">
      <div className="flex w-full gap-3 justify-center items-bottom">
        <img src={headingSVG} alt="Heading" width={40} height={40} />
        <h2 className="w-fit text-4xl md:text-7xl sm:text-heading-2 font-medium uppercase text-secondary-600">
          Projects
        </h2>
        <img src={headingSVG} alt="Heading" width={40} height={40} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {ProjectList.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            className={`${
              index === 0 ? 'col-span-1 md:col-span-2' : 'col-span-1'
            } p-4 shadow-md`}
          >
            <img
              ref={(el) => (imagesRef.current[index] = el)}
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-xl"
            />
            <p className="p-3 rounded-full outline outline-1 outline-secondary-600 w-fit h-fit font-general mt-7 text-secondary-600">
              {project.stack}
            </p>
            <p className="text-primary-200 font-general text-2xl font-bold mt-5">
              {' '}
              <a href={project.link}>{project.title}</a>{' '}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
