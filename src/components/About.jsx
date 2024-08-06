import Photo from '../assets/images/photo.png';
import headingSVG from '../assets/images/Vector.svg';

const About = () => {
  return (
    <section className="h-fit md:px-24 px-4 py-20">
      <div className="flex w-full gap-3 justify-center items-bottom">
        <img src={headingSVG} alt="Heading" width={40} height={40} />
        <h2 className="w-fit text-4xl md:text-7xl sm:text-heading-2 font-medium uppercase text-secondary-600">
          About Us
        </h2>
        <img src={headingSVG} alt="Heading" width={40} height={40} />
      </div>
      <div className="flex flex-wrap-reverse items-center mt-5">
        <div className="top-full mt-10 md:w-[50%] w-full space-y-4 2xl:space-y-10 font-general">
          <h3 className="text-heading-3 tracking-wider text-3xl font-semibold leading-tight">
            A brief intro, who am I?
          </h3>
          <p className="text-xl tracking-wider">
            As a passionate and dedicated frontend developer, I am currently
            pursuing my Master's in Computer Applications at Galgotias
            University.
            <br /> <br />
            With a strong foundation in <strong>React.js</strong> and{' '}
            <strong>Next.js</strong>, I specialize in creating dynamic,
            responsive, and user-friendly web applications. My academic journey,
            combined with hands-on experience in cutting-edge technologies,
            equips me with the skills to deliver robust and innovative
            solutions.
            <br /> <br />I am eager to contribute to impactful projects and
            continuously enhance my expertise in the evolving field of frontend
            development.😎
          </p>
        </div>
        <div className="flex w-full md:w-[50%] justify-end">
          <img
            src={Photo}
            alt="Profile"
            className="rounded-xl w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
