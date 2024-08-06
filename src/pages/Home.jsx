import MarqueeComp from '../components/Marquee';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Skill from '../components/Skill';
import About from '../components/About';
import Project from '../components/Projects';
import Footer from "../components/Footer"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const textRefs = useRef([]);
  


  useEffect(() => {
    const heroElement = heroRef.current;
    const textElements = textRefs.current;
   
 
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

   

  
  }, []);

  return (
    <>
      <div>
      
        <Hero heroRef={heroRef} textRefs={textRefs} />
        <MarqueeComp />
        <About/>
        <Skill/>
        <Project/>
       
      </div>
    </>
  );
};

export default Home;
