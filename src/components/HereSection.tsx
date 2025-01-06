import { ArrowDownTrayIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-white px-4">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800 mb-4">
        Łukasz Chlipała
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl text-gray-500 mb-8 max-w-3xl">
        Full Stack Software Engineer
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 sm:space-y-0 space-y-4 mb-6 w-full max-w-md sm:max-w-none">
        <a
          href="/Łukasz_Chlipała_CV.pdf"
          download="Łukasz_Chlipała_CV.pdf"
          className="flex items-center justify-center bg-black text-white px-6 py-2 rounded-lg w-full sm:w-48 hover:bg-cyan-600 transition duration-300"
        >
          <ArrowDownTrayIcon className="w-6 h-6 mr-2"/>
          Download CV
        </a>
        <a
          href="#about"
          className="flex items-center justify-center border-2 border-gray-800 text-gray-800 px-6 py-2 rounded-lg w-full sm:w-48 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition duration-300"
        >
          <UserCircleIcon className="w-6 h-6 mr-2"/>
          About Me
        </a>
      </div>

      <div className="flex space-x-6 mt-4">
        <a
          href="https://github.com/chlip1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-cyan-600 transition duration-300"
        >
          <FaGithub className="w-8 h-8"/>
        </a>
        <a
          href="https://www.linkedin.com/in/lchlipala"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-cyan-600 transition duration-300"
        >
          <FaLinkedin className="w-8 h-8"/>
        </a>
      </div>
    </section>
);
}
