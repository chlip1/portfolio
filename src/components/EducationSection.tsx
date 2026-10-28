import Section from "@/components/Section";
import { educationList } from "@/data";

export default function EducationSection() {
  return (
    <Section id="education" index="04" title="Education">
      <ul className="space-y-5">
        {educationList.map((item) => (
          <li key={item.degree} className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
            <div>
              <p className="font-medium">{item.degree}</p>
              <p className="text-muted">{item.school}</p>
            </div>
            <p className="font-mono text-xs text-muted">{item.dates}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
