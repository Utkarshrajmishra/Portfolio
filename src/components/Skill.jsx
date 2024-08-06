import React, { useEffect, useRef } from 'react';
import { SkillSet } from '../constants/SkillSet';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-20 md:px-24 px-4">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-5 font-general md:w-[50%]">
          <h3 className="text-3xl md:text-5xl font-semibold">
            My Digital Tool Box
          </h3>
          <p className="text-lg md:text-xl">
            These are my go-to tech stack to make any projects happen. I am
            always eager to learn more about my current stack, and new
            technologies that could expand my horizons.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-3 items-center md:w-[50%] text-left">
          {SkillSet?.map((items, index) => (
            <p
              key={items.id}
              ref={(el) => (itemsRef.current[index] = el)}
              className="text-secondary-500 text-left font-general text-2xl md:text-5xl font-semibold"
            >
              {items.title}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
