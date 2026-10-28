const EMAIL = "lukasz@chlipala.dev";

export default function ContactSection() {
  return (
    <section id="contact" className="reveal border-t border-line py-20 sm:py-32">
      <p className="section-label"><span className="text-accent">05</span> / Contact</p>
      <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.95]">
        Have a role or a project in mind? <span className="italic text-accent">Write to me.</span>
      </h2>
      <a
        href={`mailto:${EMAIL}`}
        className="group mt-10 inline-flex items-center gap-3 font-mono text-lg underline decoration-line underline-offset-8 transition-colors hover:text-accent hover:decoration-accent sm:text-2xl"
      >
        {EMAIL}
        <span className="inline-block no-underline transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden>
          ↗
        </span>
      </a>
    </section>
  );
}
