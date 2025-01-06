import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiAngular,
  SiServerless,
  SiPostman,
  SiMysql,
  SiMariadb,
  SiAmazondynamodb,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiJest, SiMongodb,
} from "react-icons/si";

export default function TechnologiesSection() {
  const technologies = [
    { name: "TypeScript", icon: <SiTypescript className="w-12 h-12 text-blue-600" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-12 h-12 text-green-500" /> },
    { name: "Serverless", icon: <SiServerless className="w-12 h-12 text-orange-500" /> },
    { name: "Angular", icon: <SiAngular className="w-12 h-12 text-red-600" /> },
    { name: "React", icon: <SiReact className="w-12 h-12 text-[#61DAFB]" /> },
    { name: "AWS", icon:  <img src="/icons/amazonwebservices.svg" alt="AWS" className="w-12 h-12" style={{ color: "#232F3E" }} /> },
    { name: "AWS Lambda", icon:  <img src="/icons/awslambda.svg" alt="AWS" className="w-12 h-12" style={{ color: "#FF9900" }} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12 text-cyan-500" /> },
    { name: "MySQL", icon: <SiMysql className="w-12 h-12 text-blue-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-12 h-12 text-green-700" /> },
    { name: "MariaDB", icon: <SiMariadb className="w-12 h-12 text-gray-500" /> },
    { name: "DynamoDB", icon: <SiAmazondynamodb className="w-12 h-12 text-blue-600" /> },
    { name: "Jest", icon: <SiJest className="w-12 h-12 text-red-600" /> },
    { name: "Git", icon: <SiGit className="w-12 h-12 text-orange-500" /> },
    { name: "GitHub", icon: <SiGithub className="w-12 h-12 text-gray-900" /> },
    { name: "GitLab", icon: <SiGitlab className="w-12 h-12 text-orange-600" /> },
    { name: "Docker", icon: <SiDocker className="w-12 h-12 text-blue-500" /> },
    { name: "Postman", icon: <SiPostman className="w-12 h-12 text-orange-600" /> },
  ];

  return (
    <section id="technologies" className="py-16">
      <div className="container mx-auto text-center px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-down">
            Technologies and Tools
          </h2>
          <div className="w-24 h-1 mx-auto bg-cyan-500 rounded"></div>
        </div>
        <p className="text-gray-600 mb-12 text-lg" data-aos="fade-down" data-aos-delay="200">
          A combination of cutting-edge tools and experience I use to build performant, scalable applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {tech.icon}
              <p className="text-gray-700 font-semibold mt-4">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
