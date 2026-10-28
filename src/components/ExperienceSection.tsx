import Section from "@/components/Section";
import { experiences } from "@/data";

export default function ExperienceSection() {
  return (
    <Section id="experience" index="01" title="Experience">
      <ol className="space-y-12">
        {experiences.map((job) => (
          <li key={job.company}>
            <h3 className="text-xl font-semibold">{job.company}</h3>
            <ol className="mt-4 space-y-6 border-l border-line pl-6">
              {job.roles.map((role) => (
                <li key={role.title} className="relative">
                  <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-accent" aria-hidden />
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <p className="font-medium">{role.title}</p>
                    <p className="font-mono text-xs text-muted">{role.date}</p>
                  </div>
                  <ul className="mt-2 max-w-2xl space-y-1.5 leading-relaxed text-muted">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="relative pl-4 before:absolute before:left-0 before:text-line before:content-['–']">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1 pl-6 font-mono text-xs text-muted">
              {job.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
