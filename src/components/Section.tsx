import React from "react";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className="grid gap-8 border-t border-line py-16 sm:py-24 md:grid-cols-[180px_1fr] md:gap-12">
      <header className="reveal md:sticky md:top-24 md:self-start">
        <p className="section-label">
          <span className="text-accent">{index}</span> /
        </p>
        <h2 className="mt-2 font-display text-4xl leading-none sm:text-5xl">{title}</h2>
      </header>
      <div className="reveal">{children}</div>
    </section>
  );
}
