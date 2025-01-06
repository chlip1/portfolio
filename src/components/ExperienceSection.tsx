import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { Experience } from "@/app/types";
import { experiences } from "@/data";

const groupByCompany = (experiences: Experience[]): Record<string, Experience[]> =>
  experiences.reduce((acc, { company, ...rest }) => {
    acc[company] = [...(acc[company] || []), { company, ...rest }];
    return acc;
  }, {} as Record<string, Experience[]>);


export default function ExperienceSection() {
  const groupedExperiences = groupByCompany(experiences);

  return (
    <section id="experience" className="py-16 px-4 bg-white">
      <div className="container mx-auto lg:max-w-[60vw] px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-down">
            Professional Experience
          </h2>
          <div className="w-24 h-1 mx-auto bg-cyan-500 rounded"></div>
        </div>

        <div className="relative border-l-2 border-gray-200">
          {Object.entries(groupedExperiences).map(([company, roles], index) => (
            <div key={index} className="mb-8 ml-8 relative" data-aos="fade-right">
              <div className="absolute top-1.5 -left-[43px] w-5 h-5 bg-cyan-500 rounded-full"></div>

              <h3 className="text-2xl font-bold text-black mb-2">{company}</h3>

              {roles.map((job, i) => (
                <div key={i} className="mb-6">
                  <p className="text-sm text-gray-500 mb-1">{job.date}</p>
                  <h4 className="text-xl font-semibold text-black">{job.role}</h4>
                  <p className="text-gray-600 mb-2 text-justify">{job.description}</p>

                  {job.skills && (
                    <div className="hidden sm:flex items-center text-gray-700">
                      <CodeBracketIcon className="w-5 h-5 mr-2"/>
                      <p className="text-sm">{job.skills.join(", ")}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
