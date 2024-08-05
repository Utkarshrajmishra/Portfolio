import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroImage from '../assets/images/heroimg.webp';

const Hero = () => {
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
    <section
      className="flex  flex-col items-center h-screen gap-3 justify-center"
      ref={heroRef}
    >
      <div
        className="relative flex items-center justify-center w-full max-w-5xl h-[70vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute flex flex-col items-center gap-3 px-4 text-center">
          <h1
            className="uppercase font-general font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-accent-400"
            ref={(el) => (textRefs.current[0] = el)}
          >
            Hey, I'M Utkarsh
          </h1>
          <h1
            className="uppercase font-general font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-accent-300"
            ref={(el) => (textRefs.current[1] = el)}
          >
            Hey, I'M Utkarsh
          </h1>
          <h1
            className="uppercase font-general font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-accent-200"
            ref={(el) => (textRefs.current[2] = el)}
          >
            Hey, I'M Utkarsh
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
