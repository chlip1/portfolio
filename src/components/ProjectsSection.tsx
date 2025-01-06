import {FaGithub, FaExternalLinkAlt, FaBook} from "react-icons/fa";
import { projects } from "@/data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:max-w-[60vw]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-down">
            Projects
          </h2>
          <div className="w-24 h-1 mx-auto bg-cyan-500 rounded"></div>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-8 bg-white shadow-md rounded-lg p-6"
              data-aos="fade-up"
            >
              <div className="lg:w-1/3 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-lg object-cover shadow-lg"
                />
              </div>

              <div className="lg:w-2/3 w-full space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-cyan-600 transition duration-300"
                  >
                    <FaGithub className="w-6 h-6"/>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-cyan-600 transition duration-300"
                  >
                    <FaExternalLinkAlt className="w-6 h-6"/>
                  </a>
                  {project.docs && (
                    <a
                      href={project.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-cyan-600 transition duration-300"
                    >
                      <FaBook className="w-6 h-6"/>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}