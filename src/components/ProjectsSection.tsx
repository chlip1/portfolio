import Section from "@/components/Section";
import { projects } from "@/data";

export default function ProjectsSection() {
  return (
    <Section id="projects" index="02" title="Projects">
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => {
          const featured = index === 0;
          return (
            <li
              key={project.title}
              className={`reveal group flex flex-col overflow-hidden rounded-2xl border border-line bg-card transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-ink/40 hover:shadow-[0_18px_40px_-24px_rgb(var(--ink)/0.45)] ${
                featured ? "sm:col-span-2 lg:flex-row" : ""
              }`}
            >
              {project.image && (
                <div
                  className={`aspect-[16/10] overflow-hidden border-line ${
                    featured ? "border-b lg:aspect-auto lg:w-3/5 lg:border-b-0 lg:border-r" : "border-b"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <div className={`flex flex-1 flex-col p-6 ${featured ? "lg:p-8" : ""}`}>
                <p className="section-label">{project.tagline}</p>
                <h3 className={`mt-2 font-display leading-none ${featured ? "text-5xl" : "text-3xl"}`}>{project.title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-6 text-sm">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="link-underline">
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
