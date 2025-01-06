import { educationList } from "@/data";

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 lg:max-w-[70vw] relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-down">
            Education
          </h2>
          <div className="w-24 h-1 mx-auto bg-cyan-500 rounded"></div>
        </div>

        <div className="relative">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className={`relative mb-12 flex items-center gap-12 ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="w-24 h-24 flex-shrink-0 hidden sm:flex">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-full h-full object-contain rounded-xl shadow-lg bg-white p-2"
                />
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 lg:w-1/2">
                <h3 className="text-2xl font-semibold text-gray-800">{edu.school}</h3>
                <p className="text-sm text-gray-500 mb-2">{edu.dates}</p>
                <p className="text-lg text-cyan-500 font-medium">{edu.degree}</p>
                <p className="text-gray-600 leading-relaxed">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
