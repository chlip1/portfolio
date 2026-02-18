export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:max-w-[60vw]">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            data-aos="fade-down"
          >
            About me
          </h2>
          <div className="w-16 sm:w-24 h-1 mx-auto bg-cyan-500 rounded"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div
            className="w-full lg:w-1/2 text-center lg:text-left"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Hello! I&apos;m a passionate{" "}
              <span className="font-semibold text-gray-900">
    Full Stack Software Engineer
  </span>{" "}
              with expertise in{" "}
              <span className="font-semibold text-gray-900">TypeScript</span>.
              I specialize in building scalable web applications from the ground up,
              designing robust backend architectures, implementing clean APIs, and
              crafting intuitive user interfaces that users actually enjoy working with.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              I have hands-on experience with{" "}
              <span className="font-semibold text-gray-900">AWS cloud services</span>,
              focusing on serverless solutions, event-driven architectures, and infrastructure
              automation. I&apos;m deeply invested in backend performance optimization, whether
              it&apos;s reducing latency, improving database queries, or designing efficient
              data flows that scale under real-world traffic.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Beyond shipping features, I care about engineering quality: maintainable code,
              effective testing strategies, observability in production, and building systems
              that teams can confidently evolve. My goal is to create applications that not
              only work efficiently but are also reliable, developer-friendly, and deliver
              real value to users.
            </p>
          </div>

          <div
            className="w-full lg:w-1/2 bg-gray-300 rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-left"
          >
            <img
              src="/LC_IMG.PNG"
              alt="Profile"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
