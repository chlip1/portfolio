import Section from "@/components/Section";
import { skillGroups } from "@/data";

export default function SkillsSection() {
  return (
    <Section id="skills" index="03" title="Skills">
      <dl className="divide-y divide-line">
        {skillGroups.map((group) => (
          <div key={group.name} className="grid gap-2 py-4 first:pt-0 sm:grid-cols-[160px_1fr]">
            <dt className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-1">{group.name}</dt>
            <dd>{group.items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
