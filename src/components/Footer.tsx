import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:max-w-[80vw]">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-white">Łukasz Chlipała</h2>
            <p className="text-sm text-gray-500">
              Full Stack Software Engineer
            </p>
          </div>

          <ul className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 text-center">
            <li>
              <a
                href="#about"
                className="hover:text-cyan-500 transition duration-300"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-cyan-500 transition duration-300"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-cyan-500 transition duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-cyan-500 transition duration-300"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-cyan-500 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="flex justify-center space-x-4 lg:space-x-6">
            <a
              href="https://linkedin.com/in/lchlipala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-500 transition duration-300"
            >
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/chlip1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-500 transition duration-300"
            >
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:lukasz@chlipala.dev"
              className="text-gray-500 hover:text-cyan-500 transition duration-300"
            >
              <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs sm:text-sm text-gray-600">
          © {new Date().getFullYear()} Łukasz Chlipała. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
