import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="flex flex-col md:flex-row md:px-24 px-4 py-16 items-start justify-between">
      {/* Name Section */}
      <div className="flex items-center md:items-start mb-8 md:mb-0 w-full md:w-auto">
        <h5 className="font-grotesk font-black text-3xl text-accent-400">
          utkarsh
        </h5>
      </div>

      {/* Contact and Navigation Sections */}
      <div className="flex flex-col md:flex-row w-full md:w-auto gap-14 items-start">
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
              <a href="#home" className="text-sm hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#blog" className="text-sm hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#dashboard" className="text-sm hover:underline">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#projects" className="text-sm hover:underline">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-lg font-bold mb-2">My Digital Space</p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
