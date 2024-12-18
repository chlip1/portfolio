import { ArrowDownTrayIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-white">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
        Łukasz Chlipała
      </h1>
      <p className="text-xl md:text-2xl text-gray-500 mb-8">
        Full Stack Software Engineer
      </p>
      <div className="flex space-x-4">
        <a
          href="/cv-lukasz-chlipala.pdf"
          download="lukasz-chlipala-cv.pdf"
          className="flex items-center bg-black text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition duration-300"
        >
          <ArrowDownTrayIcon className="w-6 h-6 mr-2"/>
          Download CV
        </a>
        <a
          href="#about"
          className="flex items-center border-2 border-gray-800 text-gray-800 px-6 py-2 rounded-lg hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition duration-300"
        >
          <UserCircleIcon className="w-6 h-6 mr-2"/>
          About Me
        </a>
      </div>
    </section>
  );
}
