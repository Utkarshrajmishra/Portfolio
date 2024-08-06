import MarqueeComp from '../components/Marquee';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Role from '../components/Role';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const textRefs = useRef([]);
  const navRef = useRef(null);
  const roleRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;
    const textElements = textRefs.current;
    const navElement = navRef.current;
    const roleElement = roleRef.current;

    gsap.fromTo(
      heroElement,
      { opacity: 0, scale: 7 },
      { opacity: 1, scale: 1, duration: 2, ease: 'power3.out' }
    );

    gsap.fromTo(
      textElements,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 2, ease: 'power3.out' }
    );

    gsap.fromTo(
      navElement,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: 'power3.in' }
    );

    gsap.fromTo(
      roleElement,
      { opacity:0, x:100 },
      {
      
        opacity:1,
        x:0,
        duration: 1,
        scrollTrigger: {
          trigger: roleElement,
          start: 'top 80%', 
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <NavBar navRef={navRef} />
        <Hero heroRef={heroRef} textRefs={textRefs} />
        <MarqueeComp />
        <Role roleRef={roleRef} />
      </div>
    </>
  );
};

export default Home;
