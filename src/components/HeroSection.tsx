import { FaGithub, FaLinkedin } from "react-icons/fa";

const stats = [
  { value: "1.3M", label: "subscribers migrated" },
  { value: "5×", label: "faster vehicle import" },
  { value: "4 yrs", label: "in production" },
];

export default function HeroSection() {
  return (
    <section id="top" className="pb-16 pt-14 sm:pb-24 sm:pt-24">
      <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
        <div className="reveal">
          <p className="section-label flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Software Engineer II at ADTRAN · Gdańsk
          </p>
          <h1 className="mt-6 font-display text-[clamp(3.5rem,11vw,7.5rem)] leading-[0.92] tracking-tight">
            Łukasz
            <br />
            <span className="italic">Chlipała</span>
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            I build <span className="text-ink">serverless backends on AWS</span> and the TypeScript products on top of
            them. Four years in production: telecom device management at ADTRAN, UK government services
            at Kainos, and <span className="text-ink">JoinBee</span>, a SaaS for schools and clubs, after hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a href="#contact" className="group rounded-full bg-ink px-5 py-2.5 text-paper transition-colors hover:bg-accent">
              Get in touch <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a href="https://github.com/chlip1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 link-underline">
              <FaGithub aria-hidden /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/lchlipala" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 link-underline">
              <FaLinkedin aria-hidden /> LinkedIn
            </a>
          </div>
        </div>
        <img
          src="/avatar.jpg"
          alt="Illustrated portrait of Łukasz Chlipała"
          width={240}
          height={240}
          className="reveal hidden h-60 w-60 rotate-2 rounded-2xl border border-line object-cover shadow-[6px_6px_0_rgb(var(--ink))] transition-transform duration-300 hover:-rotate-1 md:block"
        />
      </div>
      <dl className="reveal mt-16 grid grid-cols-3 divide-x divide-line border-y border-line">
        {stats.map((stat) => (
          <div key={stat.label} className="px-3 py-5 first:pl-0 sm:px-6">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-display text-3xl leading-none sm:text-5xl">{stat.value}</dd>
            <dd className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted sm:text-xs">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
